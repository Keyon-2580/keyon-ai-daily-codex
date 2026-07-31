window.APP_DATA = {
  "generatedAt": "2026-07-31T01:30:00Z",
  "sourceDigestDate": "2026-07-31",
  "dateText": "2026年7月31日 星期五",
  "editorNote": [
    "今天的主线是 <strong>工具层协议正式「基础设施化」</strong>。<a href=\"https://blog.modelcontextprotocol.io/posts/2026-07-28/\" target=\"_blank\" rel=\"noopener noreferrer\">MCP 2026-07-28 规范正式发布（GA）</a>——维护者 David Soria Parra 与 Den Delimarsky 宣布「正式按下发布键」，把 MCP 从「双向、有状态」协议改造为「请求/响应、无状态」协议：移除 initialize 握手（SEP-2575）与 Mcp-Session-Id（SEP-2567）、把版本 / 客户端 / 能力放进 <code>_meta</code>、新增可选 <code>server/discover</code>、给 list / read 结果加 <code>ttlMs / cacheScope</code>（SEP-2549）、要求 <code>Mcp-Method / Mcp-Name</code> 头以便网关不解析 body 即可路由与计量（SEP-2243），用 MRTR 取代需要长连接的 elicitation / sampling / roots（SEP-2322），并硬化鉴权（RFC 9207 iss 校验、DCR 转向 CIMD 并弃用）。任意请求都能落在任意实例上——工具层从此可以像普通 HTTP 服务一样被负载均衡、缓存、审计。",
    "<strong>国内把互操作抬到「可信 + 治理 + 国标」三层</strong>。据 <a href=\"https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml\" target=\"_blank\" rel=\"noopener noreferrer\">中国新闻网</a>，中国信通院在智能体互联网论坛发布互联网智能体可信互联握手（ATH）评估结果，首批 13 家企业产品通过，ATH 以「用户—智能体—应用」三方九步握手做身份互验、授权与行为审计，并明确与 MCP / A2A「互补增效、不形成竞争」；同期 <a href=\"http://finance.people.com.cn/n1/2026/0709/c1004-40757059.html\" target=\"_blank\" rel=\"noopener noreferrer\">《人工智能 智能体互联》系列国家标准（GB/Z，共 7 部分）</a> 发布，被称为国内首套覆盖智能体全生命周期的标准体系，串起「总体架构—身份标识—可信管理—能力描述—智能发现—多元交互—工具调用」的技术链路。",
    "<strong>Agent 自进化从「造技能」走向「重建记忆、蒸馏技能、记可靠性」</strong>。arXiv 7/30 一批新工作把闭环做得更细：<a href=\"http://arxiv.org/abs/2607.28272v1\" target=\"_blank\" rel=\"noopener noreferrer\">MemHarness</a> 主张「记忆是重建而非回放」，在决策时按当前状态重构检索到的经验以避免负迁移；<a href=\"http://arxiv.org/abs/2607.28048v1\" target=\"_blank\" rel=\"noopener noreferrer\">SKILL-KD</a> 把师生轨迹的可执行差异蒸馏成「技能补丁」并做漂移感知的技能合并；<a href=\"http://arxiv.org/abs/2607.27958v1\" target=\"_blank\" rel=\"noopener noreferrer\">Σ-Mem</a> 则为多智能体记「谁在什么条件下可信」的在线可靠性记忆——自进化的对象从「怎么做」扩展到「怎么记、信谁、留什么」。",
    "<strong>Harness 既是护城河，也开始成为「可被蒸馏的 IP」和攻击面</strong>。<a href=\"http://arxiv.org/abs/2607.27994v1\" target=\"_blank\" rel=\"noopener noreferrer\">SKIMIX</a> 把「技能混合」做成 harness 期的多智能体扩展，指出扩展收益高度依赖任务类型、且多在首轮精化中出现；<a href=\"http://arxiv.org/abs/2607.28147v1\" target=\"_blank\" rel=\"noopener noreferrer\">Agent Harness Distillation</a> 首次把「推理时 harness」当作可被黑盒提取的知识产权，揭示自治多智能体系统的 IP 泄露风险。开源侧 <a href=\"https://github.com/wecode-ai/Wegent\" target=\"_blank\" rel=\"noopener noreferrer\">Wegent</a>（674 Stars）与 <a href=\"https://github.com/Runfusion/Fusion\" target=\"_blank\" rel=\"noopener noreferrer\">Fusion</a>（1K+ Stars）继续把「多 Agent 团队 + 沙箱 + MCP」打成可自托管的运行时——协议在标准化、治理在入场，能把 Agent 长时可靠跑起来、并守住自己 harness 的团队才有护城河。"
  ],
  "lens": [
    { "label": "Agentic 开发", "value": 89 },
    { "label": "Agent 自进化", "value": 93 },
    { "label": "A2A / 互操作", "value": 96 },
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
      "date": "07.31",
      "fullDate": "2026-07-31",
      "theme": "MCP 2026-07-28 规范正式发布（无状态可路由）+ 国内 ATH 可信握手评估与《智能体互联》七项国标 + 自进化转向记忆重建/技能蒸馏 + harness 既是护城河也是可被蒸馏的 IP",
      "take": "MCP 官方于 2026-07-28 正式发布新版规范（从 RC 转 GA），维护者 David Soria Parra / Den Delimarsky 宣布正式发布：移除 initialize 握手与 Mcp-Session-Id、把版本/客户端/能力放进 _meta、新增可选 server/discover、list/read 结果加 ttlMs/cacheScope、要求 Mcp-Method/Mcp-Name 头以便网关不解析 body 即可路由计量、用 MRTR 取代需长连接的 elicitation/sampling/roots、鉴权硬化（RFC 9207 iss、DCR 转 CIMD 并弃用），Tier 1 SDK（TS/Python/Go/C#）已支持、Rust beta。国内侧，信通院在智能体互联网论坛发布 ATH 可信握手评估结果、首批 13 家企业通过（ATH 以用户—智能体—应用三方九步握手做身份互验/授权/审计，并称与 MCP/A2A 互补不竞争）；《人工智能 智能体互联》系列国家标准（GB/Z，共 7 部分）发布，串起总体架构—身份标识—可信管理—能力描述—智能发现—多元交互—工具调用。研究侧，MemHarness 主张记忆重建而非回放、SKILL-KD 做对比式技能蒸馏与漂移感知合并、Σ-Mem 记多智能体在线可靠性、TAPO 用转移感知监督增强 agent RL；harness 侧 SKIMIX 做技能混合的 harness 期扩展、AHD 揭示推理时 harness 的 IP 泄露风险。开源侧 Wegent（674）、Fusion（1K+）、Handler（A2A 终端客户端）继续把多 Agent 运行时工程化。",
      "items": [
        {
          "title": "MCP 2026-07-28 规范正式发布：无状态请求/响应协议核心 + 可路由头 + 可缓存 + 鉴权硬化",
          "source": "Model Context Protocol",
          "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/"
        },
        {
          "title": "信通院互联网智能体可信互联握手（ATH）评估结果发布：首批 13 家企业通过",
          "source": "中国新闻网 / 中国信通院",
          "url": "https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml"
        },
        {
          "title": "《人工智能 智能体互联》系列国家标准（GB/Z，共 7 部分）发布：国内首套覆盖智能体全生命周期",
          "source": "人民网",
          "url": "http://finance.people.com.cn/n1/2026/0709/c1004-40757059.html"
        },
        {
          "title": "MemHarness：记忆是重建而非回放，决策时按当前状态重构检索经验以避免负迁移",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.28272v1"
        },
        {
          "title": "SKILL-KD：面向 LLM Agent 的对比式技能蒸馏 + 漂移感知技能合并",
          "source": "arXiv",
          "url": "http://arxiv.org/abs/2607.28048v1"
        },
        {
          "title": "Wegent（674 Stars）：AI 原生的智能体团队操作系统，原生集成 MCP",
          "source": "GitHub",
          "url": "https://github.com/wecode-ai/Wegent"
        }
      ]
    },
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
          "title": "TrustX ARC:企业自建 agentic 系统的十二维风险分级 + 五级自治度",
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
    }
  ],
  "items": [
    {
      "id": "hot-20260731-01",
      "section": "hot",
      "title": "MCP 2026-07-28 规范正式发布（GA）：工具层从「有状态会话」正式转向「无状态可路由」",
      "summary": "Model Context Protocol 维护者 David Soria Parra 与 Den Delimarsky 于 2026-07-28 宣布「正式按下发布键」，新版规范从 RC 转为正式发布。核心是把 MCP 从双向、有状态协议改为请求/响应、无状态协议：移除 initialize/initialized 握手（SEP-2575）与 Mcp-Session-Id（SEP-2567），协议版本 / 客户端标识 / 能力改由 _meta 随每次请求携带，任意请求都能落在轮询负载均衡后的任意实例。同时新增可选 server/discover 供客户端预取能力、给 tools/prompts/resources 的 list 与 resources/read 加 ttlMs / cacheScope（SEP-2549）、要求 Mcp-Method / Mcp-Name 头以便网关不解析 body 即可路由与计量（SEP-2243）、用 MRTR 多轮请求取代需长连接的 elicitation / sampling / roots（SEP-2322），鉴权侧引入 RFC 9207 iss 校验、把 DCR 转向 CIMD 并弃用；Roots / Sampling / Logging 与旧 HTTP+SSE 传输进入至少 12 个月弃用窗口。Tier 1 SDK（TypeScript / Python / Go / C#）已支持，Rust SDK 处于 beta。",
      "insight": "这是把成熟 Web 基础设施的设计哲学正式写进 Agent 工具层：无状态、可路由、可缓存、可鉴权。对做 Agentic 架构的团队，含义是工具调用可跨实例横向扩展、被网关按头计量、被 CDN 化；对做互操作的团队，鉴权硬化与 CIMD 让「谁在什么时候用了谁的工具」更可审计。从 RC 到 GA 意味着可以按正式版排期迁移，但要盯住 12 个月弃用窗口里被移除的旧能力。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "protocol", "stateless"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260731-02",
      "section": "hot",
      "title": "国内互操作三层落地：信通院 ATH 可信握手首批 13 家通过 +《智能体互联》七项国标发布",
      "summary": "据中国新闻网，中国信通院在 2026 中国互联网大会·智能体互联网论坛发布互联网智能体可信互联握手（ATH，Agent Trust Handshake）评估结果，首批 13 家企业产品通过，由总工程师何宝宏等颁证。ATH 1.0 于 4/29 发起，以「用户—智能体—应用」三方协同的九步握手做双向身份验证、可信协商与会话建立，覆盖多智能体协同、隐私数据处理、跨平台政企对接、AI 自动化交易等场景，并明确与 MCP / A2A「互补增效，不形成竞争关系」。同期据人民网，《人工智能 智能体互联》系列国家标准化指导性技术文件（GB/Z，共 7 部分）发布，被称为国内首套覆盖智能体全生命周期的标准体系，构建「总体架构—身份标识—可信管理—能力描述—智能发现—多元交互—工具调用」技术链路，由全国信息技术标准化技术委员会提出并归口。",
      "insight": "如果说 MCP 07-28 把「工具层怎么连」标准化，国内这两条线把「Agent 之间怎么被信任、怎么被评、怎么合规」抬到国标与评测层。ATH 与 MCP/A2A 定位互补——前者补的是身份互验 / 授权 / 审计这层「可信握手」；对做互操作的团队，未来接入很可能同时面对协议兼容与「可信互联」资质两道门槛。",
      "url": "https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml",
      "source": "中国新闻网 / 中国信通院",
      "tags": ["a2a", "ath", "governance"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260731-03",
      "section": "hot",
      "title": "MemHarness：记忆是「重建」而非「回放」，按当前状态重构检索经验避免负迁移",
      "summary": "MemHarness 针对记忆增强 Agent 的通病——把检索到的经验当作静态记录逐字注入、不管是否契合当前情境，从而频繁引发负迁移。受人类「很少逐字回忆、而是按当下情境重组记忆」的启发，MemHarness 让统一的策略模型在每个决策步先「批判并重构」检索到的经验、生成与当前状态相符的引导再行动，这种重构能力通过 GRPO 端到端训练自然涌现。作者在 ALFWorld 与 WebShop 上验证，MemHarness 明显优于纯 RL 与静态记忆增强基线，并在分布外（OOD）场景表现出更强鲁棒性；分析表明重构目标不仅避免负迁移，还作为训练期的隐式引导提升了 Agent 的内在推理能力。",
      "insight": "这把「记忆」从检索-注入的存储问题，改造成决策时的推理问题——记忆的价值不在于存了什么，而在于能否按当前状态被正确重构。对长时 Agent 而言，这是比「记得多」更关键的一维：与其堆砌轨迹，不如让 Agent 学会在用的那一刻改写记忆。它与「技能进化」互补——一个进化怎么做，一个进化怎么用记忆。",
      "url": "http://arxiv.org/abs/2607.28272v1",
      "source": "arXiv",
      "tags": ["self-evolution", "memory", "reasoning"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260731-04",
      "section": "hot",
      "title": "SKILL-KD：把师生轨迹的可执行差异蒸馏成「技能补丁」，并做漂移感知的技能合并",
      "summary": "SKILL-KD 指出现有技能获取方法多把技能当作经验摘要或成功轨迹的直接总结，这对能力较弱的学生 Agent 是一种错配：当学生因缺乏知识或策略而失败，其失败轨迹不含足够证据推断缺失行为，而教师轨迹又太隐晦难以内化为可复用指导。SKILL-KD 把技能当作不同能力 Agent 之间显式的蒸馏媒介：给定同一任务上的学生失败与教师轨迹，将二者的「可执行差异」蒸馏成文本技能补丁，用重跑学生来评估补丁，失败则迭代精化；并维护带轨迹链接的编辑历史、做「漂移感知的技能合并」，决定每个补丁应新增规则、删改已有规则还是跳过。在五个 Agent 基准、两种学生设置下，SKILL-KD 稳定优于固定模型适配基线。",
      "insight": "它把「自进化」的关键难点说清了——弱 Agent 的失败轨迹本身信息不足，光靠自我反思学不会；真正有效的是「教师-学生差异」这层显式信号，再用重跑验证与漂移感知合并防止技能库越改越乱。这与 harness 侧「record→replay→regression」同源：把改动变成可验证、可回滚、可累积的 delta，而不是盲目相信「Agent 变好了」。",
      "url": "http://arxiv.org/abs/2607.28048v1",
      "source": "arXiv",
      "tags": ["self-evolution", "skill", "distillation"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260731-05",
      "section": "hot",
      "title": "SKIMIX：把「技能混合」做成 harness 期的多智能体扩展，收益高度依赖任务类型",
      "summary": "SKIMIX 面向「Agent 依赖大型技能库但选择、组合、维护困难」的问题，提出让持有不同技能组合的多个 Agent 通过迭代精化协作的多智能体框架，结合基于嵌入的技能检索、子模块化的「抗稀释」路由与自适应技能进化。作者在六个推理基准上发现：多智能体协作能显著提升开放式数学推理，但对选择题任务收益有限甚至为负；Agent 数量的扩展呈非单调关系，且大多数提升出现在首轮精化。结论是任务特征决定了「技能级集成」是否有帮助，为可扩展的 Agent 设计提供了实证指导。",
      "insight": "这是对「多 Agent / 多技能一定更好」的一次冷静证伪：harness 期扩展不是线性收益，加得越多不等于越强，很多增益在第一轮就吃完了。对做 harness / 架构的团队，这提示要按任务类型决定是否上多智能体、并把「抗稀释路由」当作一等设计——否则技能库越大反而稀释了正确技能的信号。",
      "url": "http://arxiv.org/abs/2607.27994v1",
      "source": "arXiv",
      "tags": ["harness", "multi-agent", "skill"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "hot-20260731-06",
      "section": "hot",
      "title": "Wegent（674 Stars）：AI 原生的「智能体团队操作系统」，原生集成 MCP",
      "summary": "Wegent 是 WeCode-AI 团队开源、可自托管的「AI 原生操作系统」，用于定义、组织并运行智能体团队，覆盖对话、编码、知识与自动化：Web 管理侧共享模型 / 知识 / 技能与协作，配套桌面应用 Wework 让 Agent 直接在本地项目与开发环境上干活（可编辑代码、跑测试、提交并开 PR）。其 Agent 模型把 Ghost（prompt + MCP + 技能）、Shell 与 Model 组合成 Bot，再聚合成 Team 去跑 Task，支持通过 API、MCP 与 IM 机器人集成；技术栈为 Next.js 前端 + FastAPI 后端 + Tauri 桌面端，配 MySQL/SQLite 与 Redis，Apache-2.0，Stars 约 674、124 forks，提供简体中文 README。",
      "insight": "它把「多 Agent 团队 + 本地执行 + MCP 集成」打成一套可私有部署的运行时，正是 harness 从脚本走向平台的信号。Ghost/Shell/Model 的分层也呼应「技能 + 协议 + 模型」解耦的架构思路——当 MCP 无状态化在下、团队级 harness 在上，多 Agent 协作才有可自托管、可治理的底座。",
      "url": "https://github.com/wecode-ai/Wegent",
      "source": "GitHub",
      "tags": ["harness", "orchestration", "mcp"],
      "label": "热榜",
      "kind": "hot",
      "importance": 7
    },
    {
      "id": "keyong-20260731-01",
      "section": "keyong",
      "title": "MCP 正式无状态化 = A2A / 互操作真正「基础设施化」的拐点",
      "summary": "MCP 2026-07-28 正式版把握手与会话移除、能力入 _meta、加 server/discover 与 ttlMs / cacheScope，并要求 Mcp-Method / Mcp-Name 头支持不解析 body 的路由、鉴权转向 CIMD，任意请求可落在任意实例。",
      "insight": "→ 主题关联：呼应「A2A / 互操作」+「Agentic 架构」。真正的互操作不止「协议连得上」，而是「能被负载均衡、缓存、审计」。这一版把 MCP 从粘性 SDK 协议改成基础设施协议，对 Agent 网络的意义可类比 HTTP/1.1→HTTP/2 的迁移；做互操作要开始把工具层当无状态服务设计，把鉴权与可路由头当默认约束。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
      "source": "Model Context Protocol",
      "tags": ["a2a", "interoperability", "protocol"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 10
    },
    {
      "id": "keyong-20260731-02",
      "section": "keyong",
      "title": "ATH + 智能体互联国标 = 互操作从「协议层」抬到「可信 + 治理层」",
      "summary": "信通院 ATH 可信握手以「用户—智能体—应用」三方九步握手做身份互验、授权与行为审计，首批 13 家企业通过评估，并称与 MCP / A2A 互补不竞争；《人工智能 智能体互联》七项国标同步构建从身份标识到工具调用的全生命周期技术链路。",
      "insight": "→ 主题关联：呼应「A2A / 互操作」+「Agentic 架构」。MCP / A2A 解决「怎么连」，ATH 与国标补上「连得可信吗、可被评吗」：身份、授权、审计被前置为互联的默认条件。做互操作不能只盯协议兼容，还要预留「可信握手」与「可被第三方评测」的能力面，否则可能被资质门槛卡在生态之外。",
      "url": "https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml",
      "source": "中国新闻网 / 中国信通院",
      "tags": ["a2a", "ath", "trust"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260731-03",
      "section": "keyong",
      "title": "「记忆重建而非回放」= Agent 自进化在记忆维度的正确姿势",
      "summary": "MemHarness 让策略模型在每个决策步按当前状态批判并重构检索到的经验，再生成引导去行动，通过 GRPO 端到端训练涌现重构能力，在 ALFWorld / WebShop 与 OOD 场景优于纯 RL 与静态记忆基线。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Agentic 架构」。多数记忆系统把「怎么记」写死、把检索结果逐字塞回上下文，长时 Agent 因此在错误的记忆结构上越跑越偏。MemHarness 提醒：记忆的价值在「用的那一刻能否被正确重构」，把记忆治理纳入自进化闭环、让记忆随情境自适应，是长周期 Agent 架构必须显式设计的一维。",
      "url": "http://arxiv.org/abs/2607.28272v1",
      "source": "arXiv",
      "tags": ["self-evolution", "memory", "architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260731-04",
      "section": "keyong",
      "title": "技能靠「差异蒸馏 + 验证 + 漂移感知合并」沉淀 = 自进化的最小工程语法",
      "summary": "SKILL-KD 把师生轨迹的可执行差异蒸馏成文本技能补丁，用重跑学生来验证、失败迭代精化，并维护带轨迹链接的编辑历史做漂移感知合并（新增 / 删改 / 跳过），在五个 Agent 基准、两种学生设置下稳定优于固定模型适配基线。",
      "insight": "→ 主题关联：呼应「Agent 自进化」+「Harness 工程」。它给自进化三条硬约束——改动要来自可执行差异（有据）、留存要过重跑验证（可验证）、合并要防漂移（可累积不退化）。这正是把「无据地相信 Agent 变好了」变成「有据地保留 delta」的工程语法，也和 harness 的 record/replay/regression 同构。",
      "url": "http://arxiv.org/abs/2607.28048v1",
      "source": "arXiv",
      "tags": ["self-evolution", "skill", "harness"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260731-05",
      "section": "keyong",
      "title": "Harness 既是护城河，也是可被蒸馏的 IP 与攻击面",
      "summary": "Agent Harness Distillation（AHD）首次把「推理时 harness」形式化为可被黑盒提取的知识产权：通过与目标 Agent 的黑盒交互，先从响应中推断 harness 行为构造初始 harness，再迭代对齐目标行为模式，实验显示自治多智能体系统存在显著 IP 泄露风险，并提出基于欺骗的防御。",
      "insight": "→ 主题关联：呼应「Harness 工程」+「Agentic 架构」。当团队把大量工程投入到编排、工具、约束这套 harness 里，它就成了核心资产——AHD 说明它同时可被别人「反向蒸馏」出来。做 harness 的团队要开始把「行为可被推断的表面积」当安全边界来设计，别把护城河暴露在黑盒交互里。",
      "url": "http://arxiv.org/abs/2607.28147v1",
      "source": "arXiv",
      "tags": ["harness", "security", "architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260731-01",
      "section": "opensource",
      "title": "wecode-ai/Wegent（674 Stars）：可自托管的智能体团队操作系统",
      "summary": "Wegent 定位「AI 原生操作系统」，用 Ghost（prompt + MCP + 技能）/ Shell / Model 组合成 Bot，聚合为 Team 去跑 Task，覆盖团队对话、AI 编码（改码 / 跑测试 / 提 PR）、知识助手与持续自动化；配套 Wework 桌面端让 Agent 在本地代码、CLI、浏览器与内网资源上执行，通过 API / MCP / IM 机器人集成。Next.js + FastAPI + Tauri，MySQL/SQLite + Redis，Apache-2.0，约 674 Stars。",
      "insight": "把「多 Agent 团队 + 本地私有执行 + MCP 集成」一体化，是 harness 从脚本走向平台的标志。Ghost/Shell/Model 的解耦让技能、协议与模型可各自演进，正好承接 MCP 无状态化的下游——底层协议标准化在下、团队级 harness 在上。",
      "url": "https://github.com/wecode-ai/Wegent",
      "source": "GitHub",
      "tags": ["harness", "orchestration", "mcp"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260731-02",
      "section": "opensource",
      "title": "Runfusion/Fusion（1K+ Stars）：7×24 运行的多节点 Agent「软件工厂」",
      "summary": "Fusion 定位「你的软件工厂」，用多节点 Agent 24/7 协作来更快、更好地构建软件，强调把编码任务交给持续运行的 Agent 集群而非单次会话。TypeScript 实现，GitHub Stars 约 1037，是本轮 Trending 上「编码 Agent 舰队 / 后台常驻」方向的代表项目之一。",
      "insight": "「多节点、常驻、7×24」正是把编码 Agent 从「交互式助手」推向「后台工厂」的思路——这对 harness 的要求陡增：长时运行、异常恢复、任务编排与成本约束都得工程化。它与企业侧「无人值守 Agent」诉求同频，也把可靠性与可观测推到必答题。",
      "url": "https://github.com/Runfusion/Fusion",
      "source": "GitHub",
      "tags": ["harness", "coding-agent", "orchestration"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260731-03",
      "section": "opensource",
      "title": "alDuncanson/Handler：把 A2A 协议客户端搬进终端",
      "summary": "Handler 是一个面向终端的 A2A（Agent2Agent）协议客户端，让开发者在命令行里直接与遵循 A2A 的 Agent 交互、调试对接。Python 实现，GitHub Stars 约 43，属于 A2A 协议生态里「让协议可被开发者直接上手」的小而实用的工具层。",
      "insight": "协议要落地，光有规范不够，还需要 curl / express 这类顺手工具。A2A 有了终端客户端，意味着「Agent 连 Agent」从 PPT 走向可调试——对做互操作的团队，这类客户端 / 脚手架是验证 AgentCard、握手、任务状态的最短路径。",
      "url": "https://github.com/alDuncanson/Handler",
      "source": "GitHub",
      "tags": ["a2a", "cli", "interoperability"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "opensource-20260731-04",
      "section": "opensource",
      "title": "jmagly/agentic-sandbox：自托管的持久编码 Agent 运行时，签名 AgentCard + A2A 执行器",
      "summary": "agentic-sandbox 是可自托管的持久自治编码 Agent 运行时：用 KVM 隔离的虚拟机（或无 root 容器）做隔离，提供带签名 AgentCard 发现的 A2A 协议执行器、AIWG 任务派发、Web 仪表盘与 virtiofs 共享存储，主打「跑在你自己的硬件上、没有托管控制面」。Rust 实现，GitHub Stars 约 9。",
      "insight": "它把「隔离沙箱 + A2A 发现 + 自托管」三件事拼在一起，正好落在 Agentic 架构最吃紧的三根支柱上：安全隔离、能力发现、自主可控。签名 AgentCard 与 ATH / A2A 的「可信握手」方向呼应——发现与身份要可验证，才敢让 Agent 常驻执行。",
      "url": "https://github.com/jmagly/agentic-sandbox",
      "source": "GitHub",
      "tags": ["architecture", "a2a", "sandbox"],
      "label": "开源",
      "kind": "open",
      "importance": 6
    },
    {
      "id": "voices-20260731-01",
      "section": "voices",
      "title": "MCP 维护者 David Soria Parra / Den Delimarsky：把 MCP 押注成「无状态请求/响应」协议",
      "summary": "在 2026-07-28 的官方发布文中，MCP 两位主要维护者宣布「正式按下发布键」，把 MCP 从双向、有状态协议重塑为请求/响应、无状态协议——任意请求都能落在轮询负载均衡后的任意实例，会话与握手被移除、能力入 _meta、结果可缓存、请求可按头路由，并对旧能力设至少 12 个月弃用窗口。",
      "insight": "维护者的选择很明确：宁可做一次破坏性大改，也要让工具层具备 Web 服务级的可扩展性。这传递的信号是——Agent 生态的下一阶段瓶颈不在「模型能不能调工具」，而在「工具层能不能像基础设施一样被规模化运维」。迁移有成本，但方向是把 MCP 变成能承载大规模、多租户 Agent 网络的底座。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "protocol", "infrastructure"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "voices-20260731-02",
      "section": "voices",
      "title": "中国信通院：ATH 与 MCP / A2A「互补增效、不形成竞争关系」",
      "summary": "据中国新闻网，信通院在发布 ATH 可信握手评估结果时明确 ATH 的定位——它是面向智能体场景的标准化可信交互框架，以「用户—智能体—应用」三方九步握手做身份互验、授权管控与行为审计，与 MCP、A2A 等协议互补增效、不形成竞争，共同服务多智能体协同、跨平台政企对接与 AI 自动化交易等场景。",
      "insight": "这句话给国内互操作生态定了调：协议层（MCP / A2A）与可信层（ATH）分工而非互斥。对开发者的现实含义是——别把「选哪个协议」当零和选择，而要按「连工具 / 连 Agent / 可信握手」分层组合。可信与审计正在成为互联的默认要求，而不是事后补丁。",
      "url": "https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml",
      "source": "中国新闻网 / 中国信通院",
      "tags": ["ath", "a2a", "governance"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "voices-20260731-03",
      "section": "voices",
      "title": "MAS 研究者：多智能体扩展只有跨过「基座能力阈值」才有正收益",
      "summary": "《Scaling LLM-Driven Multi-Agent Systems》从对既有工作的结构化分析中提炼四条可扩展 MAS 设计原则——简单性、弹性反馈、带可选循环的顺序化工作流、基于摘要的通信，并把拓扑形式化为受约束的有向工作流图。作者用两种能力档位的 LLM、四种复杂度配置在标准化的终端系统工程任务上评估，发现扩展带来近线性成本增长下的准确率提升，但只有当基座 LLM 越过最低能力阈值时才成立；性能在中等复杂度见顶后因超时与评估局限而退化，且一致性问题贯穿所有扩展层级。",
      "insight": "这给「堆 Agent 就能变强」泼了盆冷水：扩展有前提（基座够强）、有天花板（中等复杂度见顶）、有隐性代价（一致性与超时）。对做 Agentic 架构的团队，务实的读法是——先把单 Agent 与基座能力打扎实，再谈多智能体扩展，并把「一致性」和「评估标准化」当作扩展前必须解决的前置问题。",
      "url": "http://arxiv.org/abs/2607.27942v1",
      "source": "arXiv",
      "tags": ["multi-agent", "architecture", "scaling"],
      "label": "观点",
      "kind": "voice",
      "importance": 6
    },
    {
      "id": "industry-20260731-01",
      "section": "industry",
      "title": "工具层协议分水岭：MCP 07-28 从「SDK 会话」正式走向「基础设施」",
      "summary": "MCP 官方于 2026-07-28 发布正式规范（含破坏性变更），移除会话与握手、把版本 / 能力挪进 _meta、加 server/discover、结果加 ttlMs / cacheScope、要求 Mcp-Method / Mcp-Name 头支持不解析 body 的路由、用 MRTR 取代长连接式调用、鉴权对齐 RFC 9207 并把 DCR 转向 CIMD，Roots / Sampling / Logging 与旧 HTTP+SSE 传输进入至少 12 个月弃用窗口，Tier 1 SDK 已支持。",
      "insight": "这对整个 Agent 生态是「基础设施级」信号——工具层从此可像普通 HTTP 服务那样被扩展、缓存、路由与审计。企业 Agent 的可观测、成本归因、跨机房容灾都会更易实现；但破坏性变更与弃用窗口也意味着，接入方要开始规划从有状态实现迁移到无状态实现的工期。",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
      "source": "Model Context Protocol",
      "tags": ["mcp", "infrastructure", "protocol"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260731-02",
      "section": "industry",
      "title": "企业开始「监控 AI 应用」：Traceforce 做全公司级 AI 使用安全监控",
      "summary": "在 Hacker News 上以 Launch HN 亮相的 Traceforce（YC S26）做「公司级 AI 应用安全监控」，面向企业内部广泛使用各类 AI 应用后带来的可见性与合规诉求，帖子获得数十点赞与讨论。它代表一类新兴基础设施：当员工与 Agent 大量调用外部 AI 服务，企业需要统一的使用监控、数据外泄防护与审计。",
      "insight": "Agent 与 AI 应用进入企业深处后，「谁在用、用了什么、有没有把数据带出去」成了 CISO 的必答题。这与 MCP 的可路由头 / 可审计、以及国内 ATH 的行为审计是同一股力——治理与可观测正从模型层下沉到「使用与工具调用」层，成为企业采用 Agent 的前置条件。",
      "url": "https://news.ycombinator.com/item?id=48937020",
      "source": "Hacker News / Y Combinator",
      "tags": ["security", "observability", "enterprise"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "industry-20260731-03",
      "section": "industry",
      "title": "编码 Agent 从「交互助手」转向「后台常驻工厂」",
      "summary": "以 Runfusion/Fusion（约 1K Stars，多节点 24/7 Agent「软件工厂」）与一批开源自托管运行时为代表，编码 Agent 正从单次交互会话转向后台常驻、多节点协作的形态；配合 agentic-sandbox 等「KVM 隔离 + 签名 AgentCard + A2A 执行器」的自托管方案，「让 Agent 常驻、隔离、可发现」成为工程重点。",
      "insight": "形态从「助手」变「工厂」，对 harness 是质变：要处理长时运行、异常恢复、任务队列、隔离与成本硬约束。这也是为什么「可自托管、可隔离、可审计」的运行时会成为热点——当 Agent 被允许无人值守地持续干活，可靠性工程就从加分项变成准入项。",
      "url": "https://github.com/Runfusion/Fusion",
      "source": "GitHub",
      "tags": ["coding-agent", "harness", "reliability"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "industry-20260731-04",
      "section": "industry",
      "title": "工具「忠实使用」成新议题：多智能体过程验证抑制 reward hacking",
      "summary": "FaithEyes 针对 Agentic 视觉语言模型「工具用得不忠实」的问题——很多过程图像与问题无关（裁错区域 / 漏掉目标）却仍拿到全额工具奖励、模型实则靠先验或原图作答。它用 VLM 判断每张过程图是否真的有助于回答，把判断注入推理上下文并按「有用工具比例」缩放工具奖励以抑制 reward hacking，并让模型自身充当子 Agent 做判断以保证训练-测试一致，经 SFT+RL 两阶段训练在感知与推理基准上取得有竞争力或更优的准确率，同时显著提升工具忠实度。",
      "insight": "随着 Agent 越来越依赖工具调用，「调用了」不等于「用对了」。FaithEyes 把「工具是否真的帮到回答」变成可评、可奖励缩放的信号，直指 reward hacking——这与 SKILL-KD 的「可执行差异」、harness 的「证据化验收」是同一思路：不看 Agent 声称做了什么，看它是否有据地做对。",
      "url": "http://arxiv.org/abs/2607.28225v1",
      "source": "arXiv",
      "tags": ["tool-use", "evaluation", "reward-hacking"],
      "label": "行业",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "research-20260731-01",
      "section": "research",
      "title": "MemHarness：记忆重建而非回放，重构目标兼作训练期隐式引导",
      "summary": "MemHarness 让统一策略模型在每个决策步按当前状态批判并重构检索到的经验，生成与情境相符的引导再行动，重构能力经 GRPO 端到端训练自然涌现。ALFWorld 与 WebShop 实验显示其明显优于纯 RL 与静态记忆增强基线，OOD 场景鲁棒性更强；分析表明重构目标不仅防负迁移，还作为训练期隐式引导，提升了 Agent 的内在推理能力。",
      "insight": "把记忆从「存储-回放」重构为「情境化重建」，是自进化在记忆维度的范式转变。它意味着记忆系统的评价标准不该是命中率，而是「重构后对当前决策的贡献」；也提示训练与记忆并非两件事——好的记忆重构目标能反哺推理能力。",
      "url": "http://arxiv.org/abs/2607.28272v1",
      "source": "arXiv",
      "tags": ["self-evolution", "memory", "reasoning"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260731-02",
      "section": "research",
      "title": "SKILL-KD：对比式技能蒸馏，把「师生差异」变成可验证的技能补丁",
      "summary": "SKILL-KD 把技能当作不同能力 Agent 间显式的蒸馏媒介：给定同一任务的学生失败与教师轨迹，将二者可执行差异蒸馏成文本技能补丁，用重跑学生评估、失败迭代精化，并做漂移感知的技能合并（新增 / 删改 / 跳过）以防技能漂移。五个 Agent 基准、两种学生设置下稳定优于固定模型适配基线。开源框架，面向「冻结模型也能被技能强化」的场景。",
      "insight": "它回答了自进化的一个硬问题——弱 Agent 失败轨迹信息不足，无法自学缺失行为；而「师生差异」提供了可执行的补齐信号。用重跑验证 + 漂移感知合并，把技能库维护成可累积、可回滚的资产，是「技能作为一等公民」的工程范式。",
      "url": "http://arxiv.org/abs/2607.28048v1",
      "source": "arXiv",
      "tags": ["self-evolution", "skill", "distillation"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260731-03",
      "section": "research",
      "title": "Σ-Mem：为多智能体系统记录「谁在什么条件下可信」的在线可靠性记忆",
      "summary": "Σ-Mem 指出现有记忆系统多保存交互内容，却不建模「哪些 Agent 可被信任、在什么条件下可信」——这在中心模型难以直接验证同伴响应的多智能体系统里尤为关键。它把个体同伴的历史胜任证据与同伴间关系证据都维护为实对称状态，从决策后的正确性反馈在线更新；由 Weyl 不等式保证每次事件级更新引起的谱变化有界，从而无需重训即可稳定在线自适应。统一的读写接口可用于中心模型的残差引导、免响应的同伴路由或可靠性加权投票，在五个 Qwen 系模型上适应反事实可靠性漂移并泛化到未见同伴与任务域。",
      "insight": "它把「信任」做成可在线更新、有数学界的记忆，正好补上多智能体协作里最缺的一环——不是记住说了什么，而是记住谁靠谱。这与 ATH / A2A 的「可信握手」在不同层面呼应：协议层做身份与授权，记忆层做「基于历史表现的动态信任」，两者叠加才有可自适应的可靠协作。",
      "url": "http://arxiv.org/abs/2607.27958v1",
      "source": "arXiv",
      "tags": ["multi-agent", "memory", "reliability"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260731-04",
      "section": "research",
      "title": "TAPO：用「转移感知」的密集监督增强 LLM Agent 的强化学习",
      "summary": "TAPO（Transition-Aware Policy Optimization）针对 agent RL 多依赖稀疏任务奖励、未充分利用在线交互中「动作执行后的环境反馈」这类天然密集信号的问题，提出在标准 RL 更新之外，复用 rollout 数据在共享骨干上做「动作条件下的下一步观测预测」监督，交替进行策略优化与转移监督。它增强模型对环境转移动态与动作后果的敏感度，是计算轻量、即插即用的增强模块，无需额外专家数据、采样成本或推理开销；在 WebShop 与 ALFWorld 上、跨不同规模基座与策略优化算法，持续优于纯策略优化基线。",
      "insight": "它把「预测环境会怎么变」当作免费的密集监督加进 agent RL——这与「世界模型」思路一脉相承：会预测后果的 Agent 更会规划。对做 Agentic 开发的团队，价值在于它即插即用、零额外采样成本，是把稀疏奖励训练提效的低成本抓手。",
      "url": "http://arxiv.org/abs/2607.27973v1",
      "source": "arXiv",
      "tags": ["reinforcement", "agentic-development", "world-model"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "research-20260731-05",
      "section": "research",
      "title": "Agent Harness Distillation：把「推理时 harness」当作可被黑盒提取的 IP",
      "summary": "AHD 首次把自治多智能体系统（AMAS）里「推理时涌现」的 harness 行为形式化为新的安全问题：这些 harness 需大量工程与算力迭代优化、并与底座 LLM 协同演化，构成宝贵 IP。AHD 分两阶段通过黑盒交互提取 harness 能力——预蒸馏阶段从目标 Agent 响应推断 harness 行为并构造初始 harness，后蒸馏阶段迭代精化以对齐目标行为模式；在多种骨干 LLM 的真实 AMAS 上验证有效并揭示显著 IP 泄露风险，并提出基于欺骗、在保留被保护 Agent 效用的同时降低提取效果的防御。",
      "insight": "harness 一直被当作护城河，AHD 提醒它同样是可被反向蒸馏的攻击面。这把「可观测 / 可路由」的另一面摆上台面——你暴露给外部的行为越多，越容易被复制。做 harness 的团队要开始评估「行为表面积」的安全性，把关键编排逻辑藏在不可黑盒推断的边界内。",
      "url": "http://arxiv.org/abs/2607.28147v1",
      "source": "arXiv",
      "tags": ["harness", "security", "multi-agent"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260731-01",
      "section": "china",
      "title": "信通院 ATH 可信握手评估结果发布：首批 13 家企业产品通过",
      "summary": "据中国新闻网，中国互联网协会与中国信通院在 2026 中国互联网大会·智能体互联网论坛发布互联网智能体可信互联握手（ATH）评估结果，首批 13 家企业产品通过，由总工程师何宝宏等为通过企业颁证。ATH 1.0 于 4/29 发起，以「用户—智能体—应用」三方九步握手做双向身份验证、可信协商与会话建立，覆盖多智能体协同、隐私数据处理、跨平台政企对接、AI 自动化交易等场景，并强调与 MCP / A2A 互补增效、不形成竞争。",
      "insight": "这是国内首次以「可信握手」为主线，把 A2A 互操作从「协议连得上」抬升到「身份可验、授权可控、行为可审」的评测门槛。对做互操作的团队，未来接入国内 Agent 网络很可能要过 ATH 这类可信资质——互操作不再只是技术兼容，而是可信互联的准入问题。",
      "url": "https://www.chinanews.com.cn/cj/2026/07-14/10659278.shtml",
      "source": "中国新闻网 / 中国信通院",
      "tags": ["ATH", "可信握手", "互操作"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "china-20260731-02",
      "section": "china",
      "title": "《人工智能 智能体互联》系列国家标准（GB/Z，共 7 部分）发布",
      "summary": "据人民网，《人工智能 智能体互联》系列国家标准化指导性技术文件（GB/Z，共 7 部分）发布，被称为国内首套覆盖智能体全生命周期的完整标准体系，构建「总体架构—身份标识—可信管理—能力描述—智能发现—多元交互—工具调用」技术链路，服务于跨平台、跨架构、跨行业的智能体互联互通与协同，由全国信息技术标准化技术委员会提出并归口、中国标准出版社出版。",
      "insight": "把「身份、可信、能力描述、发现、交互、工具调用」写成国标链路，意味着国内互操作正从企业倡议走向标准化底座。对开发者，这是一张可对照的能力清单——你的 Agent 能否被标准化地标识、发现、描述能力与安全约束，将决定它能否接入未来的「智能体互联」生态。",
      "url": "http://finance.people.com.cn/n1/2026/0709/c1004-40757059.html",
      "source": "人民网",
      "tags": ["国家标准", "智能体互联", "全生命周期"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260731-03",
      "section": "china",
      "title": "WeCode-AI 开源 Wegent：国产「智能体团队操作系统」原生接 MCP",
      "summary": "WeCode-AI 团队开源的 Wegent 是可自托管的「AI 原生操作系统」，用 Ghost（prompt + MCP + 技能）/ Shell / Model 组合成 Bot、聚合为 Team 跑 Task，覆盖团队对话、AI 编码、知识助手与持续自动化，配套 Wework 桌面端让 Agent 在本地代码 / CLI / 浏览器 / 内网上执行，支持 API / MCP / IM 机器人集成。Next.js + FastAPI + Tauri，Apache-2.0，约 674 Stars，提供中文文档。",
      "insight": "这是国产开源在「团队级 Agent 运行时」上的一次成型尝试——把多 Agent 协作、本地私有执行与 MCP 集成打包成可自托管平台，正好落在企业「数据不出内网、又要用 Agent」的现实诉求上，也与国内互操作标准化的方向合拍。",
      "url": "https://github.com/wecode-ai/Wegent",
      "source": "GitHub",
      "tags": ["开源", "harness", "MCP"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    },
    {
      "id": "china-20260731-04",
      "section": "china",
      "title": "协议 + 可信 + 国标：国内互操作生态的「三层分工」正在成形",
      "summary": "把近期国内动作串起来看：MCP / A2A 提供工具与 Agent 间的连接协议，信通院 ATH 可信握手补上身份互验 / 授权 / 审计的「可信层」（首批 13 家通过、称与 MCP/A2A 互补不竞争），《人工智能 智能体互联》七项国标再把总体架构到工具调用的全链路写成标准——三层分工逐步清晰，工信部亦表态推进制造 / 能源 / 医疗 / 交通等领域的智能体落地。",
      "insight": "国内互操作的路线正从「单点协议」走向「协议 + 可信 + 国标」的分层体系。对做国内 Agent 的团队，务实的读法是按这三层校准技术栈：连接选 MCP/A2A、可信预留 ATH 接入点、能力描述与发现对齐国标——越早对齐，越不容易在生态成形时被门槛挡在外面。",
      "url": "http://finance.people.com.cn/n1/2026/0709/c1004-40757059.html",
      "source": "人民网 / 中国信通院",
      "tags": ["互联互通", "治理", "标准"],
      "label": "国内",
      "kind": "industry",
      "importance": 6
    }
  ]
};
