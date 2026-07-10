window.APP_DATA = {
  "generatedAt": "2026-07-10T08:00:00Z",
  "sourceDigestDate": "2026-07-10",
  "dateText": "2026年7月10日 星期五",
  "editorNote": [
    "今天的主线是 <strong>Harness 工程与 Agent 自进化从「优化前置」走向「运行时演化」</strong>。<a href=\"http://arxiv.org/abs/2607.08124v1\" target=\"_blank\" rel=\"noopener noreferrer\">TTHE（Test-Time Harness Evolution）</a>把决定 Agent 行为的 harness——构造上下文、调用工具、校验中间结果、失败恢复——从「部署前搜索定型」变为「运行时持续演化」；<a href=\"http://arxiv.org/abs/2607.08010v1\" target=\"_blank\" rel=\"noopener noreferrer\">Tool-Making & Self-Evolving Agents</a> 则把重复的 SOP 步骤在部署前编译成校验过、带版本的工具，用「造工具」替代每次请求重新写代码的推理循环。",
    "<strong>多智能体的治理、审计与故障定位成为学术密集区</strong>。<a href=\"http://arxiv.org/abs/2607.07989v1\" target=\"_blank\" rel=\"noopener noreferrer\">Who Broke the System?</a> 研究在分布式多 Agent 系统中定位「是谁、在哪一步」出错；<a href=\"http://arxiv.org/abs/2607.08028v1\" target=\"_blank\" rel=\"noopener noreferrer\">From Prompts to Contracts</a> 把企业 Agent 从「靠 prompt 承载行为」重构为「来源边界 + 答案契约 + 可复现 trace」；<a href=\"http://arxiv.org/abs/2607.08395v1\" target=\"_blank\" rel=\"noopener noreferrer\">Token-Flow Firewall</a> 在 token 流层面做运行时语义审计——都是「让 Agent 可验证、可追责」的工程化尝试。",
    "<strong>产业侧：互操作进入生产、计费模式仍在博弈、WAIC 前瞻端侧智能体</strong>。<a href=\"https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year\" target=\"_blank\" rel=\"noopener noreferrer\">A2A 协议突破 150 家组织</a>、三大云落地；<a href=\"https://devops.com/anthropic-hits-pause-on-claude-agent-sdk-billing-change-for-now/\" target=\"_blank\" rel=\"noopener noreferrer\">Anthropic 暂停 Claude Agent SDK 计费变更</a>，暴露「订阅制难以承载 Agent 级自动化消耗」的结构性矛盾；<a href=\"https://www.szzg.gov.cn/2026/xwzx/szkx/202607/t20260708_5344077.htm\" target=\"_blank\" rel=\"noopener noreferrer\">2026 WAIC 7/17 开幕</a>，300+ 新品首发、全球首款 AI 智能体手机与阶跃 Agent OS 亮相。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 86 },
    { "label": "Agent 自进化", "value": 90 },
    { "label": "A2A / 互操作", "value": 85 },
    { "label": "Agentic 架构", "value": 88 },
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
      "date": "07.10",
      "fullDate": "2026-07-10",
      "theme": "Harness 运行时演化 + Agent 自进化造工具 + 多智能体治理/故障定位 + WAIC 端侧智能体前瞻",
      "take": "TTHE 把 harness 从部署前定型推向运行时持续演化；Tool-Making & Self-Evolving Agents 把重复 SOP 编译成带版本的工具替代推理时写代码；Who Broke the System 做多 Agent 故障定位、From Prompts to Contracts 用来源边界+答案契约重构企业 Agent、Token-Flow Firewall 在 token 流层做运行时审计；A2A 突破 150 组织三大云落地、Anthropic 暂停 Claude Agent SDK 计费变更、LangChain/LangGraph 1.0 稳定；2026 WAIC 7/17 开幕，300+ 新品首发含全球首款 AI 智能体手机与阶跃 Agent OS。",
      "items": [
        {
          "title": "TTHE：Test-Time Harness Evolution，让 harness 在运行时持续演化",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.08124v1"
        },
        {
          "title": "Tool-Making & Self-Evolving Agents：把重复 SOP 编译成带版本的工具",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.08010v1"
        },
        {
          "title": "Anthropic 暂停 Claude Agent SDK 计费变更：订阅制难载 Agent 级消耗",
          "source": "DevOps.com",
          "url": "https://devops.com/anthropic-hits-pause-on-claude-agent-sdk-billing-change-for-now/"
        }
      ]
    },
    {
      "date": "07.09",
      "fullDate": "2026-07-09",
      "theme": "A2A 协议生产化 + GPT-Live 语音 Agent 融合 + 治理 gap 量化警报 + Agent 自进化工程化",
      "take": "A2A 协议一年突破 150+ 组织、三大云平台落地，Agent 互操作从标准进入生产；OpenAI GPT-Live 全双工语音在推理/Agent 任务自动委派子 Agent；Tech Radar 量化治理 gap：72%已上线、60%缺框架；EvoSOP 让 Agent 从原子工具合成可复用 SOP 并自进化；SkillCenter 21.7 万技能库开源；Deterministic Gates 修复 Agent 静默策略违规；2026 WAIC 300+ AI 新品首发含全球首款智能体手机。",
      "items": [
        {
          "title": "A2A 协议突破 150 家组织，落地三大云平台进入生产",
          "source": "Linux Foundation",
          "url": "https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year"
        },
        {
          "title": "OpenAI GPT-Live：全双工语音 + Agent 任务自动委派",
          "source": "OpenAI",
          "url": "https://openai.com/index/introducing-gpt-live/"
        },
        {
          "title": "EvoSOP：Agent 从原子工具自动合成可复用 SOP 并迭代优化",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.07321v1"
        }
      ]
    },
    {
      "date": "07.08",
      "fullDate": "2026-07-08",
      "theme": "企业 Agent 规模化信任测试 + 成本实时硬约束 + Agent 安全实战化",
      "take": "Cisco 7月底前向9万员工部署 AI Agent，成迄今最大规模企业信任实验；Airia inline budget enforcement 把 Agent 成本从事后分析变实时硬限制；Exabeam Observra 对齐 OWASP Agentic Top 10 做开源遥测；Agentjacking 通过 Sentry DSN 注入攻破编码 Agent；Early Abort Probe Cascade 与 AgentTether 从学术端推进 Agent 可靠性工程；ICML 2026 Seoul 开幕，agentic AI 成最热议题。",
      "items": [
        {
          "title": "Cisco 9万员工 AI Agent 部署：企业 Agent 最大规模信任测试",
          "source": "UC Today",
          "url": "https://www.uctoday.com/employee-engagement-recognition/ciscos-90000-employee-ai-agent-rollout-could-become-enterprise-ais-biggest-trust-test/"
        },
        {
          "title": "Airia：inline budget enforcement，Agent 成本实时硬约束",
          "source": "GlobeNewsWire",
          "url": "https://www.globenewswire.com/news-release/2026/07/07/3323112/0/en/Airia-Announces-Enhanced-Cost-Optimization-to-Give-Enterprises-Real-Time-Control-Over-AI-Spend.html"
        },
        {
          "title": "AgentTether：图引导诊断 + 运行时干预，修复 59-65% 失败 Agent 任务",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.06273v1"
        }
      ]
    },
    {
      "date": "06.08",
      "fullDate": "2026-06-08",
      "theme": "Agentic Web 协议化 + Agent 计算计费生产化 + 记忆管理标准化",
      "take": "Google WebMCP 在 Chrome 146 启动 origin trial，把网页变成 Agent 的 MCP 工具接口；Claude Code Agent SDK 6/15 切换 usage-based 计费 + Managed Agents GA，Agent 计算进入生产成本管理；GoodMemory 把记忆拆为六维可插拔层；continuous-improvement 用外部强制纪律约束编码 Agent——harness 从辅助变成主动约束。",
      "items": [
        {
          "title": "Google WebMCP：Chrome 146 origin trial，网页即 Agent MCP 服务器",
          "source": "Google / Chrome",
          "url": "https://developer.chrome.com/blog/chrome-at-io26"
        },
        {
          "title": "Claude Code Agent SDK 6/15 切换 usage-based 计费，Managed Agents GA",
          "source": "Anthropic",
          "url": "https://code.claude.com/docs/en/agent-sdk/overview"
        },
        {
          "title": "GoodMemory：AI 应用的六维可插拔用户记忆层",
          "source": "GitHub",
          "url": "https://github.com/hjqcan/GoodMemory"
        }
      ]
    },
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
    }
  ],
  "items": [
    {
      "id": "hot-20260710-01",
      "section": "hot",
      "title": "A2A 协议突破 150+ 组织，三大云落地进入企业生产",
      "summary": "Google 发起、Linux Foundation 治理的 Agent2Agent 协议一年内支持组织从 50+ 增至 150+，SDK 覆盖多语言，AWS、Azure、GCP 均已原生集成。协议从标准草案进入真实生产环境，被官方列为「首年即出现企业生产使用」。",
      "insight": "A2A 的里程碑意义在于：Agent 互操作从「协议之争」转为「谁先部署」的竞争。三大云同时支持意味着企业可无平台锁定地跨 Agent 协作——互操作从理想变为生产基础设施。",
      "url": "https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year",
      "source": "Linux Foundation",
      "tags": ["A2A", "interoperability", "production"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260710-02",
      "section": "hot",
      "title": "2026 WAIC 7/17 开幕：300+ AI 新品首发，全球首款 AI 智能体手机亮相",
      "summary": "2026 世界人工智能大会 7/17-20 在上海举办，展览面积超 10 万㎡，1100+ 企业参展、3000+ 展品。超 300 款产品全球首发，含全球首款 AI 智能体手机、阶跃 Agent（智能体）操作系统、MiniMax M3 多模态模型、华为 Atlas 950 等。",
      "insight": "「智能体手机」与「Agent OS」的首发标志 Agent 从云端/桌面向端侧扩展。当 Agent 运行在手机上，本地推理、隐私保护与离线能力都成为新的架构约束——这是 Agent 形态的重要演进方向。",
      "url": "https://www.szzg.gov.cn/2026/xwzx/szkx/202607/t20260708_5344077.htm",
      "source": "经济参考报",
      "tags": ["WAIC-2026", "智能体手机", "Agent-OS"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260710-03",
      "section": "hot",
      "title": "TTHE：Test-Time Harness Evolution——harness 从部署前定型到运行时演化",
      "summary": "研究指出 LLM Agent 的行为不仅由模型决定，也由 harness（构造上下文、调用工具、校验中间结果、失败恢复的可执行程序）决定。以往方法在部署前搜索定型 harness，TTHE 提出在测试时（运行时）让 harness 持续演化以适配任务分布。",
      "insight": "把 harness 从「静态配置」变为「运行时可演化的第一类对象」——这与 Agent 自进化是一体两面：模型不变，但外部工程系统在持续学习。这为「harness 即产品」提供了新的技术支点。",
      "url": "http://arxiv.org/abs/2607.08124v1",
      "source": "arXiv",
      "tags": ["harness", "test-time", "self-evolution"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260710-04",
      "section": "hot",
      "title": "Tool-Making & Self-Evolving Agents：把重复 SOP 编译成带版本的工具",
      "summary": "生产 Agent 常在每次请求时重新生成同样的过程性代码，浪费延迟与可靠性。研究提出用「造工具」流水线：在部署前把重复出现的 SOP 步骤编译为经校验、带版本的工具，替代推理时的写代码循环，面向低延迟系统优化。",
      "insight": "「把经验代码化为可复用工具」是 Agent 自进化最落地的形态：从轨迹中沉淀、校验、版本化、可回归。相比推理时临场写代码，预编译工具兼顾速度与可靠性，是生产化的关键路径。",
      "url": "http://arxiv.org/abs/2607.08010v1",
      "source": "arXiv",
      "tags": ["tool-making", "self-evolution", "low-latency"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260710-05",
      "section": "hot",
      "title": "Anthropic 暂停 Claude Agent SDK 计费变更：订阅制难载 Agent 级消耗",
      "summary": "原定 6/15 生效的 Claude Agent SDK 计费改革被 Anthropic 在当天暂停（「暂时维持现状」）。原方案拟将 Agent SDK 用量按标准 API 费率计费、订阅用户获等额月度额度。Claude Code 负责人此前称「订阅并非为第三方工具的用量模式设计」。",
      "insight": "计费争议暴露的是结构性矛盾：订阅制难以吸收 API 级的自动化消耗。对 Agent 开发者的启示是——尽早以标准 API 费率度量 token 消耗，把成本约束当作架构第一类需求而非事后核算。",
      "url": "https://devops.com/anthropic-hits-pause-on-claude-agent-sdk-billing-change-for-now/",
      "source": "DevOps.com",
      "tags": ["Anthropic", "agent-sdk", "pricing"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260710-01",
      "section": "keyong",
      "title": "TTHE 运行时演化 harness = 把「Harness 工程」与「Agent 自进化」合流",
      "summary": "TTHE 让 harness 在测试时持续演化：构造上下文、工具调用、结果校验、失败恢复不再是部署前定死的程序，而是随任务分布调整的运行时能力。这把 harness 从静态脚手架变为可学习系统。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agent 自进化」。此前自进化多聚焦模型/技能侧，TTHE 把演化搬到 harness 层——意味着「不改模型也能持续变强」。这对以 harness 为产品的团队是直接的方法论：把演化点显式建模、可评测、可回滚。",
      "url": "http://arxiv.org/abs/2607.08124v1",
      "source": "arXiv",
      "tags": ["harness", "self-evolution", "runtime"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260710-02",
      "section": "keyong",
      "title": "SOP 编译为带版本工具 = Agent 自进化的可回归工程范式",
      "summary": "Tool-Making 把重复 SOP 步骤在部署前编译为校验过、带版本的工具，替代推理时反复写代码。这让 Agent 的「经验」以工具形态沉淀，可测试、可版本管理、可被其他 Agent 复用。",
      "insight": "→ Keyong 关联：呼应「Agent 自进化」+「Agentic 开发」。与 EvoSOP（07.09）呼应：自进化的落点是「可执行、可回归的工具/流程」，而非隐式记忆。把演化产物纳入版本控制与评测，是让自进化「可信任上线」的前提。",
      "url": "http://arxiv.org/abs/2607.08010v1",
      "source": "arXiv",
      "tags": ["tool-making", "versioned-tools", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260710-03",
      "section": "keyong",
      "title": "From Prompts to Contracts：企业 Agent 从 prompt 承载走向契约化 harness",
      "summary": "研究提出 harness-engineering 方法：把原型阶段「靠 prompt + 检索承载行为」的企业 Agent，重构为带来源边界、实体路由、答案契约与可复现 trace 的系统，满足产品化对可审计、可复现的要求。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agentic 架构」。把「prompt 即行为」升级为「契约即行为」，本质是把不可控的自然语言约束显式化为可校验的工程契约——这正是 Agent 从 demo 到生产必须跨越的可靠性鸿沟。",
      "url": "http://arxiv.org/abs/2607.08028v1",
      "source": "arXiv",
      "tags": ["harness", "contracts", "auditable"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260710-04",
      "section": "keyong",
      "title": "多智能体故障定位（Who Broke the System）= 互操作的可观测前提",
      "summary": "多 Agent 系统的分布式结构带来「系统级失败难诊断」的新挑战：执行失败时难以定位是哪个 Agent、在轨迹的哪一步出错。该研究针对 LLM 多 Agent 系统提出故障定位方法。",
      "insight": "→ Keyong 关联：呼应「A2A / 互操作」+「Agentic 架构」。当 Agent 跨边界协作成为默认架构，可观测必须从 per-agent 升级为跨 Agent 的因果链定位。没有故障定位，A2A 的互操作只是把黑箱连成更大的黑箱。",
      "url": "http://arxiv.org/abs/2607.07989v1",
      "source": "arXiv",
      "tags": ["multi-agent", "failure-localization", "observability"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260710-05",
      "section": "keyong",
      "title": "A2A 三大云落地 = 互操作从「实现协议」升维到「设计任务边界」",
      "summary": "A2A 在 AWS、Azure、GCP 原生集成、SDK 多语言覆盖后，开发者可直接通过云平台 SDK 实现跨 Agent 任务委派与能力发现，不再需要自行实现协议栈。",
      "insight": "→ Keyong 关联：呼应「A2A / 互操作」+「Agentic 开发」。当互操作变成 SDK 调用，开发者的核心问题从「如何实现协议」变为「如何设计跨 Agent 的任务边界、状态传递与失败语义」——这是更高层次的架构设计问题。",
      "url": "https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year",
      "source": "Linux Foundation",
      "tags": ["A2A", "SDK", "task-boundary"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260710-01",
      "section": "opensource",
      "title": "archipelago（212 Stars）：Mercor 出品的 Agent 强化学习评估 Harness",
      "summary": "Mercor-Intelligence/archipelago 为 AI Agent 提供在 RL 环境下运行与评估的框架，支持多环境并行、结果回收与指标聚合，让 Agent 评测从单点快照变成动态环境中的持续评估。",
      "insight": "用 RL 环境做 Agent 评测比静态 benchmark 更接近真实场景——Agent 在动态、有反馈的环境中的表现，才是生产能力的真正指标。这与「评测从 benchmark 转向业务指标」的行业趋势同频。",
      "url": "https://github.com/Mercor-Intelligence/archipelago",
      "source": "GitHub",
      "tags": ["archipelago", "RL-harness", "eval"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260710-02",
      "section": "opensource",
      "title": "earendil-works/pi：统一 LLM API + agent loop + 编码 Agent CLI 工具箱",
      "summary": "earendil-works/pi 是一个 AI Agent 工具箱：统一多家 LLM 的 API、内置 agent loop、TUI 与编码 Agent CLI，把「模型接入 + 循环 + 终端交互」打包为一体，降低自建 Agent runtime 的门槛。",
      "insight": "unified API + agent loop + CLI 的组合是「terminal-native 编码 Agent」形态的延续：开发者要的不是又一个框架，而是能立刻跑起来、可替换后端模型的最小可用 harness。",
      "url": "https://github.com/earendil-works/pi",
      "source": "GitHub",
      "tags": ["agent-loop", "coding-agent", "CLI"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260710-03",
      "section": "opensource",
      "title": "dust-tt/dust（1.4K Stars）：面向工作流的定制化 AI Agent 平台",
      "summary": "dust-tt/dust 定位为加速日常工作的定制 AI Agent 平台，让团队围绕自有数据与工具构建、部署 Agent。作为持续演进的开源项目，它代表了「企业内 Agent 平台化」的一类通用底座。",
      "insight": "企业 Agent 平台的价值不在模型，而在「把公司数据、工具、权限统一接入并治理」。dust 这类平台的竞争点正在从「能不能建 Agent」转向「治理、权限与可观测是否完备」。",
      "url": "https://github.com/dust-tt/dust",
      "source": "GitHub",
      "tags": ["agent-platform", "enterprise", "workflow"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260710-04",
      "section": "opensource",
      "title": "cdeust/Cortex（66 Stars）：会「主动遗忘」的可追责 Agent 记忆",
      "summary": "cdeust/Cortex 是本地优先、MCP 接入的 Agent 记忆组件，设计目标是「可追责」：会有意遗忘、在不确定时明说「我不知道」、并主动标记自身前后矛盾。MIT 许可。",
      "insight": "记忆的难点从来不是「记住」，而是「知道何时不该相信自己的记忆」。主动遗忘 + 不确定性表达 + 矛盾自检，是把记忆从「幻觉放大器」变为「可信状态」的关键设计。",
      "url": "https://github.com/cdeust/Cortex",
      "source": "GitHub",
      "tags": ["memory", "accountability", "MCP"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260710-05",
      "section": "opensource",
      "title": "a2a-editor（21 Stars）：A2A 协议 Agent 的编辑/查看/测试 UI 组件",
      "summary": "open-resource-discovery/a2a-editor 提供一组 UI 组件，用于编辑、查看和测试实现 Agent2Agent（A2A）协议的 Agent。它把抽象的协议交互变成可视化、可调试的开发者工具。",
      "insight": "协议要普及，工具链必须跟上。a2a-editor 把 AgentCard、能力发现、任务状态这些 A2A 抽象变成可视化的编辑与测试面板——这是互操作从「规范」走向「日常开发」的关键一环。",
      "url": "https://github.com/open-resource-discovery/a2a-editor",
      "source": "GitHub",
      "tags": ["A2A", "developer-tools", "interoperability"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260710-01",
      "section": "voices",
      "title": "Anthropic：订阅并非为第三方工具的用量模式设计——计费哲学之争",
      "summary": "在 Claude Agent SDK 计费改革被暂停后，业界重提 Claude Code 负责人的判断：「订阅并非为这些第三方工具的用量模式设计」。分析认为暂停只是「争取时间」，并未解决订阅难以承载 API 级自动化消耗的结构性问题。",
      "insight": "这是 Agent 时代商业模式的核心矛盾：当一个「用户」其实是全天候自动运行的 Agent，按人头/订阅计费的假设就崩塌了。计费模型正在被迫向「按真实消耗」重构，这会反向影响 Agent 的架构与成本设计。",
      "url": "https://devops.com/anthropic-hits-pause-on-claude-agent-sdk-billing-change-for-now/",
      "source": "DevOps.com",
      "tags": ["Anthropic", "pricing", "business-model"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260710-02",
      "section": "voices",
      "title": "LangChain：durable agent 是产品级长周期 Agent 的地基",
      "summary": "LangChain 与 LangGraph 1.0 里程碑强调「durable agent framework」：持久状态可在服务重启/中断后恢复、内置持久化无需自建 DB、human-in-the-loop 作为一等 API。团队称这是「durable agent 框架领域首个稳定大版本」。",
      "insight": "长周期 Agent 的可靠性不来自更强的模型，而来自「可持久、可恢复、可介入」的运行时。把 durable state 与 human-in-the-loop 做成框架一等能力，正是 harness/runtime 分离思路的工程落地。",
      "url": "https://www.langchain.com/blog/langchain-langgraph-1dot0",
      "source": "LangChain",
      "tags": ["LangGraph", "durable-agent", "runtime"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260710-03",
      "section": "voices",
      "title": "周鸿祎 2026 AI 预言：我们正迈向「百亿智能体」时代",
      "summary": "在 2026 年初的 20 个 AI 预言中，周鸿祎判断 AI 正从大模型竞赛走向智能体规模化，未来将进入「百亿智能体」共存协作的阶段，智能体将渗透到个人与产业的各类场景。",
      "insight": "「百亿智能体」的判断如果成立，最稀缺的将不是单个 Agent 的能力，而是让海量 Agent 安全协作的协议、治理与身份体系——这正是 A2A、能力发现与互操作标准要解决的问题。",
      "url": "https://www.chinanews.com.cn/cj/2026/01-09/10549137.shtml",
      "source": "中国新闻网",
      "tags": ["周鸿祎", "百亿智能体", "预言"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "industry-20260710-01",
      "section": "industry",
      "title": "Anthropic 暂停 Claude Agent SDK 计费改革，行业计费模式仍在博弈",
      "summary": "Anthropic 在原定生效日暂停 Claude Agent SDK 计费变更，称将「更新方案以更好支持用户用订阅构建」。对比之下 GitHub 在 6 月照常将 Copilot 切换为 token-based 计费。Agent 计算的定价方式仍在各家分化博弈中。",
      "insight": "两条路线并存：一边是 GitHub 坚定转向 token 计费，一边是 Anthropic 暂缓。分歧背后是对开发者情绪与 Agent 消耗规模的不同权衡。无论走向哪条路，「Agent 成本可预测」都会成为采购与架构的硬指标。",
      "url": "https://devops.com/anthropic-hits-pause-on-claude-agent-sdk-billing-change-for-now/",
      "source": "DevOps.com",
      "tags": ["pricing", "agent-sdk", "token-billing"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260710-02",
      "section": "industry",
      "title": "LangChain / LangGraph 1.0：agent 框架进入稳定期，主打 durable + middleware",
      "summary": "LangChain 1.0 引入 create_agent 抽象与中间件系统（human-in-the-loop、历史摘要、PII 脱敏等），LangGraph 1.0 提供持久状态、内置持久化与一等 human-in-the-loop。两者承诺 2.0 前不做破坏性变更，并统一文档。",
      "insight": "框架从「快速迭代」进入「稳定承诺」阶段，本身就是 Agent 工程成熟的信号。中间件化的 agent loop 让「治理钩子」（审批、脱敏、摘要）成为可插拔标准件——这正是 harness 从代码走向平台的方向。",
      "url": "https://www.langchain.com/blog/langchain-langgraph-1dot0",
      "source": "LangChain",
      "tags": ["LangChain", "middleware", "stable-release"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260710-03",
      "section": "industry",
      "title": "Google Cloud 发布《2026 AI Agent 趋势报告》，聚焦互操作与多智能体",
      "summary": "Google Cloud 上线《AI agent trends 2026》专题报告，围绕 Agent 互操作、多智能体系统与企业采用等主题梳理年度趋势，作为云厂商视角对 Agent 产业化方向的系统性判断。",
      "insight": "云厂商发布年度 Agent 趋势报告，本身反映 Agent 已成为云平台的战略叙事中心。对开发者而言，值得关注的是厂商如何把「互操作/多智能体」从概念转化为平台能力与默认架构。",
      "url": "https://cloud.google.com/resources/content/ai-agent-trends-2026",
      "source": "Google Cloud",
      "tags": ["Google-Cloud", "trends-report", "multi-agent"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "research-20260710-01",
      "section": "research",
      "title": "TTHE：Test-Time Harness Evolution——运行时演化的 Agent harness",
      "summary": "论文指出 LLM Agent 行为由模型与 harness 共同决定，harness 负责构造上下文、调用工具、校验中间结果与失败恢复。既有方法在部署前搜索定型 harness，TTHE 提出在测试时让 harness 持续演化，以适配部署后的真实任务分布。",
      "insight": "把优化从「训练/开发期」搬到「测试期」，是继 test-time compute 之后的又一次「运行时化」。当 harness 能在线演化，Agent 系统的能力边界不再由发布那一刻决定，而由部署后的持续适配决定。",
      "url": "http://arxiv.org/abs/2607.08124v1",
      "source": "arXiv",
      "tags": ["TTHE", "harness", "test-time"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260710-02",
      "section": "research",
      "title": "Tool-Making & Self-Evolving Agents：低延迟系统中的造工具流水线",
      "summary": "针对生产 Agent 在每次请求时重复生成同样过程性代码的浪费，论文用 agentic tool-making 流水线：在部署前把重复 SOP 步骤编译为经校验、带版本的工具；tool-maker 基于真实调用做 grounding，替代推理时的写代码循环。",
      "insight": "自进化的落地形态是「工具库的持续生长」。相比每次临场写代码，预编译 + 版本化的工具既降低延迟又提升可靠性，还天然支持回归测试——这是把「学习成果」纳入软件工程规范的关键一步。",
      "url": "http://arxiv.org/abs/2607.08010v1",
      "source": "arXiv",
      "tags": ["tool-making", "self-evolution", "SOP"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260710-03",
      "section": "research",
      "title": "From Prompts to Contracts：可审计企业 Agent 的 harness 工程",
      "summary": "论文提出把从 prompt/检索承载行为的企业 Agent 原型，重构为具备来源边界、实体路由、答案契约与可复现 trace 的产品化系统，给出一套 harness-engineering 的重建路径。",
      "insight": "「契约化」是 Agent 可审计的核心：把「模型应该怎么答」从提示词里的模糊约定，变成可校验、可拒绝、可追溯的显式契约。这让 Agent 的输出第一次具备了可被合规与法务接受的工程属性。",
      "url": "http://arxiv.org/abs/2607.08028v1",
      "source": "arXiv",
      "tags": ["harness", "contracts", "enterprise"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260710-04",
      "section": "research",
      "title": "Who Broke the System？LLM 多智能体系统的故障定位",
      "summary": "论文针对 LLM 多 Agent 系统的分布式结构带来的「系统级失败难诊断」问题——执行失败时难以判断是哪个 Agent、在轨迹哪一步出错——提出故障定位方法，把责任归因到具体 Agent 与步骤。",
      "insight": "多 Agent 的可靠性瓶颈正从「单体能力」转向「协作可观测」。故障定位是治理的前提：无法归因就无法追责，也就无法迭代。这与单 Agent 的 trace 可观测形成互补的「系统级 trace」。",
      "url": "http://arxiv.org/abs/2607.07989v1",
      "source": "arXiv",
      "tags": ["multi-agent", "failure-localization", "diagnosis"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260710-05",
      "section": "research",
      "title": "WebSwarm：面向深且广网络搜索的递归多智能体编排",
      "summary": "单一 ReAct 式搜索 Agent 受限于单条长轨迹与有限上下文，难以同时兼顾深度与覆盖。WebSwarm 提出渐进式递归委派框架，动态实例化搜索节点，每个节点可自解或继续委派子节点，并在同层节点间复用过程经验，兼顾深、广、深广交织任务。",
      "insight": "「递归委派 + 经验复用」把多 Agent 编排从静态拓扑变为随任务动态生长的树。这对复杂研究型任务的启示是：不要预设固定的 Agent 分工，而让分工随问题结构自适应展开。",
      "url": "http://arxiv.org/abs/2607.08662v1",
      "source": "arXiv",
      "tags": ["WebSwarm", "multi-agent", "orchestration"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260710-06",
      "section": "research",
      "title": "Token-Flow Firewall：面向持久 Agent 的运行时语义审计",
      "summary": "持久 Agent 把 LLM 从单轮交互延伸为长生命周期软件，不安全内容会经持久状态、可复用技能与工具交互传播，形成更大的语义攻击面。论文观察到多数安全关键交互都以自然语言 token 流传递，提出在 token 流层做边界感知的运行时语义审计。",
      "insight": "把安全从「模型对齐」下沉到「token 流审计」，是一种务实的纵深防御：不假设模型永远安全，而在记忆更新、工具参数、检索文件等 token 流动的边界处设卡。这与确定性门、多智能体监控共同构成 Agent 的运行时安全栈。",
      "url": "http://arxiv.org/abs/2607.08395v1",
      "source": "arXiv",
      "tags": ["token-flow", "runtime-audit", "security"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260710-01",
      "section": "china",
      "title": "2026 WAIC 7/17-20 上海举办：10 万㎡ 展馆、1100+ 企业、300+ 首发",
      "summary": "2026 世界人工智能大会暨人工智能全球治理高级别会议将于 7/17-20 在上海举办，展览面积超 10 万㎡，1100+ 企业参展、3000+ 展品、140+ 论坛，超 300 款产品全球首发，规模与首发数量均创新高。",
      "insight": "WAIC 从「展示概念」进化为「首发产品」——300+ 首发意味着中国 AI 产业链已具备规模化产品化能力。作为全球治理高级别会议的一部分，「产品首发 + 治理议题」并行也预示 Agent 的合规叙事在升温。",
      "url": "https://www.szzg.gov.cn/2026/xwzx/szkx/202607/t20260708_5344077.htm",
      "source": "经济参考报",
      "tags": ["WAIC", "300+首发", "上海"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260710-02",
      "section": "china",
      "title": "全球首款 AI 智能体手机将在 2026 WAIC 首发首秀",
      "summary": "据报道，全球首款 AI 智能体（Agent）手机将在 2026 世界人工智能大会首发首秀，主打将智能体能力内置到端侧设备，作为大会「智能体」主题的标志性产品之一亮相。",
      "insight": "智能体手机把 Agent 推向端侧，带来一组新的架构约束：本地/云协同推理、隐私边界、离线可用与电量成本。谁能在端侧跑出可用的 Agent 体验，谁就掌握了「随身智能体」的入口。",
      "url": "https://finance.sina.com.cn/7x24/2026-07-07/doc-inifxxwy1486320.shtml",
      "source": "新浪财经",
      "tags": ["智能体手机", "端侧Agent", "WAIC"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260710-03",
      "section": "china",
      "title": "阶跃 Agent OS、MiniMax M3、华为 Atlas 950 等将在 WAIC 首发",
      "summary": "2026 WAIC 首发名单中，除全球首款智能体手机外，还包括阶跃 Agent（智能体）操作系统、MiniMax M3 多模态大模型、华为 Atlas 950 等，覆盖 Agent 操作系统、多模态模型与算力硬件多个层次。",
      "insight": "从 Agent OS 到多模态模型再到算力硬件同台首发，说明国内正沿「端-模-算」全栈布局智能体。Agent OS 尤其值得关注：它试图把「智能体」抽象为系统级一等公民，而非某个 App 的功能。",
      "url": "https://www.szzg.gov.cn/2026/xwzx/szkx/202607/t20260708_5344077.htm",
      "source": "经济参考报",
      "tags": ["Agent-OS", "MiniMax-M3", "华为Atlas"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260710-04",
      "section": "china",
      "title": "新华社《环球》：2026 是「智能体爆发年」",
      "summary": "新华社《环球》杂志刊文判断 2026 年为「智能体爆发年」，认为 AI 正从大模型能力竞赛转向以智能体为核心形态的规模化落地，智能体在产业与社会场景中的渗透进入加速期。",
      "insight": "主流媒体把 2026 定义为「智能体爆发年」，反映智能体已从技术圈热词进入公共叙事。当社会预期被拉高，落地的真实体验与治理成熟度能否跟上，将决定这波热潮是兑现还是回调。",
      "url": "https://www.xinhuanet.com/globe/20260402/39ce4b6b703843a6aef41257f02976e0/c.html",
      "source": "新华社《环球》",
      "tags": ["智能体爆发年", "产业趋势", "新华社"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
