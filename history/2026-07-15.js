window.APP_DATA = {
  "generatedAt": "2026-07-15T02:30:00Z",
  "sourceDigestDate": "2026-07-15",
  "dateText": "2026年7月15日 星期三",
  "editorNote": [
    "今天的主线是 <strong>MCP 协议 2026-07-28 RC 把 Agent 互操作栈翻新到「无状态可路由」</strong>。<a href=\"https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/\" target=\"_blank\" rel=\"noopener noreferrer\">MCP 07-28 Release Candidate</a> 移除 initialize 握手与 Mcp-Session-Id、把协议版本与能力放进 <code>_meta</code>、加入 <code>server/discover</code>、给结果加 <code>ttlMs / cacheScope</code>、以 <code>Mcp-Method / Mcp-Name</code> 头支撑不看 body 就能路由，并接入 W3C Trace Context——这是 MCP 上线以来最大的一次修订，也是 A2A / 互操作真正走向「像 HTTP 一样可扩展」的关键一步。",
    "<strong>Agent 自进化从概念变工程配方，也开始出现「更新不等于收益」的清醒论</strong>。<a href=\"https://arxiv.org/abs/2607.03451\" target=\"_blank\" rel=\"noopener noreferrer\">SkillOpt-Lite</a> 用零阶优化 + 三条收敛/泛化原则把技能与 harness 的自演化压到最小可用管线，在 LiveMath / SpreadsheetBench 上让 nano 模型追上更大的基线；与此同时 <a href=\"https://arxiv.org/html/2607.07663\" target=\"_blank\" rel=\"noopener noreferrer\">Recursive Self-Improvement 综述</a>盘点 1250 篇论文，把「自我确认循环、多样性坍塌、模型坍缩」列为 RSI 的三大失败模式——自进化真正的门槛不是能不能改，而是能不能证明这次改动值得留下。",
    "<strong>模型层与产业层同时切到「Agent 原生」形态</strong>。<a href=\"https://www.anthropic.com/research/claude-values-models-languages\" target=\"_blank\" rel=\"noopener noreferrer\">Anthropic Claude Values</a> 用 309,815 段真实对话、跨 3 个模型和 20 种语言把 Claude 的行为压成「顺从/审慎、温度/严谨、深度/简洁、坦率/交付」四轴，并首次提出把 value profiling 纳入上线前评估与线上监控；<a href=\"https://www.tmtpost.com/nictation/8063468.html\" target=\"_blank\" rel=\"noopener noreferrer\">阶跃星辰</a> 一口气发布 STEPX 品牌、Step AOS「大模型原生操作系统」、个人智能体 Amoo 与 STEPX Neo「全球首款大模型原生 Agentic Phone」，把「模型 + Agent + 硬件」做成新物种，将在 <a href=\"https://www.news.cn/politics/leaders/20260714/c09a877338534d09aaad537a7326904c/c.html\" target=\"_blank\" rel=\"noopener noreferrer\">7/17 WAIC</a> 首秀。",
    "<strong>国内进入「合规先行 + 治理入场」的分水岭</strong>。《人工智能拟人化互动服务管理暂行办法》今日（7/15）正式施行，<a href=\"https://finance.sina.com.cn/stock/t/2026-07-04/doc-inifrana2226218.shtml\" target=\"_blank\" rel=\"noopener noreferrer\">豆包与千问同日下线智能体功能</a>、上海清朗专项已下架违规智能体逾 1.4 万个；官方通过外交渠道预告 <a href=\"http://politics.people.com.cn/n1/2026/0714/c461001-40760450.html\" target=\"_blank\" rel=\"noopener noreferrer\">习近平出席 WAIC 开幕并发表主旨讲话</a>——大模型能力竞赛的下一程，不再是「谁跑分高」，而是「谁能在治理、成本、互操作三条线上同时可交付」。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 91 },
    { "label": "Agent 自进化", "value": 89 },
    { "label": "A2A / 互操作", "value": 94 },
    { "label": "Agentic 架构", "value": 93 },
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
      "date": "07.15",
      "fullDate": "2026-07-15",
      "theme": "MCP 07-28 RC 无状态协议核心 + Agent 自进化「更新≠收益」+ Claude 值域四轴监控 + 国内拟人化互动新规同日施行 + 阶跃 Agentic Phone",
      "take": "MCP 2026-07-28 Release Candidate 移除 initialize/session、把协议版本与能力挪进 _meta、加入 server/discover、给结果加 ttlMs/cacheScope、接入 W3C Trace Context——最大一次修订，任何请求都能路由到任何实例；SkillOpt-Lite 用零阶优化 + 三条原则把技能与 harness 自演化压到最小管线（LiveMath +8.8/+25.4、SpreadsheetBench 让 nano 超基线）；Recursive Self-Improvement 综述 1250 篇论文，指出自我确认循环 / 多样性坍塌 / 模型坍缩三大 RSI 失败模式；Anthropic Claude Values 用 30.9 万对话把 3 模型 × 20 语言压成四维行为轴，并倡议把 value profiling 做进上线前评估与线上监控；国内《人工智能拟人化互动服务管理暂行办法》今日施行，豆包与千问同日下线智能体功能、上海清朗下架违规智能体逾 1.4 万个；阶跃星辰发布 STEPX + Step AOS + Amoo + STEPX Neo（全球首款大模型原生 Agentic Phone），7/17 WAIC 首秀；习近平出席 WAIC 开幕并发表主旨讲话。",
      "items": [
        {
          "title": "MCP 07-28 Release Candidate：无状态协议核心 + server/discover + 可路由头 + W3C Trace",
          "source": "Model Context Protocol",
          "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/"
        },
        {
          "title": "SkillOpt-Lite：ZO 优化 + 三条原则，技能与 harness 自演化的最小可用管线",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2607.03451"
        },
        {
          "title": "Recursive Self-Improvement 综述：1250 篇论文，警惕自确认 / 多样性坍塌 / 模型坍缩",
          "source": "arXiv",
          "url": "https://arxiv.org/html/2607.07663"
        },
        {
          "title": "Anthropic Claude Values：30.9 万对话、四轴行为压缩，倡议 value profiling 入监控",
          "source": "Anthropic",
          "url": "https://www.anthropic.com/research/claude-values-models-languages"
        },
        {
          "title": "国内拟人化互动新规 7/15 施行：豆包与千问同日下线智能体功能",
          "source": "新浪财经",
          "url": "https://finance.sina.com.cn/stock/t/2026-07-04/doc-inifrana2226218.shtml"
        },
        {
          "title": "阶跃星辰 STEPX + Step AOS + Amoo + Neo：全球首款大模型原生 Agentic Phone，WAIC 首秀",
          "source": "钛媒体",
          "url": "https://www.tmtpost.com/nictation/8063468.html"
        }
      ]
    },
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
    }
  ],
  "items": [
    {
      "id": "hot-20260715-01",
      "section": "hot",
      "title": "MCP 07-28 Release Candidate：无状态协议核心，Agent 工具层向「HTTP 级可扩展」升级",
      "summary": "Model Context Protocol 公布 2026-07-28 版 Release Candidate——上线以来最大一次修订。移除 initialize/initialized 握手（SEP-2575）与 Mcp-Session-Id（SEP-2567），协议版本 / 客户端信息 / 能力改由 _meta 随每次请求携带；新增 server/discover 让客户端预拉能力，任何请求都能路由到任意服务器实例。同时引入 Mcp-Method / Mcp-Name HTTP 头（SEP-2243）以支持不看 body 的路由、给 List / Resource 结果加 ttlMs / cacheScope（SEP-2549）、标准化 W3C Trace Context via _meta（SEP-414），并把 Extensions Framework、MCP Apps 与 Tasks 提升为一等能力。",
      "insight": "这版 RC 把 MCP 从「有状态、粘性会话」的 SDK 协议，改造成「无状态、可路由、可缓存、可追踪」的基础设施协议——这才是 Agent 工具层真正能像 HTTP 一样被负载均衡、被 CDN 化、被审计的前提。对做 Agentic 架构的团队，含义非常直接：任意工具调用可跨实例、可分布式；对做互操作的团队，Trace Context 与鉴权硬化让「谁在什么时候用了谁的工具」终于可以端到端串起来。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "protocol", "stateless"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260715-02",
      "section": "hot",
      "title": "SkillOpt-Lite：零阶优化 + 三条原则，把 Agent 技能与 harness 自演化压到最小可用管线",
      "summary": "SkillOpt-Lite 主张此前的技能/harness 优化管线过于复杂，遂借零阶（ZO）优化视角把技能轨迹当作可解释的调试信号，并从 Claude Code 哲学与 PAC 学习中提炼三条原则：基于文件系统的轨迹探索、共识属性挖掘、独立验证门控。据其报告，LiveMath 上 GPT-5.5 +8.8 分、GPT-5.4-nano +25.4 分；SpreadsheetBench 上 HarnessOpt 让 nano 达到 0.7758，超过更大的 GPT-5.5 基线（0.7620），并已集成到 VSCode Copilot。",
      "insight": "自进化的关键从来不是「能不能改」，而是「改动能不能被验证保留」。SkillOpt-Lite 用「文件系统轨迹 + 共识属性 + 独立验证」三段，把 skill / harness 的迭代做成可复现、可回归的最小闭环——这与「trace + 需求驱动评测 + 本地制品」的方向殊途同归：让改进过程本身可被审计，才配得上生产化。",
      "url": "https://arxiv.org/abs/2607.03451",
      "source": "arXiv",
      "tags": ["self-evolution", "harness", "skill-opt"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260715-03",
      "section": "hot",
      "title": "Recursive Self-Improvement 综述：1250 篇论文与三大失败模式",
      "summary": "Chen 等人系统综述 1250 篇 AI 自我改进论文，把「有界自我精化」与「开放式递归自我改进（RSI）」拆开，梳理评价者信号的验证层级，并明确指出 RSI 系统的三类系统性失败：自我确认循环（self-confirming loops）、多样性坍塌（diversity collapse）与模型坍缩（model collapse）；同时把「在部署时演化自身 harness」明确划为自我改进的一种形态。",
      "insight": "这篇综述给自进化研究上了一堂「幸存者偏差课」：只统计变好的 delta 会让你相信自进化 work，但一旦评价者本身参与被优化的循环，改进就可能是幻觉。对工程实践的启发是——评价体系必须独立于被优化的 Agent，且要主动检测多样性与分布漂移。",
      "url": "https://arxiv.org/html/2607.07663",
      "source": "arXiv",
      "tags": ["self-improvement", "rsi", "failure-modes"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260715-04",
      "section": "hot",
      "title": "Anthropic Claude Values：30.9 万对话把 3 模型 × 20 语言压成四维行为轴",
      "summary": "Anthropic 用 309,815 段 Claude.ai 主观任务对话（2026 年 5 月两周，跨 Sonnet 4.6 / Opus 4.6 / Opus 4.7 与前 20 语言，每模型-语言对约 5000 段），把 3307 个价值观压成 339 个高阶价值，并用四条正交轴刻画行为差异——顺从/审慎、温度/严谨、深度/简洁、坦率/交付。发现 Opus 4.7 更倾向审慎与深度，Sonnet 4.6 更温暖顺从；印地语/阿拉伯语最温暖，英语/俄语最严谨。作者建议把 value profiling 做进上线前评估与线上监控。",
      "insight": "这是首次以百万级样本把「模型性格」变成可测量、可对齐、可监控的变量。对多语言、多模型的 Agent 系统，同一 prompt 在不同语言下可能得到实质不同的判断——这是自进化与治理都必须回应的公平性风险，也是把「行为漂移」纳入 harness 的现实理由。",
      "url": "https://www.anthropic.com/research/claude-values-models-languages",
      "source": "Anthropic",
      "tags": ["values", "monitoring", "alignment"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260715-05",
      "section": "hot",
      "title": "阶跃星辰 STEPX + Step AOS + Amoo + STEPX Neo：把「模型 + Agent + 硬件」做成新物种",
      "summary": "阶跃星辰 7 月 13 日在上海发布首个大模型原生 AI 终端品牌 STEPX，同步推出全球首个 Agent-native 操作系统 Step AOS、新一代个人智能体 Amoo，以及全球首款大模型原生 Agentic Phone「STEPX Neo」。据报道已与携程、支付宝、滴滴、美团在出行、生活、办公、内容创作等场景建立 AI 深度合作，将在 7 月 17 日 WAIC 首秀。",
      "insight": "端侧 Agent 从「App 里加个入口」走到「操作系统重构 + 硬件品牌」，是模型层向下压穿到硬件层的信号。这与国内今日拟人化互动新规同日施行、豆包 / 千问下线智能体功能形成鲜明对照：合规先行、Agent 原生形态并进，端侧智能体的定义权正在被重新划分。",
      "url": "https://www.tmtpost.com/nictation/8063468.html",
      "source": "钛媒体",
      "tags": ["agent-phone", "agent-os", "stepfun"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260715-06",
      "section": "hot",
      "title": "拟人化互动服务新规 7/15 施行：豆包 / 千问同日下线智能体功能",
      "summary": "《人工智能拟人化互动服务管理暂行办法》今日（2026-07-15）正式施行，字节跳动豆包与阿里通义千问同日下线智能体功能——豆包称因「产品功能调整」，千问向用户推送「智能体服务下线提醒」，用户配置与历史对话 7/15 起不再可访问，10/15 后按隐私政策处理。据上海市委网信办「清朗·整治 AI 应用乱象」专项行动，第一阶段已下架违规智能体逾 1.4 万个，向近百家重点平台完成法规宣贯。",
      "insight": "这是国内首次以「拟人化互动」为切口，用行业下线动作把 Agent 治理落到消费级产品层。对开发者的直接影响是：未成年人身份核验、防情感依赖 / 消费诱导、防「一键脱衣」与博彩违规——将成为国内消费级 Agent 的默认最低门槛，也倒逼平台以更强的 harness / 审计层承接后续产品。",
      "url": "https://finance.sina.com.cn/stock/t/2026-07-04/doc-inifrana2226218.shtml",
      "source": "新浪财经",
      "tags": ["governance", "compliance", "china"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "keyong-20260715-01",
      "section": "keyong",
      "title": "MCP 无状态化 = A2A / 互操作的「基础设施化」拐点",
      "summary": "MCP 07-28 RC 移除会话与握手，把协议版本 / 能力 / 追踪信息挪进 _meta，加入 server/discover 与 ttlMs / cacheScope，并规定 HTTP 头 Mcp-Method / Mcp-Name 支持不看 body 的路由。",
      "insight": "→ 主题关联：呼应「A2A / 互操作」+「Agentic 架构」。真正的互操作不只是「协议连得上」，更是「能被负载均衡、缓存、审计」。这一版把 MCP 从粘性 SDK 协议改造成基础设施协议——它对 Agent 网络的意义，可类比 HTTP/1.1 到 HTTP/2 的迁移，让「Agent 工具层」终于可以像 Web 一样横向扩展。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["a2a", "interoperability", "protocol"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 10
    },
    {
      "id": "keyong-20260715-02",
      "section": "keyong",
      "title": "SkillOpt-Lite + HarnessOpt = Agent 自进化的「最小可用」工程配方",
      "summary": "SkillOpt-Lite 把技能与 harness 的自演化压到「文件系统轨迹 + 共识属性 + 独立验证」三段最小管线，让 nano 模型在 LiveMath / SpreadsheetBench 上追上更大的基线，并已进 VSCode Copilot。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Harness 工程」。它给自进化提出了非常干净的三个约束——探索要留 trace（文件系统）、抽象要看重复（共识属性）、留存要独立验证（gating）。这正是把「无据地相信 Agent 变好了」变成「有据地保留 delta」的工程语法。",
      "url": "https://arxiv.org/abs/2607.03451",
      "source": "arXiv",
      "tags": ["self-evolution", "harness", "gating"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260715-03",
      "section": "keyong",
      "title": "RSI 三大失败模式 = 自进化 harness 的必答题清单",
      "summary": "Recursive Self-Improvement 综述用 1250 篇论文明确 RSI 的三类失败：自我确认循环、多样性坍塌、模型坍缩，并把「部署时演化 harness」明确列为自我改进的一种。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Harness 工程」。这份清单可以直接当自评表：评价者是否与被优化 Agent 独立？留存的技能库是否在收敛而非发散？训练数据中的自生成占比是否被限制？如果任一答案是否/不知道，harness 就有系统性风险，需要显式的多样性与漂移监控。",
      "url": "https://arxiv.org/html/2607.07663",
      "source": "arXiv",
      "tags": ["self-evolution", "rsi", "risk"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260715-04",
      "section": "keyong",
      "title": "value profiling 上线 = Agentic 架构在「行为层」多了一道稳态维度",
      "summary": "Anthropic 用 30.9 万段对话把 Claude 行为压成四轴（顺从/审慎、温度/严谨、深度/简洁、坦率/交付），倡议把 value profiling 做进上线前评估与线上监控，并检测跨模型、跨语言的漂移。",
      "insight": "→ 主题关联：呼应「Agentic 架构」+「Harness 工程」。Agent 架构此前的稳态维度是延迟、成本、准确率，现在多了一条「行为一致性」。多语言 Agent、多模型路由体系尤其需要把行为轴纳入观测，否则同一策略会在不同语言 / 模型下悄悄偏航。",
      "url": "https://www.anthropic.com/research/claude-values-models-languages",
      "source": "Anthropic",
      "tags": ["architecture", "monitoring", "behavior"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260715-05",
      "section": "keyong",
      "title": "国内拟人化新规 + 端侧 Agentic Phone = Agentic 开发的国内工程分水岭",
      "summary": "7/15 拟人化互动新规施行、豆包 / 千问同日下线智能体功能，同时阶跃星辰发布 STEPX / Step AOS / Amoo / STEPX Neo 全栈 Agent 原生终端，7/17 WAIC 首秀。",
      "insight": "→ 主题关联：呼应「Agentic 开发」+「Agentic 架构」。国内 Agent 开发的下一程被划出双底线：一边是合规底线（身份核验、防情感依赖、审计留痕），一边是形态底线（Agent-native OS、端侧 Agent、跨应用协作）。做 Agentic 开发不再只有「模型 + 工具」两层，而是要预留合规接入点与终端形态适配。",
      "url": "https://www.tmtpost.com/nictation/8063468.html",
      "source": "钛媒体",
      "tags": ["agentic-dev", "compliance", "china"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260715-01",
      "section": "opensource",
      "title": "omnigent-ai/omnigent（7.2K Stars）：跨 harness 的开源 meta-harness",
      "summary": "omnigent 定位「开源 AI Agent 框架 + meta-harness」——统一编排 Claude Code、Codex、Cursor、Pi 与自定义 Agent，声称「不改代码即可替换 harness」，并内建策略与沙箱执行、跨设备实时协作。Python 实现，Stars 已破 7.2K。",
      "insight": "当每家厂商都有自己的编码 Agent，「meta-harness」正在成为新的抽象层——它承认 harness 会碎片化，转而做统一的策略、沙箱与观测。这与本周 MCP 07-28 RC 的无状态基础设施化互为呼应：底层协议标准化 + 上层 harness 抽象化，才有真正的多品牌 Agent 协作。",
      "url": "https://github.com/omnigent-ai/omnigent",
      "source": "GitHub",
      "tags": ["meta-harness", "orchestration", "sandbox"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260715-02",
      "section": "opensource",
      "title": "Mercor-Intelligence/archipelago：面向 RL 环境的 Agent 评测 harness",
      "summary": "archipelago 是运行与评估 AI Agent 对抗 RL 环境的开源 harness，Python 实现，近日 Stars 突破 216，专注于「让 Agent 在受控环境里被复现、被打分」。",
      "insight": "从 CLI 任务 harness 走向「RL 环境即 harness」，是评测形态的又一次抬升——它让 Agent 能在带状态、带对抗、带随机性的场景里被拉齐比较，正好对齐本周长周期评测与稠密奖励的趋势。",
      "url": "https://github.com/Mercor-Intelligence/archipelago",
      "source": "GitHub",
      "tags": ["evaluation", "rl-env", "harness"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260715-03",
      "section": "opensource",
      "title": "rajudandigam/agent-inspect（219 Stars）：TypeScript Agent 的本地执行树",
      "summary": "agent-inspect 面向 TypeScript / Node.js 开发者，把手动步骤、工具调用、LLM 调用、结构化日志、失败与耗时转成可在终端阅读的执行树，用于本地理解 Agent 到底发生了什么。",
      "insight": "「本地可读的执行树」是运行时可观测走进日常开发的形态。Agent trace 不必先送到远端 SaaS 再看——直接在终端做树状展开，与 Anthropic values 提倡的行为监控互补：一个看结构，一个看倾向。",
      "url": "https://github.com/rajudandigam/agent-inspect",
      "source": "GitHub",
      "tags": ["observability", "trace", "typescript"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260715-04",
      "section": "opensource",
      "title": "inference-gateway/adl-cli：给企业级 A2A Agent 做脚手架的 CLI",
      "summary": "adl-cli 是命令行工具，用于脚手架与管理由 A2A（Agent-to-Agent）协议驱动的企业级 AI Agent，Go 实现，与本周 MCP 07-28 RC 的互操作演进同频。",
      "insight": "A2A 与 MCP 的分工正在具象化：MCP 管「Agent 连工具」，A2A 管「Agent 连 Agent」。给 A2A 提供 scaffolding 工具，是协议从提案走向可开发的关键一步——就像早期 HTTP 服务需要 express、rails 那样。",
      "url": "https://github.com/inference-gateway/adl-cli",
      "source": "GitHub",
      "tags": ["a2a", "cli", "scaffolding"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260715-05",
      "section": "opensource",
      "title": "mhmdtaha091/flight-recorder：本地优先的 Agent 评测、trace 与 replay harness",
      "summary": "flight-recorder 定位为 local-first 的 Agent 评测 / trace / replay harness——记录每一次 LLM 调用、可确定性 replay、按 golden tasks 评分、检测回归。Python 实现。",
      "insight": "「Record → Replay → Regression」三段闭环是可信 harness 的最小工程范式。把它做成本地优先，正好补上 MCP 无状态化 + omnigent meta-harness 之上的最后一环：让 Agent 的每次改动都能被回放、被回归，而不是每次都在生产里赌运气。",
      "url": "https://github.com/mhmdtaha091/flight-recorder",
      "source": "GitHub",
      "tags": ["replay", "regression", "harness"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260715-01",
      "section": "voices",
      "title": "Andrew Ng：Loop Engineering 才是当下 Agentic 开发的关键手感",
      "summary": "Andrew Ng 在 X 上讨论「Loop Engineering」——把迭代循环视作现代 Agentic 编码的核心，认为随着编码模型能力趋同，差异会转移到管理工具、编排与模型路由的控制循环上。",
      "insight": "「模型商品化 → 循环差异化」是这一波编码 Agent 竞争的第一性描述。团队真正需要设计的，不再是提示词模板，而是「循环里放哪些步骤、每一步用哪个模型、失败时如何回滚」——这与 SkillOpt-Lite 用 gating 保留改动、omnigent 抽象 meta-harness 高度一致。",
      "url": "https://x.com/AndrewYNg/status/2071988145667928442",
      "source": "X",
      "tags": ["loop-engineering", "coding-agent", "harness"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260715-02",
      "section": "voices",
      "title": "黄仁勋：越用 AI，反而越需要雇更多人",
      "summary": "据钛媒体转载，黄仁勋近期表示不应过度赋予智能体人性化特征，并称「我们使用的 AI 越多，反而需要雇佣更多的人」，其内部软件工程师更倾向于「构建智能体」而非直接写 Python。",
      "insight": "这句话点出一个反直觉但真实的产业信号：当 Agent 让单人产出被放大，能被 Agent 化的工作反而变多，团队会被拉宽而非砍薄。工程师从「写 Python」转向「造 Agent + 造 harness」，恰是「循环 > 单步」的组织翻译。",
      "url": "https://www.tmtpost.com/fm/8063592.html",
      "source": "钛媒体",
      "tags": ["labor", "agentic-org", "nvidia"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "voices-20260715-03",
      "section": "voices",
      "title": "Anthropic：value profiling 应成为 Agent 上线前评估与线上监控的一等能力",
      "summary": "Anthropic 在 Claude Values 研究中指出：模型宪法给出核心价值，但没有规定应如何随语言变化，当前的跨语言差异并非有意选择；建议把 value profiling 纳入上线前评估与部署后监控，用来发现漂移、关联问题行为、验证 system prompt 是否真的能稳态引导。",
      "insight": "过去我们评估 Agent 用准确率、延迟、成本；这句话正式把「行为一致性」提到同一序列。对多语言、多模型 Agent 系统，若不显式测「温度 / 严谨 / 审慎 / 深度」的漂移，你就永远不知道用户到底得到的是不是同一个产品。",
      "url": "https://www.anthropic.com/research/claude-values-models-languages",
      "source": "Anthropic",
      "tags": ["values", "monitoring", "alignment"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260715-01",
      "section": "industry",
      "title": "Agent 工具层协议分水岭：MCP 07-28 从「SDK 会话」走向「基础设施」",
      "summary": "MCP 官方博客发布 2026-07-28 Release Candidate（含 breaking changes），移除会话与握手、把版本 / 能力挪进 _meta、加 server/discover、结果加 ttlMs / cacheScope、HTTP 头支持不看 body 的路由、W3C Trace Context 标准化、鉴权全面对齐 OAuth 2.0 / OIDC。",
      "insight": "这一版对整个 Agent 生态是「基础设施级」的信号——工具层从此可以像普通 HTTP 服务那样被扩展、缓存、路由与审计。企业 Agent 的可观测、成本归因、跨机房容灾，都会因此更容易实现，也让 A2A 层的对齐工作有了更稳的下层。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "infrastructure", "protocol"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260715-02",
      "section": "industry",
      "title": "端侧智能体从「App 入口」走向「操作系统 + 硬件品牌」",
      "summary": "阶跃星辰 7/13 在上海一次性发布 STEPX 品牌、Step AOS 大模型原生操作系统、个人智能体 Amoo，以及全球首款大模型原生 Agentic Phone「STEPX Neo」，据报道已联合携程、支付宝、滴滴、美团在出行 / 生活 / 办公 / 内容创作场景做 AI 深度合作，将在 7/17 WAIC 首秀。",
      "insight": "端侧 Agent 的定义权正在从应用层向下渗透。当 OS 与硬件都以 Agent 为一等设计目标，Agentic 开发要考虑的边界不再只是 API 与 prompt，而是「谁掌握任务优先级、谁负责授权、谁决定跨 App 上下文」——这也是国内在 WAIC 前夕给出的 Agent 产业形态答案。",
      "url": "https://www.tmtpost.com/nictation/8063468.html",
      "source": "钛媒体",
      "tags": ["agent-os", "agent-phone", "stepfun"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260715-03",
      "section": "industry",
      "title": "AI 算力资本继续加杠杆：Meta 400 亿投路易斯安那、Intel 50 亿欧扩爱尔兰",
      "summary": "钛媒体转述：Meta 追加 400 亿美元投资路易斯安那州数据中心，将其扩展至 5GW 计算容量，并资助 7 座新天然气电厂、3 座电网级电池及核电升级；Intel 向爱尔兰工厂追加 50 亿欧元，扩大 Intel 3 制程下 Xeon 6 与下一代 Xeon 服务器处理器产能，用于 AI 与 HPC。",
      "insight": "算力资本仍在向「基础电力 + 制程」深层扎根，说明产业押注的是一段更长的、真正把 Agent 商用化跑起来的曲线，而不是模型价格战短周期。对做 Agentic 架构的团队，含义是：可预期的 tokens 供给正在被建，敢做长任务与多 Agent 编排的成本约束会持续放宽。",
      "url": "https://www.tmtpost.com/fm/8063592.html",
      "source": "钛媒体",
      "tags": ["compute", "capex", "infrastructure"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260715-04",
      "section": "industry",
      "title": "行为一致性成为 Agent 上线的新硬指标",
      "summary": "Anthropic 的 Claude Values 研究提出 value profiling 应进入 Agent 上线前评估与线上监控；配合本周 RSI 综述指出的自我确认循环 / 多样性坍塌 / 模型坍缩三大失败模式，行业的评估语汇正在从「准确率 + 成本」扩到「行为 + 多样性 + 分布漂移」。",
      "insight": "评估维度的迁移往往预示合规节奏的迁移。当「行为漂移」被写进评估动作，多语言 / 多模型系统会被要求出具类似「行为一致性报告」的证据——这对做企业 Agent 的团队而言，是一条必然要被内置进 harness 的新度量。",
      "url": "https://www.anthropic.com/research/claude-values-models-languages",
      "source": "Anthropic",
      "tags": ["evaluation", "values", "harness"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260715-01",
      "section": "research",
      "title": "SkillOpt-Lite / HarnessOpt：ZO 优化视角下的技能与 harness 自演化",
      "summary": "SkillOpt-Lite 用零阶优化统一思考经典技术（中心差分、信任域）与当前研究，把 Agent 技能轨迹当作可解释的调试信号，配合三条原则（文件系统轨迹探索、共识属性挖掘、独立验证门控），压缩出 skill / harness 自演化的最小可用管线；报告在 LiveMath 与 SpreadsheetBench 上的显著提升。",
      "insight": "把技能优化放进 ZO 视角，本质是承认「大多数改动都是在噪声里试探」，因此需要独立的验证门控与共识属性来筛选真信号。这个框架也自然扩展到 harness——技能 / harness 都是普通可编辑代码，本无需两套优化路径。",
      "url": "https://arxiv.org/abs/2607.03451",
      "source": "arXiv",
      "tags": ["self-evolution", "zero-order", "harness"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260715-02",
      "section": "research",
      "title": "Recursive Self-Improvement：从有界自我精化到自主研究循环",
      "summary": "Chen 等人综述 1250 篇论文，把 AI 自我改进拆为「有界自我精化」与「开放式递归自我改进」，梳理评价者信号的验证层级，指出三类系统性失败——自我确认循环、多样性坍塌、模型坍缩，并把「部署时演化自身 harness」纳入自我改进的一种。",
      "insight": "这份综述给了工程实践两条硬约束：评价者必须独立于被优化对象，训练分布中的自生成占比必须被限制。否则改进只是幻觉，且随时间放大误差——对做长周期自进化 Agent 的团队，这是必须内置的护栏。",
      "url": "https://arxiv.org/html/2607.07663",
      "source": "arXiv",
      "tags": ["rsi", "survey", "failure-modes"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260715-03",
      "section": "research",
      "title": "Anthropic Claude Values：跨模型、跨语言的行为空间刻画",
      "summary": "论文用 309,815 段主观任务对话，跨 3 个模型（Sonnet 4.6 / Opus 4.6 / Opus 4.7）与 20 种语言，将 3307 个价值观压成 339 个高阶价值并投影到四条正交轴（顺从/审慎、温度/严谨、深度/简洁、坦率/交付）。四轴解释了「控制任务、话题、用户价值后 15% 的价值观方差」，并系统给出模型与语言差异画像。",
      "insight": "把「模型性格」变成可测量量之后，「模型是否稳定」就有了具体度量。四轴虽只解释 15% 方差，却抓住了实用意义最大的部分——这是把 alignment 研究从「宪法条款」推向「可观测漂移」的重要一步。",
      "url": "https://www.anthropic.com/research/claude-values-models-languages",
      "source": "Anthropic",
      "tags": ["values", "alignment", "measurement"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260715-04",
      "section": "research",
      "title": "The Hitchhiker's Guide to Agentic AI：Agentic 系统的六百页从业者手册",
      "summary": "Roitman 提交的 603 页参考书从 Transformer 与 GPU 系统出发，覆盖 SFT / LoRA / MoE、RLHF / PPO / DPO / GRPO、Agentic RAG、四类记忆、Agent harness 设计、MCP / A2A、多 Agent 拓扑、评估方法与部署，主张做好 agentic 系统必须在每一层都具备基本功。",
      "insight": "这类横向手册的价值不在深度，而在给团队一个「共享词表」。当每层都能对话，harness、协议、评估、部署之间的接缝才不会成为坑；也让新加入的成员能快速建立对 Agent 全栈的坐标系。",
      "url": "https://arxiv.org/abs/2606.24937",
      "source": "arXiv",
      "tags": ["survey", "handbook", "agentic"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260715-05",
      "section": "research",
      "title": "Anthropic 计划宏大 / 执行小步：Fable 5 编排 + Sonnet 5 工人的双模式",
      "summary": "Anthropic 在 Claude Cookbooks 更新 Plan-Big-Execute-Small 两种编排模式：用 Fable 5 做「顾问 / 编排者」，Sonnet 5 做「工人」，官方 notebook 报告在研究任务上「达到 Fable 单独 96% 的表现，成本 46%」。",
      "insight": "「大模型规划 + 小模型执行」的层次化编排，把成本 / 性能的均衡显式化。它把「模型选择」从产品经理的问题下沉为 harness 的问题——每一步都由控制循环决定动用谁，这也是 Loop Engineering 的具体落法之一。",
      "url": "https://github.com/anthropics/claude-cookbooks/blob/main/managed_agents/CMA_plan_big_execute_small.ipynb",
      "source": "Anthropic",
      "tags": ["orchestration", "cost", "harness"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260715-06",
      "section": "research",
      "title": "Colibri：25GB 内存无 GPU 跑 744B MoE，把「离线大模型」变成日常工具",
      "summary": "开源项目 Colibri 通过按需从磁盘流式加载不活跃专家，让 GLM-5.2 这类 744B 参数 MoE 模型在 25GB 内存的笔记本上离线运行，暴露 OpenAI 兼容 API 并支持跨重启持久会话；代价是速度——冷启动 0.05–0.1 tok/s，快速 NVMe 上可到 ~1 tok/s。",
      "insight": "对离线 Agent、私域评估、教育场景是意义显著的普及信号。速度慢但可控，让「随手在本地跑一个大模型做长周期回放 / 评测」在成本上变得可行——正好补齐 flight-recorder 一类本地优先 harness 的模型端拼图。",
      "url": "https://github.com/JustVugg/colibri",
      "source": "GitHub",
      "tags": ["moe", "offline", "inference"],
      "label": "研究",
      "kind": "research",
      "importance": 6
    },
    {
      "id": "china-20260715-01",
      "section": "china",
      "title": "拟人化互动服务新规 7/15 施行 · 豆包千问同日下线智能体功能",
      "summary": "《人工智能拟人化互动服务管理暂行办法》今日正式施行，字节豆包与阿里通义千问同日下线智能体功能，用户配置与历史对话不再可访问，10/15 后按隐私政策处理；上海市委网信办「清朗·整治 AI 应用乱象」专项已下架违规智能体逾 1.4 万个，向近百家重点平台完成法规宣贯。",
      "insight": "这是国内首次以「拟人化互动」为切口对 C 端 Agent 集中出手。规则条目将成为消费级 Agent 的默认底线（未成年人核验、防情感依赖 / 消费诱导、审计留痕），也倒逼平台以更强的 harness、身份体系承接后续产品。",
      "url": "https://finance.sina.com.cn/stock/t/2026-07-04/doc-inifrana2226218.shtml",
      "source": "新浪财经",
      "tags": ["拟人化", "合规", "智能体下线"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "china-20260715-02",
      "section": "china",
      "title": "习近平将出席 2026 WAIC 开幕并发表主旨讲话，7/17 上海拉开帷幕",
      "summary": "据新华社与人民网报道，2026 世界人工智能大会暨人工智能全球治理高级别会议将于 7 月 17—20 日在上海举行，习近平将出席开幕式并发表主旨讲话。大会以大模型、智能体与全球治理为主线，300+ 新品预计首发。",
      "insight": "在拟人化互动新规同日施行的背景下，最高层出席 WAIC 的信号非常明确：治理与产业将同框推进。对做国内 Agent 的团队，值得关注开幕致辞中关于「治理框架、跨国互操作、产业落地」三条线的定调。",
      "url": "http://politics.people.com.cn/n1/2026/0714/c461001-40760450.html",
      "source": "人民网",
      "tags": ["WAIC", "治理", "上海"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260715-03",
      "section": "china",
      "title": "阶跃星辰 STEPX：全球首个大模型原生 AI 终端品牌，Step AOS + STEPX Neo 同步登场",
      "summary": "阶跃星辰在上海一次性发布 STEPX 品牌、Step AOS「大模型原生操作系统」、个人智能体 Amoo，以及 STEPX Neo「全球首款大模型原生 Agentic Phone」，据报道已联合携程、支付宝、滴滴、美团在出行 / 生活 / 办公 / 内容创作场景达成 AI 深度合作，7/17 WAIC 首秀。",
      "insight": "国内厂商把 Agent 一次性做到 OS 与硬件层，是 2026 端侧 Agent 竞争的关键锚点。它给出一个明确的产品猜想：未来的「Agent 入口」不是 App，而是操作系统 + 硬件品牌 + 私人 Agent 的组合。",
      "url": "https://www.tmtpost.com/nictation/8063468.html",
      "source": "钛媒体",
      "tags": ["阶跃", "AgentOS", "AgenticPhone"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260715-04",
      "section": "china",
      "title": "智谱完成 H 股配售募资约 314 亿港元，用于 AGI 研发与业务拓展",
      "summary": "据钛媒体转述，智谱完成 H 股配售，募资约 314 亿港元，所得款项拟用于「通用人工智能研发、业务拓展及优化资本结构」。同期字节跳动否认涉足智能驾驶，称在物理 AI 领域有早期研究但无智能驾驶业务计划。",
      "insight": "国内头部大模型公司资本化节奏进入新阶段，AGI 研发与业务拓展被明确写进用款用途；同时头部厂商在业务边界上主动做减法（如智能驾驶）——资源集中投向核心模型 + Agent 生态，是当下产业的共识动作。",
      "url": "https://www.tmtpost.com/fm/8063592.html",
      "source": "钛媒体",
      "tags": ["智谱", "融资", "AGI"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
