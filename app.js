(function () {
  let data = window.APP_DATA;
  let sectionOrder = data.categories.filter((category) => category.id !== "archive");
  const sectionsRoot = document.getElementById("sections");
  const searchInput = document.getElementById("global-search");
  const sidebarNav = document.getElementById("sidebar-nav");
  const mobileTabs = document.getElementById("mobile-tabs");
  const archiveDays = document.getElementById("archive-days");
  const archiveDetail = document.getElementById("archive-detail");
  const lensList = document.getElementById("lens-list");
  const editorNote = document.getElementById("editor-note");
  const pageSubtitle = document.getElementById("page-subtitle");
  const currentDate = document.getElementById("current-date");
  const scoreValue = document.getElementById("score-value");
  const histLabel = document.getElementById("hist-label");
  const histPrev = document.getElementById("hist-prev");
  const histNext = document.getElementById("hist-next");

  let activeArchive = 0;
  let activeNav = "hot";

  // --- History navigation state ---
  let historyDates = [];  // available dates from manifest (newest first)
  let historyIndex = -1;  // -1 = live/today, 0+ = index into historyDates
  const todayDate = data.sourceDigestDate;

  function loadManifest() {
    return fetch("./history/manifest.json")
      .then((res) => res.ok ? res.json() : { dates: [] })
      .then((manifest) => { historyDates = manifest.dates || []; })
      .catch(() => { historyDates = []; });
  }

  function loadSnapshot(date) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `./history/${date}.js?t=${Date.now()}`;
      script.onload = () => { resolve(); script.remove(); };
      script.onerror = () => { reject(new Error(`Failed to load history/${date}.js`)); script.remove(); };
      document.head.appendChild(script);
    });
  }

  function reloadWithData(newData) {
    data = newData;
    sectionOrder = data.categories.filter((category) => category.id !== "archive");
    activeArchive = 0;
    renderAll();
  }

  function renderAll() {
    renderEditorNote();
    renderLens();
    renderAllNavs();
    renderArchive();
    renderSections();
    drawSignalMap();
    updateHistoryUI();
  }

  function updateHistoryUI() {
    if (historyIndex === -1) {
      histLabel.textContent = "今天";
      histLabel.classList.remove("hist-past");
      histNext.disabled = true;
    } else {
      histLabel.textContent = historyDates[historyIndex];
      histLabel.classList.add("hist-past");
      histNext.disabled = (historyIndex === 0);
    }
    // Can go back if there are older dates
    const canGoPrev = historyIndex < historyDates.length - 1;
    histPrev.disabled = !canGoPrev;
  }

  function navigateHistory(direction) {
    // direction: -1 = older, +1 = newer
    const newIndex = historyIndex + (direction === -1 ? 1 : -1);
    if (direction === 1 && newIndex < 0) {
      // Back to live
      historyIndex = -1;
      reloadWithData(window.APP_DATA);
      return;
    }
    if (newIndex < 0 || newIndex >= historyDates.length) return;
    historyIndex = newIndex;
    const targetDate = historyDates[historyIndex];
    loadSnapshot(targetDate)
      .then(() => { reloadWithData(window.APP_DATA); })
      .catch(() => { histLabel.textContent = "加载失败"; });
  }

  function bindHistoryEvents() {
    histPrev.addEventListener("click", () => navigateHistory(-1));
    histNext.addEventListener("click", () => navigateHistory(1));
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function linkFor(item, className, text) {
    if (!item.url || item.url === "#") {
      return `<span class="${className}">${text}</span>`;
    }
    return `<a class="${className}" href="${item.url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  }

  function labelClass(kind) {
    if (kind === "keyong") return "keyong";
    if (kind === "research") return "research";
    if (kind === "industry" || kind === "voice") return "industry";
    return "";
  }

  function categoryItems(categoryId) {
    if (categoryId === "hot") {
      return [...data.items].sort((a, b) => b.importance - a.importance).slice(0, 10);
    }
    return data.items.filter((item) => item.section === categoryId);
  }

  function filteredItems(items) {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) => {
      const haystack = [
        item.title,
        item.summary,
        item.insight,
        item.source,
        item.label,
        ...(item.tags || [])
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  function renderEditorNote() {
    editorNote.innerHTML = data.editorNote.map((paragraph) => `<p>${paragraph}</p>`).join("");
  }

  function renderLens() {
    lensList.innerHTML = data.lens
      .map(
        (lens) => `
          <div class="lens-row">
            <span>${escapeHtml(lens.label)}</span>
            <div class="mini-bar"><i style="width:${lens.value}%"></i></div>
          </div>
        `
      )
      .join("");

    const average = Math.round(data.lens.reduce((sum, lens) => sum + lens.value, 0) / data.lens.length);
    scoreValue.textContent = average;
  }

  function renderNav(container) {
    container.innerHTML = data.categories
      .map((category) => {
        const count =
          category.id === "archive"
            ? data.archives.length
            : categoryItems(category.id).length;
        const isActive = category.id === activeNav;
        return `
          <button class="nav-button ${isActive ? "active" : ""}" data-target="${category.id}" type="button">
            <span class="nav-left">
              <span class="nav-icon">${category.icon}</span>
              <span class="nav-label">${category.label}</span>
            </span>
            <span class="nav-count">${count}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderAllNavs() {
    renderNav(sidebarNav);
    renderNav(mobileTabs);
  }

  function renderArchive() {
    archiveDays.innerHTML = data.archives
      .map(
        (day, index) => `
        <button class="day-button ${index === activeArchive ? "active" : ""}" data-archive="${index}" type="button">
          <span class="day-date">${day.date}</span>
          <span class="day-theme">${escapeHtml(day.theme)}</span>
        </button>
      `
      )
      .join("");

    const day = data.archives[activeArchive];
    archiveDetail.innerHTML = `
      <div class="daily-brief">
        <h3>${escapeHtml(day.fullDate)} · ${escapeHtml(day.theme)}</h3>
        <p>${escapeHtml(day.take)}</p>
      </div>
      <div class="daily-list">
        <h3>今日信号</h3>
        ${day.items
          .map(
            (item) => `
            <div class="daily-item">
              ${linkFor(item, "", escapeHtml(item.title))}
              <span>${escapeHtml(item.source)}</span>
            </div>
          `
          )
          .join("")}
      </div>
    `;
  }

  function renderCard(item, index) {
    const rank = String(index + 1).padStart(2, "0");
    const tags = (item.tags || []).slice(0, 2);
    const importance = Math.max(0, Math.min(10, item.importance || 0));
    const title = escapeHtml(item.title);
    return `
      <article class="card" data-card-id="${escapeHtml(item.id)}">
        <div class="card-top">
          <span class="rank ${index > 2 ? "low" : ""}">${rank}</span>
          <div class="tag-row">
            <span class="label ${labelClass(item.kind)}">${escapeHtml(item.label)}</span>
          </div>
          <div class="importance" title="重要度 ${importance}/10">
            <div class="importance-bar"><i style="width:${importance * 10}%"></i></div>
            <span>${importance}</span>
          </div>
        </div>
        ${linkFor(item, "card-title", title)}
        <p class="card-summary">${highlightNumbers(escapeHtml(item.summary))}</p>
        ${item.insight ? `<p class="insight">${escapeHtml(item.insight)}</p>` : ""}
        <div class="card-foot">
          <div class="source-line">
            <span class="source">${escapeHtml(item.source)}</span>
            ${tags.map((tag) => `<span class="tiny-tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          ${item.url && item.url !== "#" ? `<a class="origin" href="${item.url}" target="_blank" rel="noopener noreferrer">原文</a>` : ""}
        </div>
      </article>
    `;
  }

  function highlightNumbers(text) {
    return text.replace(/([0-9]+(?:\.[0-9]+)?%?|A2A|MCP|ReAct|Trace|Eval|Harness|Agent)/g, "<mark>$1</mark>");
  }

  function renderSections() {
    const total = data.items.length;
    currentDate.textContent = data.dateText;
    pageSubtitle.textContent = `${data.dateText} · 共 ${total} 条`;

    sectionsRoot.innerHTML = sectionOrder
      .map((category) => {
        const items = filteredItems(categoryItems(category.id));
        return `
          <section class="news-section" id="${category.id}" aria-labelledby="${category.id}-title">
            <div class="section-head">
              <span class="section-icon">${category.icon}</span>
              <h2 id="${category.id}-title">${category.label}</h2>
              <div class="rule"></div>
              <span class="pill">${category.id === "hot" ? "按影响力排序" : `${items.length} 条`}</span>
            </div>
            ${
              items.length
                ? `<div class="cards-grid">${items.map((item, index) => renderCard(item, index)).join("")}</div>`
                : `<div class="empty">没有匹配的内容。</div>`
            }
          </section>
        `;
      })
      .join("");
  }

  function setActiveNav(id) {
    activeNav = id;
    renderAllNavs();
  }

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const navButton = event.target.closest(".nav-button");
      if (navButton) {
        const target = navButton.dataset.target;
        setActiveNav(target);
        scrollToSection(target);
      }

      const dayButton = event.target.closest(".day-button");
      if (dayButton) {
        activeArchive = Number(dayButton.dataset.archive);
        renderArchive();
      }
    });

    searchInput.addEventListener("input", renderSections);

    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && document.activeElement !== searchInput) {
        event.preventDefault();
        searchInput.focus();
      }
      if (event.key === "Escape") {
        searchInput.value = "";
        renderSections();
        searchInput.blur();
      }
      if (/^[1-8]$/.test(event.key) && document.activeElement !== searchInput) {
        const category = data.categories[Number(event.key) - 1];
        if (category) {
          setActiveNav(category.id);
          scrollToSection(category.id);
        }
      }
      if (event.key === "j" && document.activeElement !== searchInput) window.scrollBy({ top: 420, behavior: "smooth" });
      if (event.key === "k" && document.activeElement !== searchInput) window.scrollBy({ top: -420, behavior: "smooth" });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible && visible.target.id !== activeNav) {
          activeNav = visible.target.id;
          renderAllNavs();
        }
      },
      { rootMargin: "-22% 0px -68% 0px", threshold: 0.01 }
    );

    setTimeout(() => {
      document.querySelectorAll(".news-section, #archive").forEach((section) => observer.observe(section));
    }, 0);
  }

  function drawSignalMap() {
    const canvas = document.getElementById("signal-map");
    const context = canvas.getContext("2d");
    const nodes = [
      { x: 184, y: 42, label: "A2A", color: "#2f6fdd" },
      { x: 94, y: 88, label: "Trace", color: "#16a36b" },
      { x: 249, y: 102, label: "Eval", color: "#e0a01f" },
      { x: 154, y: 151, label: "Harness", color: "#805ad5" },
      { x: 232, y: 184, label: "Skill", color: "#e26464" }
    ];
    const links = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 1]
    ];

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fbfcff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    links.forEach(([from, to]) => {
      const a = nodes[from];
      const b = nodes[to];
      const gradient = context.createLinearGradient(a.x, a.y, b.x, b.y);
      gradient.addColorStop(0, `${a.color}88`);
      gradient.addColorStop(1, `${b.color}66`);
      context.strokeStyle = gradient;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    });

    nodes.forEach((node) => {
      context.beginPath();
      context.fillStyle = `${node.color}1f`;
      context.arc(node.x, node.y, 30, 0, Math.PI * 2);
      context.fill();
      context.beginPath();
      context.fillStyle = node.color;
      context.arc(node.x, node.y, 20, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = "#fff";
      context.font = "700 11px ui-sans-serif, system-ui";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(node.label, node.x, node.y);
    });
  }

  function init() {
    renderEditorNote();
    renderLens();
    renderAllNavs();
    renderArchive();
    renderSections();
    drawSignalMap();
    bindEvents();
    bindHistoryEvents();
    loadManifest().then(updateHistoryUI);
  }

  init();
})();
