window.APP_DATA = {
  "generatedAt": "2026-06-06T01:30:00Z",
  "sourceDigestDate": "2026-06-06",
  "dateText": "2026年6月6日 星期六",
  "editorNote": [
    "今天的主线是 <strong>Harness 工程从「经验式修补」升级为「trace-grounded 闭环」</strong>。<a href=\"http://arxiv.org/abs/2606.06324v1\" target=\"_blank\" rel=\"noopener noreferrer\">HarnessFix</a> 把原始执行轨迹与 harness 代码统一编译为 Harness-aware Trace IR，将失败定位到具体步骤与 harness 层，并在 SWE-Bench Verified、Terminal-Bench 2.0、GAIA、AppWorld 上把通过率提升 15.2%–50%；与此同时，<a href=\"https://github.com/can1357/oh-my-pi\" target=\"_blank\" rel=\"noopener noreferrer\">oh-my-pi</a> 10,737 Stars 表明「hash-anchored edits + 优化工具 harness」的 terminal-native 编码 Agent 形态已成主流。",
    "<strong>Agent Memory 与 MCP 安全同步进入系统级研究阶段</strong>。<a href=\"http://arxiv.org/abs/2606.06448v1\" target=\"_blank\" rel=\"noopener noreferrer\">Agent Memory</a> 论文给出首份 stateful long-horizon workload 的系统化刻画，把构建/检索/生成三段成本和十条系统建议直接交到工程师手上；<a href=\"http://arxiv.org/abs/2606.06387v1\" target=\"_blank\" rel=\"noopener noreferrer\">WebMCP Tool Surface Poisoning</a> 揭示 Mid-Session Tool Injection 的 hijacking/framing 双线威胁，<a href=\"http://arxiv.org/abs/2606.06460v1\" target=\"_blank\" rel=\"noopener noreferrer\">Recuse Signal</a> 则用 SSH banner / PostgreSQL NOTICE 形式给 LLM Agent 提供「主动让步」的协作治理通道。",
    "<strong>自进化和多 Agent 协作从单点能力走向工程化框架</strong>。<a href=\"http://arxiv.org/abs/2606.06473v1\" target=\"_blank\" rel=\"noopener noreferrer\">MLEvolve</a> 通过 Progressive MCGS + Retrospective Memory 在 12 小时预算内击败 AlphaEvolve；<a href=\"http://arxiv.org/abs/2606.06399v1\" target=\"_blank\" rel=\"noopener noreferrer\">CollabSim</a> 把 CSCW 的协作能力维度引入 MAS 评测；国内侧 <a href=\"https://m.leiphone.com/category/industrynews/VEQzCEDU0APjbVou.html\" target=\"_blank\" rel=\"noopener noreferrer\">2026 中国 AI 智能体领航者榜单</a> 与零一万物「企业多智能体元年」预判共同把叙事从模型竞争推向多 Agent 协作落地。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 82 },
    { "label": "Agent 自进化", "value": 86 },
    { "label": "A2A / 互操作", "value": 80 },
    { "label": "Agentic 架构", "value": 88 },
    { "label": "Harness 工程", "value": 94 }
  ],
  "categories": [
    { "id": "hot", "label": "全球热榜", "icon": "▲" },
    { "id": "keyong", "label": "Keyong关联", "icon": "→" },
    { "id": "opensource", "label": "开源热项", "icon": "◎" },
    { "id": "voices", "label": "大佬说", "icon": "◆" },
    { "id": "industry", "label": "行业动态", "icon": "○" },
    { "id": "research", "label": "前沿研究", "icon": "◇" },
    { "id": "china", "label": "国内速递", "icon": "◉" },
    { "id": "archive", "label": "7日AI日报", "icon": "▣" }
  ],
  "archives": [
    {
      "date": "06.06",
      "fullDate": "2026-06-06",
      "theme": "Harness 修复 trace 化 + Agent Memory 系统化 + MCP 安全研究兴起",
      "take": "HarnessFix 用 Trace IR 把 harness flaw 修复变成可定位、可定级、可回归的工程闭环（SWE-Bench Verified 等 +15%~50%）；Agent Memory 首篇系统刻画构建/检索/生成三段成本，给出 10 条系统建议；WebMCP Tool Surface Poisoning 与 Recuse Signal 把 MCP 协议层的安全与协作治理推进一步；oh-my-pi 10K+ Stars 标志 terminal-native 编码 Agent harness 成为主流形态。",
      "items": [
        {
          "title": "HarnessFix：trace-guided 框架，将 harness flaw 修复闭环到 IR 与 patch",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2606.06324v1"
        },
        {
          "title": "Agent Memory：首份 stateful long-horizon workload 系统刻画",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2606.06448v1"
        },
        {
          "title": "oh-my-pi 10,737 Stars：hash-anchored edits 的 terminal 编码 Agent",
          "source": "GitHub",
          "url": "https://github.com/can1357/oh-my-pi"
        }
      ]
    },
    {
      "date": "06.05",
      "fullDate": "2026-06-05",
      "theme": "可观测升级为运行时能力 + Coding Agent 三足鼎立 + JVM Agent 一等公民",
      "take": "agent-inspect 把 TypeScript Agent 执行渲染为本地执行树；ASSERT 用需求驱动方式让评测可溯源、可回归；OpenCode 160K+ Stars 成开源编码 Agent 事实标准，GPT-5.5 Instant 更新加速 Codex 本地推理；JetBrains Koog 1.0 让 JVM 开发者有了原生 Agent 框架选项。",
      "items": [
        {
          "title": "agent-inspect：TypeScript Agent 本地执行树，结构化呈现工具调用与耗时",
          "source": "GitHub",
          "url": "https://github.com/rajudandigam/agent-inspect"
        },
        {
          "title": "OpenCode 160K+ Stars：开源编码 Agent 的事实标准",
          "source": "OpenCode",
          "url": "https://opencode.ai/"
        },
        {
          "title": "JetBrains Koog 1.0：JVM 原生 Agent 框架，稳定核心 + 多平台可观测",
          "source": "JetBrains",
          "url": "https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/"
        }
      ]
    },
    {
      "date": "06.04",
      "fullDate": "2026-06-04",
      "theme": "记忆成一等基础设施 + 互操作参考实现 + 运行时内化治理",
      "take": "remnic/instar 把作用域记忆、来源溯源与持久会话做成 Agent 的一等基础设施；a2a-reference-ts 提供企业级 A2A 实现与 A2A↔MCP 桥，agent-handoff-protocol 把跨 Agent 会话交接标准化；agentk 用用户态安全内核给工具边界加上能力回执与可重放飞行日志，agent-budget-controller 把成本做成硬约束；AI Alliance 的 cube-harness 推动评测与数据策展的开源标准。",
      "items": [
        {
          "title": "remnic：为「用户感知型」Agent 提供作用域记忆、溯源与评测",
          "source": "GitHub",
          "url": "https://github.com/joshuaswarren/remnic"
        },
        {
          "title": "a2a-reference-ts：企业级 A2A 实现，含 A2A↔MCP 双向桥",
          "source": "GitHub",
          "url": "https://github.com/reaatech/a2a-reference-ts"
        },
        {
          "title": "agentk：AI Agent 的用户态安全内核，能力回执 + 可重放飞行日志",
          "source": "GitHub",
          "url": "https://github.com/Atomics-hub/agentk"
        }
      ]
    },
    {
      "date": "06.03",
      "fullDate": "2026-06-03",
      "theme": "互操作可验证化 + Harness/评测开源工程化",
      "take": "mcp-mesh 把 MCP+A2A+REST 统一进 K8s 原生分布式 Agent 运行时；atrib/motebit 用签名与执行回执把 Agent 行为变成可独立验证的凭证；ASSERT、holon-bench、hermes-agent-metaharness 把评测推向「需求驱动、可回归、可辩护」；Agentic AI Foundation 把 MCP/AGENTS.md/goose 纳入中立治理。",
      "items": [
        {
          "title": "Agentic AI Foundation：MCP/AGENTS.md/goose 纳入 Linux Foundation 中立治理",
          "source": "OpenAI / Linux Foundation",
          "url": "https://openai.com/index/agentic-ai-foundation/"
        },
        {
          "title": "mcp-mesh：K8s 原生分布式 Agent 框架，统一 MCP + A2A + REST",
          "source": "GitHub",
          "url": "https://github.com/dhyansraj/mcp-mesh"
        },
        {
          "title": "ASSERT：需求驱动的 Agent 评测 harness",
          "source": "GitHub",
          "url": "https://github.com/responsibleai/ASSERT"
        }
      ]
    },
    {
      "date": "06.02",
      "fullDate": "2026-06-02",
      "theme": "Agent 治理工程化：OWASP 全覆盖 + Gartner MQ + 协议持久化",
      "take": "微软 Agent Governance Toolkit 3.6K Stars 覆盖 OWASP Agentic Top 10 全部风险；Gartner 首发 Enterprise AI Coding Agents MQ，OpenAI/GitHub/Cursor 入选 Leader；Continuum 用 Rust 实现跨 Agent 持久 MCP Server；EU AI Act 高风险条款六月生效，治理从可选变成合规硬约束。",
      "items": [
        {
          "title": "微软 Agent Governance Toolkit:首个 OWASP Agentic Top 10 全覆盖治理框架",
          "source": "GitHub / Microsoft",
          "url": "https://github.com/microsoft/agent-governance-toolkit"
        },
        {
          "title": "Gartner 首发 Enterprise AI Coding Agents MQ：OpenAI/GitHub/Cursor 入选 Leader",
          "source": "Gartner / OpenAI",
          "url": "https://openai.com/index/gartner-2026-agentic-coding-leader/"
        },
        {
          "title": "Continuum：Rust 实现的跨 Agent 持久化 MCP Server",
          "source": "GitHub",
          "url": "https://github.com/redstone-md/Continuum"
        }
      ]
    },
    {
      "date": "06.01",
      "fullDate": "2026-06-01",
      "theme": "Agentic 工程系统化：Rust 运行时 + 安全基准 + 记忆漂移",
      "take": "Dify 143K Stars 标志 agentic workflow 平台到达大众临界点；rustyhand 用 Rust 单二进制交付完整 Agent OS（A2A+MCP），运行时从脚本转向系统工程；kevlar-benchmark 把 OWASP Top 10 引入 Agent 安全测试；coherence-drift-benchmark 量化 Agent 长期记忆漂移，为自进化提供可测量基线。",
      "items": [
        {
          "title": "Dify 143K Stars：Agentic Workflow 平台达到大众临界点",
          "source": "GitHub",
          "url": "https://github.com/langgenius/dify"
        },
        {
          "title": "rustyhand：Rust 单二进制 Agent OS，37 Agent + A2A + MCP",
          "source": "GitHub",
          "url": "https://github.com/ginkida/rustyhand"
        },
        {
          "title": "coherence-drift-benchmark：首个 Agent 记忆漂移量化基准",
          "source": "GitHub",
          "url": "https://github.com/elfvvv10/coherence-drift-benchmark"
        }
      ]
    },
    {
      "date": "05.28",
      "fullDate": "2026-05-28",
      "theme": "Agent 评测企业实战 + A2A 工程验证",
      "take": "ITBench-AA 揭示前沿模型在真实 IT 任务中不及格，KPMG 全员部署 Claude 是四大首次 all-in Agent 平台，A2A conformance fixtures 让互操作从规范走向可验证，Gartner 首发 Coding Agent MQ 标志企业主流化。",
      "items": [
        {
          "title": "ITBench-AA：前沿 Agent 在企业 IT 任务得分 <50%",
          "source": "IBM Research / HuggingFace",
          "url": "https://huggingface.co/blog/ibm-research/itbench-aa"
        },
        {
          "title": "KPMG 27.6 万员工全面接入 Claude，四大首次 all-in AI Agent",
          "source": "KPMG",
          "url": "https://kpmg.com/xx/en/media/press-releases/2026/05/kpmg-and-anthropic-sign-global-alliance-and-launch-digital-gateway-powered-by-claude.html"
        },
        {
          "title": "A2A conformance fixtures 发布：Agent Identity + Trust Protocol 可验证",
          "source": "opena2a-org",
          "url": "https://github.com/opena2a-org/aip-conformance"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "hot-20260606-01",
      "section": "hot",
      "title": "HarnessFix：trace-guided 框架将 harness flaw 修复闭环到 IR 与 patch",
      "summary": "新论文提出 HarnessFix：把原始执行轨迹与 harness 代码统一编译为 Harness-aware Trace IR（HTIR），归一化碎片化轨迹证据，附带步骤级 provenance 与控制流关系。框架将失败归因到具体轨迹步骤与 harness 层，把反复出现的诊断聚合为可执行 flaw 记录，再映射到带边界的修复 operator，最后生成并验证 harness patch。在 SWE-Bench Verified、Terminal-Bench 2.0 Verified、GAIA、AppWorld 上相比初始 harness 提升 15.2%–50%，超过人工设计与 self-evolution 基线。",
      "insight": "HarnessFix 把「harness 失败」从模糊的运维直觉变成 IR 上的结构化对象——失败可定位、可分类、可生成有界 patch、可回归。这意味着 harness 可以像编译器一样被持续优化，而不是靠资深工程师的「感觉」修。",
      "url": "http://arxiv.org/abs/2606.06324v1",
      "source": "arXiv",
      "tags": ["HarnessFix", "trace-IR", "harness-repair"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260606-02",
      "section": "hot",
      "title": "oh-my-pi 10,737 Stars：hash-anchored edits 的 terminal 编码 Agent",
      "summary": "can1357/oh-my-pi（TypeScript，10,737 Stars）是一款面向终端的 AI 编码 Agent：以 hash-anchored edits 保障文件修改的可对齐性，配合优化过的工具 harness，集成 LSP、Python、浏览器与 subagent 能力。其极速增长说明 terminal-native + 可控编辑成为新一代编码 Agent 的主流形态。",
      "insight": "「hash-anchored edits」直击大模型编辑代码时定位漂移的痛点——把每次编辑锚定到内容哈希，让 patch 的精确性变成协议级保证，而非靠 prompt 反复约束。",
      "url": "https://github.com/can1357/oh-my-pi",
      "source": "GitHub",
      "tags": ["oh-my-pi", "terminal-agent", "hash-anchored"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260606-03",
      "section": "hot",
      "title": "MLEvolve：自进化多 Agent 框架在 ML 算法发现上击败 AlphaEvolve",
      "summary": "新论文 MLEvolve 是基于 LLM 的自进化多 Agent 框架，瞄准端到端机器学习算法发现。框架用 Progressive MCGS 把树搜索扩展到跨分支信息流，配合熵启发的渐进调度从探索过渡到收敛；Retrospective Memory 把冷启动领域知识与动态全局记忆结合用于经验复用；自适应编码模式将策略规划与代码生成解耦。MLE-Bench 上以 12 小时预算（半数标准时长）刷新 SOTA，并在数学算法优化上超过 AlphaEvolve。",
      "insight": "MLEvolve 把自进化的三个老问题——分支信息孤岛、无记忆搜索、缺少分层控制——一并解决，并以「半时间预算 + 跨域泛化」证明自进化已能在受限算力下达到工程实用度。",
      "url": "http://arxiv.org/abs/2606.06473v1",
      "source": "arXiv",
      "tags": ["MLEvolve", "self-evolution", "MCGS"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260606-04",
      "section": "hot",
      "title": "Agent Memory：首份 stateful long-horizon workload 系统刻画",
      "summary": "新论文给出 Agent 持久记忆的首次系统级刻画：提出按四个维度组织的系统导向 taxonomy，构建 phase-aware 性能 profiling harness，把开销归因到 construction、retrieval、generation 三段；对 10 个代表性记忆系统在两套 benchmark 上做特征化分析，揭示设计选择如何在写路径与读路径之间转移成本；并给出 10 条系统建议，覆盖 construction 调度、能力下限、按查询量摊销、freshness-延迟权衡与队列级管理。",
      "insight": "记忆从此前的「prompt 加点上下文」上升为有自己 workload 模型与系统建议的一类基础设施。这条线对自进化与长任务 Agent 的成本与可控性有决定性影响——没有可观察的 Memory workload，就没有可调度的 Memory。",
      "url": "http://arxiv.org/abs/2606.06448v1",
      "source": "arXiv",
      "tags": ["agent-memory", "workload", "system-design"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260606-05",
      "section": "hot",
      "title": "WebMCP Tool Surface Poisoning：Mid-Session Tool Injection 风险首次系统揭示",
      "summary": "新论文研究 WebMCP 这类把网站工具直接暴露给 AI Agent 的协议，识别出新威胁 Mid-Session Tool Injection（MSTI），并区分为 Tool Hijacking（通过 AbortSignal API 或注册竞态条件改写可见工具集）与 Tool Framing（通过 name/description/readOnlyHint/inputSchema 等元数据影响 Agent 对工具角色的判断）。论文给出可行实施验证，并提出工具身份绑定来源、生命周期一致性、第三方工具数据边界、注册与调用可追溯日志等防护方向。",
      "insight": "MCP/WebMCP 的「动态工具暴露」既是能力也是攻击面。MSTI 提醒我们：协议层不仅要谈 capability discovery，也要把 capability lifecycle 与 metadata 真实性纳入安全契约——否则元数据本身就会被武器化。",
      "url": "http://arxiv.org/abs/2606.06387v1",
      "source": "arXiv",
      "tags": ["WebMCP", "MCP-security", "tool-poisoning"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260606-01",
      "section": "keyong",
      "title": "Harness 修复正在脱离经验式补丁，走向 trace-grounded 工程闭环",
      "summary": "HarnessFix 用 Trace IR 把 harness 失败结构化为可定位、可分类、可生成 patch、可回归的工程对象。配合 langdrift（locale-aware 评测 harness）与 hermes-agent-metaharness（用外循环搜索最优评测配置），整个 harness 工程开始呈现「失败可观测 → 可定位 → 可修复 → 可验证」的完整闭环。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agentic 架构」。当 harness 自身的失败也能被 trace 化、IR 化和 patch 化，意味着 harness 进入了「自我可维护」阶段——这正是它从工具升级为基础设施的标志。",
      "url": "http://arxiv.org/abs/2606.06324v1",
      "source": "arXiv / GitHub",
      "tags": ["harness", "trace-IR", "self-maintainable"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260606-02",
      "section": "keyong",
      "title": "Agent Memory 从「上下文加点东西」上升为系统级 workload",
      "summary": "Agent Memory 论文给出 4 维 taxonomy + phase-aware profiling harness + 10 条系统建议，把记忆的写路径、读路径与生成成本拆解到可调度的级别。配合 TOKI 提出的 bitemporal operator algebra（把记忆冲突解决重新表述为写时并发控制），记忆不再只是检索问题，而是一个完整的存储系统问题。",
      "insight": "→ Keyong 关联：呼应「Agentic 架构」+「Agent 自进化」。自进化要求 Agent 在长时间窗口持续学习与回溯，而没有可调度的记忆 workload，就没有可控的自进化——记忆系统化是自进化基础设施的前提。",
      "url": "http://arxiv.org/abs/2606.06448v1",
      "source": "arXiv",
      "tags": ["memory", "workload", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260606-03",
      "section": "keyong",
      "title": "MCP / WebMCP 安全研究全面进入协议层",
      "summary": "WebMCP Tool Surface Poisoning 揭示 Mid-Session Tool Injection（hijacking + framing），Recuse Signal 论文提出基于 SSH banner、PostgreSQL NOTICE 的「请求 Agent 主动让步」协作治理通道，observability-mcp 则把 Prometheus、Loki 等观测后端统一在一个 MCP 服务器内。三者从攻防、治理和可观测三个维度同时拓展 MCP 协议层。",
      "insight": "→ Keyong 关联：呼应「A2A / 互操作」+「Agentic 架构」。MCP 不再只是「工具暴露协议」，它还要承载身份、元数据真实性、协作让步与跨工具可观测——MCP 层的工程边界正在快速扩展。",
      "url": "http://arxiv.org/abs/2606.06387v1",
      "source": "arXiv / GitHub",
      "tags": ["MCP", "protocol-security", "interop"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260606-04",
      "section": "keyong",
      "title": "自进化从单 Agent 推进到「跨分支 + 持久记忆」的多 Agent 框架",
      "summary": "MLEvolve 用 Progressive MCGS 在分支间共享信息，用 Retrospective Memory 把冷启动知识与动态记忆结合复用，用自适应编码模式解耦策略与代码生成；jeremiahnyamwezi27/meta-agent 等项目则在工程层把「自动改进 Agent benchmark 分数」做成可复制 harness。自进化的研究边界从单 Agent loop 显式扩展到了多 Agent 框架与跨任务记忆。",
      "insight": "→ Keyong 关联：呼应「Agent 自进化」+「Harness 工程」。自进化的下一步不是更聪明的 reflection，而是更系统的「跨分支信息共享 + 持久经验记忆 + 与评测 harness 联动」——这要求 harness 自身也具备时间维度的可观测能力。",
      "url": "http://arxiv.org/abs/2606.06473v1",
      "source": "arXiv / GitHub",
      "tags": ["self-evolution", "multi-agent", "memory"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260606-05",
      "section": "keyong",
      "title": "Terminal-native + hash-anchored 编辑成为编码 Agent 的主流形态",
      "summary": "oh-my-pi 10,737 Stars 把 hash-anchored edits + 优化工具 harness + LSP/浏览器/subagent 一起做进终端 Agent；Twill.ai、Terminal Use（YC W26）把 cloud-based filesystem 编码 Agent 推向「下任务、收 PR」的产品形态；vibe-kanban 用 Rust 优化 Claude Code、Codex 等编码 Agent 的工作流。",
      "insight": "→ Keyong 关联：呼应「Agentic 开发」+「Harness 工程」。编码 Agent 的产品边界正在从 IDE 插件扩展到终端 + 云端 + 工作流仪表板，但底层共性都是更严格的编辑契约（hash anchoring）与更可控的执行 harness。",
      "url": "https://github.com/can1357/oh-my-pi",
      "source": "GitHub / HN",
      "tags": ["coding-agent", "terminal", "harness"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260606-01",
      "section": "opensource",
      "title": "observability-mcp：把多个观测后端统一在一个 MCP Server 内",
      "summary": "ThoTischner/observability-mcp（TypeScript）是面向 AI Agent 的统一可观测网关：单个 MCP server 同时桥接 Prometheus、Loki 与任意后端，提供跨信号的异常检测与内置 Web UI。Agent 不需要为每个观测系统分别接入工具，而是通过一个 MCP 接口完成跨日志、指标的查询与关联。",
      "insight": "「一个 MCP 网关 + 多后端」是 MCP 工具层最自然的演化方向——把可观测从基础设施配置变成 Agent 直接可调用的能力，让 Agent 在生产中具备自检与定位能力。",
      "url": "https://github.com/ThoTischner/observability-mcp",
      "source": "GitHub",
      "tags": ["observability-mcp", "Prometheus", "Loki"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260606-02",
      "section": "opensource",
      "title": "reactive-agents-ts：Effect-TS 类型安全的 multi-agent A2A 框架",
      "summary": "tylerjrbuell/reactive-agents-ts（TypeScript）提供可组合的 TypeScript AI Agent 框架，主打 Effect-TS 类型安全、5 种推理策略、持久 gateway、实时流式与多 Agent A2A。它把 A2A 协议互操作做成框架原生能力，而不是事后接入。",
      "insight": "在 TypeScript/Effect-TS 这种强类型流式环境中实现 A2A，意味着多 Agent 协作的契约可以在编译期被检查——这对企业级互操作的可靠性是一个有趣的方向。",
      "url": "https://github.com/tylerjrbuell/reactive-agents-ts",
      "source": "GitHub",
      "tags": ["reactive-agents-ts", "A2A", "Effect-TS"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260606-03",
      "section": "opensource",
      "title": "langdrift：面向语言一致性的 Agent 评测 harness",
      "summary": "RubenGlez/langdrift（TypeScript）是一个 locale-aware 的 Agent 评测 harness：测试同一意图在不同语言下被表达时，Agent 是否仍能行为一致。把「跨语言一致性」做成评测维度，对国际化业务的 Agent 部署有直接价值。",
      "insight": "Agent 评测过去主要谈正确率与工具调用准确度，langdrift 把「语言漂移」拉进评测维度——对中文场景的 Agent 工程提供了一个直观、可借鉴的 harness 范式。",
      "url": "https://github.com/RubenGlez/langdrift",
      "source": "GitHub",
      "tags": ["langdrift", "i18n", "eval-harness"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260606-04",
      "section": "opensource",
      "title": "vibe-kanban：为 Claude Code / Codex 优化的 Rust 编码 Agent 工作流",
      "summary": "patrickreed22/vibe-kanban（Rust）瞄准编码 Agent 的工作流瓶颈：把任务管理、上下文切换、Agent 调度统一到一个 Rust 写的看板里，原生适配 Claude Code、Codex 等主流编码 Agent，减少在多 Agent / 多任务间手工调度的开销。",
      "insight": "当编码 Agent 数量上来，单 Agent 工具变得不够——需要 Agent 之上的「调度层」。vibe-kanban 把 Kanban 概念落到 Agent 编排上，提示我们 harness 工程在产品形态上还有大量留白。",
      "url": "https://github.com/patrickreed22/vibe-kanban",
      "source": "GitHub",
      "tags": ["vibe-kanban", "agent-orchestration", "Rust"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260606-01",
      "section": "voices",
      "title": "Recuse Signal 论文：Agent 治理需要「协作让步」而不是只靠强制访问控制",
      "summary": "新论文提出 Recuse Signal：服务器通过协议自身的现有通道（SSH banner、PostgreSQL NOTICE）发布轻量、公开的「让步」信号，请求 Agent 自愿撤回访问，是 robots.txt 在实时访问上的类比。试验显示在 SSH + GPT-4o/4o-mini/Claude Code 上，信号存在时 100% 让步、不存在时 100% 完成任务，但显式的运营授权框架会让能力最强的模型继续执行——说明它是协作而非绝对信号。",
      "insight": "把治理设计成「协作信号」而非纯粹的访问控制，是对 Agent 时代权限模型的一种现实让步。它承认了一个事实：Agent 越自主，运营者越需要显式表达意图，而非把所有意图都编码进硬边界。",
      "url": "http://arxiv.org/abs/2606.06460v1",
      "source": "arXiv",
      "tags": ["Recuse-Signal", "governance", "cooperation"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260606-02",
      "section": "voices",
      "title": "零一万物：2026 是「企业 Agent 上岗元年」，多智能体六大判断定义新阶段",
      "summary": "零一万物发布《中国企业智能体 2026 六大预判》，强调多智能体的关键不在单点能力，而在「基于目标的智能协作与结果交付」——多个 Agent 像真实团队一样分工协作、相互检查。其判断把 2026 命名为「企业 Agent 上岗元年」，并把多 Agent 协作放在企业落地的中心位置。",
      "insight": "「上岗」隐含 Agent 不再是 PoC 而是承担岗位职责。当国内头部厂商把多 Agent 协作而非单 Agent 智能作为企业落地核心，A2A、互操作与可问责机制就从技术议题变成商业刚需。",
      "url": "https://www.infoq.cn/news/8lkAlTOp8etL1u8LGmxq",
      "source": "InfoQ / 零一万物",
      "tags": ["多智能体", "企业落地", "六大预判"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260606-03",
      "section": "voices",
      "title": "Bill Gates 月评 AI：节奏快于预期，Agent 形态正在重塑工作流",
      "summary": "Hacker News 热议的 Bill Gates AI 一月后跟评，重申其前期判断——AI 在工作流自动化与个人助理形态上推进的速度超过他原先的乐观预期，且强调 Agent 化的关键不在某个单一模型，而在「让 AI 真正成为工作流中的一员」。",
      "insight": "外部行业观察者持续把 Agent 化定位为「工作流重组」而非「工具升级」。这与零一万物的「Agent 上岗」、Microsoft 的「从生成到行动」叙事一致——Agent 是岗位与流程层面的变量，而非单纯模型能力问题。",
      "url": "https://news.ycombinator.com/item?id=48289469",
      "source": "Hacker News",
      "tags": ["Bill-Gates", "workflow", "agent-adoption"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "industry-20260606-01",
      "section": "industry",
      "title": "Google 发布新一批 AI Agent，与 OpenAI、Anthropic 在企业 Agent 战场加码",
      "summary": "Bloomberg 报道，Alphabet 旗下 Google 推出一批新的 AI Agent 工具，进一步扩展企业 Agent 产品矩阵，被视为对 OpenAI、Anthropic 在 Agent 平台层的直接回应。三家头部厂商在 Agent 平台、模型与 SDK 上的迭代节奏明显加速。",
      "insight": "三大厂同时投入 Agent 平台层，意味着「模型 + Agent 平台 + 工具协议」的全栈竞争正在固化——单点开源框架要么找到差异化定位，要么被平台吞并。",
      "url": "https://www.bloomberg.com/news/articles/2026-04-22/google-releases-new-ai-agents-to-challenge-openai-and-anthropic",
      "source": "Bloomberg",
      "tags": ["Google", "agent-platform", "enterprise"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260606-02",
      "section": "industry",
      "title": "Twill.ai (YC S25)：把任务委托给云端 Agent、自动收 PR",
      "summary": "Twill.ai 在 Hacker News Launch 中亮相：用户描述需求即可委托给云端 Agent 完成，结果以 PR 形式回到代码仓库。其产品形态把云端编码 Agent 包装成「任务收件箱」，开发者只需 review PR 而无需维护 Agent 自身。",
      "insight": "Twill.ai 的产品定位代表了一类共识：编码 Agent 的最佳交付介面，可能不是 IDE 或聊天框，而是 PR/Issue 这种已有协作面。这让 Agent 第一次能在团队工作流里像同事一样行动。",
      "url": "https://twill.ai",
      "source": "Hacker News / YC",
      "tags": ["Twill.ai", "PR-agent", "cloud-coding"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260606-03",
      "section": "industry",
      "title": "Anthropic 启动 IPO 保密申报，Agent 时代基础模型公司加速资本化",
      "summary": "Anthropic 已启动 IPO 保密申报，与 OpenAI 形成正面竞争。基础模型公司 IPO 进程加速，叠加 Agent 平台层的扩张，标志着 Agent 时代的资本化拐点已经到来。",
      "insight": "当 Agent 平台公司开始走向公开市场，财务披露会反向倒逼指标体系更严格——谁的 Agent 真的有 ARR、谁只是估值故事，会很快显现。",
      "url": "https://www.youtube.com/watch?v=BjXAt6QnF1Y",
      "source": "Bloomberg / YouTube",
      "tags": ["Anthropic", "IPO", "capital"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "research-20260606-01",
      "section": "research",
      "title": "CollabSim：把 CSCW 协作能力维度引入多 Agent 评测",
      "summary": "新论文 CollabSim 提出可配置仿真框架：以 CSCW（Computer-Supported Cooperative Work）领域几十年沉淀的协作能力定义为基准，控制交互条件、动作级探查 Agent 的内部状态，从而系统化研究 LLM 多 Agent 系统的协作能力。在 4 个 LLM 上的实验显示框架能捕捉条件效应、分离模型表现并揭示任务依赖的 Agent 设计影响。",
      "insight": "MAS 评测过去多看任务结果，CollabSim 把「建立共识、维持任务理解、平衡个体与集体激励、修复对齐错位」拉成一等指标——这是多 Agent 走向真实团队的能力体检表。",
      "url": "http://arxiv.org/abs/2606.06399v1",
      "source": "arXiv",
      "tags": ["CollabSim", "CSCW", "MAS-eval"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260606-02",
      "section": "research",
      "title": "ToolChoiceConfusion：用因果最小工具过滤把工具 menu 收敛到当前所需",
      "summary": "新论文提出 Causal Minimal Tool Filtering（CMTF）：用轻量的 precondition-effect 契约描述每个工具，在每一步只暴露推进当前状态所需的最小工具前沿。在 102 任务 / 100 工具 / 4 个 LLM 后端 / 2448 次实验中，CMTF 在保持任务成功率的同时把单步可见工具数从 100 收敛到 1，token 用量比 all-tools 暴露减少约 90%。",
      "insight": "工具选择长期被建模为「相关性问题」，CMTF 指出本质是「因果充分性问题」——工具不是越相关越好，而是越「下一步真的需要」越好。这一思路对 harness 的工具暴露策略有直接借鉴价值。",
      "url": "http://arxiv.org/abs/2606.06284v1",
      "source": "arXiv",
      "tags": ["tool-filtering", "causal", "harness"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260606-03",
      "section": "research",
      "title": "TOKI：用 bitemporal 算子代数重新表述记忆冲突解决",
      "summary": "新论文 TOKI 把 LLM Agent 持久记忆视为高写入并发的存储系统，将「最后写入胜出 / 证据加权合并 / 等待确认 / 按规则策略」四种常见冲突解决启发式统一表达为 bitemporal 算子家族，每个算子带有 isolation 前置条件与 provenance 注解，把失败事实保留在审计行。论文给出四个 soundness 定理与一个 tightness 推论，并以审计行修复在 LoCoMo 上将准确率提升 0.86，移除 typed memory 层则下降 0.49。",
      "insight": "TOKI 把「记忆里两个版本打架怎么办」这件事从启发式提升到带语义的算子代数——任何严肃的 Agent 持久记忆系统都需要这种级别的写时一致性合约。",
      "url": "http://arxiv.org/abs/2606.06240v1",
      "source": "arXiv",
      "tags": ["TOKI", "bitemporal", "memory-conflict"],
      "label": "研究",
      "kind": "research",
      "importance": 6
    },
    {
      "id": "china-20260606-01",
      "section": "china",
      "title": "BCS 2026：2026 中国 AI 智能体领航者榜单揭晓，应用爆发元年定调",
      "summary": "在 2026 北京网络安全大会（BCS 2026）上，「2026 中国 AI 智能体领航者」榜单正式揭晓，覆盖通用大模型、行业智能体、安全智能体等多个赛道，被视为国内智能体应用爆发元年的官方注脚。",
      "insight": "国内将 2026 定位为「智能体应用爆发元年」，并把安全大会作为榜单发布场合，意味着安全与合规会与智能体能力一起成为评价标准——架构层若忽视身份/审计，将直接被排除在主流叙事之外。",
      "url": "https://m.leiphone.com/category/industrynews/VEQzCEDU0APjbVou.html",
      "source": "雷峰网",
      "tags": ["BCS-2026", "智能体榜单", "应用爆发"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260606-02",
      "section": "china",
      "title": "零一万物：六大判断定义企业多智能体元年",
      "summary": "零一万物对外发布《中国企业智能体 2026 六大预判》，并展示其在企业级多智能体平台上的进展。判断核心是：企业落地从「单点 Agent」过渡到「多 Agent 协作完成业务目标」，2026 是企业 Agent 上岗元年。",
      "insight": "国内头部厂商把企业落地的关键变量从「模型多大」切换到「能不能像团队一样协作」——这与全球多 Agent 协作研究（CollabSim 等）方向一致，意味着多 Agent 协作能力将成为下一阶段的主流竞争维度。",
      "url": "https://zhuanlan.zhihu.com/p/1991548096589632113",
      "source": "知乎 / 零一万物",
      "tags": ["零一万物", "多智能体", "企业落地"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260606-03",
      "section": "china",
      "title": "Frost & Sullivan 启动 2026 中国 AI Agent 最佳实践应用榜单征集",
      "summary": "弗若斯特沙利文（Frost & Sullivan）启动「2026 年中国 AI Agent（智能体）最佳实践应用榜单」征集，定位是从问答助手与单点自动化工具，走向面向真实业务目标的任务执行系统，对厂商提交的实际业务部署案例进行评估。",
      "insight": "当第三方咨询机构把评选维度转向「真实业务任务执行」，而不是 demo 与 PoC，国内 Agent 的评价体系开始与 ARR/业务影响挂钩——这会推动厂商更重视长任务可靠性与 Harness。",
      "url": "https://www.frostchina.com/zh/content/news/detail/6a1cf7f37e4223abedf36e67",
      "source": "Frost & Sullivan",
      "tags": ["Frost-Sullivan", "应用榜单", "任务执行"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
