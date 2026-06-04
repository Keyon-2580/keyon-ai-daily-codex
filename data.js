window.APP_DATA = {
  "generatedAt": "2026-06-04T01:30:00Z",
  "sourceDigestDate": "2026-06-04",
  "dateText": "2026年6月4日 星期四",
  "editorNote": [
    "今天的主线是<strong>Agent 工程重心从「能跑」转向「有记忆、可互操作、可治理」</strong>。记忆与上下文正从检索技巧升级为一等基础设施——<a href=\"https://github.com/joshuaswarren/remnic\" target=\"_blank\" rel=\"noopener noreferrer\">remnic</a> 把作用域记忆、来源溯源、检索质量、纠错、边界与评测整合成一套面向「用户感知型 Agent」的记忆层并经 MCP/HTTP 暴露；<a href=\"https://github.com/JKHeadley/instar\" target=\"_blank\" rel=\"noopener noreferrer\">instar</a> 则让 Claude Code Agent 具备调度、会话与持久记忆。",
    "互操作进入「参考实现 + 交接协议」阶段。<a href=\"https://github.com/reaatech/a2a-reference-ts\" target=\"_blank\" rel=\"noopener noreferrer\">a2a-reference-ts</a> 提供企业级 A2A 实现与 A2A↔MCP 双向桥、OAuth2/JWT、SSE 流式与 OpenTelemetry；<a href=\"https://github.com/reaatech/agent-handoff-protocol\" target=\"_blank\" rel=\"noopener noreferrer\">agent-handoff-protocol</a> 把跨 Agent 会话交接（触发、上下文打包、历史压缩、路由、接受确认）标准化，并同时跑在 MCP 与 A2A 之上。互操作的问题不再是「能不能连」，而是「怎么把任务、上下文与信任一起交出去」。",
    "治理正从外挂审计内化为运行时能力。<a href=\"https://github.com/Atomics-hub/agentk\" target=\"_blank\" rel=\"noopener noreferrer\">agentk</a> 用用户态安全内核给 MCP/工具边界加上类型化系统调用、污点策略、能力回执与可重放飞行日志；<a href=\"https://github.com/reaatech/agent-budget-controller\" target=\"_blank\" rel=\"noopener noreferrer\">agent-budget-controller</a> 把成本预算做成硬约束。评测侧，AI Alliance 的 <a href=\"https://github.com/The-AI-Alliance/cube-harness\" target=\"_blank\" rel=\"noopener noreferrer\">cube-harness</a> 推动数据策展与评测创建的开源标准——可信、可控、可验证正从「上线后补」前移到「运行时自带」。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 78 },
    { "label": "Agent 自进化", "value": 90 },
    { "label": "A2A / 互操作", "value": 88 },
    { "label": "Agentic 架构", "value": 89 },
    { "label": "Harness 工程", "value": 82 }
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
          "title": "微软 Agent Governance Toolkit：首个 OWASP Agentic Top 10 全覆盖治理框架",
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
    },
    {
      "date": "05.27",
      "fullDate": "2026-05-27",
      "theme": "自进化工程化 + Harness 安全实战",
      "take": "MOSS 和 MUSE-Autoskill 证明自进化需要可测试的 skill lifecycle，FinHarness 把 Agent 安全从事后审计变成内联防护，Harness Sensitivity 论文颠覆了「越强模型越不需要 harness」的直觉。",
      "items": [
        {
          "title": "MOSS：Agent 源码级自重写，自进化从理论走向工程",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2605.22794"
        },
        {
          "title": "FinHarness：金融 Agent 内联安全 harness 将攻击成功率降至 15%",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2605.27333v1"
        },
        {
          "title": "Harness Sensitivity 非单调：严格 harness 对 reasoning 模型反而最优",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2605.26731v1"
        }
      ]
    },
    {
      "date": "05.26",
      "fullDate": "2026-05-26",
      "theme": "Harness 产品化 + Protocol 分层共识",
      "take": "oh-my-pi 一周 7K+ stars 说明 coding agent 的 harness 层已具备产品吸引力；Anthropic Agentic Coding 报告、ForgeFlow 和 Protocol Ecosystem Map 共同印证「编排 > prompt」的转向。",
      "items": [
        {
          "title": "oh-my-pi：终端 AI 编码 Agent 一周 7.3K stars 登顶 GitHub 热榜",
          "source": "GitHub",
          "url": "https://github.com/can1357/oh-my-pi"
        },
        {
          "title": "Anthropic 发布 2026 Agentic Coding Trends Report",
          "source": "Anthropic",
          "url": "https://resources.anthropic.com/2026-agentic-coding-trends-report"
        },
        {
          "title": "AI Agent Protocol Ecosystem Map：MCP 管工具、A2A 管 Agent",
          "source": "Digital Applied",
          "url": "https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "hot-20260604-01",
      "section": "hot",
      "title": "remnic：为「用户感知型」Agent 打造的记忆与上下文层",
      "summary": "joshuaswarren/remnic（约 77 Stars，TypeScript）把 Agent 记忆做成完整的工程系统：作用域记忆（scoped memory）、来源溯源（provenance）、检索质量、纠错、边界控制与评测，并通过 MCP / HTTP 对外暴露。定位是为「能感知用户」的 Agent 提供可治理、可检视的记忆基础设施。",
      "insight": "当记忆带上溯源、边界与评测，它就从「向量库检索技巧」升级为一等基础设施——能记住什么、凭什么记住、记错了怎么纠正，都是可工程化的契约。",
      "url": "https://github.com/joshuaswarren/remnic",
      "source": "GitHub",
      "tags": ["remnic", "memory", "provenance"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260604-02",
      "section": "hot",
      "title": "a2a-reference-ts：企业级 A2A 协议实现，内置 A2A↔MCP 双向桥",
      "summary": "reaatech/a2a-reference-ts 是 Google Agent-to-Agent（A2A）协议的企业级 TypeScript 实现：提供 A2A↔MCP 双向桥、OAuth2/JWT 鉴权、Redis/Postgres 持久化、SSE 流式与 OpenTelemetry 可观测。把「Agent 间协议」做成可直接落生产的参考实现。",
      "insight": "互操作正从规范走向「可拿来即用」的参考实现——当 A2A 与 MCP 之间有了官方级的桥接，工具调用与 Agent 协作就能在同一栈里打通，而不必二选一。",
      "url": "https://github.com/reaatech/a2a-reference-ts",
      "source": "GitHub",
      "tags": ["A2A", "MCP-bridge", "OpenTelemetry"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260604-03",
      "section": "hot",
      "title": "agentk：AI Agent 的用户态安全内核，给工具边界加上「能力回执」",
      "summary": "Atomics-hub/agentk 提出面向 AI Agent 的用户态安全内核：在 MCP / 工具边界上引入类型化系统调用（typed syscalls）、污点感知策略（taint-aware policy）、能力回执（capability receipts）、签名证据与可重放的「飞行日志」（flight logs）。把 Agent 的每次工具调用都纳入可审计、可重放的安全边界。",
      "insight": "把操作系统的「内核 / 系统调用 / 审计日志」范式搬到 Agent 工具层，意味着安全不再靠提示词约束，而靠运行时强制——可重放飞行日志让事故可以被复盘而非只能事后猜测。",
      "url": "https://github.com/Atomics-hub/agentk",
      "source": "GitHub",
      "tags": ["agentk", "security-kernel", "capability-receipts"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260604-04",
      "section": "hot",
      "title": "cube-harness：AI Alliance 推动 Agent 评测与数据策展的开源标准",
      "summary": "The-AI-Alliance/cube-harness（约 53 Stars）由 AI Alliance 维护，目标是为前沿 AI Agent 的数据策展（data curation）与评测创建（evaluation creation）提供开源标准与工具。把「怎么造评测、怎么策展数据」从各家自定义推向社区共建的公共方法论。",
      "insight": "评测的下一步是标准化与去中心化——当造评测的工具本身开源、由中立联盟维护，跑分才有可比性，Harness 工程也才有了可共享的公共底座。",
      "url": "https://github.com/The-AI-Alliance/cube-harness",
      "source": "GitHub / AI Alliance",
      "tags": ["cube-harness", "evaluation", "data-curation"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260604-05",
      "section": "hot",
      "title": "instar：让 Claude Code Agent 拥有调度、会话与持久记忆",
      "summary": "JKHeadley/instar（约 65 Stars，TypeScript）为 Claude Code 提供「常驻」Agent 能力：定时调度、会话管理、持久记忆，并接入 Telegram。把一次性的编码 Agent 变成能长期在线、可被消息触发、跨会话记忆的常驻服务。",
      "insight": "当编码 Agent 从「随用随关」变成「常驻 + 可调度 + 有记忆」，它的形态就从工具升级为服务——长时自主运行的前提，是会话与记忆能跨调用稳定存在。",
      "url": "https://github.com/JKHeadley/instar",
      "source": "GitHub",
      "tags": ["instar", "persistent-agent", "scheduling"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260604-01",
      "section": "keyong",
      "title": "记忆与上下文正成为 Agent 的一等基础设施",
      "summary": "remnic 把作用域记忆、溯源、检索质量、纠错与评测整合并经 MCP/HTTP 暴露，instar 让编码 Agent 具备跨会话持久记忆，memql 用单一 DSL 统一时序记忆图谱与 Agent 工作流。三者共同说明：记忆不再是检索附属功能，而是需要单独设计、治理与评测的基础层。",
      "insight": "→ Keyong 关联：关联「Agent 自进化」+「Agentic 架构」。自进化的可工程化抓手是外部状态——记忆怎么存、怎么溯源、怎么纠错、怎么评测，比模型权重更可控、可回滚、可审计。",
      "url": "https://github.com/joshuaswarren/remnic",
      "source": "GitHub",
      "tags": ["memory-as-infra", "provenance", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260604-02",
      "section": "keyong",
      "title": "互操作进入「参考实现 + 会话交接」阶段",
      "summary": "a2a-reference-ts 提供企业级 A2A 实现与 A2A↔MCP 桥，agent-handoff-protocol 把跨 Agent 的会话交接（触发、上下文打包、历史压缩、路由、接受确认）标准化并同时跑在 MCP/A2A 上，docsclaw 则是原生支持 A2A 的轻量运行时。互操作的重心从「能不能连」转向「怎么把任务、上下文与信任一起交出去」。",
      "insight": "→ Keyong 关联：关联「A2A / 互操作」+「Agentic 架构」。交接（handoff）是多 Agent 系统的真正难点——架构需要在设计阶段就预留上下文打包与任务状态通道，而不是把交接当成事后拼接。",
      "url": "https://github.com/reaatech/agent-handoff-protocol",
      "source": "GitHub",
      "tags": ["interop", "handoff", "task-state"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260604-03",
      "section": "keyong",
      "title": "治理正从外挂审计内化为运行时能力",
      "summary": "agentk 用用户态安全内核给工具边界加上类型化系统调用、污点策略、能力回执与可重放飞行日志，agent-budget-controller 把成本预算做成软上限/硬停止/自动降级的运行时约束。安全与成本不再是上线后补的审计项，而成为运行时自带的强制能力。",
      "insight": "→ Keyong 关联：关联「Agentic 架构」+「Harness 工程」。把安全、成本、可重放做进运行时，等于给「长时自主」配上刹车与黑匣子——可控的自主，前提是约束在运行时强制执行而非靠自觉。",
      "url": "https://github.com/Atomics-hub/agentk",
      "source": "GitHub",
      "tags": ["runtime-governance", "cost-control", "replayable"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260604-04",
      "section": "keyong",
      "title": "评测与数据策展正在走向开源标准",
      "summary": "AI Alliance 的 cube-harness 把「怎么造评测、怎么策展数据」做成社区共建的开源标准，meta-agent / agent-eval-harness 则在真实任务上自动改进与对比 Agent 表现。评测体系正从各家自定义、不可比，转向有公共底座、可复用、可对齐真实场景。",
      "insight": "→ Keyong 关联：关联「Harness 工程」+「Agent 自进化」。当造评测的工具本身开源且中立，harness 就成了可共享的公共资产——自进化才有可比、可辩护的反馈信号，而非闭门跑分。",
      "url": "https://github.com/The-AI-Alliance/cube-harness",
      "source": "GitHub",
      "tags": ["eval-standard", "data-curation", "benchmark"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260604-05",
      "section": "keyong",
      "title": "Agent 开发从写代码转向「装方法论与技能脚手架」",
      "summary": "gsd-skill-creator 提出面向引导式软件开发（GSD）的 Agent 框架，instar 把编码 Agent 做成可调度的常驻服务。Agent 开发的重心正从一次性写代码，转向为 Agent 装上可复用、可版本化的方法论框架与运行脚手架。",
      "insight": "→ Keyong 关联：关联「Agentic 开发」+「Agent 自进化」。把开发方法论显式化为可插拔脚手架，等于给 Agent 一套可评测、可版本化的「工作流软件」——从提示工程迈向 Agent 软件工程。",
      "url": "https://github.com/Tibsfox/gsd-skill-creator",
      "source": "GitHub",
      "tags": ["methodology", "skill-scaffold", "agent-software"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "opensource-20260604-01",
      "section": "opensource",
      "title": "agent-handoff-protocol：跨 Agent 会话交接，跑在 MCP 与 A2A 之上",
      "summary": "reaatech/agent-handoff-protocol 把「会话从一个 Agent 转交给另一个 Agent」做成可复用协议：交接触发、上下文打包、历史压缩、路由与接受确认，并同时支持 MCP 与 A2A 两类通道。让多 Agent 协作中的「换手」有明确契约而非临时拼接。",
      "insight": "交接协议把多 Agent 系统里最易丢上下文的环节标准化——压缩历史 + 接受确认意味着换手既要省 token，也要双方对任务状态达成一致。",
      "url": "https://github.com/reaatech/agent-handoff-protocol",
      "source": "GitHub",
      "tags": ["handoff", "context-packaging", "multi-agent"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260604-02",
      "section": "opensource",
      "title": "agent-budget-controller：Agent 系统的实时成本预算执行器",
      "summary": "reaatech/agent-budget-controller 为 Agent 系统提供实时成本预算执行：支持按任务、按用户、按会话设定预算，提供软上限、硬停止，并在接近阈值时自动降级到更便宜的模型。把成本治理从事后对账变成运行中可强制的约束。",
      "insight": "当「自动降级到更便宜模型」成为预算到阈值时的默认动作，成本就从风险变成可编排的运行时参数——这是长时自主运行规模化的必要刹车。",
      "url": "https://github.com/reaatech/agent-budget-controller",
      "source": "GitHub",
      "tags": ["budget", "cost-control", "auto-downgrade"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260604-03",
      "section": "opensource",
      "title": "docsclaw：原生支持 A2A 协议的轻量可配置 agentic 运行时",
      "summary": "redhat-et/docsclaw 由 Red Hat Emerging Technologies 维护，是一个轻量、高度可配置的 agentic 运行时，原生支持 A2A 协议。定位是让 Agent 运行时既保持轻量可嵌入，又能开箱接入 Agent 间互操作。",
      "insight": "企业基础设施厂商（Red Hat）下场做原生支持 A2A 的轻量运行时，是互操作从「社区协议」走向「平台默认能力」的信号。",
      "url": "https://github.com/redhat-et/docsclaw",
      "source": "GitHub / Red Hat",
      "tags": ["docsclaw", "agentic-runtime", "A2A"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260604-04",
      "section": "opensource",
      "title": "memql：AI 原生的时序记忆图谱，用单一 DSL 统一概念/查询/工作流",
      "summary": "znasllc-io/memql（Go）提出 AI 原生的时序记忆图谱：用一套 DSL 把概念、查询、Agent 工作流与语音统一为可部署的基础原语。试图把「记忆 + 检索 + 编排」收敛进同一种声明式语言。",
      "insight": "用单一 DSL 统一记忆与工作流，是把 Agent 的「状态」和「行为」放进同一套可声明、可版本化语义里的尝试——记忆与编排不再是两套割裂系统。",
      "url": "https://github.com/znasllc-io/memql",
      "source": "GitHub",
      "tags": ["memql", "memory-graph", "DSL"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260604-01",
      "section": "voices",
      "title": "Cobus Greyling：可靠的 Agent 靠工程化的 harness，而非更长的 prompt",
      "summary": "AI 实践者 Cobus Greyling 发布 langchain-showcase：10 个循序渐进、面向生产的教程，主张可靠的 AI Agent 系统来自工程化的编排与 harness，而非不断加长提示词。把「如何把 Agent 做稳」拆成可跟做的工程步骤。",
      "insight": "从业者视角的共识在固化：决定 Agent 可靠性的是外部工程系统（编排、harness、评测），prompt 只是入口——这正是「编排 > prompt」转向的实践注脚。",
      "url": "https://github.com/cobusgreyling/langchain-showcase",
      "source": "Cobus Greyling / GitHub",
      "tags": ["harness", "reliability", "practitioner"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260604-02",
      "section": "voices",
      "title": "新华社《环球》：2026 是智能体爆发年，推理成本两年降超 95%",
      "summary": "新华社《环球》刊文《2026：智能体爆发年》提出，AI 模型推理成本在两年内下降超过 95%，使「每个业务流程部署一个 Agent」在经济上真正可行，但也提示能力、治理与落地之间仍存在落差。从宏观视角论证 Agent 大规模铺开的成本前提已经成立。",
      "insight": "推理成本断崖式下降把 Agent 从「试点」推向「按流程铺开」——当单位智能足够便宜，竞争焦点就从「用不用得起」转向「编排得好不好、治理得住不住」。",
      "url": "http://www.news.cn/globe/20260402/39ce4b6b703843a6aef41257f02976e0/c.html",
      "source": "新华社 / 环球",
      "tags": ["智能体爆发年", "推理成本", "宏观"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260604-01",
      "section": "industry",
      "title": "wavex-os：在本地运行一家「AI Agent 公司」的开源操作系统",
      "summary": "aimerdoux/wavex-os 提供一个开源「操作系统」，让用户在本机运行一家 AI Agent 公司：克隆运行后，本地向导引导你定义公司——KPI、组织结构、Agent 模板与连接器，并支持自带 Claude Max。把「多 Agent 协作」包装成可在本地编排的组织形态。",
      "insight": "用「公司 / 组织 / KPI」作为多 Agent 的组织隐喻，反映一种产品思路：与其让用户配 Agent 拓扑，不如让用户描述目标与角色，由系统映射成协作结构。",
      "url": "https://github.com/aimerdoux/wavex-os",
      "source": "GitHub",
      "tags": ["wavex-os", "multi-agent", "local-first"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260604-02",
      "section": "industry",
      "title": "Eve：面向团队工作的托管式 Agent 工作台",
      "summary": "Eve（Show HN，约 72 points）定位为「面向工作的托管式 OpenClaw」：把开源编码/操作 Agent 托管成可供团队直接使用的工作台，免去自建运行环境与运维。主打「拿来即用、面向工作场景」的托管体验。",
      "insight": "托管化是开源 Agent 走向团队生产的常见路径——当运行环境、权限与协作被产品方接管，用户关注点就回到任务本身而非搭运行时。",
      "url": "https://eve.new/login",
      "source": "Hacker News",
      "tags": ["Eve", "managed-agent", "team"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "industry-20260604-03",
      "section": "industry",
      "title": "nax：会「循环到完成」的 AI 编码 Agent 编排器",
      "summary": "nathapp-io/nax 是一个 AI 编码 Agent 编排器，主打「loops until done」：把任务交给它后自动循环执行直到完成，而非单轮产出。把「持续推进直到达标」做成编排器的默认行为。",
      "insight": "「loops until done」把可靠性押在外层循环而非单次推理——这与一次性（one-shot）委派形成对照，本质是用编排弥补单步不确定性。",
      "url": "https://github.com/nathapp-io/nax",
      "source": "GitHub",
      "tags": ["nax", "orchestrator", "coding-agent"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "research-20260604-01",
      "section": "research",
      "title": "meta-agent：无需人工标注，自动提升 Agent 的 benchmark 表现",
      "summary": "jeremiahnyamwezi27/meta-agent 提出一个 harness：在没有人工标注的前提下，自动优化 AI Agent 的表现以提升 benchmark 分数。把「让 Agent 变好」放进一个可自动运行的外层优化循环。",
      "insight": "无标注的自动优化是自进化的诱人方向，但也最需要警惕——若优化目标只盯 benchmark 分数，容易过拟合到评测而非真实能力，评测设计本身成了关键。",
      "url": "https://github.com/jeremiahnyamwezi27/meta-agent",
      "source": "GitHub",
      "tags": ["meta-agent", "label-free", "self-improve"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260604-02",
      "section": "research",
      "title": "agent-eval-harness：在真实 GitHub issue 上对比编码 Agent 的实时基准",
      "summary": "linny006/agent-eval-harness 是一个实时、开源的基准，用真实 GitHub issue 对比不同 AI 编码 Agent 的表现。把评测对象从静态题集换成持续更新的真实问题，让排行更贴近实际工程场景。",
      "insight": "用「真实、流动」的 issue 做基准，避免了静态题集被刷榜与污染的问题——但也要求基准本身持续维护，否则会随生态变化而失真。",
      "url": "https://github.com/linny006/agent-eval-harness",
      "source": "GitHub",
      "tags": ["live-benchmark", "coding-agent", "github-issue"],
      "label": "研究",
      "kind": "research",
      "importance": 6
    },
    {
      "id": "research-20260604-03",
      "section": "research",
      "title": "gsd-skill-creator：面向引导式软件开发的 Agent 框架",
      "summary": "Tibsfox/gsd-skill-creator（约 63 Stars）提出一套基于 Agent 的引导式软件开发（Guided Software Development, GSD）框架，把软件开发流程拆成可被 Agent 遵循的结构化步骤与技能。试图为「Agent 怎么按工程方法做软件」给出可复用的框架。",
      "insight": "把开发流程结构化为 Agent 可遵循的技能，是让 Agent 输出从「能跑的代码」走向「按工程方法产出」的关键——方法论显式化比模型更聪明更可控。",
      "url": "https://github.com/Tibsfox/gsd-skill-creator",
      "source": "GitHub",
      "tags": ["GSD", "skill-framework", "guided-development"],
      "label": "研究",
      "kind": "research",
      "importance": 6
    },
    {
      "id": "china-20260604-01",
      "section": "china",
      "title": "每日经济新闻：强化 Agent 能力成国产基础大模型 2026 重要发展方向",
      "summary": "《每日经济新闻》报道，IDC 中国研究总监卢言霞指出，强化 Agent 能力是国产基础大模型 2026 年的重要发展方向——模型竞争从单纯比参数、比对话，转向比能否驱动可靠的工具调用与多步任务执行。",
      "insight": "国内分析机构把「Agent 能力」明确列为基础模型的主攻方向，说明国产模型竞争主线已与全球同步——模型价值越来越由「能否当好 Agent 的大脑」来衡量。",
      "url": "https://www.nbd.com.cn/articles/2026-04-08/4330365.html",
      "source": "每日经济新闻 / IDC",
      "tags": ["国产大模型", "Agent能力", "IDC"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260604-02",
      "section": "china",
      "title": "零一万物发布《中国企业智能体 2026 六大预判》",
      "summary": "据 InfoQ 报道，零一万物对外发布《中国企业智能体 2026 六大预判》，并展示其在企业级多智能体方向的进展，提出 2026 年或成「企业 Agent 上岗元年」。从企业落地视角给出对多智能体走向的判断。",
      "insight": "厂商把「企业 Agent 上岗」作为年度判断，反映国内重心正从「能做 Agent」转向「Agent 进入企业真实业务流」——落地门槛与组织协同成为新焦点。",
      "url": "https://www.infoq.cn/news/8lkAlTOp8etL1u8LGmxq",
      "source": "InfoQ / 零一万物",
      "tags": ["企业智能体", "多智能体", "零一万物"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "china-20260604-03",
      "section": "china",
      "title": "知乎专栏：2026 是 Agent 之年——智能体如何重塑生产力与行业生态",
      "summary": "知乎专栏文章《2026：Agent 之年》梳理从 LLM 时代到 Agent 元年的演进，认为 2026 年智能体将从技术热点走向重塑生产力与行业生态的阶段，并讨论其在不同行业的落地路径。可作为国内开发者视角的趋势综述。",
      "insight": "国内长内容对「Agent 之年」的反复论述，说明趋势判断已成共识——接下来的分水岭不在「要不要做 Agent」，而在「谁能把 Agent 稳定接进真实工作流」。",
      "url": "https://zhuanlan.zhihu.com/p/2005591914448193177",
      "source": "知乎专栏",
      "tags": ["Agent之年", "趋势综述", "国内视角"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
