window.APP_DATA = {
  "generatedAt": "2026-05-27T10:44:00Z",
  "sourceDigestDate": "2026-05-27",
  "dateText": "2026年5月27日 星期三",
  "editorNote": [
    "今天的核心主题是<strong>Agent 自进化从理论走向工程可用</strong>。arXiv 上 <a href=\"https://arxiv.org/abs/2605.22794\" target=\"_blank\" rel=\"noopener noreferrer\">MOSS</a> 证明 source-level self-rewriting 可以让 Agent 在运行中改进自身代码模块，而 <a href=\"http://arxiv.org/abs/2605.27366v1\" target=\"_blank\" rel=\"noopener noreferrer\">MUSE-Autoskill</a> 把 skill lifecycle（创建、记忆、管理、评测、精炼）体系化，表明自进化需要的不只是反馈循环，还有可测试的资产管理。<a href=\"http://arxiv.org/abs/2605.27328v1\" target=\"_blank\" rel=\"noopener noreferrer\">Governed Evolution of Agent Runtimes</a> 进一步给出治理框架——自进化必须受约束、可审计、可回滚。",
    "Harness 与安全方面，<a href=\"http://arxiv.org/abs/2605.27333v1\" target=\"_blank\" rel=\"noopener noreferrer\">FinHarness</a> 展示了金融 Agent 的 inline safety harness 如何在不显著影响正常任务的前提下把攻击成功率从 38% 降到 15%；<a href=\"http://arxiv.org/abs/2605.27042v1\" target=\"_blank\" rel=\"noopener noreferrer\">Penetration Tests on Large-Scale Agent Systems</a> 则揭示即使是商业闭源 Agent 产品也存在重复性安全弱点。<a href=\"http://arxiv.org/abs/2605.26731v1\" target=\"_blank\" rel=\"noopener noreferrer\">Harness Sensitivity 论文</a> 用 432 组实验证明 harness 复杂度与模型能力之间不是简单的反比关系——对 reasoning 模型，严格 harness 反而效果最好。",
    "架构与开源方面，<a href=\"https://github.com/firecrawl/firecrawl\" target=\"_blank\" rel=\"noopener noreferrer\">Firecrawl</a> 突破 124K stars 并发布 FIRE-1 web action agent；<a href=\"http://arxiv.org/abs/2605.26646v1\" target=\"_blank\" rel=\"noopener noreferrer\">UnityMAS-O</a> 把多 Agent RL 后训练做成通用框架。今天 Keyong Lens 三个焦点：自进化工程化（MOSS + MUSE）、Harness 安全层实战（FinHarness + 渗透测试）、多 Agent 优化框架（UnityMAS-O）。"
  ],
  "lens": [
    {
      "label": "Agentic 开发",
      "value": 90
    },
    {
      "label": "Agent 自进化",
      "value": 97
    },
    {
      "label": "A2A / 互操作",
      "value": 82
    },
    {
      "label": "Agentic 架构",
      "value": 88
    },
    {
      "label": "Harness 工程",
      "value": 95
    }
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
    },
    {
      "date": "05.22",
      "fullDate": "2026-05-22",
      "theme": "Transformers 库仍是",
      "take": "今日保留原始资讯来源，并用 Agentic 开发、自进化、A2A、架构与 Harness 主题重新组织关联视角。",
      "items": [
        {
          "title": "Transformers 库仍是多模态 AI 的「乐高积木」——160K Stars 意味着什么",
          "source": "GitHub Trending",
          "url": "https://github.com/huggingface/transformers"
        },
        {
          "title": "OpenAI 「非数学模型」破解 80 年难题：LLM 做科研的界限在哪？",
          "source": "量子位",
          "url": "https://www.qbitai.com/2026/05/422032.html"
        },
        {
          "title": "LangChain 还在趋势榜上飙升——Agent 工程平台的「基础设施战争」开始了",
          "source": "GitHub Trending",
          "url": "https://github.com/langchain-ai/langchain"
        }
      ]
    },
    {
      "date": "05.21",
      "fullDate": "2026-05-21",
      "theme": "A2A 进入生态期",
      "take": "A2A 的重点不是消息格式，而是任务状态、能力发现、权限和 artifact 交付能否成为稳定契约。",
      "items": [
        {
          "title": "A2A protocol",
          "source": "A2A Project",
          "url": "https://github.com/a2aproject/A2A"
        },
        {
          "title": "Model Context Protocol",
          "source": "Anthropic",
          "url": "https://www.anthropic.com/news/model-context-protocol"
        },
        {
          "title": "Agent interoperability",
          "source": "Google Developers",
          "url": "https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/"
        }
      ]
    },
    {
      "date": "05.20",
      "fullDate": "2026-05-20",
      "theme": "自进化要可回滚",
      "take": "自进化要从 trace、eval、skill、rule 和 regression 形成受控闭环，避免把失败经验直接污染长期记忆。",
      "items": [
        {
          "title": "Self-Evolving Agents Cookbook",
          "source": "OpenAI Cookbook",
          "url": "https://developers.openai.com/cookbook/examples/partners/self_evolving_agents/autonomous_agent_retraining"
        },
        {
          "title": "A Survey of Self-Evolving Agents",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2507.21046"
        },
        {
          "title": "Evaluate agent workflows",
          "source": "OpenAI Docs",
          "url": "https://developers.openai.com/api/docs/guides/agent-evals"
        }
      ]
    },
    {
      "date": "05.19",
      "fullDate": "2026-05-19",
      "theme": "Trace 变成资产",
      "take": "多轮 Agent 的失败往往藏在中间步骤，结构化 trace 和 outcome 是评测、回放和改进的基础。",
      "items": [
        {
          "title": "Agents SDK tracing",
          "source": "OpenAI",
          "url": "https://openai.github.io/openai-agents-python/tracing/"
        },
        {
          "title": "Demystifying evals for AI agents",
          "source": "Anthropic",
          "url": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
        },
        {
          "title": "LangSmith Evaluation",
          "source": "LangChain",
          "url": "https://www.langchain.com/langsmith/evaluation"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "hot-20260527-01",
      "section": "hot",
      "title": "MOSS：Agent 源码级自重写让自进化从论文走向工程实现",
      "summary": "arXiv 2605.22794 提出 MOSS（Self-Evolution through Source-Level Rewriting），让 Agent 在运行中识别自身逻辑弱点并重写特定模块的源代码。与传统 prompt 调优不同，MOSS 实现的是结构性自我改进，改动可 diff、可审计、可回滚。",
      "insight": "源码级自重写意味着自进化的粒度从 prompt 级别降到函数级别，每次变异都是可测试的代码变更，而不是黑箱行为漂移。",
      "url": "https://arxiv.org/abs/2605.22794",
      "source": "arXiv",
      "tags": ["MOSS", "self-rewriting", "source-level"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260527-02",
      "section": "hot",
      "title": "Firecrawl 突破 124K stars，发布 FIRE-1 Web Action Agent",
      "summary": "Firecrawl 是目前最流行的面向 AI Agent 的网页搜索、抓取和清洗工具，已累积 124K+ stars。新发布的 FIRE-1 是专用的 web action agent，能执行点击、填表、导航等交互操作，让 Agent 不只是读网页，还能操作网页。",
      "insight": "Web 交互能力是 Agent 「从读到做」的关键一步；FIRE-1 把浏览器操作抽象为可调用的 Agent 工具，补齐了数据获取到动作执行的链路。",
      "url": "https://github.com/firecrawl/firecrawl",
      "source": "GitHub",
      "tags": ["Firecrawl", "FIRE-1", "web-agent"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260527-03",
      "section": "hot",
      "title": "White House 与 Anthropic 接近达成协议：美国情报机构将使用 Claude",
      "summary": "据 The Information 报道，白宫与 Anthropic 正接近达成协议，让美国情报机构使用 Claude AI。此前白宫已批准 90 亿美元情报机构 AI 现代化预算。这标志着 AI Agent 从商业领域向国家安全基础设施的扩展。",
      "insight": "情报领域是 Agent 安全、可审计性和 harness 治理要求最严苛的场景之一；Anthropic 能进入这个市场说明其安全技术栈获得了顶级信任背书。",
      "url": "https://www.theinformation.com/briefings/white-house-anthropic-near-deal-spy-agencies-use-ai",
      "source": "The Information",
      "tags": ["Anthropic", "government-AI", "security"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260527-04",
      "section": "hot",
      "title": "State of AI May 2026：Nathan Benaich 月度报告最新一期发布",
      "summary": "Nathan Benaich 发布 State of AI May 2026 月度报告，覆盖模型进展、Agent 生态、企业采用和投融资全景。该报告是业界追踪 AI 产业动态的标杆参考之一。",
      "insight": "月度报告的价值在于把碎片化信息整合为趋势叙事，帮助从业者从噪声中提取信号。",
      "url": "https://nathanbenaich.substack.com/p/state-of-ai-may-2026",
      "source": "State of AI Report",
      "tags": ["State-of-AI", "monthly-report", "trends"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260527-01",
      "section": "keyong",
      "title": "MUSE-Autoskill：Skill Lifecycle 驱动 Agent 自进化",
      "summary": "MUSE-Autoskill 提出以 skill 为核心资产的自进化框架：Agent 按需创建 skill、跨任务复用和精炼、通过 unit test 和运行反馈持续改进。引入 skill-level memory 积累跨任务经验，支持跨 Agent 迁移。在 SkillsBench 上提升了成功率、效率和复用率。",
      "insight": "→ Keyong 关联：这条消息和「Agent 自进化」直接相关。把 skill 当作可测试、可版本化的资产来管理，是让自进化可审计、可回滚的关键设计决策；skill lifecycle = 自进化的工程化路径。",
      "url": "http://arxiv.org/abs/2605.27366v1",
      "source": "arXiv",
      "tags": ["MUSE", "skill-lifecycle", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 10
    },
    {
      "id": "keyong-20260527-02",
      "section": "keyong",
      "title": "Governed Evolution of Agent Runtimes：自进化必须有治理框架",
      "summary": "arXiv 2605.27328 提出 governed runtime evolution 框架：Agent 生成的代码不是一次性输出，而是持久化的运行时能力。通过 HarnessMutation 机制在验证、溯源、评估和回滚约束下做受控自适应。把自进化建模为有界可观测过程。",
      "insight": "→ Keyong 关联：这条消息和「Agent 自进化」「Agentic 架构」双重相关。无约束自进化 = 不可控风险；受治理的自进化 = 可审计的持续改进。HarnessMutation 概念把 harness 层从静态约束升级为动态演化的基础设施。",
      "url": "http://arxiv.org/abs/2605.27328v1",
      "source": "arXiv",
      "tags": ["governed-evolution", "HarnessMutation", "runtime"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 10
    },
    {
      "id": "keyong-20260527-03",
      "section": "keyong",
      "title": "FinHarness：金融 Agent 内联安全层将 ASR 从 38% 降至 15%",
      "summary": "FinHarness 为金融 LLM Agent 提供端到端的 inline safety harness：Query Monitor（单轮意图 + 跨轮漂移融合）、Tool Monitor（逐步工具调用评估）和 Cascade（轻量/高级 judge 自适应路由）。风险因子作为证据重注入 Agent 输入，让 Agent 自主拒绝或重新规划。",
      "insight": "→ Keyong 关联：这条消息和「Harness 工程」直接相关。内联 harness 的核心设计思路是「每一步评估、实时干预、不等完成再审计」；Cascade 的自适应路由展示了如何平衡安全性和推理成本。",
      "url": "http://arxiv.org/abs/2605.27333v1",
      "source": "arXiv",
      "tags": ["FinHarness", "safety", "inline-monitor"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260527-04",
      "section": "keyong",
      "title": "Harness Sensitivity 非单调：reasoning 模型需要严格 harness",
      "summary": "arXiv 2605.26731 用 432 组实验（6 模型 × 4 能力层 × 3 harness 条件）证明：对 frontier chat 模型，过多 harness 指令反而降低 29-38pp 任务成功率；对 reasoning 模型，严格 harness 达到 91.7% 最高分。harness 复杂度与模型能力之间不是简单的反比关系。",
      "insight": "→ Keyong 关联：这条消息和「Harness 工程」直接相关。harness 设计不能一刀切——需要按模型类型（chat vs reasoning）分层配置。这是 harness 工程化的核心 tradeoff 之一。",
      "url": "http://arxiv.org/abs/2605.26731v1",
      "source": "arXiv",
      "tags": ["harness-sensitivity", "non-monotone", "tier-aware"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260527-05",
      "section": "keyong",
      "title": "UnityMAS-O：多 Agent RL 后训练的通用框架",
      "summary": "UnityMAS-O 把完整的多 Agent 工作流作为优化单元，支持 role-level/turn-level/trajectory-level reward、全共享到全分离的灵活参数配置，基于 verl + Ray 的分布式 PPO 训练。在 NQ、HotpotQA 和代码任务上，多 Agent RL 显著提升手工设计的工作流效果。",
      "insight": "→ Keyong 关联：这条消息和「Agentic 架构」「Agent 自进化」相关。用 RL 后训练优化多 Agent 工作流，是自进化在系统层面的应用；workflow as optimization unit 是一个重要的架构抽象。",
      "url": "http://arxiv.org/abs/2605.26646v1",
      "source": "arXiv",
      "tags": ["UnityMAS-O", "multi-agent-RL", "workflow-optimization"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260527-06",
      "section": "keyong",
      "title": "ACP：Agent Communication Protocol 开放标准",
      "summary": "Kickflip73/agent-communication-protocol 提出 ACP（Agent Communication Protocol），定位为多 Agent 系统的开放通信标准，覆盖 A2A 消息传递、任务委托和能力发现。6 stars 的早期项目，但方向清晰。",
      "insight": "→ Keyong 关联：这条消息和「A2A / 互操作」直接相关。A2A 生态正在分化出多种实现：Google A2A、ACP、SuperInstance a2a-adapter 等。互操作标准的竞争还在早期，关注哪些会被主流框架采纳。",
      "url": "https://github.com/Kickflip73/agent-communication-protocol",
      "source": "GitHub",
      "tags": ["ACP", "A2A", "open-standard"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 7
    },
    {
      "id": "keyong-20260527-07",
      "section": "keyong",
      "title": "MemFail：系统性诊断 LLM 记忆系统的失败模式",
      "summary": "MemFail 把 LLM 记忆系统拆解为 summarization、storage、retrieval 三个操作，为每个操作设计对抗性测试数据集。评估 4 个 SOTA 记忆系统后发现：即使最强系统也会在特定操作上系统性失败。提供了失败模式归因而非仅报告准确率。",
      "insight": "→ Keyong 关联：这条消息和「Agent 自进化」相关。自进化依赖长期记忆的可靠性；MemFail 的失败模式分类法可以用于检测记忆系统是否在静默退化。",
      "url": "http://arxiv.org/abs/2605.26667v1",
      "source": "arXiv",
      "tags": ["MemFail", "memory-systems", "failure-modes"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260527-08",
      "section": "keyong",
      "title": "AGORA：推理免费的 Agent prompt 压缩方案",
      "summary": "AGORA 解决 Agent 上下文中的 token 压缩问题：传统 token-level 压缩会破坏 action grammar（标识符、括号、动作动词），导致 Agent 输出被环境拒绝。AGORA 改为 step-level 压缩，结合 structural floor 和 125M 参数相关性评分器，2ms/步无 LLM 开销。",
      "insight": "→ Keyong 关联：这条消息和「Agentic 架构」相关。长上下文是 Agent 的现实瓶颈；AGORA 证明压缩必须尊重 Agent 的 action grammar 结构，否则压出来的就不是省 token 而是废 token。",
      "url": "http://arxiv.org/abs/2605.26596v1",
      "source": "arXiv",
      "tags": ["AGORA", "prompt-compression", "action-grammar"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260527-01",
      "section": "opensource",
      "title": "Firecrawl 124K stars + FIRE-1：AI Agent 的 Web 数据与操作基础设施",
      "summary": "Firecrawl 已成为 AI Agent 获取 Web 信息的事实标准工具，支持 search、scrape、clean。新发布的 FIRE-1 是专用 web action agent，能执行浏览器交互操作。提供 MCP 集成，让任何 Agent 框架都能无缝接入。",
      "insight": "当 scraping 工具长出 action 能力，它就不再是数据管道的一部分，而是 Agent 工具链的关键节点。",
      "url": "https://github.com/firecrawl/firecrawl",
      "source": "GitHub",
      "tags": ["Firecrawl", "MCP", "web-action"],
      "label": "开源",
      "kind": "open",
      "importance": 9
    },
    {
      "id": "opensource-20260527-02",
      "section": "opensource",
      "title": "governance-orchestrator：编码 Agent 的治理与上下文工程",
      "summary": "anayak314/governance-orchestrator 用 Python 实现 coding agent 的治理层：确保可重复、可审计的执行流和可追溯的决策。虽然是新项目，但它直接回应了「Agent 自主执行如何保持可控」的核心问题。",
      "insight": "治理不是事后合规，而是嵌入执行流的实时约束——这是 Agent 从 demo 到 production 的必经之路。",
      "url": "https://github.com/anayak314/governance-orchestrator",
      "source": "GitHub",
      "tags": ["governance", "context-engineering", "coding-agent"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260527-03",
      "section": "opensource",
      "title": "mcp-reticle：MCP 流量的 Wireshark",
      "summary": "azerzeki/mcp-reticle 是用 Rust 写的 MCP 流量分析和可视化工具，定位为 Agent 通信的 Wireshark。在 MCP 生态快速扩张的当下，协议层可观测性是调试和安全审计的基础。",
      "insight": "协议层的可观测性工具往往在生态早期被忽视，但一旦出现互操作问题，它就是第一个被需要的东西。",
      "url": "https://github.com/azerzeki/mcp-reticle",
      "source": "GitHub",
      "tags": ["MCP", "observability", "Rust"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260527-04",
      "section": "opensource",
      "title": "SuperInstance/a2a-adapter：让 git-native Agent 加入 A2A 生态",
      "summary": "SuperInstance/a2a-adapter 提供 I2I 到 Google A2A 协议的桥接，让已有的 git-native agent 无需重写就能加入 A2A 生态。桥接思路降低了协议迁移成本。",
      "insight": "协议采用的关键障碍是迁移成本；适配器模式让存量系统以增量方式接入新协议生态。",
      "url": "https://github.com/SuperInstance/a2a-adapter",
      "source": "GitHub",
      "tags": ["A2A", "adapter", "git-native"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260527-05",
      "section": "opensource",
      "title": "Hermes Web UI：多平台 Agent 管理仪表盘 6K stars",
      "summary": "EKKOLearnAI/hermes-web-ui（6.1K stars）为 Hermes Agent 提供 Web 管理界面，支持多平台 AI 对话、session 管理、定时任务和用量分析。它代表了 Agent 运维从 CLI 向可视化平台的转变。",
      "insight": "Agent 平台化需要的不只是模型和工具，还有运维视图：session 状态、成本追踪和调度管理。",
      "url": "https://github.com/EKKOLearnAI/hermes-web-ui",
      "source": "GitHub",
      "tags": ["Hermes", "dashboard", "agent-ops"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260527-06",
      "section": "opensource",
      "title": "polyharness：自动进化 Agent 的 prompts、tools 和 harness logic",
      "summary": "weijt606/polyharness（5 stars）用搜索引擎思路自动演化 Agent 的 prompts、tools 和 harness logic，通过 iterative evaluation 驱动变异和选择，支持 Claude Code、Codex、Hermes 等 CLI agent。",
      "insight": "把 harness 本身也放进进化循环，是 meta-level 自进化的有趣探索，但需要更高层验证机制防止退化。",
      "url": "https://github.com/weijt606/polyharness",
      "source": "GitHub",
      "tags": ["harness-evolution", "eval-loop", "meta-agent"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260527-01",
      "section": "voices",
      "title": "5 AI Agent Techniques That Just Dropped：MOSS、Managed Agents、Compiled Workflows",
      "summary": "Requesty.ai 总结 2026 年 5 月最重要的 5 项 Agent 技术：MOSS 源码自重写、Google Managed Agents 把编排移到服务端、Compiled Workflows 把多步 Agent 蒸馏为单模型、IdleSpec 投机规划利用空闲时间、LCGuard 零延迟安全验证层。",
      "insight": "这五项技术分别作用于自进化（MOSS）、架构（Managed/Compiled）、效率（IdleSpec）和安全（LCGuard），覆盖了 Agent 工程化的全链路。",
      "url": "https://www.requesty.ai/blog/ai-agent-techniques-may-2026-self-evolving-managed-compiled",
      "source": "Requesty.ai",
      "tags": ["techniques-roundup", "MOSS", "compiled-workflows"],
      "label": "观点",
      "kind": "voice",
      "importance": 9
    },
    {
      "id": "voices-20260527-02",
      "section": "voices",
      "title": "Claude Managed Agents：Anthropic 把 Agent 部署从天变成分钟",
      "summary": "Anthropic 的 Claude Managed Agents 让开发者定义 Agent 的目标和工具后，由平台处理部署、扩缩和 session 管理。InfoQ 报道指出 Anthropic Q1 2026 收入大幅增长，Managed Agents 是增长核心之一。",
      "insight": "Managed Agents 的本质是把 Agent 运行时的复杂性（状态、并发、容错）交给平台，开发者只关心业务逻辑和验收标准。",
      "url": "https://claude.com/blog/claude-managed-agents",
      "source": "Anthropic",
      "tags": ["Managed-Agents", "platform", "deployment"],
      "label": "观点",
      "kind": "voice",
      "importance": 9
    },
    {
      "id": "voices-20260527-03",
      "section": "voices",
      "title": "渗透测试揭示：商业闭源 Agent 系统重复已知安全弱点",
      "summary": "arXiv 2605.27042 对 2025 年两次商业 Agent 产品渗透测试做复盘。结论：多数发现的漏洞并非全新类型，而是计算系统长期存在的重复性弱点在 Agent 场景的新表现。即使有严格代码审查流程，Agent 的广泛交互面仍给安全带来系统性负担。",
      "insight": "Agent 安全不是发明新防御，而是把已知最佳实践（输入验证、权限最小化、沙箱隔离）在每一个交互层都落实。",
      "url": "http://arxiv.org/abs/2605.27042v1",
      "source": "arXiv",
      "tags": ["penetration-test", "agent-security", "known-weaknesses"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260527-04",
      "section": "voices",
      "title": "Persistent AI Agent 案例研究：96 天、57.6 万条记录的实践观察",
      "summary": "arXiv 2605.26870 记录了一位研究者 96 天持续使用 persistent AI agent 的实践：75K 去重记录、502 个记忆文件、17 个配置 agent、57 个 skill 文件。核心发现：经济单位从「cost per token」变为「cost per completed artifact」，cache reads 占 82.9%。",
      "insight": "Persistent Agent 的成本结构以缓存为主，意味着记忆和上下文管理比单次推理能力更影响整体效率。",
      "url": "http://arxiv.org/abs/2605.26870v1",
      "source": "arXiv",
      "tags": ["persistent-agent", "case-study", "cost-structure"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "industry-20260527-01",
      "section": "industry",
      "title": "Anthropic 接近与白宫达成协议：Claude 将服务美国情报机构",
      "summary": "The Information 报道白宫与 Anthropic 正接近最终协议，允许美国情报机构使用 Claude。此前 NYT 报道白宫已批准 $9B 情报机构 AI 现代化预算。这是 Agent AI 进入国家安全基础设施的标志性事件。",
      "insight": "国安级别的采用对模型安全、可审计性、治理和 harness 的要求远超商业场景——Anthropic 的安全研究背景是其核心差异化。",
      "url": "https://www.theinformation.com/briefings/white-house-anthropic-near-deal-spy-agencies-use-ai",
      "source": "The Information",
      "tags": ["Anthropic", "government", "national-security"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260527-02",
      "section": "industry",
      "title": "Claude Managed Agents 推动 Anthropic Q1 收入大幅增长",
      "summary": "InfoQ 报道 Anthropic Q1 2026 收入增长强劲，Claude Managed Agents 是核心增长引擎。Managed Agents 4 月上线后快速获得企业采用，把「定义 Agent → 部署 Agent」的周期从天级压缩到分钟级。Dario Amodei 称这是平台化转型的关键一步。",
      "insight": "平台级 Agent 服务的商业验证意味着 Agent 不再是实验性技术，而是有清晰 revenue 的产品形态。",
      "url": "https://www.infoq.com/news/2026/05/code-with-claude/",
      "source": "InfoQ",
      "tags": ["Anthropic", "revenue", "Managed-Agents"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260527-03",
      "section": "industry",
      "title": "AI Agent 安全告急：Claude Code 遭 Base64 编码攻击",
      "summary": "Dev.to 文章分析 2026 年针对 AI coding agent（特别是 Claude Code）的新型攻击：通过 Base64 编码绕过 Agent 的安全过滤，窃取 credentials 和私有代码。攻击利用了 Agent 广泛的文件系统和网络访问权限。",
      "insight": "Agent 的权限越大，攻击面越广。工具调用的每一步都需要安全验证，不能只在入口做过滤。",
      "url": "https://dev.to/akari_iku/is-your-claude-code-safe-from-base64-inside-2026-ai-agent-attacks-13ab",
      "source": "Dev.to",
      "tags": ["security", "Claude-Code", "Base64-attack"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260527-04",
      "section": "industry",
      "title": "A2A Protocol v1.0 稳定版发布，签署方含 Google、AWS、Microsoft",
      "summary": "RapidClaw 报道 A2A Protocol 于 4 月发布 v1.0 stable，增加了简化的签名方案和 Agent Directory。参与组织已超 150 家，覆盖三大云平台。协议从草案进入生产级稳定。",
      "insight": "v1.0 stable 意味着企业可以基于 A2A 做长期架构投资，不用担心协议大改。",
      "url": "https://rapidclaw.dev/blog/a2a-protocol-complete-guide-2026",
      "source": "RapidClaw",
      "tags": ["A2A", "v1.0", "stable"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "research-20260527-01",
      "section": "research",
      "title": "MUSE-Autoskill：可测试 Skill 资产驱动的自进化框架",
      "summary": "MUSE-Autoskill 提出完整的 skill lifecycle：创建 → 存储 → 管理 → 评测 → 精炼。每个 skill 有 unit test 和运行时反馈，支持 skill-level memory 跨任务积累经验和跨 Agent 迁移。在 SkillsBench 上显著优于无 lifecycle 管理的基线。",
      "insight": "自进化的可工程化路径：把每个 skill 当作有生命周期的代码资产来管理，而不是把所有经验扔进非结构化记忆。",
      "url": "http://arxiv.org/abs/2605.27366v1",
      "source": "arXiv",
      "tags": ["MUSE", "skill-lifecycle", "SkillsBench"],
      "label": "研究",
      "kind": "research",
      "importance": 10
    },
    {
      "id": "research-20260527-02",
      "section": "research",
      "title": "FinHarness：内联安全 harness 的工程实现",
      "summary": "FinHarness 三层结构：Query Monitor（意图融合 + 漂移检测）、Tool Monitor（逐步工具评估）、Cascade（自适应 judge 路由）。routed 模式 ASR 38.3%→15.0%，正常任务通过率仅下降 1.8pp，高级 judge 调用减少 4.7×。",
      "insight": "Cascade 路由机制是平衡安全和成本的关键设计：大多数步骤用轻量 judge 即可，只在高风险信号时调用重型推理。",
      "url": "http://arxiv.org/abs/2605.27333v1",
      "source": "arXiv",
      "tags": ["FinHarness", "cascade-routing", "safety"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260527-03",
      "section": "research",
      "title": "Harness Sensitivity 非单调：432 组实验推翻常见假设",
      "summary": "对 6 个模型、3 种 harness 条件的 432 次实验表明：frontier chat 模型（如 Gemini 2.5 Flash）在严格 harness 下性能降低 29-38pp；frontier reasoning 模型（如 Qwen3.5-122B）在严格 harness 下达到 91.7% 最高分。引入 6 标签失败分类法。",
      "insight": "Harness 设计必须区分模型类型：chat 模型怕过度约束，reasoning 模型反而需要结构化引导。这是 harness 工程的核心设计变量。",
      "url": "http://arxiv.org/abs/2605.26731v1",
      "source": "arXiv",
      "tags": ["harness-sensitivity", "experiment", "failure-taxonomy"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260527-04",
      "section": "research",
      "title": "UnityMAS-O：把多 Agent 工作流作为 RL 优化单元",
      "summary": "UnityMAS-O 是首个通用的 LLM 多 Agent RL 后训练框架。核心设计：workflow 是优化单元（非单条 trajectory）；逻辑 role 与物理 model 解耦；支持 role/turn/trajectory 三级 reward。基于 verl+Ray 实现分布式 PPO。",
      "insight": "多 Agent 系统的优化粒度从单个 Agent 上升到整个工作流，是系统级自进化的一个重要方向。",
      "url": "http://arxiv.org/abs/2605.26646v1",
      "source": "arXiv",
      "tags": ["UnityMAS-O", "multi-agent-RL", "verl"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260527-05",
      "section": "research",
      "title": "MemFail：LLM 记忆系统的系统性失败模式诊断",
      "summary": "MemFail 把记忆系统拆为 summarization/storage/retrieval 三操作，用对抗性数据集隔离每层失败模式。评估 4 个 SOTA 系统发现：即使最强系统在某些操作上也会系统性失败。提供失败归因而非仅总分。",
      "insight": "黑箱式报告准确率无法指导改进；逐操作归因才能定位真正的性能瓶颈。",
      "url": "http://arxiv.org/abs/2605.26667v1",
      "source": "arXiv",
      "tags": ["MemFail", "memory", "diagnostic"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260527-06",
      "section": "research",
      "title": "AGORA：Agent 上下文的结构感知步级压缩",
      "summary": "AGORA 发现传统 token-level 压缩破坏 Agent 的 action grammar，导致全面失效（17 个组合中 mean reward≤0.05）。改为 step-level + structural floor + 125M 参数评分器，在 9 个测试组合中 8 个保持≥75% 原始性能。",
      "insight": "Agent 的 prompt 和通用 LLM 的 prompt 结构本质不同——压缩时必须保护 action-bearing tokens。",
      "url": "http://arxiv.org/abs/2605.26596v1",
      "source": "arXiv",
      "tags": ["AGORA", "compression", "step-level"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260527-01",
      "section": "china",
      "title": "Qwen3.5 Plus 新快照发布：Agentic Coding 能力大幅提升",
      "summary": "阿里云模型服务更新文档显示 Qwen3.5 原生视觉语言系列 Plus 模型发布新快照，相较 2 月版本在 Agentic Coding 能力上大幅提升。此前 Qwen3.6-Plus 已面向真实世界 Agent 场景增强了工具调用和多模态推理。",
      "insight": "国产大模型正在从通用对话向 Agent 化能力显式发力，工具调用和代码执行成为核心竞争维度。",
      "url": "https://help.aliyun.com/zh/model-studio/newly-released-models",
      "source": "阿里云",
      "tags": ["Qwen3.5", "agentic-coding", "tool-calling"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "china-20260527-02",
      "section": "china",
      "title": "2026「企业多智能体元年」：零一万物发布六大预判",
      "summary": "零一万物 1 月发布《中国企业智能体 2026 六大预判》：多智能体基于目标的协作与结果交付、Agent 分工检查如真实团队、企业级 Agent 需要标准化运维和 SLA。雷峰网、InfoQ、知乎等均深度报道。",
      "insight": "中国企业 Agent 化的视角更务实：关注的是能不能像团队一样分工交付，而不是技术架构有多酷。",
      "url": "https://m.leiphone.com/category/iot/Qf2SI9lBCWRQqdDz.html",
      "source": "雷峰网",
      "tags": ["零一万物", "multi-agent", "enterprise"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260527-03",
      "section": "china",
      "title": "新华社：2026 智能体爆发年，推理成本两年降超 95%",
      "summary": "新华社环球杂志报道称，AI 模型推理成本两年内下降超过 95%，使「每个业务流程部署一个 Agent」在经济上真正可行。2026 年被定义为智能体爆发年，从金融到制造各行业加速落地。",
      "insight": "成本下降是 Agent 规模化的真正催化剂——当部署一个 Agent 的边际成本接近零，就会出现 Agent 数量的爆发增长。",
      "url": "http://www.news.cn/globe/20260402/39ce4b6b703843a6aef41257f02976e0/c.html",
      "source": "新华社",
      "tags": ["cost-reduction", "mass-deployment", "2026"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260527-04",
      "section": "china",
      "title": "腾讯云：5 款企业智能体开发平台深度对比与选型",
      "summary": "腾讯云开发者社区发布 2026 年国内 5 款企业智能体开发平台对比（含通义、DeepSeek、零一万物等），覆盖 Agent 编排、工具接入、评测、权限管理和成本结构。预计 2026 年企业 Agent 年增长率达 72.7%。",
      "insight": "平台选型文章的出现说明企业已过了「要不要做 Agent」的阶段，进入了「用谁的平台做」的实操期。",
      "url": "https://cloud.tencent.com/developer/article/2634525",
      "source": "腾讯云",
      "tags": ["platform-comparison", "enterprise", "selection"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260527-05",
      "section": "china",
      "title": "阿里千问、DeepSeek 齐出手：国产大模型升级 Agent 能力",
      "summary": "新浪新闻报道 4 月阿里发布 Qwen3.6-Plus、DeepSeek 跟进升级，两家都把 Agent 能力作为核心卖点。工具调用准确率、多步任务完成率和代码生成质量成为国产模型竞争的新战场。",
      "insight": "当 Agent 能力成为模型竞争的差异化维度，评测标准和 benchmark 的公正性就变得格外重要。",
      "url": "https://news.sina.cn/2026-04-10/detail-inhtxuss0637875.d.html",
      "source": "新浪新闻",
      "tags": ["Qwen", "DeepSeek", "competition"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    }
  ]
};
