window.APP_DATA = {
  "generatedAt": "2026-07-21T02:30:00Z",
  "sourceDigestDate": "2026-07-21",
  "dateText": "2026年7月21日 星期二",
  "editorNote": [
    "今天的主线是 <strong>2026 WAIC（7/17–20）闭幕，把 Agent 从「炫能力」推到「全域互联 + 产业落地 + 治理」三条线上</strong>。据 <a href=\"https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml\" target=\"_blank\" rel=\"noopener noreferrer\">21 世纪经济报道</a>，本届大会集聚千余家企业、3000 余项前沿成果、超 300 款新品首发，主线被概括为「具身、兴业、善治」——中兴谈「智能体手机要听得懂 / 能干活 / 记得住 / 够安全」，华为云与邮储银行落地 7×24 小时全自动智能体引擎，蚂蚁「灵波」把机器人开进智慧药房，端侧 Agent 的形态之争已从 App 入口打到手机与机器人本体。",
    "<strong>A2A / 互操作迎来「标准 + 治理」双落地</strong>。WAIC「从大模型到智能体」论坛上，中国信通院联合华为、蚂蚁、阿里等发布 <a href=\"https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html\" target=\"_blank\" rel=\"noopener noreferrer\">《智能体互联互通协同发展与治理倡议》</a>，同步推出 ASL「智能体安全可信互联协议」与终端智能体评测平台；与此同时 <a href=\"https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/\" target=\"_blank\" rel=\"noopener noreferrer\">MCP 2026-07-28 Release Candidate</a>（RC 已于 5/21 锁定，7/28 正式发布）移除 initialize 握手与 Mcp-Session-Id、把版本 / 能力挪进 <code>_meta</code>、加入 <code>server/discover</code>、给结果加 <code>ttlMs / cacheScope</code>、以 <code>Mcp-Method / Mcp-Name</code> 头支持不看 body 就能路由、并接入 W3C Trace Context——协议层与治理层同时把「Agent 之间怎么连、怎么审计」写成规则。",
    "<strong>Agent 自进化从概念走到「记忆与技能工程化」</strong>。<a href=\"https://arxiv.org/abs/2605.27366\" target=\"_blank\" rel=\"noopener noreferrer\">MUSE-Autoskill</a> 用 Anthropic Agent Skills 的 <code>SKILL.md</code> 结构 + 单元测试 gating，把技能做成 create→evaluate→register 的生命周期，在 SkillsBench 上自生成技能达 87.94%、越过人类技能天花板，且跨 Agent 迁移能补齐 79% 差距；<a href=\"https://arxiv.org/abs/2602.02474\" target=\"_blank\" rel=\"noopener noreferrer\">MemSkill</a> 则把记忆的抽取 / 整合 / 剪枝从写死的启发式变成可学习、可进化的「记忆技能」闭环——自进化的门槛正被压到「可复现、可验证、可留存」。",
    "<strong>开源 harness 走向生产成熟</strong>。字节 <a href=\"https://github.com/bytedance/deer-flow\" target=\"_blank\" rel=\"noopener noreferrer\">DeerFlow v2</a>（77.5K Stars）把「super agent harness」做成子 Agent 编排 + 沙箱 + 长期记忆 + MCP 集成的一体化框架，<a href=\"https://github.com/langgenius/dify\" target=\"_blank\" rel=\"noopener noreferrer\">Dify</a>（约 150K Stars）继续把工作流 / RAG / Agent / 可观测压进一个可生产的平台——当协议在标准化、治理在入场，能把 Agent 长时、可靠、可审计跑起来的 harness，正在成为真正的护城河。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 90 },
    { "label": "Agent 自进化", "value": 92 },
    { "label": "A2A / 互操作", "value": 95 },
    { "label": "Agentic 架构", "value": 91 },
    { "label": "Harness 工程", "value": 93 }
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
      "date": "07.21",
      "fullDate": "2026-07-21",
      "theme": "WAIC 2026 三大主线（具身/兴业/善治）+ 信通院智能体互联互通倡议与 ASL 协议 + MCP 07-28 RC 无状态可路由 + 自进化的记忆与技能工程化 + 开源 harness 成熟",
      "take": "2026 WAIC（7/17–20）闭幕，21 世纪经济报道概括三大主线「具身、兴业、善治」，千余家企业、3000+ 成果、300+ 新品首发；华为云×邮储银行落地 7×24 全自动智能体引擎，中兴提出智能体手机四能力（听得懂/能干活/记得住/够安全），蚂蚁灵波机器人进智慧药房。信通院联合华为/蚂蚁/阿里发布《智能体互联互通协同发展与治理倡议》，推出 ASL 智能体安全可信互联协议与终端智能体评测平台。协议侧，MCP 2026-07-28 RC 移除 initialize/session、把版本与能力挪进 _meta、加 server/discover、结果加 ttlMs/cacheScope、Mcp-Method/Mcp-Name 头支持不看 body 路由、接入 W3C Trace Context。自进化侧，MUSE-Autoskill 用 SKILL.md + 单测 gating 做技能生命周期，SkillsBench 自生成技能 87.94% 越过人类天花板；MemSkill 把记忆操作变成可进化的记忆技能闭环。开源侧 DeerFlow v2（77.5K）做 super agent harness、Dify（~150K）做生产级平台。",
      "items": [
        {
          "title": "WAIC 2026 勾勒三大主线：具身、兴业、善治，300+ 新品首发",
          "source": "新浪财经 / 21世纪经济报道",
          "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml"
        },
        {
          "title": "信通院《智能体互联互通协同发展与治理倡议》+ ASL 安全可信互联协议 + 终端评测平台",
          "source": "中国日报 / 中国信通院",
          "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html"
        },
        {
          "title": "MCP 07-28 Release Candidate：无状态协议核心 + server/discover + 可路由头 + W3C Trace",
          "source": "Model Context Protocol",
          "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/"
        },
        {
          "title": "MUSE-Autoskill：SKILL.md + 单测 gating 的技能生命周期，自生成技能越过人类天花板",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2605.27366"
        },
        {
          "title": "MemSkill：把记忆的抽取/整合/剪枝变成可学习、可进化的记忆技能闭环",
          "source": "arXiv",
          "url": "https://arxiv.org/abs/2602.02474"
        },
        {
          "title": "DeerFlow v2（77.5K Stars）：子 Agent 编排 + 沙箱 + 长期记忆的 super agent harness",
          "source": "GitHub",
          "url": "https://github.com/bytedance/deer-flow"
        }
      ]
    },
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
    }
  ],
  "items": [
    {
      "id": "hot-20260721-01",
      "section": "hot",
      "title": "MCP 07-28 Release Candidate 临近：无状态协议核心，工具层向「HTTP 级可扩展」升级",
      "summary": "Model Context Protocol 的 2026-07-28 正式版将落地——RC 已于 5/21 锁定，是上线以来最大一次修订。移除 initialize/initialized 握手（SEP-2575）与 Mcp-Session-Id（SEP-2567），协议版本 / 客户端信息 / 能力改由 _meta 随每次请求携带；新增 server/discover 让客户端预拉能力，任何请求都能路由到任意实例。同时引入 Mcp-Method / Mcp-Name HTTP 头（SEP-2243）支持不看 body 的路由、给 List / Resource 结果加 ttlMs / cacheScope（SEP-2549）、标准化 W3C Trace Context via _meta（SEP-414），并把 Extensions Framework、MCP Apps 与 Tasks 重新划分为扩展 / 一等能力，鉴权全面对齐 OAuth 2.0 / OIDC。",
      "insight": "这版把 MCP 从「有状态、粘性会话」的 SDK 协议，改造成「无状态、可路由、可缓存、可追踪」的基础设施协议——这才是 Agent 工具层能像 HTTP 一样被负载均衡、被 CDN 化、被审计的前提。对做 Agentic 架构的团队含义直接：任意工具调用可跨实例、可分布式；对做互操作的团队，Trace Context 与鉴权硬化让「谁在什么时候用了谁的工具」终于可以端到端串起来。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "protocol", "stateless"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260721-02",
      "section": "hot",
      "title": "WAIC 2026 闭幕：三大主线「具身 / 兴业 / 善治」，千余家企业、3000+ 成果、300+ 新品",
      "summary": "据 21 世纪经济报道，2026 世界人工智能大会（7/17–20，上海）闭幕，被概括为「具身、兴业、善治」三大主线：集聚千余家企业、3000 余项前沿成果、超 300 款新品首发。中兴通讯提出智能体手机需具备「听得懂、能干活、记得住、够安全」四种能力，荣耀发布机器人手机，华为云与邮储银行落地 7×24 小时全自动智能体引擎，蚂蚁「灵波」机器人进驻智慧药房，傅利叶、智元等则把具身智能从「秀能力」推向真实部署。",
      "insight": "主线从「谁跑分高」切换到「谁能把 Agent 连成生态、跑进产业、并被治理」。对做 Agentic 开发的团队，值得关注的是端侧形态的分叉：Agent 入口正从 App 下沉到手机与机器人本体，跨应用授权、任务优先级、记忆与安全成了产品必答题，而不再只是模型与 prompt。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["waic", "embodied", "agent-phone"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260721-03",
      "section": "hot",
      "title": "信通院发布《智能体互联互通倡议》+ ASL 安全可信互联协议 + 终端评测平台",
      "summary": "在 WAIC「从大模型到智能体：迈向自主智能新纪元」论坛（7/18，主题「智体融合 智启新元」）上，中国信通院联合华为、蚂蚁、阿里等发布《智能体互联互通协同发展与治理倡议》，并推出 ASL「智能体安全可信互联协议」（信通院 + 蚂蚁集团）与终端智能体评测平台（华为、联想、MiniMax、Xreal 等参与），同步发布《互联网智能体发展研究报告》。论坛由信通院主办，近 50 位专家、逾 800 人参会，工信部表示将推进制造、能源、医疗、交通等领域智能体落地。",
      "insight": "这是国内首次以「互联互通 + 安全可信」为主线，把 A2A 互操作从「协议连得上」抬升到「治理 + 评测」的国家级动作。ASL 之于 A2A，正如 MCP 07-28 RC 之于工具层——两条线都在给「Agent 之间怎么连、怎么被信任、怎么被评」立规则；对做互操作的团队，这意味着未来接入将附带安全协议与评测门槛。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["a2a", "asl", "governance"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260721-04",
      "section": "hot",
      "title": "MUSE-Autoskill：用 SKILL.md + 单测 gating 做技能生命周期，自生成技能越过人类天花板",
      "summary": "MUSE（Memory-Utilizing Skill Evolution）是以技能为中心的 Agent 框架，把技能纳入创建 / 记忆 / 管理 / 评估 / 精化五段生命周期：在 ReAct 循环内用内置 skill_create 工具即时造技能，技能按 Anthropic Agent Skills 格式打包为含 SKILL.md、scripts/、tests/ 的结构化目录，走 create→evaluate→register 闭环——只有通过单元测试的技能才注册，失败则自动 update_skill 精化。在 SkillsBench（51 任务、GPT-5.5）上，带人类技能准确率 68.40%（+15.21pp），自生成技能在成功生成的 35 个任务上达 87.94%，越过人类技能天花板；跨 Agent 迁移可补齐 79% 差距。",
      "insight": "这把自进化落成了非常干净的工程配方：技能是带单测的结构化目录，进化 = 单测 gating + 每技能记忆。它证明「自生成技能超越人类手写技能」不是玄学，而是「create→测→留」的可复现闭环——这与 harness 侧「record→replay→regression」的可信范式同源。",
      "url": "https://arxiv.org/abs/2605.27366",
      "source": "arXiv",
      "tags": ["self-evolution", "skill", "harness"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260721-05",
      "section": "hot",
      "title": "MemSkill：把记忆的抽取/整合/剪枝变成可学习、可进化的「记忆技能」闭环",
      "summary": "MemSkill 针对「Agent 记忆系统依赖少量静态、手工设计的记忆操作」这一痛点，把记忆操作重构为可学习、可进化的「记忆技能」。架构由三部分组成：Controller 学习挑选相关技能子集、Executor（LLM）生成技能引导的记忆、Designer 定期检查失败样本并精化或新增技能，三者形成同时升级「技能选择策略」与「技能库」的闭环。在 LoCoMo、LongMemEval、HotpotQA、ALFWorld 四个基准上优于强基线并具良好泛化。v1 于 2026-02-02 提交，v2 于 5/24 更新。",
      "insight": "记忆一直是自进化最容易被写死的一环——大多数系统用固定启发式抽取 / 覆盖记忆。MemSkill 把「记忆策略」本身变成可进化对象，与 MUSE 的技能进化互补：一个进化「怎么记」，一个进化「怎么做」。对长时 Agent 而言，这是把「记忆治理」纳入自进化闭环的关键拼图。",
      "url": "https://arxiv.org/abs/2602.02474",
      "source": "arXiv",
      "tags": ["self-evolution", "memory", "skill"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260721-06",
      "section": "hot",
      "title": "DeerFlow v2（77.5K Stars）：字节开源的 super agent harness 冲上 GitHub Trending 第一",
      "summary": "字节跳动开源的 DeerFlow（Deep Exploration and Efficient Research Flow）定位「super agent harness」，编排子 Agent、记忆与沙箱以处理从研究到编码到内容创作的长时任务（分钟到小时级）。v2.0 是对原深度研究框架的完全重写，能力包括子 Agent 编排、本地 / Docker / Kubernetes 沙箱执行、长期记忆、可扩展技能与 MCP 集成、Web 搜索抓取、多模型支持（OpenAI / Claude / 豆包 / DeepSeek / Qwen 等）。Python 3.12 后端 + Node.js 前端，MIT 许可，Stars 约 77.5K，v2 发布后登顶 GitHub Trending。",
      "insight": "当协议在标准化、治理在入场，能把 Agent 长时、可靠、可审计跑起来的 harness 才是护城河。DeerFlow 把「编排 + 沙箱 + 记忆 + MCP」打成一体，正是 Agentic 架构从「拼 API」走向「拼运行时」的信号——它与 MCP 无状态化互补：底层协议标准化 + 上层 harness 一体化，才有真正可扩展的 Agent 系统。",
      "url": "https://github.com/bytedance/deer-flow",
      "source": "GitHub",
      "tags": ["harness", "orchestration", "sandbox"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260721-01",
      "section": "keyong",
      "title": "MCP 无状态化 = A2A / 互操作的「基础设施化」拐点",
      "summary": "MCP 07-28 RC 移除会话与握手，把协议版本 / 能力 / 追踪信息挪进 _meta，加入 server/discover 与 ttlMs / cacheScope，并规定 HTTP 头 Mcp-Method / Mcp-Name 支持不看 body 的路由，鉴权全面对齐 OAuth 2.0 / OIDC。",
      "insight": "→ 主题关联：呼应「A2A / 互操作」+「Agentic 架构」。真正的互操作不只是「协议连得上」，更是「能被负载均衡、缓存、审计」。这一版把 MCP 从粘性 SDK 协议改造成基础设施协议——对 Agent 网络的意义可类比 HTTP/1.1 到 HTTP/2 的迁移，让「工具层」终于可以像 Web 一样横向扩展。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["a2a", "interoperability", "protocol"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 10
    },
    {
      "id": "keyong-20260721-02",
      "section": "keyong",
      "title": "ASL + 互联互通倡议 = 互操作从「协议层」抬升到「治理层」",
      "summary": "信通院联合华为 / 蚂蚁 / 阿里发布《智能体互联互通协同发展与治理倡议》，并推出 ASL 智能体安全可信互联协议与终端智能体评测平台，明确把「安全可信互联」写进 Agent 之间的连接规则。",
      "insight": "→ 主题关联：呼应「A2A / 互操作」+「Agentic 架构」。MCP / A2A 解决「怎么连」，ASL 这类协议补上「连得可信吗」：身份、授权、审计、评测被前置为互联的默认条件。做互操作不能只盯协议兼容，还要预留安全协议接入点与「可被第三方评测」的能力面。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["a2a", "asl", "trust"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260721-03",
      "section": "keyong",
      "title": "MUSE 的「SKILL.md + 单测 gating」= Agent 自进化的最小可用工程语法",
      "summary": "MUSE-Autoskill 把技能做成含 SKILL.md、scripts/、tests/ 的结构化目录，在 ReAct 循环内即时造技能，只有通过单元测试才注册、失败自动精化，并为每个技能维护 .memory.md 级记忆。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Harness 工程」。它给自进化提出三条硬约束——技能要结构化（可复用）、留存要过单测（可验证）、经验要沉淀到技能级记忆（可积累）。这正是把「无据地相信 Agent 变好了」变成「有据地保留 delta」的工程语法，也让技能可跨 Agent 迁移。",
      "url": "https://arxiv.org/abs/2605.27366",
      "source": "arXiv",
      "tags": ["self-evolution", "harness", "gating"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260721-04",
      "section": "keyong",
      "title": "记忆也要「可进化」= 自进化闭环的最后一块拼图",
      "summary": "MemSkill 把记忆的抽取 / 整合 / 剪枝从写死的启发式变成可学习的「记忆技能」，用 Controller / Executor / Designer 三段闭环同时升级技能选择策略与技能库。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Agentic 架构」。多数系统把「怎么做」交给自进化，却把「怎么记」写死。MemSkill 提醒：记忆策略若不进化，长时 Agent 会在错误的记忆结构上越跑越偏。把记忆治理纳入自进化闭环，是长周期 Agent 架构必须显式设计的一维。",
      "url": "https://arxiv.org/abs/2602.02474",
      "source": "arXiv",
      "tags": ["self-evolution", "memory", "architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260721-05",
      "section": "keyong",
      "title": "终端智能体评测平台 = Harness 工程走向「行业公共设施」",
      "summary": "WAIC 论坛推出的终端智能体评测平台由华为、联想、MiniMax、Xreal 等共建，配合 ASL 协议，把「终端 Agent 能不能可靠、可信运行」做成可对齐、可比较的评测能力。",
      "insight": "→ 主题关联：呼应「Harness 工程」+「Agentic 架构」。harness 此前多是团队私有的 record/replay/regression；当评测被做成行业平台，意味着「可验证运行」正从内部工程变成公共设施与准入门槛。做端侧 / 企业 Agent 的团队，应提前把行为、成本、安全的可观测面对齐到这类评测标准。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["harness", "evaluation", "terminal-agent"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260721-01",
      "section": "opensource",
      "title": "bytedance/deer-flow（77.5K Stars）：一体化的 super agent harness",
      "summary": "DeerFlow v2 是字节开源的「super agent harness」，编排子 Agent、记忆与沙箱处理长时任务，支持本地 / Docker / Kubernetes 沙箱执行、长期记忆、可扩展技能与 MCP 集成、Web 搜索抓取，以及多模型（OpenAI / Claude / 豆包 / DeepSeek / Qwen）。Python 3.12 后端 + Node.js 前端，MIT，累计逾 2700 次提交，v2 发布后登顶 GitHub Trending。",
      "insight": "把「编排 + 沙箱 + 记忆 + MCP」做成一体，是 harness 从脚本走向平台的标志。它与 MCP 无状态化互为上下层——协议标准化在下、harness 一体化在上，多品牌 Agent 协作才有底座。",
      "url": "https://github.com/bytedance/deer-flow",
      "source": "GitHub",
      "tags": ["harness", "orchestration", "mcp"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260721-02",
      "section": "opensource",
      "title": "langgenius/dify（约 150K Stars）：从原型到生产的 LLM 应用平台",
      "summary": "Dify 是开源 LLM 应用开发平台，把可视化工作流、RAG 管线、Agent 框架（Function Calling / ReAct，内置 50+ 工具）、模型管理与可观测（Opik / Langfuse / Arize Phoenix）压进一个界面，主打「从原型到生产无需重建技术栈」。TypeScript 前端 + Python 后端，Apache 2.0 衍生许可，Stars 约 150K，支持 Docker Compose / K8s / Terraform / 阿里云等多种部署。",
      "insight": "当协议与治理都在标准化，「工程化平台」的价值在于把工作流、RAG、Agent、可观测一次性拉齐。Dify 的可观测集成尤其关键——它让 Agent 的行为在生产里可被追踪，正好承接 MCP W3C Trace Context 的下游落点。",
      "url": "https://github.com/langgenius/dify",
      "source": "GitHub",
      "tags": ["platform", "observability", "rag"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260721-03",
      "section": "opensource",
      "title": "labsai/EDDI：配置驱动的多 Agent 编排中间件，原生支持 MCP / A2A",
      "summary": "EDDI（Enhanced Dialog Driven Interface）是 Apache 2.0 的对话式 AI 中间件，用「配置而非写代码」的方式构建多 Agent 编排：通过版本化 JSON 定义 Agent 行为，提供智能路由、持久记忆与 API 编排，支持 12+ 模型、MCP / A2A 协议、RAG，并对齐 EU AI Act / GDPR / HIPAA 等合规。基于 Java 25 + Quarkus，交付 Red Hat 认证镜像，Stars 约 363。",
      "insight": "「用确定性引擎安全治理非确定性 AI」是企业 Agent 的现实诉求。EDDI 把 MCP / A2A 与合规、版本化配置绑在一起，代表互操作协议正在被塞进「可治理的编排层」——这与信通院 ASL 的治理方向在工程上同频。",
      "url": "https://github.com/labsai/EDDI",
      "source": "GitHub",
      "tags": ["a2a", "orchestration", "governance"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260721-04",
      "section": "opensource",
      "title": "inference-gateway/adl-cli：用 ADL 声明式生成企业级 A2A 服务器",
      "summary": "adl-cli 是从 Agent Definition Language（ADL，YAML）生成企业级 A2A（Agent-to-Agent）服务器的命令行工具，用 adl init / generate / validate 三条命令做 schema 驱动的项目脚手架，支持多模型（OpenAI / Anthropic / Google / Groq / Mistral / DeepSeek）、鉴权、SCM 集成、审计日志与 CI/CD 生成，并可生成 Go / Rust / TypeScript 项目。Go 实现，Apache 2.0，仍处早期（Stars 约 13）。",
      "insight": "A2A 与 MCP 的分工正在具象化：MCP 管「Agent 连工具」，A2A 管「Agent 连 Agent」。给 A2A 提供声明式脚手架，是协议从提案走向可开发的关键一步——就像早期 HTTP 服务需要 express、rails 那样，A2A 也需要自己的生成器。",
      "url": "https://github.com/inference-gateway/adl-cli",
      "source": "GitHub",
      "tags": ["a2a", "cli", "scaffolding"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260721-01",
      "section": "voices",
      "title": "千里科技/阶跃 尹奇：2026 大模型将跨过「关键临界点」",
      "summary": "据 21 世纪经济报道对 WAIC 2026 的观察，尹奇在会上判断 2026 年的模型能力将跨过一个「关键临界点」，成为智能体从「能对话」走向「能干活」的分水岭；同场中兴倪飞、荣耀李健等则从终端形态给出各自的 Agent 落地路径。",
      "insight": "「临界点」之说的现实含义，是能力趋同后差异转向「循环与形态」：模型达标之后，谁把控制循环、终端授权、跨应用记忆设计得更好，谁就赢。这与 harness / 技能进化的工程方向一致——竞争正从单点能力转向系统工程。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["waic", "model", "agent"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260721-02",
      "section": "voices",
      "title": "中兴 倪飞：智能体手机要「听得懂、能干活、记得住、够安全」",
      "summary": "在 WAIC 2026 上，中兴通讯倪飞提出智能体手机需具备四种基础能力——听得懂（理解意图）、能干活（执行任务）、记得住（持久记忆）、够安全（可信与隐私）。这一框架被多家终端厂商在会上以不同产品形态回应。",
      "insight": "「四能力」几乎是把 Agentic 架构的四根支柱翻译成消费级语言：意图理解、任务执行、持久记忆、安全可信。对做端侧 Agent 的团队，这是一份很实用的能力清单——尤其「记得住 + 够安全」正是当前 harness 与治理最薄弱、也最需要显式设计的两环。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["agent-phone", "memory", "safety"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "voices-20260721-03",
      "section": "voices",
      "title": "智元 彭志辉：具身智能要从「秀能力」走向真实部署",
      "summary": "据 WAIC 2026 报道，智元彭志辉强调具身智能正从演示式的「秀能力」转向真实场景的规模化部署，傅利叶给出家庭陪伴的具身方案，蚂蚁「灵波」机器人则进驻智慧药房——具身 Agent 的评价标准正从「能不能做」变成「能不能稳定交付」。",
      "insight": "「从秀能力到真部署」与软件 Agent 的「从 demo 到生产」是同一句话。它把可靠性、可验证、成本约束推到台前——这正是 harness 工程存在的理由：让 Agent 在真实、长时、有对抗的环境里被复现、被打分、被回归。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["embodied", "deployment", "reliability"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "industry-20260721-01",
      "section": "industry",
      "title": "Agent 工具层协议分水岭：MCP 07-28 从「SDK 会话」走向「基础设施」",
      "summary": "MCP 官方将于 2026-07-28 发布正式规范（RC 含 breaking changes），移除会话与握手、把版本 / 能力挪进 _meta、加 server/discover、结果加 ttlMs / cacheScope、HTTP 头支持不看 body 的路由、W3C Trace Context 标准化、鉴权对齐 OAuth 2.0 / OIDC，并设 12 个月弃用—移除的生命周期政策。",
      "insight": "这一版对整个 Agent 生态是「基础设施级」信号——工具层从此可像普通 HTTP 服务那样被扩展、缓存、路由与审计。企业 Agent 的可观测、成本归因、跨机房容灾都会更易实现，也让 A2A 层的对齐工作有了更稳的下层。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "infrastructure", "protocol"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260721-02",
      "section": "industry",
      "title": "华为云 × 邮储银行：7×24 小时全自动智能体引擎落地金融",
      "summary": "据 WAIC 2026 报道，华为云周跃峰介绍与中国邮政储蓄银行合作落地的智能体引擎，可实现 7×24 小时全自动运行，把 Agent 从「辅助工具」推向「无人值守的业务执行」，是本届大会「兴业」主线下金融场景的代表案例之一。",
      "insight": "「7×24 全自动」意味着 Agent 已被允许在无人值守下持续执行——这对 harness 与治理是最高强度的考验：长时运行、异常恢复、审计留痕、成本硬约束缺一不可。金融场景的落地，往往预示企业级 Agent 可靠性标准的抬升。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["enterprise", "finance", "reliability"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260721-03",
      "section": "industry",
      "title": "端侧智能体形态之争：从「智能体手机」到「机器人本体」",
      "summary": "WAIC 2026 上，中兴提出智能体手机四能力、荣耀发布机器人手机作为「类人生命体」落地起点，傅利叶推家庭陪伴具身方案、智元强调具身从秀能力到真部署、蚂蚁灵波机器人进智慧药房——端侧 Agent 的载体正从手机延伸到机器人与更广的物理终端。",
      "insight": "端侧 Agent 的定义权正从应用层向硬件层渗透。当 Agent 以手机 OS、机器人本体为载体，Agentic 开发要考虑的边界不再只是 API 与 prompt，而是「谁掌握任务优先级、谁负责授权、谁决定跨端上下文」——这也是国内在治理框架并进下给出的产业形态答案。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["edge-agent", "embodied", "device"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "industry-20260721-04",
      "section": "industry",
      "title": "A2W：在 MCP（工具）、A2A（Agent 间）之上补齐「网站执行层」",
      "summary": "rtrvr.ai 在《Agent Web Protocol Stack》中提出 A2W（Agent-to-Web）：MCP 解决 Agent 连工具、A2A 解决 Agent 连 Agent，但 Agent 直接、可靠地操作现有网站仍缺一层标准；A2W 试图为「Agent 执行网页任务」补齐协议层，该讨论在 Hacker News 上持续发酵。",
      "insight": "协议栈正在分层清晰化：工具（MCP）、Agent 间（A2A）、网站执行（A2W）。对做互操作的团队，这提示一个尚未标准化的空白——大量业务仍以网页为载体，谁把「Agent 可靠操作网站」标准化，谁就握住了 Agent 触达真实世界的关键接口。",
      "url": "https://www.rtrvr.ai/blog/agent-web-protocol-stack",
      "source": "rtrvr.ai",
      "tags": ["a2w", "interoperability", "web"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "research-20260721-01",
      "section": "research",
      "title": "MUSE-Autoskill：记忆驱动的技能进化框架，五段生命周期 + 单测 gating",
      "summary": "MUSE 把技能纳入创建 / 记忆 / 管理 / 评估 / 精化五段生命周期：ReAct 循环内即时造技能、按 Anthropic Agent Skills 格式打包（SKILL.md + scripts/ + tests/）、create→evaluate→register 闭环仅注册通过单测的技能、失败自动 update_skill 精化，并引入技能级记忆（.memory.md）与基于对话 DAG 的两级上下文压缩。SkillsBench（51 任务、GPT-5.5）带人类技能 68.40%（+15.21pp），自生成技能在成功的 35 任务上 87.94%，跨 Agent 迁移补齐 79% 差距，生成技能更省、Pareto 最优。2026-05-26 提交。",
      "insight": "把技能优化放进「结构化目录 + 单测 + 每技能记忆」的框架，本质是承认「大多数改动都是在噪声里试探」，因此需要独立的验证门控筛选真信号。它也自然扩展到 harness——技能 / harness 都是普通可编辑代码，本无需两套优化路径。",
      "url": "https://arxiv.org/abs/2605.27366",
      "source": "arXiv",
      "tags": ["self-evolution", "skill", "evaluation"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260721-02",
      "section": "research",
      "title": "MemSkill：把记忆操作从静态启发式变成可进化的记忆技能",
      "summary": "MemSkill 将记忆的抽取 / 整合 / 剪枝重构为可复用、可进化的「记忆技能」，用 Controller（选技能）、Executor（生成技能引导记忆）、Designer（检查失败并精化 / 新增技能）三段闭环，联合升级技能选择策略与技能库，在 LoCoMo、LongMemEval、HotpotQA、ALFWorld 上优于强基线并良好泛化。代码开源（ViktorAxelsen/MemSkill）。v1 2026-02-02、v2 2026-05-24。",
      "insight": "记忆治理是自进化里最容易被写死的一环。MemSkill 证明「怎么记」也可被学习与进化，与 MUSE 的「怎么做」进化互补。对长时 Agent，这意味着记忆结构不再是固定假设，而能随交互模式自适应演化——是自进化闭环的最后一块拼图。",
      "url": "https://arxiv.org/abs/2602.02474",
      "source": "arXiv",
      "tags": ["memory", "self-evolution", "benchmark"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260721-03",
      "section": "research",
      "title": "Self-Evolving Agents 综述：What / When / How / Where 的统一坐标系",
      "summary": "《A Survey of Self-Evolving Agents》系统梳理自进化 Agent 的研究版图，围绕「进化什么（模型 / 记忆 / 工具 / 提示 / 工作流）、何时进化（测试时 / 任务间）、如何进化（奖励 / 反馈 / 强化 / 元学习）、在哪进化（领域场景）」四个维度建立坐标系，并讨论评估与安全等开放问题，是理解本轮 MemSkill / MUSE 等工作的上位框架。",
      "insight": "综述的价值在于给团队一套共享词表：把「自进化」拆成 what/when/how/where 后，MemSkill 落在「记忆 × 任务间」、MUSE 落在「技能 × 测试时 + gating」，各自的边界与风险一目了然。有了坐标系，才不会把「能改」误当「该改」。",
      "url": "https://arxiv.org/abs/2507.21046",
      "source": "arXiv",
      "tags": ["self-evolution", "survey", "taxonomy"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260721-04",
      "section": "research",
      "title": "MCP 07-28 RC 的协议设计：无状态、可路由、可缓存、可追踪的四原则",
      "summary": "从工程研究视角看，MCP 07-28 RC 的核心是把四条基础设施原则落进协议：无状态（移除握手 / 会话、能力入 _meta）、可路由（Mcp-Method / Mcp-Name 头 + server/discover）、可缓存（ttlMs / cacheScope 对齐 HTTP Cache-Control）、可追踪（W3C Trace Context via _meta），并用 Extensions Framework 给能力演进留出独立版本化的轨道。",
      "insight": "这四原则几乎是把成熟 Web 基础设施的设计哲学移植到 Agent 工具层。对做 Agentic 架构的团队，它给出一份可直接对照的清单：你的工具协议是否无状态可横扩？能否被网关按头路由？结果能否被安全缓存？调用链能否端到端追踪？",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "architecture", "protocol"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260721-01",
      "section": "china",
      "title": "WAIC 2026 闭幕：三大主线「具身 / 兴业 / 善治」，300+ 新品首发",
      "summary": "2026 世界人工智能大会暨人工智能全球治理高级别会议于 7 月 17—20 日在上海举行，21 世纪经济报道概括三大主线为「具身、兴业、善治」，集聚千余家企业、3000 余项前沿成果、超 300 款新品首发，并发布《中国智·惠世界（2026）》等成果，展现 AI 从技术探索走向产业纵深与社会普惠。",
      "insight": "从「治理与产业同框」的信号看，国内 Agent 的下一程被明确划出双底线：一边是治理底线（安全、可信、可评测），一边是产业底线（能落地、能规模、能普惠）。做国内 Agent 的团队，值得对照三大主线校准自己的技术与合规路线。",
      "url": "https://finance.sina.com.cn/roll/2026-07-20/doc-iniimkki3048125.shtml",
      "source": "新浪财经 / 21世纪经济报道",
      "tags": ["WAIC", "具身", "治理"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "china-20260721-02",
      "section": "china",
      "title": "信通院《智能体互联互通倡议》+ ASL 安全可信互联协议正式亮相",
      "summary": "在 WAIC「从大模型到智能体」论坛上，中国信通院联合华为、蚂蚁、阿里等发布《智能体互联互通协同发展与治理倡议》，并推出 ASL 智能体安全可信互联协议（信通院 + 蚂蚁）与《互联网智能体发展研究报告》，主线是「智能体全域互联生态构建」。工信部表示将推进制造、能源、医疗、交通等领域智能体部署。",
      "insight": "这是国内首次把 A2A 互操作提到「安全可信 + 治理倡议 + 国家级评测」的高度。对开发者而言，未来接入 Agent 网络将附带安全协议与评测门槛——互操作不再只是技术兼容，而是「可信互联」的资质问题。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["ASL", "互联互通", "治理"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "china-20260721-03",
      "section": "china",
      "title": "终端智能体评测平台成立：华为、联想、MiniMax、Xreal 共建",
      "summary": "WAIC 论坛上，信通院牵头联合华为、联想、MiniMax、Xreal 等发布终端智能体评测平台与生态计划，配合 ASL 协议，为终端 Agent 的可靠、可信运行提供可对齐、可比较的评测能力，是「善治」主线在评测基础设施上的落点。",
      "insight": "把「可验证运行」做成行业公共平台，意味着 harness 从团队私有能力升级为准入门槛。做端侧 / 企业 Agent 的团队，应提前把行为、成本、安全的可观测面对齐到这类评测标准，避免上线时被评测卡住。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["评测平台", "终端智能体", "Harness"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260721-04",
      "section": "china",
      "title": "徐汇集聚 AI 企业超 2000 家，占上海大模型备案六成",
      "summary": "据 WAIC 论坛披露，上海徐汇区已集聚 AI 企业超 2000 家，占全市已备案大模型的约 60%，成为国内 Agent 与大模型产业的重要承载区；工信部与地方将协同推进智能体在重点行业的规模化落地。",
      "insight": "产业集聚度是 Agent 生态成熟的先行指标。当区域内企业、模型、评测、治理形成闭环，互操作与技能沉淀的规模效应才会显现——这也是国内 Agent 从单点产品走向「生态互联」的现实土壤。",
      "url": "https://cn.chinadaily.com.cn/a/202607/19/WS6a5cb114a310d709c2fbe529.html",
      "source": "中国日报 / 中国信通院",
      "tags": ["徐汇", "产业集聚", "大模型"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
