import fs from "node:fs";
import vm from "node:vm";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const config = JSON.parse(fs.readFileSync(path.join(root, "automation.config.json"), "utf8"));
const inputFile =
  process.argv[2] || "/Users/keyon/Downloads/AI Frontier — 每日AI前沿速览.html";
const outFile = path.join(root, "data.js");

function parseDigestFromNextHtml(file) {
  const html = fs.readFileSync(file, "utf8");
  const pushes = [];
  const context = { self: { __next_f: [] } };
  context.self.__next_f.push = (arg) => pushes.push(arg);

  for (const [, script] of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) {
    if (!script.includes("self.__next_f.push")) continue;
    try {
      vm.runInNewContext(script, context, { timeout: 1000 });
    } catch {
      // Browser extensions sometimes inject scripts into saved pages. Ignore them.
    }
  }

  const payload = pushes
    .map((entry) => (Array.isArray(entry) ? entry[1] : null))
    .find((value) => typeof value === "string" && value.includes('"digest"'));

  if (!payload) {
    throw new Error(`Cannot find Next digest payload in ${file}`);
  }

  const json = JSON.parse(payload.slice(payload.indexOf(":") + 1));
  return json[3].digest;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function scoreThemes(item) {
  const text = normalizeText(
    [item.title, item.titleZh, item.summary, item.summaryZh, item.insight, ...(item.tags || [])].join(" ")
  ).toLowerCase();

  const scores = config.workThemes.map((theme) => {
    const hits = theme.keywords.filter((keyword) => text.includes(keyword.toLowerCase())).length;
    return { ...theme, hits };
  });

  scores.sort((a, b) => b.hits - a.hits);
  return scores;
}

function keyongInsight(item) {
  const [theme] = scoreThemes(item);
  const title = theme?.label || "Agentic 开发";
  const description = theme?.description || "关注 Agent 系统的工程化落地。";
  const sourceInsight = normalizeText(item.insight).replace(/^→\s*/, "");

  if (sourceInsight && theme?.hits > 0) {
    return `→ Keyong 关联：这条消息和「${title}」高度相关。${sourceInsight}`;
  }

  return `→ Keyong 关联：这条消息可放入「${title}」视角观察，${description}`;
}

function labelFor(item, fallback) {
  const type = item.labelType || fallback;
  if (type.includes("research") || type.includes("benchmark")) return "研究";
  if (type.includes("open")) return "开源";
  if (type.includes("industry")) return "行业";
  if (type.includes("opinion") || type.includes("leader")) return "观点";
  return fallback;
}

function kindFor(item, fallback) {
  const type = item.labelType || fallback;
  if (type.includes("research") || type.includes("benchmark")) return "research";
  if (type.includes("industry")) return "industry";
  if (type.includes("opinion") || type.includes("leader")) return "voice";
  if (type.includes("open")) return "open";
  return fallback;
}

function mapItem(item, section, fallbackLabel, forceKeyong = false) {
  const label = forceKeyong ? "Keyong" : labelFor(item, fallbackLabel);
  const kind = forceKeyong ? "keyong" : kindFor(item, section);

  return {
    id: `${section}-${item.id || Buffer.from(item.url || item.title || "").toString("hex").slice(0, 10)}`,
    section,
    title: normalizeText(item.titleZh || item.title),
    summary: normalizeText(item.summaryZh || item.summary),
    insight: forceKeyong ? keyongInsight(item) : normalizeText(item.insight),
    url: item.url || "#",
    source: normalizeText(item.source || "Unknown"),
    tags: (item.tags || []).slice(0, 3),
    label,
    kind,
    importance: Number(item.importance || 5)
  };
}

function uniqueByUrl(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.url || item.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function pickKeyongItems(digest) {
  const pool = uniqueByUrl([
    ...(digest.highlights || []),
    ...(digest.hotRanking || []),
    ...(digest.pmHighlights || []),
    ...(digest.githubNew || []),
    ...(digest.research || []),
    ...(digest.industry || []),
    ...(digest.chinese || [])
  ]);

  return pool
    .map((item) => {
      const themeScore = scoreThemes(item).reduce((sum, theme) => sum + theme.hits, 0);
      return { item, score: themeScore * 3 + Number(item.importance || 0) };
    })
    .filter(({ score }) => score >= 7)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ item }) => mapItem(item, "keyong", "Keyong", true));
}

