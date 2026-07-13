window.APP_DATA = {
  "generatedAt": "2026-07-13T08:00:00Z",
  "sourceDigestDate": "2026-07-13",
  "dateText": "2026年7月13日 星期日",
  "editorNote": [
    "今天的主线是 <strong>「持久 Agent 记忆」从单会话 hack 走向架构级设计</strong>。<a href=\"http://arxiv.org/abs/2607.09493v1\" target=\"_blank\" rel=\"noopener noreferrer\">Shared Selective Persistent Memory</a> 提出四类可复用上下文（任务规格、数据 schema、工具配置、输出约束）+ zero-token refresh 机制，在企业场景达 96% 任务完成率、97× token 降本；<a href=\"http://arxiv.org/abs/2607.09175v1\" target=\"_blank\" rel=\"noopener noreferrer\">GRACE</a> 用图正则化让长周期 Agent 的 persistent instruction 可在分布偏移下安全演化，pass³ 从 0.091 提升到 0.673。两者共同指向一个结论——Agent 的「记忆」不是 prompt 里堆文本，而是需要结构化基底 + 选择性保留 + 可验证更新。",
    "<strong>Gemini 3.5 Pro 7/17 发布倒计时 + Claude Code 内置浏览器 + 编码 Agent 全面进入「IDE 融合」</strong>。Google DeepMind 把 <a href=\"https://www.techtimes.com/articles/319877/20260708/gemini-35-pro-targets-july-17-deepseeks-july-24-deadline-hits-developers-now.htm\" target=\"_blank\" rel=\"noopener noreferrer\">Gemini 3.5 Pro</a> 锁定 7/17（与 WAIC 同日）；<a href=\"https://code.claude.com/docs/en/whats-new\" target=\"_blank\" rel=\"noopener noreferrer\">Claude Code v2.1.202+</a> 新增 Desktop 内置浏览器与 /doctor 诊断，子 Agent 后台运行成默认行为；多节点编码 Agent <a href=\"https://github.com/Runfusion/Fusion\" target=\"_blank\" rel=\"noopener noreferrer\">Fusion（942 Stars）</a>把 Agent 工厂模式推向「24/7 并行交付」。",
    "<strong>安全与可审计：从模型对齐下沉到 harness 层</strong>。<a href=\"http://arxiv.org/abs/2607.09195v1\" target=\"_blank\" rel=\"noopener noreferrer\">HEP（Hypothesis Evolution Protocol）</a>让 AI 科学家的假说-检验-信念演化过程显式可审计；<a href=\"http://arxiv.org/abs/2607.09653v1\" target=\"_blank\" rel=\"noopener noreferrer\">VEXAIoT</a> 用多 Agent 对 IoT 做自主渗透测试，95% 攻击成功率暴露当前 IoT 安全在 Agent 面前的脆弱性；Mosaic 把 ILP 约束引入多 Agent 规划，用确定性门消除冲突动作——harness 正从「辅助框架」变为「安全与正确性的最后一道门」。",
    "<strong>今日新增信号：编码 Agent 舰队、Agent 安全事故、模型价格战交汇</strong>。<a href=\"https://bun.com/blog/bun-in-rust\" target=\"_blank\" rel=\"noopener noreferrer\">Bun v1.4 canary</a> 用约 64 个 Claude 实例在 11 天内完成 Zig→Rust 全量重写（6,502 次提交、对抗式 review），是迄今公开规模最大的 Agent 舰队工程；<a href=\"https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/\" target=\"_blank\" rel=\"noopener noreferrer\">GitLost</a> 通过公开 issue 的间接 prompt injection 让 GitHub 代理工作流把私有仓库内容贴到公开评论，佐证「Agent 读到的用户内容即指令通道」；<a href=\"https://x.ai/news/grok-4-5\" target=\"_blank\" rel=\"noopener noreferrer\">Grok 4.5</a> 与 <a href=\"https://openai.com/index/gpt-5-6/\" target=\"_blank\" rel=\"noopener noreferrer\">GPT-5.6 Luna</a> 均把输出价压到 6 美元/百万 tokens，倒逼 Anthropic 计费与 Agent 架构团队重新算账。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 88 },
    { "label": "Agent 自进化", "value": 92 },
    { "label": "A2A / 互操作", "value": 82 },
    { "label": "Agentic 架构", "value": 90 },
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
      "date": "07.13",
      "fullDate": "2026-07-13",
      "theme": "持久记忆架构化 + 编码 Agent 舰队 + Agent 安全事故 + 模型价格战 + Harness 可审计",
      "take": "Shared Selective Persistent Memory 把 Agent 记忆从堆 prompt 变为四维选择性保留+zero-token refresh（96%完成率/97×降本）；GRACE 用图正则化让 persistent instruction 在分布偏移下安全演化（pass³ 0.091→0.673）；Gemini 3.5 Pro 锁定7/17、Claude Code v2.1.202+新增Desktop内置浏览器与/doctor诊断；HEP让AI科学家的假说演化可审计；Fusion 942 Stars做多节点Agent工厂；VEXAIoT多Agent对IoT自主渗透测试95%成功率；Bun v1.4 canary用64 Claude实例11天完成Zig→Rust全量重写；GitLost用公开issue的prompt injection让GitHub代理工作流泄露私有仓；Grok 4.5/GPT-5.6 Luna/Fable-5 输出价收敛至~$6/M tokens。",
      "items": [
        {
          "title": "Shared Selective Persistent Memory：四维选择性记忆 + zero-token refresh",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.09493v1"
        },
        {
          "title": "GRACE：图正则化上下文演化，持久 Agent 长周期安全进化",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.09175v1"
        },
        {
          "title": "Claude Code v2.1.202+：Desktop 内置浏览器 + /doctor 诊断 + 子Agent后台默认",
          "source": "Anthropic",
          "url": "https://code.claude.com/docs/en/whats-new"
        },
        {
          "title": "Bun v1.4 canary：64 Claude 实例 11 天完成 Zig→Rust 全量重写（6502 提交）",
          "source": "Bun",
          "url": "https://bun.com/blog/bun-in-rust"
        },
        {
          "title": "GitLost：公开 issue 的间接 prompt injection 让 GitHub 代理工作流泄露私仓",
          "source": "Noma Security",
          "url": "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/"
        },
        {
          "title": "Grok 4.5 / GPT-5.6 Luna / Claude Fable-5：输出价收敛至 ~$6/M tokens",
          "source": "xAI / OpenAI / Anthropic",
          "url": "https://x.ai/news/grok-4-5"
        }
      ]
    },
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
    }
  ],
  "items": [
    {
      "id": "hot-20260713-01",
      "section": "hot",
      "title": "Shared Selective Persistent Memory：让 Agent 在协作中选择性记住、零成本刷新",
      "summary": "论文提出四类可复用上下文（任务规格、数据 schema、工具配置、输出约束）作为 Agent 的选择性持久记忆，加入 zero-token data refresh 机制使数据更新不再需要重新调用 LLM。部署于协作工作空间平台，支持 RBAC 共享记忆。企业场景下达 96% 任务完成率（无记忆 79%/全量历史 71%），token 降本 97×。",
      "insight": "记忆的关键不是「记住一切」而是「知道该记什么、何时该忘」。Selective Memory + zero-token refresh 证明了：结构化选择 > 全量堆砌，把记忆纳入 RBAC 和版本控制后才具备跨人协作的信任基础。",
      "url": "http://arxiv.org/abs/2607.09493v1",
      "source": "arXiv",
      "tags": ["persistent-memory", "selective", "zero-token"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260713-02",
      "section": "hot",
      "title": "GRACE：图正则化长周期 Agent 上下文演化，分布偏移下 pass³ 提升 7.4×",
      "summary": "部署后的 LLM Agent 依赖 persistent system instruction 控制行为，但长周期平面文本维护在分布偏移下易失控。GRACE 把 instruction 维护为类型化语义图，更新时仅验证修改节点的局部邻域，接受后增量编辑文本 checkpoint。在 τ²-bench 电信 Agent 上，pass³ 从 Gemini 2.5 Flash 零样本的 0.091 提升到 0.673±0.136。",
      "insight": "两个关键设计：(1) 结构化基底让验证局部化——不需要读全文就能判断更新是否安全；(2) 合并机制防止指令膨胀。这意味着 Agent 的「自我修正」可以有结构化护栏，而不是自由文本的无限堆叠。",
      "url": "http://arxiv.org/abs/2607.09175v1",
      "source": "arXiv",
      "tags": ["GRACE", "context-evolution", "distribution-shift"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260713-03",
      "section": "hot",
      "title": "Gemini 3.5 Pro 锁定 7/17 发布：与 WAIC 同日、DeepSeek 7/24 紧随",
      "summary": "Google DeepMind 将 Gemini 3.5 Pro 发布日期确认为 7月17日（此前因放弃原始方案推迟数月）。同期 DeepSeek 宣布 7/24 截止日。Gemini 3.5 Pro 预期为全系列最强推理模型，聚焦超长上下文、agentic 能力与多模态融合。",
      "insight": "7/17 是 WAIC 开幕日——Gemini 3.5 Pro 选在此日发布形成全球级注意力叠加。接下来一周（7/17 Gemini → 7/24 DeepSeek）将形成密集的模型军备竞赛窗口，Agent 开发者需提前规划模型切换与评测。",
      "url": "https://www.techtimes.com/articles/319877/20260708/gemini-35-pro-targets-july-17-deepseeks-july-24-deadline-hits-developers-now.htm",
      "source": "TechTimes",
      "tags": ["Gemini-3.5-Pro", "DeepSeek", "model-release"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260713-04",
      "section": "hot",
      "title": "Claude Code v2.1.202+：Desktop 内置浏览器、/doctor 诊断、子 Agent 后台默认",
      "summary": "Anthropic 发布 Claude Code Week 28 更新（v2.1.202–206）：Desktop 版新增内置浏览器，Agent 可直接访问文档与设计稿；/doctor（别名 /checkup）做全量环境诊断并自动修复；auto mode 安全增强（阻止 transcript 篡改、rm -rf 拦截）；子 Agent 默认后台运行，主会话不再阻塞。",
      "insight": "内置浏览器让编码 Agent 的上下文边界从文件系统扩展到 Web——这意味着 Agent 可以自主查阅文档、校验 UI，无需人类复制粘贴。/doctor 则是 Agent 自我诊断能力的雏形，呼应「自进化从环境感知开始」的趋势。",
      "url": "https://code.claude.com/docs/en/whats-new",
      "source": "Anthropic",
      "tags": ["Claude-Code", "browser", "self-diagnosis"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260713-05",
      "section": "hot",
      "title": "Mosaic：ILP 约束驱动的多 Agent 具身规划，速度提升 27-32%",
      "summary": "多 Agent 具身规划中失败动作是延迟瓶颈。Mosaic 用 agent-centric semantic memory（相对坐标+几何变换）做轻量状态追踪，用整数线性规划（ILP）在每个规划步做动作分配，强制物理可行性与跨 Agent 协调约束。在 AI2-THOR 等基准上，执行速度提升 27-32%，LLM 调用减少 30-33%。",
      "insight": "用 ILP 做确定性约束 + LLM 做高层规划的组合，是「harness + model」分工的又一范例：把需要正确性保证的部分交给确定性系统，把需要灵活性的部分留给 LLM。这种混合架构正在成为可靠多 Agent 系统的标准模式。",
      "url": "http://arxiv.org/abs/2607.09603v1",
      "source": "arXiv",
      "tags": ["Mosaic", "multi-agent", "ILP", "embodied"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260713-06",
      "section": "hot",
      "title": "Bun v1.4 canary：64 个 Claude 实例 11 天完成 Zig→Rust 全量重写",
      "summary": "Bun 团队公开披露：用约 64 个 Claude Fable-5 实例、11 天、6,502 次提交完成从 Zig 到 Rust 的运行时全量重写，Agent 之间采用对抗式 review 协同。v1.4 canary 是首个 Rust 构建版本，修复 128 个 bug，运行速度快 2–5%，产物体积小约 20%。团队称迁移动因是 Zig 中 GC 值与手动内存混用导致的反复 use-after-free。",
      "insight": "这是目前公开规模最大的编码 Agent 舰队工程实录：舰队规模、任务时长与产出量级都在放大既有想象。真正被验证的不是「Agent 会写代码」，而是「Agent 舰队能围绕一个软件工程目标持续、并行、可复核地推进 6500+ 次改动」——这直接把 harness/编排/评审做成了一等工程学科。",
      "url": "https://bun.com/blog/bun-in-rust",
      "source": "Bun",
      "tags": ["Bun", "Claude", "agent-fleet", "rewrite"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260713-07",
      "section": "hot",
      "title": "GitLost：公开 issue 的间接 prompt injection 让 GitHub 代理工作流泄露私仓",
      "summary": "Noma Security 披露 GitLost 漏洞：攻击者在公开 issue body 中埋藏隐蔽指令，当 GitHub 上的代理工作流读取该 issue 时会执行这些指令，将私有仓库内容作为普通评论回帖到公开 issue——整个过程不需要额外认证。该问题已在披露前负责任地上报 GitHub。",
      "insight": "GitLost 用具体事故证明了「Agent 读到的任何用户内容都是潜在指令通道」这条安全原则。对于任何把外部内容送入 Agent 的工作流（issue、PR、邮件、页面），最小权限、写操作白名单与出站内容审计都必须默认开启，否则 prompt injection 就是免认证 RCE。",
      "url": "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/",
      "source": "Noma Security",
      "tags": ["prompt-injection", "GitHub", "agent-security"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260713-08",
      "section": "hot",
      "title": "Grok 4.5 / GPT-5.6 Luna / Claude Fable-5：agentic 模型输出价收敛至 ~$6/M tokens",
      "summary": "xAI 上线 Grok 4.5，定价 $2 输入 / $6 输出（每百万 tokens），主打编码/agentic 场景，并把 Cursor 会话数据用于训练；OpenAI 同期 GPT-5.6 Luna 价格档同为 $1/$6；Anthropic 新发的 Claude Fable-5/Mythos-5 通用档 $10/$50，但较此前预览版降幅超 50%。",
      "insight": "$6/M 输出 tokens 正在成为 agentic 模型的价格基线——这一价位对 Agent 舰队与长任务尤其关键，因为 Agent 场景的 token 消耗远超对话场景。团队应把「按 API 计价、按 Agent 归因、按任务预算」作为架构第一类需求，而不是财务事后核算。",
      "url": "https://x.ai/news/grok-4-5",
      "source": "xAI",
      "tags": ["Grok-4.5", "GPT-5.6", "pricing"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260713-01",
      "section": "keyong",
      "title": "Selective Memory = 「Agent 自进化」的信任基础设施",
      "summary": "Shared Selective Persistent Memory 把 Agent 记忆从「全量 append」重构为四维选择性保留（任务规格/数据schema/工具配置/输出约束），丢弃会话推理 trace，加入 RBAC 实现跨用户共享。zero-token refresh 让数据更新不触发 LLM 重调用。",
      "insight": "→ Keyong 关联：呼应「Agent 自进化」+「Agentic 架构」。自进化的前提是「知道什么值得记住」——全量堆积反而退化（论文证实全量历史 71% < 无记忆 79%）。Selective Memory 给出的四维分类是「自进化应该沉淀什么」的工程答案。",
      "url": "http://arxiv.org/abs/2607.09493v1",
      "source": "arXiv",
      "tags": ["memory", "self-evolution", "architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260713-02",
      "section": "keyong",
      "title": "GRACE 图正则化演化 = 持久 Agent 的「安全自进化 harness」",
      "summary": "GRACE 把 Agent 的 persistent instruction 从平面文本变为类型化语义图，每次更新只验证修改节点的局部邻域。合并机制防止指令膨胀。在 τ²-bench 电信场景，pass³ 从零样本 0.091 提升到 0.673（flat-text HCE baseline 仅 0.191）。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agent 自进化」。GRACE 证明：(1) 自进化不能无约束——平面文本演化会衰退；(2) 结构化基底让验证局部化——是让 harness 安全演化的关键设计。这正是 TTHE（07.10）的工程落地方向。",
      "url": "http://arxiv.org/abs/2607.09175v1",
      "source": "arXiv",
      "tags": ["harness", "self-evolution", "graph-regularized"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260713-03",
      "section": "keyong",
      "title": "HEP 可审计假说演化 = Harness 让科学 Agent 的推理过程可追溯",
      "summary": "Hypothesis Evolution Protocol 把 AI 科学 Agent 的假说生成、评估与演化定义为显式的、可审计的 harness 操作。在材料科学任务上，HEP Agent 显式运行假说-检验-证据-信念循环，且随模型能力增强利用协议更充分。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agentic 开发」。HEP 把「推理过程可审计」从工程诉求变为 harness 设计：不是事后 log，而是把推理步骤内化为协议操作。这与 From Prompts to Contracts（07.10）是同一设计哲学的不同落点。",
      "url": "http://arxiv.org/abs/2607.09195v1",
      "source": "arXiv",
      "tags": ["harness", "auditable", "scientific-agent"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260713-04",
      "section": "keyong",
      "title": "Claude Code 内置浏览器 = 编码 Agent 的「环境感知」边界扩展",
      "summary": "Claude Code Desktop 新增内置浏览器，Agent 可直接拉取文档、设计稿或任意网页内容。子 Agent 后台运行成默认，主会话不再阻塞。/doctor 做环境全量诊断并自动修复。",
      "insight": "→ Keyong 关联：呼应「Agentic 开发」+「Harness 工程」。浏览器接入把 Agent 的感知边界从本地文件扩展到 Web——当 Agent 能自主查文档验 UI，人类的「复制粘贴传令」角色进一步弱化。/doctor 是 Agent 自我诊断的起点，指向「Agent 能修自己的 harness」。",
      "url": "https://code.claude.com/docs/en/whats-new",
      "source": "Anthropic",
      "tags": ["coding-agent", "browser", "environment-sensing"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260713-05",
      "section": "keyong",
      "title": "Mosaic ILP 约束 + LLM 规划 = 「确定性门」在多 Agent 中的具身实践",
      "summary": "Mosaic 用 ILP 在每个规划步分配动作，强制物理可行性与跨 Agent 协调约束，消除冲突与冗余动作。LLM 调用减 30-33%，成功率提升 4-10pp，执行速度快 27-32%。",
      "insight": "→ Keyong 关联：呼应「A2A / 互操作」+「Agentic 架构」。ILP 约束在这里扮演的角色等价于 Deterministic Gates（07.09）——用确定性系统做「该不该执行」的决策，LLM 只负责「想做什么」。这种 harness 层的硬约束设计是多 Agent 可靠协作的架构前提。",
      "url": "http://arxiv.org/abs/2607.09603v1",
      "source": "arXiv",
      "tags": ["multi-agent", "ILP", "deterministic-gate"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260713-01",
      "section": "opensource",
      "title": "Runfusion/Fusion（942 Stars）：多节点 Agent 编排器，24/7 软件工厂",
      "summary": "Fusion 定位为「Your Software Factory」——多节点 Agent 编排器，让 AI Agent 7×24 并行工作。TypeScript 实现，支持多模型后端、角色路由与交付合约，把单 Agent 的编码能力扩展到团队级持续交付流水线。",
      "insight": "从「单个 coding agent」到「多节点 Agent 工厂」的演进，本质是把 CI/CD 流水线的思维应用到 AI Agent——角色分工、并行执行、交付合约。这暗示 Agent 的下一个形态可能不是更强的个体，而是更好的编排系统。",
      "url": "https://github.com/Runfusion/Fusion",
      "source": "GitHub",
      "tags": ["multi-node", "orchestrator", "coding-agent"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260713-02",
      "section": "opensource",
      "title": "openakita（1.8K Stars）：开源 AI 助手框架，技能 + Agent 架构",
      "summary": "openakita 是一个开源 AI 助手框架，以技能（Skill）为核心抽象构建 Agent 架构。Python 实现，1842 Stars。强调模块化技能组合与 Agent 生命周期管理，适合构建可扩展的领域 Agent。",
      "insight": "「技能即模块」的设计把 Agent 能力从 monolithic prompt 拆解为可组合单元——这与 Tool-Making（07.10）和 EvoSOP（07.09）指向同一方向：Agent 的进化产物应该是可复用、可测试的离散技能。",
      "url": "https://github.com/openakita/openakita",
      "source": "GitHub",
      "tags": ["skill-architecture", "agent-framework", "modular"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260713-03",
      "section": "opensource",
      "title": "animaworks（244 Stars）：Organization-as-Code，大脑启发的 Agent 记忆系统",
      "summary": "animaworks 把 Agent 组织定义为代码（Organization-as-Code），配备大脑启发的记忆系统——可生长、可整合、可遗忘。支持 Claude/Codex/Gemini/Cursor/Ollama 多模型，实现自主 AI Agent 的组织化运作。",
      "insight": "「可遗忘的记忆」与今天的 Selective Memory 论文遥相呼应——记忆的价值不在容量，而在「知道什么该留什么该丢」。Organization-as-Code 则把 Agent 协作从 ad-hoc 变为可声明、可版本管理的基础设施。",
      "url": "https://github.com/xuiltul/animaworks",
      "source": "GitHub",
      "tags": ["org-as-code", "brain-memory", "multi-model"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260713-04",
      "section": "opensource",
      "title": "jmagly/agentic-sandbox（10 Stars）：KVM 隔离 + A2A 协议的自主 Agent 运行时",
      "summary": "agentic-sandbox 是自托管的持久自主编码 Agent 运行时：KVM 隔离 VM（或 rootless 容器）、A2A 协议执行器（含签名 AgentCard 发现）、AIWG mission dispatch、Web 仪表盘、virtiofs 共享存储。运行在自有硬件，无托管控制面。",
      "insight": "把 Agent 运行时做到 KVM 隔离级别 + A2A 协议原生支持，是「sandbox as infrastructure」的进阶。当编码 Agent 需要长期运行且可能互相交互时，硬件级隔离 + 协议级互操作就是必需的架构组合。",
      "url": "https://github.com/jmagly/agentic-sandbox",
      "source": "GitHub",
      "tags": ["sandbox", "KVM", "A2A", "self-hosted"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260713-05",
      "section": "opensource",
      "title": "Fmarzochi/EGC（31 Stars）：本地优先 MCP 运行时，跨会话持久记忆",
      "summary": "EGC 是本地优先的 MCP 运行时，让 AI Agent 跨会话保持持久记忆——「Your AI agents never start from zero again」。JavaScript 实现，强调本地数据主权与会话间状态延续。",
      "insight": "本地优先 + 跨会话记忆解决的是开发者日常痛点：每次新会话都要重新交代上下文。当与 Selective Memory 论文结合来看，下一步是「本地运行时 + 选择性保留」——让记忆既持久又不膨胀。",
      "url": "https://github.com/Fmarzochi/EGC",
      "source": "GitHub",
      "tags": ["MCP", "persistent-memory", "local-first"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260713-01",
      "section": "voices",
      "title": "Google Neil Hoyne：Deep Research Max 是「耐心工作到天亮的 AI」——两速分治",
      "summary": "Google Chief Strategist Neil Hoyne 把 Deep Research 和 Deep Research Max 定义为「两种速度，两种用途」：标准版做交互式快速研究，Max 做异步长时间任务（每次约 160 次搜索），称 Max 为「the patient AI who works through the night」，同时强调「不会替代好的判断力」。",
      "insight": "「两速分治」揭示了 Agent 产品设计的核心取舍：交互式 Agent 追求响应速度，异步 Agent 追求覆盖深度——两者的运行时需求（上下文管理、成本控制、结果质量保障）完全不同，不应硬塞进同一架构。",
      "url": "https://www.edtechinnovationhub.com/news/googles-new-ai-agent-will-run-160-searches-while-you-sleep-and-hand-you-the-report-by-morning",
      "source": "EdTech Innovation Hub",
      "tags": ["Deep-Research-Max", "async-agent", "two-speed"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260713-02",
      "section": "voices",
      "title": "Anthropic 安全团队：Agentic AI 扩大攻击面，模型对齐不够用",
      "summary": "Help Net Security 报道称 OpenAI 与 Anthropic 在 agentic AI 安全上「拉向不同方向」。Anthropic 安全研究强调：当 Agent 获得工具使用、持久状态与自主决策能力后，攻击面从「单轮 prompt」扩展为「持续运行的软件系统」，传统的模型对齐不再足以覆盖安全需求。",
      "insight": "「安全从对齐下沉到运行时」是本周的一条暗线：Token-Flow Firewall（07.10）、VEXAIoT 自主渗透（今日）、GRACE 结构化约束（今日）都指向同一方向——Agent 的安全不能只靠模型，必须在 harness/runtime 层设置确定性防线。",
      "url": "https://www.helpnetsecurity.com/2026/07/08/openai-anthropic-agentic-ai-security-risk/",
      "source": "Help Net Security",
      "tags": ["Anthropic", "security", "attack-surface"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260713-03",
      "section": "voices",
      "title": "Agora 拍卖机制做 Agent 任务分配：让最有能力者接活，而非最自信者",
      "summary": "论文 Agora 提出用激励相容的拍卖机制动态分配任务给 expert model/tool：把推理步骤视为可交易物品，Agent 基于校正后的能力值竞价，确保关键逻辑被路由到最有能力的 solver 而非最过度自信的那个。五个基准上优于单模型/路由/级联 baseline。",
      "insight": "拍卖机制引入了市场式的「信号真实性」约束——过度自信的 Agent 会在竞价中暴露。这为多模型系统提供了一种不依赖中心评审的动态质量控制机制，可控的 cost-quality tradeoff 通过单一拍卖参数调节。",
      "url": "http://arxiv.org/abs/2607.09600v1",
      "source": "arXiv",
      "tags": ["Agora", "auction", "task-routing"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260713-01",
      "section": "industry",
      "title": "Gemini 3.5 Pro 7/17 发布 vs DeepSeek 7/24：新一轮模型军备赛一周内密集释放",
      "summary": "Google DeepMind 确认 Gemini 3.5 Pro 7/17 发布（此前因放弃原始方案多次延期），DeepSeek 则锁定 7/24 截止日。两大模型在一周内先后释放，叠加 WAIC 7/17 开幕，形成全球 AI 产业的「超级窗口期」。",
      "insight": "对 Agent 开发者的实际影响：(1) 下周起需评估 Gemini 3.5 Pro 在 agentic 任务上的表现；(2) DeepSeek 新版本可能改变开源模型的性价比格局；(3) 评测 harness 需提前就绪以应对快速模型切换。",
      "url": "https://www.techtimes.com/articles/319877/20260708/gemini-35-pro-targets-july-17-deepseeks-july-24-deadline-hits-developers-now.htm",
      "source": "TechTimes",
      "tags": ["Gemini-3.5-Pro", "DeepSeek", "model-race"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260713-02",
      "section": "industry",
      "title": "Claude Sonnet 5 成为 Claude Code 默认模型，原生 1M context + adaptive thinking",
      "summary": "Anthropic 在 Week 27 更新中将 Claude Sonnet 5 设为 Pro/Team/Enterprise 的默认模型，原生 1M token context window，adaptive thinking 默认开启。同期 Claude in Chrome GA、Linux Desktop Beta 上线。",
      "insight": "1M context + adaptive thinking 默认开启意味着 Claude Code 的「单会话可覆盖范围」大幅扩展——对长 codebase 理解、跨文件重构等 Agent 任务是直接的能力提升。这也提高了对记忆管理的要求：context 越大，选择性保留越重要。",
      "url": "https://code.claude.com/docs/en/whats-new",
      "source": "Anthropic",
      "tags": ["Claude-Sonnet-5", "1M-context", "adaptive-thinking"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260713-03",
      "section": "industry",
      "title": "Google Deep Research Max：异步 Agent 进入 Gemini API 公开预览",
      "summary": "Google DeepMind 把 Deep Research 和 Deep Research Max（基于 Gemini 3.1 Pro）以公开预览形式上线 Gemini API。Max 单任务约 160 次搜索、100+ 来源、支持 MCP 接入企业数据。FactSet/S&P Global/PitchBook 建设 MCP 集成。DeepSearchQA 93.3%、BrowseComp 85.9%。",
      "insight": "Deep Research Max 通过 MCP 接入企业数据源，意味着 Google 在用 MCP 协议做 Agent 的「数据互操作」——与 WebMCP（06.08）形成互补：WebMCP 让网页变工具，MCP Server 让企业数据变工具。Agent 的数据边界正在被系统性打开。",
      "url": "https://www.edtechinnovationhub.com/news/googles-new-ai-agent-will-run-160-searches-while-you-sleep-and-hand-you-the-report-by-morning",
      "source": "EdTech Innovation Hub",
      "tags": ["Deep-Research-Max", "Gemini-API", "MCP"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260713-04",
      "section": "industry",
      "title": "OpenAI vs Anthropic：agentic AI 安全路线分化——系统安全 vs 模型对齐",
      "summary": "Help Net Security 分析 OpenAI 和 Anthropic 在 agentic AI 安全上的路线分化：Anthropic 强调 Agent 的攻击面已从单轮 prompt 扩展为持续运行的软件系统，需要系统级安全工程；OpenAI 则更倾向于通过模型能力提升（o-系列推理模型）内化安全行为。",
      "insight": "两条安全路线都有盲点：纯模型对齐在工具调用链中可能被绕过；纯系统安全可能限制 Agent 能力上限。实际生产中很可能需要两者结合——这也解释了为什么 Token-Flow Firewall 和 Deterministic Gates 在学术界同时兴起。",
      "url": "https://www.helpnetsecurity.com/2026/07/08/openai-anthropic-agentic-ai-security-risk/",
      "source": "Help Net Security",
      "tags": ["OpenAI", "Anthropic", "security-philosophy"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260713-01",
      "section": "research",
      "title": "Shared Selective Persistent Memory：选择性记忆 + zero-token refresh 的完整工程方案",
      "summary": "针对多轮 Agent 每次从零开始的问题，提出选择性保留四类上下文（任务规格/数据schema/工具配置/输出约束）、丢弃推理trace。带 RBAC 的共享工作空间可跨用户传递。zero-token refresh 使数据更新无需 LLM 重调用。企业三场景 96% 完成率，四个公开数据集验证泛化性。",
      "insight": "论文的核心发现出人意料：全量历史 71% < 无记忆 79% < 选择性记忆 96%。这证明了「信息过载对 Agent 有害」不是直觉，而是量化事实。设计启示：Agent 的记忆系统应该有明确的「准入标准」和「过期策略」。",
      "url": "http://arxiv.org/abs/2607.09493v1",
      "source": "arXiv",
      "tags": ["persistent-memory", "selective", "workspace"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260713-02",
      "section": "research",
      "title": "GRACE：面向分布偏移的图正则化 Agent 上下文长周期演化",
      "summary": "提出 Graph-Regularized Agentic Context Evolution（GRACE），把 persistent instruction 维护为类型化语义图，更新时做局部邻域验证，接受后增量编辑文本 checkpoint。在 τ²-bench 五次独立复制中，pass³ 从 0.091 提升到 0.673±0.136，超越 Gemini 3.1 Pro 零样本参考值 0.242。",
      "insight": "GRACE 揭示了长周期上下文演化的两个必要条件：(1) 结构化基底让验证可局部化——避免每次更新都要全局一致性检查；(2) 合并/压缩机制防止指令膨胀。这为任何需要「从经验中学习」的 Agent 提供了结构化护栏。",
      "url": "http://arxiv.org/abs/2607.09175v1",
      "source": "arXiv",
      "tags": ["GRACE", "context-evolution", "typed-graph"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260713-03",
      "section": "research",
      "title": "HEP：让 AI 科学家的假说演化可检查、可验证、可复现",
      "summary": "Hypothesis Evolution Protocol（HEP）为 LLM Agent 科学发现提供显式的假说生成/评估/演化操作作为 agent harness。在材料科学研究任务上，HEP Agent 运行完整的假说-检验-证据-信念循环，且基础模型越强，对协议的利用越充分。",
      "insight": "HEP 的设计哲学是「推理即协议操作」——不是事后从 log 里重建推理链，而是在推理发生时就以协议形式结构化记录。这使得 Agent 的科学推理具备了与代码一样的可 review、可 diff、可 revert 属性。",
      "url": "http://arxiv.org/abs/2607.09195v1",
      "source": "arXiv",
      "tags": ["HEP", "auditable", "scientific-reasoning"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260713-04",
      "section": "research",
      "title": "VEXAIoT：多 Agent 自主 IoT 渗透测试，260 次攻击 95% 成功率",
      "summary": "提出 VEXAIoT 多 Agent 框架，用 LLM 推理+攻击工具对 IoT 设备做自主漏洞发现与利用。漏洞检测 Agent + 攻击执行 Agent 协同，在 IoTGoat 和 Metasploitable 环境跨 10 种攻击场景，260 次攻击执行总体成功率 95.0%，平均执行时间不到两分钟。",
      "insight": "95% 攻击成功率+两分钟执行时间意味着：Agent 级别的自主攻击能力已经远超大多数人工渗透测试的效率。这对 Agent 安全的启示是——防御方必须以同等自动化程度构建实时检测与响应，否则攻防不对称会急剧扩大。",
      "url": "http://arxiv.org/abs/2607.09653v1",
      "source": "arXiv",
      "tags": ["IoT-security", "multi-agent", "pentesting"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260713-05",
      "section": "research",
      "title": "Inside the Skill Market：SE 活动如何变成可复用 Agent 技能",
      "summary": "首次大规模实证研究公开的 SE（软件工程）技能仓库与市场：分析 SE 活动如何被封装为可复用技能、覆盖软件开发生命周期的哪些阶段、技能的演化特征与评估机制。发现 SE 活动正以技能形态成为新的可复用制品。",
      "insight": "从 library → component → service → skill 的复用形态演进意味着：Agent 时代的「包管理」对象不再是代码库，而是可组合的「能力单元」。Skill Market 的治理（版本/质量/安全）可能复现 npm/PyPI 的生态问题与教训。",
      "url": "http://arxiv.org/abs/2607.09065v1",
      "source": "arXiv",
      "tags": ["skill-market", "software-engineering", "reuse"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260713-06",
      "section": "research",
      "title": "Writing Bug Reports for Repair Agents：定位线索与修复建议最关键",
      "summary": "在 SWE-bench Verified 上研究「什么样的 bug report 最适合 Agent 修复」。对 441 个 bug report 做句子级标注（观察行为/期望行为/复现步骤/定位线索/修复建议），发现定位线索与修复建议与成功率正相关最强，而传统对人类有用的复现步骤对 Agent 帮助有限。",
      "insight": "对 Agent 来说，最有价值的 issue 信息是「在哪 + 怎么修」，而非「如何复现」——因为 Agent 的搜索与修复空间受限于上下文和工具，不像人类能通过试错理解问题。这对 issue 模板设计和 Agent-ready 文档有直接实践指导意义。",
      "url": "http://arxiv.org/abs/2607.09553v1",
      "source": "arXiv",
      "tags": ["bug-report", "SWE-bench", "agent-ready"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260713-01",
      "section": "china",
      "title": "2026 WAIC 7/17 开幕倒计时：Gemini 3.5 Pro 同日发布，全球 AI 超级窗口",
      "summary": "2026 世界人工智能大会 7/17-20 上海举办进入最后倒计时。Google 将 Gemini 3.5 Pro 选在同日发布，形成「全球最大 AI 展+最强推理模型」的双重事件叠加。300+ 新品首发、1100+ 企业参展，含全球首款智能体手机与阶跃 Agent OS。",
      "insight": "WAIC + Gemini 3.5 Pro 同日释放意味着 7/17 将成为本年度 AI 产业信息密度最高的一天。国内团队需特别关注：(1) Agent OS 的架构选择；(2) 智能体手机的端云分工；(3) Gemini 3.5 Pro 对中文 agentic 任务的支持度。",
      "url": "https://www.szzg.gov.cn/2026/xwzx/szkx/202607/t20260708_5344077.htm",
      "source": "经济参考报",
      "tags": ["WAIC", "Gemini-3.5-Pro", "countdown"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260713-02",
      "section": "china",
      "title": "每经：2026 为多智能体规模化「上岗元年」，B 端深水战开启",
      "summary": "每日经济新闻分析称 2026 年为多智能体规模化「上岗元年」，大模型竞争从 C 端聊天转向 B 端场景深耕。多智能体协作成为企业 AI 落地的核心形态，行业从「demo 秀」进入「生产部署」。",
      "insight": "「上岗元年」的判断与 Cisco 9 万人部署（07.08）、A2A 150+ 组织生产化（07.09）形成呼应——全球范围内企业 Agent 从实验转向规模化。B 端深水战的关键变量是：治理、成本可预测与跨系统互操作能力。",
      "url": "https://www.nbd.com.cn/articles/2026-01-05/4207937.html",
      "source": "每日经济新闻",
      "tags": ["多智能体", "B端", "上岗元年"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260713-03",
      "section": "china",
      "title": "阿里云开发者社区：2026 从大模型到智能体的技术落地革命",
      "summary": "阿里云开发者社区专题文章系统梳理 2026 年从大模型能力竞赛到智能体（Agent）落地的技术路径转变，涵盖 Agent 架构、工具调用、记忆管理与企业场景适配等核心议题。",
      "insight": "国内云厂商以开发者社区文章形式系统输出 Agent 方法论，反映「Agent 开发」正从前沿研究变为标准化技术文档——这是技术成熟的信号。开发者可关注其中对 Agent 记忆管理和工具调用的最佳实践沉淀。",
      "url": "https://developer.aliyun.com/article/1709274",
      "source": "阿里云开发者社区",
      "tags": ["阿里云", "Agent落地", "技术路径"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260713-04",
      "section": "china",
      "title": "新华网：2026 中国 AI 发展趋势前瞻——智能体与产业深度融合",
      "summary": "新华网深度报道《2026年中国AI发展趋势前瞻》，判断智能体将与产业深度融合，从垂直场景（金融/医疗/制造）到通用能力（推理/规划/工具使用）全面落地，AI 从「辅助工具」转向「自主执行者」。",
      "insight": "官方媒体把「AI 从辅助到自主」作为年度趋势定性，为 Agent 产业化提供了政策叙事支撑。但从技术视角看，「自主」的前提是可控、可审计、可追责——这正是 Harness 工程要解决的核心问题。",
      "url": "https://www.news.cn/20260128/3b2f11906fd74ca397fef9996c805a60/c.html",
      "source": "新华网",
      "tags": ["新华网", "趋势前瞻", "产业融合"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
