window.APP_DATA = {
  "generatedAt": "2026-06-05T02:47:00Z",
  "sourceDigestDate": "2026-06-05",
  "dateText": "2026年6月5日 星期五",
  "editorNote": [
    "今天的主线是<strong>Agent 可观测与评测从「事后调试」升级为「运行时一等能力」</strong>。<a href=\"https://github.com/rajudandigam/agent-inspect\" target=\"_blank\" rel=\"noopener noreferrer\">agent-inspect</a> 把 TypeScript Agent 的执行过程渲染为本地可读的执行树——工具调用、LLM 调用、失败与耗时都有结构化呈现；<a href=\"https://github.com/responsibleai/ASSERT\" target=\"_blank\" rel=\"noopener noreferrer\">ASSERT</a> 用需求驱动的方式为 Agent 生成行为测试用例并跑在 OTel-traced 目标上，让评测从「拿静态题集刷分」走向「按需求生成、可溯源、可回归」。",
    "Coding Agent 三足鼎立格局固化。<a href=\"https://opencode.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">OpenCode</a> 以 160K+ Stars、900+ 贡献者成为开源编码 Agent 的事实标准；OpenAI <a href=\"https://help.openai.com/en/articles/9624314-model-release-notes\" target=\"_blank\" rel=\"noopener noreferrer\">GPT-5.5 Instant 更新</a>（5月28日）让 Codex 的本地推理更快；Claude Code 则在 Agent 常驻化方向加速。竞争焦点从「谁更准」转向「谁的 harness/编排/可观测做得更好」。",
    "JVM Agent 开发正式进入一等赛道。JetBrains <a href=\"https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/\" target=\"_blank\" rel=\"noopener noreferrer\">Koog 1.0</a> 发布稳定核心，承诺一年无 breaking change，内建多平台可观测与协议互操作——Kotlin/Java 企业开发者终于有了不依赖 Python 生态的 Agent 框架选项。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 85 },
    { "label": "Agent 自进化", "value": 78 },
    { "label": "A2A / 互操作", "value": 82 },
    { "label": "Agentic 架构", "value": 90 },
    { "label": "Harness 工程", "value": 92 }
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
    }
  ],
  "items": [
    {
      "id": "hot-20260605-01",
      "section": "hot",
      "title": "OpenCode 160K+ Stars：开源编码 Agent 成为事实标准",
      "summary": "OpenCode（Go 编写）在不到一年内积累超过 160,000 Stars、900+ 贡献者，支持任意模型后端，已成为开源编码 Agent 领域的事实标准。社区围绕它形成了丰富的扩展生态——feature flag 治理（Unleash 集成）、模型中立路由、多 IDE 适配等方向均已落地。",
      "insight": "160K Stars 和 900+ 贡献者代表的不只是人气，而是一个可插拔的编码 Agent 生态已形成网络效应——任何竞品都需要兼容它的接口或证明自己在某个维度上有结构性优势。",
      "url": "https://opencode.ai/",
      "source": "OpenCode",
      "tags": ["OpenCode", "coding-agent", "open-source"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260605-02",
      "section": "hot",
      "title": "agent-inspect：TypeScript Agent 的本地执行树可观测",
      "summary": "rajudandigam/agent-inspect（34 Stars，TypeScript）为 Node.js AI Agent 提供本地执行树可视化：把手动步骤、工具调用、LLM 调用、结构化日志、失败、耗时与元数据渲染为可在终端检视的执行树。无需外部平台，本地即可读懂 Agent 一次运行发生了什么。",
      "insight": "当可观测的入门门槛降到「本地装一个 npm 包即可」，调试与理解 Agent 行为就从运维工程回归到开发者日常——可观测性越轻量，采纳率越高。",
      "url": "https://github.com/rajudandigam/agent-inspect",
      "source": "GitHub",
      "tags": ["agent-inspect", "observability", "execution-tree"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260605-03",
      "section": "hot",
      "title": "JetBrains Koog 1.0：JVM 原生 Agent 框架稳定发布",
      "summary": "JetBrains 发布 Koog 1.0 稳定版——面向 Kotlin/Java 的开源 Agent 框架，承诺一年内无 breaking change。核心能力包括：稳定核心 API、多平台可观测、协议互操作（MCP 支持），以及企业级类型安全。JVM 企业开发者终于有了不依赖 Python 生态的 Agent 框架一等选项。",
      "insight": "Koog 1.0 的意义不在于又多了一个框架，而在于 JVM 世界终于有了「稳定承诺」的 Agent 基座——对企业 Java/Kotlin 栈来说，框架的稳定性比功能丰富度更有说服力。",
      "url": "https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/",
      "source": "JetBrains",
      "tags": ["Koog", "JVM", "Kotlin"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260605-04",
      "section": "hot",
      "title": "ASSERT：需求驱动的 Agent 评测 Harness，Microsoft Open Trust Stack 组成",
      "summary": "responsibleai/ASSERT（87 Stars）是微软 Open Trust Stack 的一部分：为 AI Agent 和 LLM 应用提供需求驱动的评测 harness。生成行为特定的测试用例，跑在任何目标上（hosted 模型、callable wrappers、OTel-traced agents），并检视本地优先的 artifacts。把评测从「给题跑分」升级为「按需求生成、可溯源、可回归」。",
      "insight": "评测 harness 与可观测基础设施（OTel）的融合，说明评测不再是独立环节而是运行时的一等伴侣——当测试用例能从需求自动生成并跑在带 trace 的目标上，CI/CD 就有了 Agent 级别的质量门禁。",
      "url": "https://github.com/responsibleai/ASSERT",
      "source": "GitHub / Microsoft",
      "tags": ["ASSERT", "evaluation-harness", "OTel"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260605-05",
      "section": "hot",
      "title": "GPT-5.5 Instant 更新：Codex 本地推理加速",
      "summary": "OpenAI 于 5 月 28 日发布 GPT-5.5 Instant 更新，Codex 默认本地模型升级至 GPT-5.5，推理速度提升且此前的 GPT-5.2/5.3 已 sunset。这意味着 Codex 用户自动获得更快的代码生成与理解能力，同时 model routing 更加简化。",
      "insight": "GPT-5.5 Instant 把 Codex 的模型选择从「多版本并存」简化为「单一最优」——减少模型碎片化对工具链的冲击，也让 harness 和评测有了更稳定的对比基线。",
      "url": "https://help.openai.com/en/articles/9624314-model-release-notes",
      "source": "OpenAI",
      "tags": ["GPT-5.5", "Codex", "model-update"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260605-01",
      "section": "keyong",
      "title": "可观测性正从运维工具下沉为 Agent 开发的一等原语",
      "summary": "agent-inspect 把执行树渲染为终端可读结构，ASSERT 在 OTel-traced Agent 上跑需求驱动的测试，JetBrains Koog 1.0 内建多平台可观测。三者表明：可观测性不再是 Agent 上线后补的运维层，而是开发阶段就必须具备的内建能力。",
      "insight": "→ Keyong 关联：关联「Harness 工程」+「Agentic 架构」。当执行树、trace 与评测可以在开发时本地运行，harness 的门槛就从「搭平台」降到「装包即用」——这是 harness 从工具走向习惯的关键拐点。",
      "url": "https://github.com/rajudandigam/agent-inspect",
      "source": "GitHub",
      "tags": ["observability", "dev-time", "harness"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260605-02",
      "section": "keyong",
      "title": "Coding Agent 竞争焦点从模型转向工程系统",
      "summary": "OpenCode 160K+ Stars 证明了模型中立 + 可插拔生态的路线；GPT-5.5 Instant 简化模型选择让工具链更稳定；Claude Code 向常驻 Agent 演进。三个方向的共同信号是：决定编码 Agent 竞争力的不再是模型本身，而是 harness、编排、可观测与开发者体验。",
      "insight": "→ Keyong 关联：关联「Agentic 开发」+「Harness 工程」。编码 Agent 生态正在重演 IDE 竞争的模式——当底层模型趋于同质化，胜出靠的是外围工程系统：调试、测试、部署流水线与社区生态的质量。",
      "url": "https://opencode.ai/",
      "source": "OpenCode / OpenAI",
      "tags": ["coding-agent", "ecosystem", "engineering"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260605-03",
      "section": "keyong",
      "title": "评测从「跑分」走向「需求驱动 + 可溯源 + 可回归」",
      "summary": "ASSERT 用需求驱动方式自动生成行为测试用例；holon-bench 评测编码 Agent 在修复循环、回归安全与 scope 控制上的表现；hermes-agent-metaharness 用外循环自动搜索最优评测配置。评测正在从「静态题集 + 人工标注」走向「自动生成 + 可对齐需求 + 可持续回归」。",
      "insight": "→ Keyong 关联：关联「Harness 工程」+「Agent 自进化」。需求驱动的评测意味着评测本身可以跟着需求一起演进——这恰好是自进化所需的「与环境同步变化的反馈信号」。",
      "url": "https://github.com/responsibleai/ASSERT",
      "source": "GitHub / Microsoft",
      "tags": ["eval-as-code", "requirement-driven", "regression"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260605-04",
      "section": "keyong",
      "title": "A2A 互操作从规范走向真实任务市场",
      "summary": "UltravioletaDAO/execution-market 把 A2A Protocol 用于双向 AI↔Human 任务市场（Gasless x402 支付、链上托管、9 条链、24 MCP 工具）；MarketMind 把 A2A + MCP + LangGraph + Kafka 拼成金融多 Agent 全栈。互操作已不止于「Agent 之间能通信」，而在于支撑起有经济激励的真实任务流。",
      "insight": "→ Keyong 关联：关联「A2A / 互操作」+「Agentic 架构」。当互操作协议接入经济层（支付、托管、激励），Agent 间协作的驱动力就从技术示范升级为市场机制——架构需要为激励、结算与争议仲裁预留通道。",
      "url": "https://github.com/UltravioletaDAO/execution-market",
      "source": "GitHub",
      "tags": ["A2A-market", "task-economy", "multi-chain"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260605-05",
      "section": "keyong",
      "title": "Agent 框架多语言化：从 Python 独大到 JVM/Go/Rust 并行",
      "summary": "Koog 1.0（JVM/Kotlin）、OpenCode（Go）、motebit（TypeScript）各自代表不同语言生态进入 Agent 开发。框架多语言化意味着 Agent 不再是 Python 的专属领地——企业可以用自己最擅长的栈构建 Agent，基础设施选型不再被语言绑架。",
      "insight": "→ Keyong 关联：关联「Agentic 开发」+「Agentic 架构」。语言多样化的前提是协议标准化（MCP/A2A）——当互操作由协议保证，框架就能按最适合的语言特性发展，而非被迫统一到一种语言。",
      "url": "https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/",
      "source": "JetBrains / GitHub",
      "tags": ["polyglot", "framework", "protocol-first"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "opensource-20260605-01",
      "section": "opensource",
      "title": "motebit：面向主权 AI Agent 的开放协议，Ed25519 身份 + 签名回执",
      "summary": "motebit/motebit（4 Stars，TypeScript）提出面向主权 AI Agent 的开放协议：每个 Agent 拥有持久的 Ed25519 身份、签名执行回执（execution receipts）、语义记忆、策略治理，以及双边 Agent 市场。核心主张是「智能可插拔，身份才是资产」。",
      "insight": "把身份（cryptographic identity）作为 Agent 的一等资产，而非模型或能力，是对 Agent 经济的一种深层设计选择——有了不可伪造的身份与签名回执，Agent 的行为才能被第三方独立验证与问责。",
      "url": "https://github.com/motebit/motebit",
      "source": "GitHub",
      "tags": ["motebit", "sovereign-agent", "Ed25519"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260605-02",
      "section": "opensource",
      "title": "holon-bench：评测 AI 编码 Agent 的 OSS 维护者工作流",
      "summary": "JohnYCChiang/holon-bench（4 Stars，Python）是一个开源基准 harness，评测 AI 编码 Agent 在 OSS 维护者工作流上的表现：修复循环（repair loops）、回归安全（regression safety）、scope 控制与多语言补丁。让评测贴近「真实维护者每天面对的问题」而非合成题。",
      "insight": "把评测对象从「能不能写代码」扩展到「能不能像维护者一样工作」——修复循环、回归安全与 scope 控制，恰恰是编码 Agent 在生产中最容易翻车的环节。",
      "url": "https://github.com/JohnYCChiang/holon-bench",
      "source": "GitHub",
      "tags": ["holon-bench", "coding-agent-eval", "OSS-workflow"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260605-03",
      "section": "opensource",
      "title": "execution-market：AI↔Human 双向任务市场，A2A + MCP + 链上托管",
      "summary": "UltravioletaDAO/execution-market（4 Stars，Python）是一个双向 AI↔Human 任务市场：AI 可委托真实世界任务给人类（A2H），人类也可委托任务给 AI（H2A）。技术栈包含 Gasless x402 支付、9 条链上托管、ERC-8004 身份、A2A Protocol 与 24 个 MCP 工具，已在 Base 上线。",
      "insight": "当 A2A 接上链上支付与托管，Agent 间协作就有了经济闭环——这不只是技术互操作，而是用市场机制让 Agent 自主「雇佣」其他 Agent 或人类来完成子任务。",
      "url": "https://github.com/UltravioletaDAO/execution-market",
      "source": "GitHub",
      "tags": ["execution-market", "A2A", "task-marketplace"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260605-04",
      "section": "opensource",
      "title": "AgentGuard：为 AI Agent 提供注入攻击检测与安全防护",
      "summary": "astecka-m/AgentGuard（Python）为 AI Agent 提供安全防护层：检测并阻断 prompt 注入、命令注入、Unicode 绕过与社会工程攻击，并支持自定义安全策略。把 Agent 安全从「靠系统提示」变成「有独立安全组件把关」。",
      "insight": "独立的安全检测组件作为 Agent 的前置过滤器，是「安全解耦」的工程实践——当安全逻辑不再嵌在 prompt 里，它就能独立升级、独立测试、独立审计。",
      "url": "https://github.com/astecka-m/AgentGuard",
      "source": "GitHub",
      "tags": ["AgentGuard", "injection-detection", "security"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260605-01",
      "section": "voices",
      "title": "JetBrains：Agent 框架需要「稳定承诺」而非无休止的 breaking change",
      "summary": "JetBrains 在 Koog 1.0 发布文中明确表态：Agent 框架的首要任务是给企业开发者「一年无 breaking change」的稳定承诺，而非堆功能。此立场是对当前 Python 生态中 Agent 框架频繁大改 API、生态碎片化现状的直接回应。",
      "insight": "稳定性作为卖点而非功能丰富度，反映企业采纳 Agent 技术的首要顾虑——如果框架每月一变，上层的工具链、harness 与集成都要反复重写，真正的生产化无从谈起。",
      "url": "https://blog.jetbrains.com/ai/2026/05/koog-1-0-is-out-stable-core-better-interop-and-multiplatform-observability/",
      "source": "JetBrains",
      "tags": ["stability", "enterprise", "framework"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260605-02",
      "section": "voices",
      "title": "Sarah Bird (Microsoft)：AI 正从生成走向行动，评测 harness 是信任基座",
      "summary": "Microsoft Responsible AI 负责人 Sarah Bird 在 ASSERT 发布时表态：AI 正从生成（generation）走向行动（action），Agent 在真实世界执行任务时需要比聊天更严格的评测与信任机制。ASSERT 与 Microsoft Open Trust Stack 是这一理念的工程落地。",
      "insight": "「从生成到行动」的表述精准定义了评测标准的断裂点——聊天可以容错，行动不行。当 Agent 真正操作外部系统，评测 harness 就是唯一能提供信任保障的工程组件。",
      "url": "https://www.linkedin.com/posts/slbird_github-responsibleaiassert-requirement-driven-activity-7467644777744900096-XaRD",
      "source": "Sarah Bird / Microsoft",
      "tags": ["trust", "action", "responsible-AI"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260605-03",
      "section": "voices",
      "title": "Google Cloud Agent Trends 2026 报告：五大趋势揭示 agentic AI 企业路径",
      "summary": "Google Cloud 发布 AI Agent Trends 2026 报告，揭示五大企业采纳趋势。报告强调：agentic AI 已不再实验性，企业部署重心从 PoC 转向生产化，关键挑战从「能不能做」变成「治理、可观测与成本控制」。",
      "insight": "当 Google Cloud 这类平台方把五大趋势用报告固化，说明 agentic AI 在企业侧已过了布道期——接下来的竞争在于谁能提供最完整的生产化基础设施。",
      "url": "https://cloud.google.com/resources/content/ai-agent-trends-2026",
      "source": "Google Cloud",
      "tags": ["enterprise-trends", "production", "governance"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260605-01",
      "section": "industry",
      "title": "OpenAI Codex 默认模型升至 GPT-5.5，旧版 sunset",
      "summary": "OpenAI 将 Codex 默认模型升至 GPT-5.5 Instant（5月28日更新），同时 sunset GPT-5.2 和 GPT-5.3-Codex。用户无需手动切换即获得更快推理。模型选择简化为单一最优路径，减少版本碎片对开发工具链的冲击。",
      "insight": "模型版本收敛（从多版本并存到单一 Instant）对工具生态是利好——CI/CD、评测基线与提示模板都不再需要适配多个模型版本。",
      "url": "https://help.openai.com/en/articles/9624314-model-release-notes",
      "source": "OpenAI",
      "tags": ["Codex", "GPT-5.5", "sunset"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260605-02",
      "section": "industry",
      "title": "MarketMind：A2A + MCP + LangGraph + Kafka 全栈金融多 Agent 系统",
      "summary": "Garvil007/MarketMind 搭建了一套金融多 Agent 智能系统：3 个 FastMCP Server、4 个专业 Agent、LangGraph 编排、A2A 协议互操作、Kafka 流式与完整可观测栈。展示了 A2A/MCP 在垂直领域全栈集成的可行性。",
      "insight": "金融场景天然要求审计与合规——当 A2A + MCP + 可观测被拼成全栈，Agent 在这类高合规行业的落地路径就更清晰：每个调用可追踪、每个 Agent 可问责。",
      "url": "https://github.com/Garvil007/MarketMind",
      "source": "GitHub",
      "tags": ["MarketMind", "finance", "full-stack"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260605-03",
      "section": "industry",
      "title": "MLflow 26K Stars：开源 AI 工程平台全面支持 Agent 生命周期",
      "summary": "mlflow/mlflow（26,302 Stars）定位为 AI 工程平台，全面支持 Agent、LLM 与 ML 模型的调试、评测、监控与优化。其持续活跃的更新说明：MLOps 工具正在扩展到 AgentOps 领域，统一管理从实验到生产的全生命周期。",
      "insight": "MLflow 从 ML 实验管理扩展到 Agent 生命周期，代表了 MLOps → AgentOps 的自然演进——用户不需要新学一套工具，而是在熟悉的框架里获得 Agent 能力。",
      "url": "https://github.com/mlflow/mlflow",
      "source": "GitHub",
      "tags": ["MLflow", "AgentOps", "lifecycle"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260605-01",
      "section": "research",
      "title": "hermes-agent-metaharness：用外循环自动搜索最优评测配置",
      "summary": "Panoramar8046/hermes-agent-metaharness（Python）是一个「meta-harness」：自动搜索、评估与变异 Agent benchmarking 代码，优化 LLM 系统质量。把「怎么造出好评测」本身也做成可自动化的外循环问题。",
      "insight": "评测的 meta 化——用算法搜索最优评测配置——是把 Harness 工程推向更高抽象层的尝试。但也需警惕：meta-harness 的优化目标本身如何对齐真实需求，否则可能 overfit 到评测的评测。",
      "url": "https://github.com/Panoramar8046/hermes-agent-metaharness",
      "source": "GitHub",
      "tags": ["meta-harness", "auto-eval", "benchmark-optimization"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260605-02",
      "section": "research",
      "title": "Agent 互操作协议 Survey：MCP / A2A / ACP / ANP 四协议对比",
      "summary": "arXiv 论文 (2505.02279) 系统对比四种新兴 Agent 通信协议：MCP（工具层）、A2A（Agent 协作层）、ACP（Agent Communication Protocol）、ANP（Agent Network Protocol）。论文梳理各协议的定位、重叠与互补关系，帮助开发者理解协议生态的分层。",
      "insight": "协议生态正在经历「分层共识」阶段——MCP 管工具、A2A 管 Agent、ACP/ANP 管网络层，清晰的分层比「一个协议统治一切」更可能在现实中落地。",
      "url": "https://arxiv.org/html/2505.02279v1",
      "source": "arXiv",
      "tags": ["protocol-survey", "MCP", "A2A"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260605-03",
      "section": "research",
      "title": "Braintrust：2026 Agent 可观测完全指南",
      "summary": "Braintrust 发布 2026 Agent 可观测完全指南，覆盖工具级 tracing、Agent 级 observability、评测集成与生产监控。核心观点是：Agent 可观测需要超越传统日志，向「执行树 + 评测 + 实时监控」三位一体演进。",
      "insight": "可观测从「看日志」到「执行树 + eval + 实时监控」的三层模型，为 harness 工程提供了参考架构——开发看执行树、CI 跑评测、生产看监控，各层有明确分工。",
      "url": "https://www.braintrust.dev/articles/agent-observability-complete-guide-2026",
      "source": "Braintrust",
      "tags": ["observability", "tracing", "production"],
      "label": "研究",
      "kind": "research",
      "importance": 6
    },
    {
      "id": "china-20260605-01",
      "section": "china",
      "title": "CCTV：算力需求攀升、智能体价值兑现，2026 AI 产业全面提速",
      "summary": "央视新闻报道，2026 年 AI 产业全面提速的两大驱动力是算力需求攀升与智能体价值兑现。大模型发布迎来新高峰，智算中心建设加速，智能体从技术概念进入价值兑现期。国内 AI 产业叙事从「模型竞赛」转向「智能体落地 + 算力基建」双轮驱动。",
      "insight": "当央视用「价值兑现」而非「技术突破」定义智能体的 2026 故事，说明国内叙事重心已从「能不能做」转向「赚不赚到钱」——这对架构与 harness 提出了更严格的可靠性要求。",
      "url": "https://news.cctv.com/2026/03/01/ARTIOjYPeka8KWcSaXp3oHcM260301.shtml",
      "source": "央视新闻",
      "tags": ["算力", "智能体", "产业提速"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260605-02",
      "section": "china",
      "title": "周鸿祎 2026 二十大 AI 预言：迈向百亿智能体时代",
      "summary": "360 周鸿祎发布 2026 年 20 个 AI 预判，核心主张包括：行业从「拼参数」进入「拼智能」深水区，企业不再频繁训练大模型而是通过推理应用直接落地，2026 年将迈向百亿智能体时代。从国内头部安全/AI 厂商视角给出对智能体规模化的判断。",
      "insight": "「百亿智能体」的规模叙事意味着单个 Agent 的治理、身份与互操作成为基础设施级问题——百亿级体量下，没有身份和协议标准的 Agent 将无法参与任何有意义的协作。",
      "url": "https://digital.gmw.cn/2026-01/09/content_38528325.htm",
      "source": "光明网 / 360",
      "tags": ["百亿智能体", "周鸿祎", "预判"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "china-20260605-03",
      "section": "china",
      "title": "知乎：面向 2026 的 AI、大模型、智能体、LLMOps 系列教程",
      "summary": "知乎长文系列《AI新知》发布面向 2026 年的完整教程体系（20 章），沿「认知 → 大脑 → 手脚 → 骨架 → 社会」逻辑组织，覆盖大模型基础、Agent 能力构建、工具使用、架构设计与多 Agent 协作。可作为国内中文 Agent 开发者的体系化学习参考。",
      "insight": "体系化中文教程的出现说明 Agent 知识已从碎片博客阶段走向可教学的成熟度——当知识可以结构化传播，社区的工程能力提升才有规模效应。",
      "url": "https://zhuanlan.zhihu.com/p/1993642974563812198",
      "source": "知乎",
      "tags": ["教程", "LLMOps", "体系化"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
