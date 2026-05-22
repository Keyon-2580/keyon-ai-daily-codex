import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const config = JSON.parse(fs.readFileSync(path.join(root, "automation.config.json"), "utf8"));
const outFile = process.argv.includes("--out")
  ? process.argv[process.argv.indexOf("--out") + 1]
  : path.join(root, "tmp", "latest-candidates.json");

const sinceDays = Number(process.env.NEWS_SINCE_DAYS || 2);
const since = new Date(Date.now() - sinceDays * 24 * 60 * 60 * 1000);
const timeoutMs = Number(process.env.FETCH_TIMEOUT_MS || 15000);

function uniq(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.url || `${item.source}:${item.title}`;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function clean(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    signal: AbortSignal.timeout(timeoutMs),
    headers: {
      "user-agent": "keyong-ai-frontier/0.1",
      accept: "application/json",
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(timeoutMs),
    headers: { "user-agent": "keyong-ai-frontier/0.1", accept: "application/rss+xml,text/xml,text/html" }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.text();
}

async function fromTavily(query) {
  if (!process.env.TAVILY_API_KEY) return [];
  const json = await fetchJson("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.TAVILY_API_KEY}`
    },
    body: JSON.stringify({
      query,
      topic: "news",
      search_depth: "advanced",
      days: sinceDays,
      max_results: 8,
      include_answer: false
    })
  });
  return (json.results || []).map((item) => ({
    title: clean(item.title),
    summary: clean(item.content),
    url: item.url,
    source: item.source || "Tavily",
    publishedAt: item.published_date || null,
    channel: "search",
    query
  }));
}

async function fromExa(query) {
  if (!process.env.EXA_API_KEY) return [];
  const json = await fetchJson("https://api.exa.ai/search", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.EXA_API_KEY
    },
    body: JSON.stringify({
      query,
      type: "neural",
      numResults: 8,
      startPublishedDate: since.toISOString()
    })
  });
  return (json.results || []).map((item) => ({
    title: clean(item.title),
    summary: clean(item.text),
    url: item.url,
    source: item.author || new URL(item.url).hostname,
    publishedAt: item.publishedDate || null,
    channel: "search",
    query
  }));
}

async function fromGithub() {
  const headers = process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};
  const queries = [
    "agentic AI language:Python",
    "LLM agent language:TypeScript",
    "MCP agent",
    "A2A protocol agent",
    "AI evaluation agent harness"
  ];
  const items = [];
  for (const query of queries) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
      `${query} pushed:>=${since.toISOString().slice(0, 10)}`
    )}&sort=updated&order=desc&per_page=6`;
    try {
      const json = await fetchJson(url, { headers });
      for (const repo of json.items || []) {
        items.push({
          title: repo.full_name,
          summary: clean(repo.description),
          url: repo.html_url,
          source: "GitHub",
          publishedAt: repo.updated_at,
          stars: repo.stargazers_count,
          language: repo.language,
          channel: "github",
          query
        });
      }
    } catch (error) {
      items.push({ title: `GitHub query failed: ${query}`, summary: error.message, source: "GitHub", channel: "error" });
    }
  }
  return items;
}

async function fromArxiv() {
  const query = 'all:"LLM agent" OR all:"AI agent" OR all:"multi-agent" OR all:"agent evaluation"';
  const url = `https://export.arxiv.org/api/query?search_query=${encodeURIComponent(query)}&sortBy=submittedDate&sortOrder=descending&max_results=20`;
  const xml = await fetchText(url);
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, entry]) => ({
    title: clean(entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]),
    summary: clean(entry.match(/<summary>([\s\S]*?)<\/summary>/)?.[1]),
    url: clean(entry.match(/<id>([\s\S]*?)<\/id>/)?.[1]),
    source: "arXiv",
    publishedAt: clean(entry.match(/<published>([\s\S]*?)<\/published>/)?.[1]),
    channel: "research",
    query
  }));
}

async function fromHackerNews() {
  const hits = [];
  for (const query of config.sourceQueries.slice(0, 4)) {
    const json = await fetchJson(
      `https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=10`
    );
    for (const hit of json.hits || []) {
      hits.push({
        title: clean(hit.title),
        summary: clean(hit._highlightResult?.title?.value || hit.title),
        url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
        source: "Hacker News",
        publishedAt: hit.created_at,
        points: hit.points,
        channel: "community",
        query
      });
    }
  }
  return hits;
}

async function fromRss() {
  const items = [];
  for (const source of config.rssSources) {
    try {
      const xml = await fetchText(source.url);
      const entries = [...xml.matchAll(/<(item|entry)>([\s\S]*?)<\/\1>/g)].slice(0, 8);
      for (const [, , entry] of entries) {
        items.push({
          title: clean(entry.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]),
          summary: clean(entry.match(/<(description|summary|content:encoded)[^>]*>([\s\S]*?)<\/\1>/)?.[2]),
          url: clean(entry.match(/<link[^>]*href="([^"]+)"/)?.[1] || entry.match(/<link[^>]*>([\s\S]*?)<\/link>/)?.[1]),
          source: source.name,
          publishedAt: clean(entry.match(/<(pubDate|published|updated)[^>]*>([\s\S]*?)<\/\1>/)?.[2]),
          channel: "rss"
        });
      }
    } catch (error) {
      items.push({ title: `RSS failed: ${source.name}`, summary: error.message, source: source.name, channel: "error" });
    }
  }
  return items;
}

async function collectSafe(name, task) {
  try {
    return await task();
  } catch (error) {
    return [{ title: `${name} failed`, summary: error.message, source: name, channel: "error" }];
  }
}

const results = [];
for (const query of config.sourceQueries) {
  results.push(...(await collectSafe(`Tavily: ${query}`, () => fromTavily(query))));
  results.push(...(await collectSafe(`Exa: ${query}`, () => fromExa(query))));
}
results.push(...(await collectSafe("GitHub", fromGithub)));
results.push(...(await collectSafe("arXiv", fromArxiv)));
results.push(...(await collectSafe("Hacker News", fromHackerNews)));
results.push(...(await collectSafe("RSS", fromRss)));

const output = {
  generatedAt: new Date().toISOString(),
  since: since.toISOString(),
  themes: config.workThemes,
  candidates: uniq(results).filter((item) => item.title && item.channel !== "error"),
  errors: results.filter((item) => item.channel === "error")
};

fs.mkdirSync(path.dirname(path.resolve(outFile)), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(output, null, 2), "utf8");
console.log(`Collected ${output.candidates.length} candidates -> ${outFile}`);
if (output.errors.length) console.log(`Warnings: ${output.errors.length} source errors`);
