window.APP_DATA = {
  "generatedAt": "2026-06-03T01:10:00Z",
  "sourceDigestDate": "2026-06-03",
  "dateText": "2026年6月3日 星期三",
  "editorNote": [
    "今天的主线是<strong>互操作从「能通信」走向「可验证执行」+ Harness/评测的开源工程化</strong>。多个新出现的开源项目共同指向同一方向：Agent 之间不只是交换消息，而是交换可被独立验证的行为凭证——<a href=\"https://github.com/creatornader/atrib\" target=\"_blank\" rel=\"noopener noreferrer\">atrib</a> 用 Ed25519 签名与 Merkle 日志让每一步动作可校验，<a href=\"https://github.com/dhyansraj/mcp-mesh\" target=\"_blank\" rel=\"noopener noreferrer\">mcp-mesh</a> 把 MCP、A2A 与 REST 统一进 K8s 原生的分布式 Agent 运行时。",
    "评测与 Harness 正在快速开源化、工程化。<a href=\"https://github.com/responsibleai/ASSERT\" target=\"_blank\" rel=\"noopener noreferrer\">ASSERT</a> 把行为需求直接编译成可执行测试用例并产出本地优先的可检视产物，<a href=\"https://github.com/JohnYCChiang/holon-bench\" target=\"_blank\" rel=\"noopener noreferrer\">holon-bench</a> 在真实开源维护任务上测修复回路、回归安全与范围控制——评测从「跑分」转向「可辩护的上线门禁」。",
    "在制度层，<a href=\"https://openai.com/index/agentic-ai-foundation/\" target=\"_blank\" rel=\"noopener noreferrer\">Agentic AI Foundation</a>（隶属 Linux Foundation，Block / Anthropic / OpenAI 共建）已将 MCP、AGENTS.md、goose 等关键标准与项目纳入中立治理。互操作的竞争焦点正从「谁的协议赢」转向「谁能进入中立治理」，生态护城河随之从协议本身迁移到实现质量与运行时。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 80 },
    { "label": "Agent 自进化", "value": 86 },
    { "label": "A2A / 互操作", "value": 92 },
    { "label": "Agentic 架构", "value": 84 },
    { "label": "Harness 工程", "value": 90 }
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
    },
    {
      "date": "05.25",
      "fullDate": "2026-05-25",
      "theme": "A2A 落地 + Agent 工程系统战",
      "take": "A2A 协议突破 150 家组织进入生产，模型层 GPT-5.5 和平台层 Google/LangChain 同时补齐 harness 与治理，论文把互操作、评测和自进化闭环推到前台。",
      "items": [
        {
          "title": "A2A 协议突破 150 家组织，在 Google/Microsoft/AWS 落地生产",
          "source": "Linux Foundation",
          "url": "https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year"
        },
        {
          "title": "GPT-5.5 把 agentic coding、computer use 和跨工具任务放到同一能力框架",
          "source": "OpenAI",
          "url": "https://openai.com/index/introducing-gpt-5-5/"
        },
        {
          "title": "Karpathy 加入 Anthropic，Anthropic $30B 融资估值 $900B",
          "source": "AI News",
          "url": "https://jls42.org/en/news/ia-actualites-19-may-2026"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "hot-20260603-01",
      "section": "hot",
      "title": "Agentic AI Foundation：把 MCP、AGENTS.md、goose 交给 Linux Foundation 中立治理",
      "summary": "由 Block、Anthropic、OpenAI 联合发起、隶属 Linux Foundation 的 Agentic AI Foundation，已将 Model Context Protocol（MCP）、AGENTS.md 配置约定与 goose 等关键 Agent 项目纳入中立基金会治理。目标是让工具调用、Agent 配置与运行时不再绑定单一厂商，形成跨厂商共建的互操作基础。",
      "insight": "互操作的竞争焦点从「谁的协议赢」转向「谁能进入中立治理」——协议一旦中立化，生态护城河就从协议本身迁移到实现质量与运行时。",
      "url": "https://openai.com/index/agentic-ai-foundation/",
      "source": "OpenAI / Linux Foundation",
      "tags": ["Agentic-AI-Foundation", "MCP", "AGENTS.md"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260603-02",
      "section": "hot",
      "title": "mcp-mesh：K8s 原生的分布式 Agent 框架，同时打通 MCP + A2A + REST",
      "summary": "dhyansraj/mcp-mesh（约 34 Stars）提供企业级分布式 AI Agent 框架：K8s 原生、动态依赖注入、自动故障转移，跨 Python/Java/TypeScript，并同时支持 MCP、A2A 与 REST 三类接口，把「开发→部署→可观测」做成一体化运行时。",
      "insight": "当一个框架同时承载 MCP（工具）+ A2A（Agent 间）+ REST（传统服务），互操作就从「协议选择」变成「运行时编排」——这正是 Agentic 架构的收敛方向。",
      "url": "https://github.com/dhyansraj/mcp-mesh",
      "source": "GitHub",
      "tags": ["mcp-mesh", "A2A", "K8s"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260603-03",
      "section": "hot",
      "title": "ASSERT：需求驱动的 Agent 评测 harness，把行为要求变成可执行测试",
      "summary": "responsibleai/ASSERT（约 21 Stars）是面向 AI Agent 与 LLM 应用的需求驱动评测 harness：从行为需求自动生成针对性测试用例，可对任意目标（托管模型、可调用封装、带 OpenTelemetry 追踪的 Agent）运行，并产出本地优先、可检视的产物。",
      "insight": "「需求→测试用例→可检视产物」把评测从主观抽查变成可回归的契约——这是 Harness 工程从手写 benchmark 走向规范驱动的关键一步。",
      "url": "https://github.com/responsibleai/ASSERT",
      "source": "GitHub",
      "tags": ["ASSERT", "eval-harness", "OpenTelemetry"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260603-04",
      "section": "hot",
      "title": "atrib：用 Ed25519 签名 + Merkle 日志，让每一次 Agent 行为可独立验证",
      "summary": "creatornader/atrib 把 Agent 的每一步行为变成「可验证的上下文」：每个动作经 Ed25519 签名并写入 Merkle 日志，任何人都能独立校验行为链，前一步的签名成为下一步的输入上下文。",
      "insight": "当 Agent 行为可被密码学独立验证，A2A 协作的信任就不再依赖「相信对方模型」，而是「验证对方的执行回执」——可验证执行是互操作走向生产的前置条件。",
      "url": "https://github.com/creatornader/atrib",
      "source": "GitHub",
      "tags": ["atrib", "Ed25519", "verifiable-execution"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260603-05",
      "section": "hot",
      "title": "memoria-nox：为 LLM Agent 设计的「痛感加权」混合记忆",
      "summary": "totobusnello/memoria-nox 提供面向 LLM Agent 的混合记忆系统：结合 FTS5 全文检索、sqlite-vec 向量、知识图谱与 RRF 融合排序，并以「痛感加权」（pain-weighted）方式强化对失败/关键经验的留存。MIT 开源，附带公开基准。",
      "insight": "把「哪些经验值得记住」量化为可加权信号，是自进化的工程抓手——记忆系统不该平均对待所有轨迹，而要让代价更高的经验占据更大权重。",
      "url": "https://github.com/totobusnello/memoria-nox",
      "source": "GitHub",
      "tags": ["memoria-nox", "memory", "knowledge-graph"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "keyong-20260603-01",
      "section": "keyong",
      "title": "互操作的下一站：从「能通信」到「可验证的执行回执」",
      "summary": "今日多个项目共同指向同一方向——mcp-mesh 统一 MCP/A2A/REST、atrib 用签名+Merkle 日志、motebit 用签名执行回执与策略治理。Agent 间不仅要能交换消息，还要能交换可独立验证的行为凭证，互操作的工程重心正从消息格式转向身份、签名与执行可审计。",
      "insight": "→ Keyong 关联：关联「A2A / 互操作」+「Agentic 架构」。把「信任」从模型层下沉到协议层，意味着架构要在设计阶段预留身份、签名与回执通道，而不是事后补审计。",
      "url": "https://github.com/dhyansraj/mcp-mesh",
      "source": "GitHub",
      "tags": ["verifiable-interop", "trust-layer", "execution-receipt"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260603-02",
      "section": "keyong",
      "title": "评测正在变成「可辩护的上线门禁」",
      "summary": "ASSERT 用需求生成测试用例、holon-bench 在真实开源维护任务上测修复回路/回归安全/范围控制、hermes-agent-metaharness 用外层循环搜索并变异 benchmark 本身。三者把评测从一次性跑分推向「持续、可回归、可辩护」的工程系统。",
      "insight": "→ Keyong 关联：关联「Harness 工程」+「Agent 自进化」。当 benchmark 自身可被搜索与变异，评测体系也成了会进化的对象——harness 不是静态尺子，而是与被测对象共同演化的系统。",
      "url": "https://github.com/JohnYCChiang/holon-bench",
      "source": "GitHub",
      "tags": ["eval-as-gate", "regression-safety", "meta-harness"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260603-03",
      "section": "keyong",
      "title": "自进化的真正载体是记忆与技能，而非模型本身",
      "summary": "memoria-nox 用痛感加权的混合记忆决定「哪些经验值得留存」，I.S.A.A.C 维护可累积的技能库并在沙箱中执行，skills-autoresearch-flue 自动研究、评估并改进技能。共同点是把「会变好」沉淀到可工程化的外部状态里。",
      "insight": "→ Keyong 关联：关联「Agent 自进化」+「Agentic 架构」。自进化闭环的工程抓手是「记忆怎么存、技能怎么沉淀与复用」——这两个外部状态比模型权重更可控、可回滚、可审计。",
      "url": "https://github.com/totobusnello/memoria-nox",
      "source": "GitHub",
      "tags": ["memory", "skill-library", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260603-04",
      "section": "keyong",
      "title": "可观测是长时自主运行的前提，而非运维附属品",
      "summary": "agentlens 为 Agent 会话提供本地可观测：token 用量、成本估算、摘要与效率洞察，并适配 GitHub Copilot、Claude Code、Codex。当 Agent 长时自主运行，缺乏会话级可观测就等于盲飞。",
      "insight": "→ Keyong 关联：关联「Agentic 架构」+「Harness 工程」。可观测是让「长时自主」可被信任的基础设施——看不见的自主就是不可控的自主。",
      "url": "https://github.com/RogerReed/agentlens",
      "source": "GitHub",
      "tags": ["observability", "session-trace", "cost-aware"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260603-05",
      "section": "keyong",
      "title": "Agent 开发从「写 prompt」转向「装方法论与技能模块」",
      "summary": "groundwork 把开源贡献方法论做成 Agent 的方法论插件，I.S.A.A.C 用神经符号+程序综合维护可累积技能库。Agent 开发正从调提示词，转向为 Agent 装上可复用、可版本化的方法论与技能模块。",
      "insight": "→ Keyong 关联：关联「Agentic 开发」+「Agent 自进化」。把方法论显式化为可插拔模块，等于给 Agent 一套可评测、可版本化的「工作流软件」——这是从提示工程到 Agent 软件工程的转变。",
      "url": "https://github.com/tesserine/groundwork",
      "source": "GitHub",
      "tags": ["methodology-plugin", "agent-software", "workflow"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "opensource-20260603-01",
      "section": "opensource",
      "title": "motebit：主权 Agent 开放协议，持久身份 + 签名执行回执",
      "summary": "motebit/motebit 提出面向「主权 AI Agent」的开放协议：持久化 Ed25519 身份、签名执行回执、语义记忆、策略治理与双边 Agent 市场。其设计理念是「智能可插拔、身份才是资产」——把 Agent 的可信身份与行为记录作为核心。",
      "insight": "当身份和执行回执比模型本身更稳定，Agent 市场的可组合性就建立在「可验证身份」而非「可替换智能」上。",
      "url": "https://github.com/motebit/motebit",
      "source": "GitHub",
      "tags": ["motebit", "agent-identity", "policy-governance"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260603-02",
      "section": "opensource",
      "title": "agentlens：本地优先的 Agent 会话可观测，适配 Copilot/Claude Code/Codex",
      "summary": "RogerReed/agentlens 为 AI Agent 会话提供本地可观测：token 用量、成本估算、会话摘要与效率洞察。提供 VS Code 扩展与独立 Docker 镜像，覆盖 GitHub Copilot、Claude Code 与 Codex 等主流编码 Agent。",
      "insight": "可观测工具单独成品类，说明用户痛点正从「让 Agent 跑起来」转向「看清 Agent 花了多少钱、做了什么」。",
      "url": "https://github.com/RogerReed/agentlens",
      "source": "GitHub",
      "tags": ["agentlens", "observability", "cost"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260603-03",
      "section": "opensource",
      "title": "groundwork：面向 AI Agent 的开源贡献方法论插件",
      "summary": "tesserine/groundwork 把「开源贡献者方法论」做成可被 Agent 复用的方法论插件，定位为 runa 的首个方法论插件。让 Agent 在参与开源协作时遵循显式、可复用的工作流，而非每次临时拼凑。",
      "insight": "把工作方法显式化为插件，是 Agent 从「能写代码」走向「会按团队规范协作」的关键一步。",
      "url": "https://github.com/tesserine/groundwork",
      "source": "GitHub",
      "tags": ["groundwork", "methodology", "contributor-workflow"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260603-04",
      "section": "opensource",
      "title": "aimeat-protocol：人、个人 Agent 与本地 LLM 共享能力的联邦协议",
      "summary": "miikkij/aimeat-protocol 提出一个开放协议与参考节点：让人、他们的 AI Agent 与本地 LLM 共享应用、知识与能力。自托管、联邦化、MIT 开源，强调用户对自身 Agent 与数据的主权。",
      "insight": "联邦+自托管路线是对「中心化 Agent 平台」的对冲——当能力可在本地节点间联邦共享，互操作就不必经过单一中心。",
      "url": "https://github.com/miikkij/aimeat-protocol",
      "source": "GitHub",
      "tags": ["federated", "self-hosted", "local-llm"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "voices-20260603-01",
      "section": "voices",
      "title": "Block / Anthropic / OpenAI：互操作的关键标准应交给中立基金会",
      "summary": "Block、Anthropic 与 OpenAI 共建 Agentic AI Foundation，主张 Agent 互操作的关键开放标准（MCP、AGENTS.md、goose）应由中立基金会治理，而非任何单一厂商。诉求是让标准的演进对全行业开放，降低厂商锁定风险。",
      "insight": "厂商主动把自家协议交给中立组织，是一种「以放弃控制权换取生态信任」的策略——标准的价值在于被广泛采用，而非被独占。",
      "url": "https://block.xyz/inside/block-anthropic-and-openai-launch-the-agentic-ai-foundation",
      "source": "Block / Agentic AI Foundation",
      "tags": ["neutral-governance", "open-standards", "MCP"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260603-02",
      "section": "voices",
      "title": "Prosus：2026 是自主元年——Agent 从一次性推理走向持续自主",
      "summary": "Prosus 在《State of AI Agents 2026: Autonomy is Here》中提出，2026 年 Agent 正从 one-shot intelligence 转向 enduring autonomy：能持续运行更长时间、自主决定何时寻求人类帮助、从错误中学习而非重复犯错。",
      "insight": "从「一次性推理」到「持续自主运行」的转变，意味着 Agent 的核心挑战从准确性变成了可靠性与状态管理——这正是 Harness 与可观测被推到前台的原因。",
      "url": "https://www.prosus.com/news-insights/2026/state-of-ai-agents-2026-autonomy-is-here",
      "source": "Prosus",
      "tags": ["autonomy", "enduring-agents", "state-management"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260603-01",
      "section": "industry",
      "title": "Terminal Use（YC W26）：为文件系统型 Agent 做的「Vercel」",
      "summary": "Terminal Use 在 Hacker News 发布（约 115 points），定位为「面向文件系统型 Agent 的 Vercel」：把基于文件系统、需要长时运行的 Agent 像部署前端一样一键托管与运行，解决自主 Agent 的运行环境与编排问题。",
      "insight": "当「托管 Agent 运行时」成为独立产品，说明运行环境本身已是 Agent 落地的瓶颈——编排与托管正在从框架内功能外化为基础设施品类。",
      "url": "https://news.ycombinator.com/item?id=47311657",
      "source": "Hacker News",
      "tags": ["Terminal-Use", "agent-hosting", "runtime"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260603-02",
      "section": "industry",
      "title": "Twill.ai（YC S25）：把任务委派给云端 Agent，直接拿回 PR",
      "summary": "Twill.ai 在 Hacker News 发布（约 77 points），主打「把开发任务委派给云端 Agent，直接收回 Pull Request」的工作流：开发者描述需求，云端 Agent 在隔离环境中完成改动并以 PR 形式交付，由人类做最终审阅。",
      "insight": "「交付物是 PR 而非聊天回复」是 coding agent 产品形态的关键收敛——把 Agent 输出对齐到既有的代码评审与协作流程，而非另起一套界面。",
      "url": "https://twill.ai",
      "source": "Hacker News",
      "tags": ["Twill", "cloud-agent", "pull-request"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260603-03",
      "section": "industry",
      "title": "Broccoli：云端一次性（one-shot）编码 Agent",
      "summary": "Broccoli 在 Hacker News 发布（约 82 points），提供云端 one-shot 编码 Agent：用户提交一次任务，Agent 在云端独立完成而非进行多轮交互。开源项目，强调「提交即走、结果可取」的轻量委派体验。",
      "insight": "one-shot 与多轮交互代表两种委派哲学——前者把人从循环中移除、押注可靠性，后者保留人类纠偏。两条路线的取舍取决于任务的可验证程度。",
      "url": "https://github.com/besimple-oss/broccoli",
      "source": "Hacker News",
      "tags": ["Broccoli", "one-shot", "coding-agent"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260603-01",
      "section": "research",
      "title": "holon-bench：评估编码 Agent 在真实开源维护任务上的基准 harness",
      "summary": "JohnYCChiang/holon-bench 是开源的基准 harness，用于评估 AI 编码 Agent 在 OSS 维护者工作流上的表现：修复回路（repair loops）、回归安全、范围控制以及跨语言补丁。把评测对齐到真实维护场景而非孤立题目。",
      "insight": "用「维护者工作流」而非「单题正确率」做基准，更接近 Agent 在真实代码库中的价值——能否在不破坏现有功能的前提下完成有范围约束的改动。",
      "url": "https://github.com/JohnYCChiang/holon-bench",
      "source": "GitHub",
      "tags": ["holon-bench", "coding-agent", "regression-safety"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260603-02",
      "section": "research",
      "title": "hermes-agent-metaharness：用外层 meta-harness 自动搜索与变异 benchmark",
      "summary": "Panoramar8046/hermes-agent-metaharness 提出 meta-harness：用外层循环自动搜索、评估并变异 Agent benchmark 代码本身，目标是让评测体系能够随被测 Agent 能力的变化自我更新，避免基准落后于被评测对象。",
      "insight": "评测代码本身需要被评测和优化——这是评测工程从「人写 benchmark」到「系统演化 benchmark」的范式跳跃。",
      "url": "https://github.com/Panoramar8046/hermes-agent-metaharness",
      "source": "GitHub",
      "tags": ["meta-harness", "benchmark-evolution", "outer-loop"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260603-03",
      "section": "research",
      "title": "I.S.A.A.C：基于 LangGraph 的神经符号自主 Agent，带可累积技能库",
      "summary": "Matheussoranco/I.S.A.A.C 是构建在 LangGraph 上的神经符号自主 Agent：在 Docker 沙箱中执行，并维护一个通过程序综合不断累积的技能库（Skill Library）。把「学到的能力」沉淀为可复用的程序，而非一次性推理。",
      "insight": "神经符号 + 沙箱执行 + 技能库三件套，是把自进化落到可执行、可隔离、可复用的工程组合——技能库让 Agent 的成长可被检视和复用。",
      "url": "https://github.com/Matheussoranco/I.S.A.A.C",
      "source": "GitHub",
      "tags": ["neuro-symbolic", "skill-library", "sandbox"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260603-04",
      "section": "research",
      "title": "skills-autoresearch-flue：自动研究、评估并改进 Agent 技能的 harness",
      "summary": "schalkneethling/skills-autoresearch-flue 是一个 Flue agent harness，用于自动研究、评估并改进 Agent 的技能（skills）。把「技能从哪来、好不好、怎么变好」纳入一个可自动运行的闭环流程。",
      "insight": "技能的产生与改进若能自动化，自进化就有了可运行的外层循环——技能不再依赖人工编写，而是被持续研究和迭代的对象。",
      "url": "https://github.com/schalkneethling/skills-autoresearch-flue",
      "source": "GitHub",
      "tags": ["skill-autoresearch", "harness", "self-improve"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260603-01",
      "section": "china",
      "title": "证券时报：国产大模型新一代版本集体强化 Agent 能力",
      "summary": "证券时报报道，阿里千问、DeepSeek 等国产大模型在新一代版本中集体把重点放在增强 Agent 能力上——更强的工具调用、任务编排与多步执行，标志国产模型竞争从「比参数/对话」转向「比能否当好 Agent 的大脑」。",
      "insight": "国产模型把 Agent 能力作为新一代版本的核心卖点，说明国内竞争主线已与全球同步——模型的价值越来越由「能否驱动可靠 Agent」来衡量。",
      "url": "https://www.stcn.com/article/detail/3739082.html",
      "source": "证券时报",
      "tags": ["国产大模型", "Agent能力", "工具调用"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260603-02",
      "section": "china",
      "title": "知乎专栏：国内外大模型生态周更（2026/06/01）",
      "summary": "知乎专栏汇总 2026 年 6 月初国内外大模型与应用动态，覆盖模型维度与应用维度的最新变化，包括国内外厂商在 Agent 能力层的持续发力，以及模型与 Agent 框架集成度的提升。可作为国内视角的生态周报参考。",
      "insight": "持续的生态周更说明国内开发者对「模型+Agent 框架」组合的关注已成常态——选型不再只看模型榜单，而看其在 Agent 栈中的可用性。",
      "url": "https://zhuanlan.zhihu.com/p/670574382",
      "source": "知乎专栏",
      "tags": ["生态周报", "国内动态", "模型应用"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "china-20260603-03",
      "section": "china",
      "title": "阿里云百炼：单/多智能体应用支持一键发布与 API 调用",
      "summary": "阿里云大模型服务平台「百炼」（Model Studio）提供智能体应用的构建、发布与 API 调用能力，支持单智能体与多智能体应用的可视化编排和对外发布，让企业把 Agent 应用从搭建直接接入业务调用链。",
      "insight": "平台级「一键发布+API 调用」降低了企业上手多智能体的门槛——国内 Agent 落地正从「自建框架」转向「在云平台上编排发布」。",
      "url": "https://help.aliyun.com/zh/model-studio/single-agent-application",
      "source": "阿里云",
      "tags": ["阿里云百炼", "多智能体", "应用发布"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