function editorNoteFromDigest(digest) {
  const note = normalizeText(digest.editorNote || "");
  if (!note) {
    return [
      "今天的主线是 Agent 系统继续从能力展示转向工程落地。",
      "Keyong 关联重点看五件事：Agentic 开发、自进化、A2A/互操作、Agentic 架构和 Harness 工程。",
      "日报会把资讯先按原始类别整理，再用 Keyong Lens 补一层工程视角。"
    ];
  }

  return note
    .replace(/^##\s*今日洞见\s*·\s*[0-9.]+\s*/i, "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))
    .map((paragraph) => paragraph.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'))
    .filter(Boolean)
    .slice(0, 4);
}

function buildArchives(digest) {
  const todayItems = (digest.highlights || digest.hotRanking || []).slice(0, 3);
  const todayTheme = todayItems[0]?.titleZh?.slice(0, 16) || "Agent 工程主线";
  return [
    {
      date: digest.date.slice(5).replace("-", "."),
      fullDate: digest.date,
      theme: todayTheme,
      take: "今日保留原始资讯来源，并用 Agentic 开发、自进化、A2A、架构与 Harness 主题重新组织关联视角。",
      items: todayItems.map((item) => ({
        title: normalizeText(item.titleZh || item.title),
        source: normalizeText(item.source),
        url: item.url || "#"
      }))
    },
    {
      date: "05.21",
      fullDate: "2026-05-21",
      theme: "A2A 进入生态期",
      take: "A2A 的重点不是消息格式，而是任务状态、能力发现、权限和 artifact 交付能否成为稳定契约。",
      items: [
        { title: "A2A protocol", source: "A2A Project", url: "https://github.com/a2aproject/A2A" },
        { title: "Model Context Protocol", source: "Anthropic", url: "https://www.anthropic.com/news/model-context-protocol" },
        { title: "Agent interoperability", source: "Google Developers", url: "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" }
      ]
    },
    {
      date: "05.20",
      fullDate: "2026-05-20",
      theme: "自进化要可回滚",
      take: "自进化要从 trace、eval、skill、rule 和 regression 形成受控闭环，避免把失败经验直接污染长期记忆。",
      items: [
        { title: "Self-Evolving Agents Cookbook", source: "OpenAI Cookbook", url: "https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining" },
        { title: "A Survey of Self-Evolving Agents", source: "arXiv", url: "https://arxiv.org/abs/2507.21046" },
        { title: "Evaluate agent workflows", source: "OpenAI Docs", url: "https://developers.openai.com/api/docs/guides/agent-evals" }
      ]
    },
    {
      date: "05.19",
      fullDate: "2026-05-19",
      theme: "Trace 变成资产",
      take: "多轮 Agent 的失败往往藏在中间步骤，结构化 trace 和 outcome 是评测、回放和改进的基础。",
      items: [
        { title: "Agents SDK tracing", source: "OpenAI", url: "https://openai.github.io/openai-agents-python/tracing/" },
        { title: "Demystifying evals for AI agents", source: "Anthropic", url: "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents" },
        { title: "LangSmith Evaluation", source: "LangChain", url: "https://www.langchain.com/langsmith/evaluation" }
      ]
    },
    {
      date: "05.18",
      fullDate: "2026-05-18",
      theme: "多 Agent 要有边界",
      take: "多 Agent 的收益来自任务可拆、权限隔离、反馈清楚和交接物稳定，而不是简单增加角色数量。",
      items: [
        { title: "Building effective agents", source: "Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents" },
        { title: "AutoGen", source: "Microsoft Research", url: "https://www.microsoft.com/en-us/research/project/autogen/" },
        { title: "LangGraph", source: "GitHub", url: "https://github.com/langchain-ai/langgraph" }
      ]
    },
    {
      date: "05.17",
      fullDate: "2026-05-17",
      theme: "ReAct 仍是底层范式",
      take: "Reasoning 与 Acting 交替，让 Agent 能通过工具观察修正下一步动作，是搜索、浏览器和代码 Agent 的基础模式。",
      items: [
        { title: "ReAct paper", source: "arXiv", url: "https://arxiv.org/abs/2210.03629" },
        { title: "LangGraph agent patterns", source: "LangChain", url: "https://github.com/langchain-ai/langgraph" },
        { title: "Tool use in agents", source: "Anthropic", url: "https://www.anthropic.com/engineering/building-effective-agents" }
      ]
    },
    {
      date: "05.16",
      fullDate: "2026-05-16",
      theme: "Harness 决定可靠性",
      take: "Agent 能力上限由模型决定，能否稳定落地则取决于测试、沙箱、权限、回放和恢复机制。",
      items: [
        { title: "Harness Engineering", source: "OpenAI", url: "https://openai.com/index/harness-engineering/" },
        { title: "Effective harnesses", source: "Anthropic", url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" },
        { title: "Codex harness", source: "OpenAI", url: "https://openai.com/index/unlocking-the-codex-harness/" }
      ]
    }
  ].slice(0, config.retentionDays);
}

function buildAppData(digest) {
  const items = [
    ...pickKeyongItems(digest),
    ...(digest.githubNew || digest.github || []).slice(0, 10).map((item) => mapItem(item, "opensource", "开源")),
    ...(digest.thoughtLeaders || []).slice(0, 8).map((item) => mapItem(item, "voices", "观点")),
    ...(digest.industry || []).slice(0, 8).map((item) => mapItem(item, "industry", "行业")),
    ...(digest.research || []).slice(0, 10).map((item) => mapItem(item, "research", "研究")),
    ...(digest.chinese || []).slice(0, 12).map((item) => mapItem(item, "china", "国内"))
  ];

  return {
    generatedAt: new Date().toISOString(),
    sourceDigestDate: digest.date,
    dateText: digest.dateZh,
    editorNote: editorNoteFromDigest(digest),
    lens: config.workThemes.map((theme) => ({
      label: theme.label,
      value: Math.min(98, 72 + pickKeyongItems(digest).filter((item) => item.insight.includes(theme.label)).length * 5)
    })),
    categories: config.categories,
    archives: buildArchives(digest),
    items
  };
}

const digest = parseDigestFromNextHtml(inputFile);
const appData = buildAppData(digest);
fs.writeFileSync(outFile, `window.APP_DATA = ${JSON.stringify(appData, null, 2)};\n`, "utf8");
console.log(`Imported ${appData.items.length} items from ${inputFile}`);
console.log(`Wrote ${outFile}`);
