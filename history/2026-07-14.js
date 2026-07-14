window.APP_DATA = {
  "generatedAt": "2026-07-14T08:00:00Z",
  "sourceDigestDate": "2026-07-14",
  "dateText": "2026年7月14日 星期二",
  "editorNote": [
    "今天的主线是 <strong>编码 Agent 的「失败」与「长时可靠性」正式成为一门研究学科</strong>。<a href=\"https://arxiv.org/abs/2607.09510\" target=\"_blank\" rel=\"noopener noreferrer\">Failure as a Process</a> 首次把 CLI 编码 Agent 的失败当作「有起因、会演化、可能不可逆」的时间过程来解剖，而不是只看最终结果；<a href=\"https://arxiv.org/abs/2607.08964\" target=\"_blank\" rel=\"noopener noreferrer\">Long-Horizon-Terminal-Bench</a> 用 46 个跨九类的长任务 + 稠密奖励打分，衡量 Agent 的「中间进度」而非只判成败。两者共同把 harness 的关注点从「能不能做完」推向「过程可观测、失败可定位、进度可评分」。",
    "<strong>Agent 治理与互操作从口号走向可执行框架</strong>。<a href=\"https://arxiv.org/abs/2607.09586\" target=\"_blank\" rel=\"noopener noreferrer\">TrustX ARC</a> 给企业内部自建 agentic 系统提出十二维评分 + 五级自治度的风险分级工具；社区侧 <a href=\"https://www.rtrvr.ai/blog/agent-web-protocol-stack\" target=\"_blank\" rel=\"noopener noreferrer\">A2W（Agent-to-Web）</a> 提议在 MCP（工具）、A2A（Agent 间）之上补齐「网站执行层」，让站点可授权、可观测地被 Agent 调用。协议栈正在从「连接」扩展到「治理与执行边界」。",
    "<strong>开源工具链在这一周集中成熟</strong>：<a href=\"https://github.com/rpamis/comet\" target=\"_blank\" rel=\"noopener noreferrer\">comet（2.2K Stars）</a>把「想法→可评测工作流」做成技能 harness；<a href=\"https://github.com/responsibleai/ASSERT\" target=\"_blank\" rel=\"noopener noreferrer\">ASSERT</a> 用需求驱动生成行为级测试、支持 OTel trace 目标；<a href=\"https://github.com/decocms/studio\" target=\"_blank\" rel=\"noopener noreferrer\">deco studio</a> 做 Agent 控制面并按 token/美元逐笔计量；<a href=\"https://github.com/promptfoo/promptfoo\" target=\"_blank\" rel=\"noopener noreferrer\">promptfoo（2.3W Stars）</a>把红队/漏洞扫描接进 CI。评测、可观测、成本归因正从「附属脚本」变为一等工程组件。",
    "<strong>自进化落到垂直场景、规划开始「去 LLM 化」</strong>。<a href=\"https://arxiv.org/abs/2607.09521\" target=\"_blank\" rel=\"noopener noreferrer\">SAGEAgent</a> 把「要不要再采一个诊断模态」建模为序贯决策，让自进化 Agent 在成本约束下做取舍；<a href=\"https://arxiv.org/abs/2607.08894\" target=\"_blank\" rel=\"noopener noreferrer\">GATS</a> 用三层世界模型 + UCB1 树搜索，在推理阶段消除 LLM 调用以降低成本与随机性。趋势很清楚：把需要确定性的部分交给结构化系统，把需要灵活性的部分留给模型。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 90 },
    { "label": "Agent 自进化", "value": 86 },
    { "label": "A2A / 互操作", "value": 88 },
    { "label": "Agentic 架构", "value": 92 },
    { "label": "Harness 工程", "value": 95 }
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
      "date": "07.14",
      "fullDate": "2026-07-14",
      "theme": "编码 Agent 失败过程解剖 + 长时任务稠密评分 + Agent 治理/互操作框架化 + 开源 harness 工具链成熟 + 规划去 LLM 化",
      "take": "Failure as a Process 首次把 CLI 编码 Agent 失败当作起因-演化-恢复的时间过程解剖；Long-Horizon-Terminal-Bench 用 46 个长任务 + 稠密奖励打分衡量中间进度；TrustX ARC 给企业自建 agentic 系统做十二维风险分级 + 五级自治度；A2W 提议在 MCP/A2A 之上补齐网站执行层；开源侧 comet（2.2K）做技能 harness、ASSERT 做需求驱动评测、deco studio 做按 token 计量的 Agent 控制面、promptfoo（2.3W）把红队接进 CI；SAGEAgent 把成本感知的模态采集做成序贯决策的自进化 Agent；GATS 用三层世界模型 + UCB1 树搜索在推理阶段消除 LLM 调用。",
      "items": [
        {
          "title": "Failure as a Process：CLI 编码 Agent 失败轨迹的首个大规模解剖",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2607.09510"
        },
        {
          "title": "Long-Horizon-Terminal-Bench：46 长任务 + 稠密奖励打分，衡量中间进度",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2607.08964"
        },
        {
          "title": "TrustX ARC：企业自建 agentic 系统的十二维风险分级 + 五级自治度",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2607.09586"
        },
        {
          "title": "A2W：在 MCP（工具）、A2A（Agent 间）之上补齐网站执行层",
          "source": "rtrvr.ai",
          "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack"
        },
        {
          "title": "comet（2.2K Stars）：把「想法→可评测工作流」做成技能 harness",
          "source": "GitHub",
          "url": "https://github.com/rpamis/comet"
        },
        {
          "title": "GATS：三层世界模型 + UCB1 树搜索，推理阶段消除 LLM 调用",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2607.08894"
        }
      ]
    },
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
    }
  ],
  "items": [
    {
      "id": "hot-20260714-01",
      "section": "hot",
      "title": "Failure as a Process：CLI 编码 Agent 失败轨迹的首个大规模解剖",
      "summary": "论文指出既有研究多把编码 Agent 的失败当作「最终结果」，缺少对失败如何发生、演化、变得不可恢复的洞察。作者提出面向过程的分析框架，跨执行轨迹刻画失败的起因（onset）、演化（evolution）与恢复（recovery），做出首个大规模 CLI 编码 Agent 失败轨迹的实证研究。",
      "insight": "把失败从「终态标签」重构为「时间过程」，直接改变 harness 的设计目标——不只是判定成败，而是在失败早期识别可恢复窗口并干预。这与运行时诊断、trace 可观测是同一条工程主线：可定位的失败才是可修复的失败。",
      "url": "https://arxiv.org/abs/2607.09510",
      "source": "arXiv",
      "tags": ["coding-agent", "failure-analysis", "trajectory"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260714-02",
      "section": "hot",
      "title": "Long-Horizon-Terminal-Bench：46 个长任务 + 稠密奖励打分，衡量 Agent 的「中间进度」",
      "summary": "现有终端基准多聚焦几分钟内完成、只按最终结果评判的简单任务，导致奖励信号稀疏、无法反映部分完成。Long-Horizon-Terminal-Bench 提出 46 个长周期任务，覆盖实验复现、软件工程、多模态分析、交互式游戏与科学计算等九类，采用 Terminal-Bench 风格并引入稠密奖励打分。",
      "insight": "稠密奖励 + 长任务把评测从「能不能做完」升级为「做到了几成」——这对训练自进化 Agent、诊断 harness 瓶颈都是关键基础设施。没有中间进度信号，长任务 Agent 的改进就只能靠盲猜。",
      "url": "https://arxiv.org/abs/2607.08964",
      "source": "arXiv",
      "tags": ["benchmark", "long-horizon", "dense-reward"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260714-03",
      "section": "hot",
      "title": "A2W：在 MCP（工具）、A2A（Agent 间）之上补齐「网站执行层」",
      "summary": "rtrvr.ai 提出 Agent-to-Web（A2W）协议，主张当前协议栈缺一层：MCP 解决 Agent 连工具、A2A 解决 Agent 间协调，但都没解决「Agent 在网站上、经站点许可地执行任务」。A2W 用基于 run 的生命周期，让 Agent 向站点 A2W 端点发任务请求，站点以结构化、可观测方式执行，并提供发现与分析能力。",
      "insight": "把协议分工看清楚：连接（MCP）→ 协作（A2A）→ 执行边界与授权（A2W）。这条演进和企业侧的治理诉求一致——真正缺的不是「更多能力」，而是「谁允许 Agent 做什么、做完能不能审计」。互操作的下半场是边界与问责。",
      "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack",
      "source": "rtrvr.ai",
      "tags": ["A2W", "protocol", "interoperability"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260714-04",
      "section": "hot",
      "title": "TrustX ARC：企业自建 agentic 系统的十二维风险分级框架",
      "summary": "论文指出 agentic AI 在企业与公共部门的扩散已超出通用 AI 风险框架的分类能力。TrustX Agent Risk Classification（ARC）提出可重复的结构化工具，可应用于七类 agentic 系统，核心是十二维评分量表，并结合 GPA + IAT 分类模型与五级自治度框架来量化风险。",
      "insight": "当 Agent 从演示走向内部生产，「按自治度与风险分级治理」会像数据分级一样成为合规底座。十二维评分的价值不在精确，而在把「这个 Agent 该给多大权限、需要多强 harness」变成可讨论、可留痕的决策，而非拍脑袋。",
      "url": "https://arxiv.org/abs/2607.09586",
      "source": "arXiv",
      "tags": ["governance", "risk-tiering", "autonomy"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260714-05",
      "section": "hot",
      "title": "GATS：三层世界模型 + 树搜索，在规划推理阶段消除 LLM 调用",
      "summary": "GATS（Graph-Augmented Tree Search）针对 LATS、ReAct 等在规划时高度依赖 LLM 推理、成本高且行为随机的问题，用系统化的 UCB1 树搜索结合分层世界模型：L1 精确符号动作匹配、L2 从执行日志学到的统计、L3 基于 LLM 的预测，在推理阶段消除 LLM 调用的同时追求更优规划性能。",
      "insight": "又一个「确定性系统做骨架、LLM 做补充」的范例：把可以从日志与符号规则确定的部分固化，只在真正需要泛化时才动用模型。这既降本又降低随机性，正是可靠 Agentic 架构的核心取舍。",
      "url": "https://arxiv.org/abs/2607.08894",
      "source": "arXiv",
      "tags": ["planning", "world-model", "tree-search"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260714-06",
      "section": "hot",
      "title": "comet（2.2K Stars）：把「想法→可评测工作流」做成技能 harness",
      "summary": "comet 定位为 agent skill harness——把想法转化为「可评测的工作流」。JavaScript 实现，近日 Stars 突破 2.2K 并保持高频更新，强调以技能为单位组织 Agent 能力，并把评测内建到工作流构建中，而非事后附加。",
      "insight": "「技能 + 内建评测」是 harness 工程走向成熟的信号：当能力被拆成可复用技能、每个技能自带评测，Agent 的改进才可度量、可回归。这与需求驱动评测、trace 可观测共同指向「可验证的 Agent 工程」。",
      "url": "https://github.com/rpamis/comet",
      "source": "GitHub",
      "tags": ["skill-harness", "evaluation", "workflow"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260714-01",
      "section": "keyong",
      "title": "失败过程解剖 = Harness 工程的「可恢复性」新命题",
      "summary": "Failure as a Process 把编码 Agent 失败拆为起因-演化-恢复三段的时间过程，做出首个大规模 CLI 失败轨迹实证，关注失败如何变得不可逆。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agentic 开发」。它给 harness 设计提出新目标——不是只在终点判成败，而是在失败演化早期设置探针与干预点。这与运行时诊断（TTHE、AgentTether）是同一工程谱系：越早定位越可能恢复。",
      "url": "https://arxiv.org/abs/2607.09510",
      "source": "arXiv",
      "tags": ["harness", "failure-recovery", "observability"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260714-02",
      "section": "keyong",
      "title": "稠密奖励长任务基准 = 自进化 Agent 的「进度信号」前提",
      "summary": "Long-Horizon-Terminal-Bench 用 46 个九类长任务 + 稠密奖励打分，衡量 Agent 中间进度而非只判最终成败，覆盖实验复现、软件工程、科学计算等。",
      "insight": "→ Keyong 关联：呼应「Agent 自进化」+「Harness 工程」。自进化闭环最缺的往往不是算法，而是「知道自己进步了多少」的可测信号。稠密奖励 + 长任务把进度量化，为从轨迹中学习提供了可优化的目标函数。",
      "url": "https://arxiv.org/abs/2607.08964",
      "source": "arXiv",
      "tags": ["self-evolution", "dense-reward", "benchmark"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260714-03",
      "section": "keyong",
      "title": "A2W 网站执行层 = A2A / 互操作的「授权与问责」补全",
      "summary": "A2W 提议在 MCP（工具）、A2A（Agent 间）之上补齐网站执行层：Agent 向站点端点发任务请求，站点以结构化、可观测方式执行，并提供发现与分析。",
      "insight": "→ Keyong 关联：呼应「A2A / 互操作」+「Agentic 架构」。它把互操作的焦点从「能不能连」推到「谁授权、能观测、可问责」。这与 TrustX ARC 的治理分级互为表里——协议层和治理层一起，才构成 Agent 生产化的信任基础。",
      "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack",
      "source": "rtrvr.ai",
      "tags": ["a2a", "interoperability", "authorization"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260714-04",
      "section": "keyong",
      "title": "GATS 去 LLM 化规划 = 「确定性门 + 模型」在架构层的又一实证",
      "summary": "GATS 用 L1 符号匹配、L2 日志统计、L3 LLM 预测的三层世界模型 + UCB1 树搜索，在规划推理阶段消除 LLM 调用，降低成本与随机性。",
      "insight": "→ Keyong 关联：呼应「Agentic 架构」+「Agentic 开发」。它延续了「能确定的就固化、需泛化的才用模型」的分工哲学，和 Mosaic 的 ILP 约束、Deterministic Gates 同源。对成本敏感的长任务 Agent，这种混合架构是可扩展性的关键。",
      "url": "https://arxiv.org/abs/2607.08894",
      "source": "arXiv",
      "tags": ["architecture", "deterministic-gate", "planning"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260714-05",
      "section": "keyong",
      "title": "需求驱动评测 harness = 「自进化沉淀什么」的可验证载体",
      "summary": "ASSERT 是需求驱动的评测 harness：为 Agent 生成行为级测试用例，可对托管模型、可调用封装、OTel trace 化 Agent 等任意目标运行，并产出本地优先的可检查制品。",
      "insight": "→ Keyong 关联：呼应「Harness 工程」+「Agent 自进化」。自进化产物（技能、规则、指令）要可信，必须有行为级测试兜底。ASSERT 把「需求→测试→trace→制品」串成闭环，让 Agent 的每次进化都能被验证与回归，而不是无据地相信它变好了。",
      "url": "https://github.com/responsibleai/ASSERT",
      "source": "GitHub",
      "tags": ["harness", "evaluation", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260714-01",
      "section": "opensource",
      "title": "comet（2.2K Stars）：agent skill harness，想法直达可评测工作流",
      "summary": "comet 是一个 agent skill harness，把「想法」转化为可评测的工作流。JavaScript 实现，Stars 突破 2242 并保持高频更新，以技能为单位组织能力，把评测内建进工作流构建。",
      "insight": "把评测做进 harness 而非事后补，是这个项目最值得关注的取向——它让「能力单元 + 度量」从一开始就绑定，Agent 的迭代因此可量化。",
      "url": "https://github.com/rpamis/comet",
      "source": "GitHub",
      "tags": ["skill-harness", "workflow", "evaluation"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260714-02",
      "section": "opensource",
      "title": "promptfoo（2.3W Stars）：把红队 / 漏洞扫描接进 CI 的 Agent 评测框架",
      "summary": "promptfoo 用于测试 prompt、Agent 与 RAG，提供红队、渗透测试、漏洞扫描能力，可对 GPT、Claude、Gemini、DeepSeek 等做性能对比，配置声明式、支持命令行与 CI/CD 集成，官方称被 OpenAI 与 Anthropic 使用。",
      "insight": "把 Agent 安全评测做成 CI 的一等公民，正是「安全从对齐下沉到 harness」的工具化落地。声明式配置 + CI 集成意味着每次改动都能自动过一遍红队与回归，符合生产化 Agent 的最低门槛。",
      "url": "https://github.com/promptfoo/promptfoo",
      "source": "GitHub",
      "tags": ["red-teaming", "evaluation", "ci"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260714-03",
      "section": "opensource",
      "title": "deco studio（389 Stars）：开源 Agent 控制面，逐笔计量 token 与美元",
      "summary": "deco studio 定位为「你 AI Agent 的开源控制面」——连接工具、雇佣 Agent，并追踪每一个 token 与每一美元的花费。TypeScript 实现，强调把成本可观测性做进 Agent 编排的核心。",
      "insight": "在 $6/M tokens 成为 agentic 模型价格基线（07.13）的背景下，「逐笔归因」不再是财务事后核算，而是架构第一类需求。控制面把成本、工具连接、Agent 生命周期统一，是企业化的关键拼图。",
      "url": "https://github.com/decocms/studio",
      "source": "GitHub",
      "tags": ["control-plane", "cost-tracking", "orchestration"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260714-04",
      "section": "opensource",
      "title": "ASSERT（191 Stars）：需求驱动、面向 OTel trace 的 Agent 评测 harness",
      "summary": "ASSERT 是 responsibleai 出品的需求驱动评测 harness：生成行为特定的测试用例，可对托管模型、可调用封装、OTel-traced Agent 等任意目标运行，并产出本地优先（local-first）的可检查制品。Python 实现。",
      "insight": "「需求→行为测试→可对任意目标运行→本地制品」是把评测标准化的务实路径。对接 OTel trace 意味着它能直接消费生产可观测数据，让线上行为和离线评测对齐，这是 harness 走向生产的必要能力。",
      "url": "https://github.com/responsibleai/ASSERT",
      "source": "GitHub",
      "tags": ["evaluation", "otel", "requirement-driven"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260714-05",
      "section": "opensource",
      "title": "EDDI（363 Stars）：配置驱动，把 JSON 变成生产级多 Agent 引擎",
      "summary": "EDDI 是配置驱动的引擎，把 JSON 转化为生产级 AI Agent，支持多 Agent 编排——「agent 逻辑活在 JSON 里，而非代码里」。Java 实现，主打用声明式配置定义 Agent 行为与协作。",
      "insight": "「逻辑即配置」把 Agent 编排从写代码变为写声明，降低了修改与审计门槛，也更贴近可版本化、可回滚的工程实践。这与 Organization-as-Code 的思路呼应——Agent 协作正在成为可声明的基础设施。",
      "url": "https://github.com/labsai/EDDI",
      "source": "GitHub",
      "tags": ["config-driven", "multi-agent", "orchestration"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260714-01",
      "section": "voices",
      "title": "研究者共识：编码 Agent 的失败要当「过程」而非「终态」来治理",
      "summary": "Failure as a Process 的作者指出，既有实证研究大多把 Agent 失败视为最终结果，缺乏对失败如何萌发、演化、乃至变得不可恢复的洞察，因而主张用面向过程的框架分析失败的起因、演化与恢复。",
      "insight": "这是一个方法论层面的转向：把 Agent 可靠性研究从「统计失败率」推向「理解失败动力学」。对工程团队的启示是，日志与 trace 不只用于事后复盘，更应支撑失败早期的实时识别与干预。",
      "url": "https://arxiv.org/abs/2607.09510",
      "source": "arXiv",
      "tags": ["reliability", "failure-process", "methodology"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260714-02",
      "section": "voices",
      "title": "rtrvr.ai：Web 需要的是 Agent 的「执行层」，而不只是「阅读层」",
      "summary": "在 A2W 的提案中，rtrvr.ai 主张当下 Agent 要么在无授权下抓取/自动化网站（Playwright、截图式 CUA bot），要么只能读取内容；并提出「Web 需要一个面向 Agent 的执行层，而不只是阅读层」，让站点方可授权、可观测地参与。",
      "insight": "这句话点出了 Agentic Web 的核心矛盾：能力在增长，但许可与问责机制缺位。把执行层标准化，既保护站点方利益，也给 Agent 提供稳定可依赖的接口——无授权的自动化终究是不可持续的技术债。",
      "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack",
      "source": "rtrvr.ai",
      "tags": ["agentic-web", "execution-layer", "consent"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260714-03",
      "section": "voices",
      "title": "多模型路由研究：只看准确率与成本，会错过「路由是否真的有意义」",
      "summary": "论文《When is Routing Meaningful?》指出，多模型系统的路由几乎只用准确率与推理成本评估，但另有两个与性能正交的属性决定路由是否有意义：一是参与者必须行为可区分（若都一样，路由就是空的）；二是路由策略必须稳定（同义 query 应被分到同一参与者）。",
      "insight": "对多 Agent / 多模型架构是一记提醒：高准确率可能掩盖「路由其实没起作用」。设计路由时应显式检验参与者的行为差异性与策略稳定性，否则再复杂的编排也只是昂贵的冗余。",
      "url": "https://arxiv.org/abs/2607.09197",
      "source": "arXiv",
      "tags": ["routing", "multi-model", "evaluation"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260714-01",
      "section": "industry",
      "title": "企业 Agent 治理进入「分级」阶段：风险分层 + 自治度成为合规底座",
      "summary": "TrustX ARC 框架针对 agentic AI 在企业与公共部门的快速扩散，提出可重复的十二维风险评分量表，结合 GPA + IAT 分类模型与五级自治度，用于对七类内部自建 agentic 系统做风险分级。",
      "insight": "继 Cisco 9 万人部署（07.08）、A2A 150+ 组织生产化（07.09）之后，行业的下一步不是「用不用 Agent」，而是「怎么分级管」。风险 + 自治度的二维分级，很可能像数据分级一样成为企业 AI 合规的标准动作。",
      "url": "https://arxiv.org/abs/2607.09586",
      "source": "arXiv",
      "tags": ["enterprise", "governance", "risk-tiering"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260714-02",
      "section": "industry",
      "title": "Agent 协议栈分层成型：连接（MCP）→ 协作（A2A）→ 执行（A2W）",
      "summary": "A2W 提案把当前 Agent 协议生态描述为互补的分层栈：Anthropic 的 MCP 负责 Agent 连工具、Google 的 A2A 负责 Agent 间协调，rtrvr.ai 主张补上 Agent 在网站上执行任务的「执行层」，并配套发现与分析能力。",
      "insight": "协议栈从单点走向分层，标志 Agentic Web 进入基础设施建设期。对开发者的实际影响是：未来接入外部系统时要区分「连接/协作/执行」三类语义，选择或组合对应协议，而非用一套接口硬扛所有场景。",
      "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack",
      "source": "rtrvr.ai",
      "tags": ["protocol-stack", "mcp", "a2a"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260714-03",
      "section": "industry",
      "title": "长任务终端基准兴起：Agent 能力评估从「分钟级」转向「小时级」",
      "summary": "Long-Horizon-Terminal-Bench 指出现有终端基准偏重几分钟内完成、只按最终结果评判的简单任务，遂推出 46 个覆盖九类的长周期任务并引入稠密奖励打分，衡量实验复现、软件工程、科学计算等场景下的中间进度。",
      "insight": "评测标准的迁移往往预示产品形态的迁移：当基准开始测「小时级长任务的中间进度」，意味着市场预期 Agent 要能承接需要长时间、多步骤、可部分交付的真实工作，而不只是即答式任务。",
      "url": "https://arxiv.org/abs/2607.08964",
      "source": "arXiv",
      "tags": ["benchmark", "long-horizon", "evaluation"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260714-04",
      "section": "industry",
      "title": "Agent 成本可观测成刚需：开源控制面把「逐笔计量」做进编排核心",
      "summary": "deco studio 等开源 Agent 控制面把「追踪每个 token 与每一美元」作为核心能力，与工具连接、Agent 生命周期管理整合在同一平面。这一趋势与近期 agentic 模型输出价收敛至约 $6/M tokens 的定价环境直接相关。",
      "insight": "当 Agent 场景 token 消耗远超对话，成本从财务问题变成架构问题。把计量做进控制面，让「按 Agent 归因、按任务预算」在运行时可见——这是长任务、多 Agent 系统能否规模化的前置条件。",
      "url": "https://github.com/decocms/studio",
      "source": "GitHub",
      "tags": ["cost-observability", "control-plane", "pricing"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260714-01",
      "section": "research",
      "title": "Failure as a Process：面向过程的 CLI 编码 Agent 失败分析框架",
      "summary": "针对编码 Agent 可靠性日益重要而失败研究多止于终态的现状，论文提出面向过程的分析框架，跨执行轨迹刻画失败的起因、演化与恢复，构成首个大规模 CLI 编码 Agent 失败轨迹实证研究，旨在揭示失败如何萌发并变得不可恢复。",
      "insight": "研究价值在于给出「失败可干预窗口」的概念：既然失败是渐进演化的，就存在早期介入的时间点。这为 harness 的实时诊断与自动恢复模块提供了理论依据，把可靠性工程从统计层带到动力学层。",
      "url": "https://arxiv.org/abs/2607.09510",
      "source": "arXiv",
      "tags": ["coding-agent", "failure-trajectory", "reliability"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260714-02",
      "section": "research",
      "title": "Long-Horizon-Terminal-Bench：稠密奖励打分的长周期终端任务基准",
      "summary": "论文提出包含 46 个长周期任务、覆盖九类（实验复现、软件工程、多模态分析、交互式游戏、科学计算等）的终端基准，采用 Terminal-Bench 风格并引入稠密奖励打分，以捕捉现有仅按最终结果评判的基准所忽略的中间进度与部分解。",
      "insight": "稠密奖励是长任务 Agent 训练与评测的关键缺失件。它把「完成度」变成连续信号，既能更细粒度地比较 Agent，也能作为强化学习/自进化的可优化目标——这类基础设施对整个领域的推进力度往往超过单个模型。",
      "url": "https://arxiv.org/abs/2607.08964",
      "source": "arXiv",
      "tags": ["benchmark", "dense-reward", "terminal"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260714-03",
      "section": "research",
      "title": "GATS：分层世界模型 + 树搜索，规划时消除 LLM 调用",
      "summary": "GATS 结合 UCB1 树搜索与三层世界模型——L1 精确符号动作匹配、L2 从执行日志学到的统计、L3 基于 LLM 的预测——在规划推理阶段消除 LLM 调用，针对 LATS、ReAct 等依赖 LLM 推理导致高成本与随机行为的问题。",
      "insight": "把世界模型分层，本质是给「确定性 / 统计 / 泛化」三类知识各归其位。可确定的用符号规则、有数据的用统计、真正未知的才交给 LLM——这种分层不仅降本，也让规划行为更可复现、可解释。",
      "url": "https://arxiv.org/abs/2607.08894",
      "source": "arXiv",
      "tags": ["planning", "world-model", "tree-search"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260714-04",
      "section": "research",
      "title": "SAGEAgent：成本感知的模态采集，让自进化 Agent 学会「按需检查」",
      "summary": "面向多模态临床肿瘤生存预测，SAGEAgent 指出并非每位患者都需要完整诊断流程。它把「是否值得沿临床工作流采集下一个模态」建模为序贯决策问题，主动推理在既定成本递增次序下获取新模态是否合理，而非假设模态全备或被动处理缺失。",
      "insight": "这是自进化理念在高成本垂直场景的务实落地：进化不只是「学更多」，更是「学会在成本约束下决定不做什么」。把「该不该再取一份数据」交给 Agent 序贯决策，与选择性记忆「该不该记」是同一克制哲学。",
      "url": "https://arxiv.org/abs/2607.09521",
      "source": "arXiv",
      "tags": ["self-evolution", "cost-aware", "sequential-decision"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260714-05",
      "section": "research",
      "title": "When is Routing Meaningful？路由的差异性与稳定性比准确率更本质",
      "summary": "论文论证多模型路由的两个与性能正交的属性：其一，参与者社会必须行为可区分，否则路由无意义；其二，路由策略必须稳定，同义表述的 query 应被分给同一参与者。高准确率可与两者同时被违反共存——路由器可在冗余社会上运行或不一致地分配 query。",
      "insight": "对多 Agent 编排是一次诊断学提醒：评估路由不能只看端到端指标，必须单独检验「参与者是否真有分工」「路由是否稳定」。否则你以为在做智能调度，实际上是在为随机分配付高价。",
      "url": "https://arxiv.org/abs/2607.09197",
      "source": "arXiv",
      "tags": ["routing", "multi-agent", "robustness"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260714-06",
      "section": "research",
      "title": "How Far Are We from Detecting Flaky Tests？代码级检测的局限被系统揭示",
      "summary": "论文指出 flaky test（同一版本代码时过时败）会削弱测试信号、扰乱 CI。作者分析三种基于代码的检测器后主张「研究在解决错误的问题」——flakiness 不是测试代码的静态属性，测试代码往往缺乏判定所需信息；并发现常用基准存在抬高 F1 的捷径、评测协议高估了泛化性。",
      "insight": "对 Agent-ready 的 CI/harness 有直接启示：把 flaky 判定寄望于静态代码分析是不牢靠的，需要运行时多次执行的证据。可靠的 harness 必须以行为证据而非代码表象为依据——这与「失败是过程」的观点一脉相承。",
      "url": "https://arxiv.org/abs/2607.09345",
      "source": "arXiv",
      "tags": ["flaky-tests", "ci", "harness"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260714-01",
      "section": "china",
      "title": "2026 WAIC 定档 7/17–20 上海：智能体成大会主线之一",
      "summary": "据人民网上海频道等报道，2026 世界人工智能大会暨人工智能全球治理高级别会议将于 7 月 17 日至 20 日在上海举行。大会聚焦大模型、智能体与全球治理，进入最后倒计时阶段。",
      "insight": "WAIC 与本周密集的模型与协议动态叠加，7/17 将是国内外信号交汇点。国内团队值得重点跟踪：智能体的落地形态、端云分工，以及治理议题——后者正与 TrustX ARC 这类风险分级框架形成呼应。",
      "url": "http://sh.people.com.cn/n2/2026/0617/c134768-41613724.html",
      "source": "人民网",
      "tags": ["WAIC", "智能体", "上海"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260714-02",
      "section": "china",
      "title": "国产大模型集体强化 Agent 能力：阿里千问、DeepSeek 相继出手",
      "summary": "据新浪科技等报道，国产大模型近期集体把重心转向智能体（Agent）能力升级，阿里千问、DeepSeek 等相继在工具调用、任务编排等方向强化，推动大模型从「对话」走向「执行」。",
      "insight": "国产模型把 Agent 能力作为竞争焦点，意味着国内也在经历「从模型能力到 Agent 落地」的转向。对开发者而言，关注点应从「谁的分数高」转向「谁的工具调用、长任务与稳定性更适合生产」。",
      "url": "https://news.sina.cn/2026-04-10/detail-inhtxuss0637875.d.html",
      "source": "新浪科技",
      "tags": ["国产大模型", "Agent能力", "工具调用"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260714-03",
      "section": "china",
      "title": "阿里云开发者社区：从大模型到智能体的技术落地路径梳理",
      "summary": "阿里云开发者社区专题系统梳理 2026 年从大模型能力竞赛到智能体落地的技术路径转变，涵盖 Agent 架构、工具调用、记忆管理与企业场景适配等核心议题，把 Agent 方法论以标准化技术文档形式沉淀。",
      "insight": "云厂商以社区文档形式系统输出 Agent 方法论，是技术走向成熟的信号。可重点关注其中对记忆管理与工具调用的最佳实践，与本周 A2W、TrustX ARC 等治理/执行侧进展对照阅读。",
      "url": "https://developer.aliyun.com/article/1709274",
      "source": "阿里云开发者社区",
      "tags": ["阿里云", "Agent落地", "技术路径"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "china-20260714-04",
      "section": "china",
      "title": "国内智能体从「demo 秀」进入 B 端深水区：治理与互操作成关键变量",
      "summary": "综合每日经济新闻等分析，2026 年被视为多智能体规模化的关键年份，大模型竞争从 C 端聊天转向 B 端场景深耕，多智能体协作成为企业落地核心形态，行业从演示走向生产部署。",
      "insight": "B 端深水区的胜负手不在单点能力，而在治理、成本可预测与跨系统互操作——这与全球侧 TrustX ARC 风险分级、deco studio 成本控制面、A2W 执行层的方向完全一致。国内外正沿同一条工程主线收敛。",
      "url": "https://www.nbd.com.cn/articles/2026-01-05/4207937.html",
      "source": "每日经济新闻",
      "tags": ["多智能体", "B端", "生产部署"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
