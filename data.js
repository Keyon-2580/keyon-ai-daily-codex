window.APP_DATA = {
  "generatedAt": "2026-06-01T08:00:00Z",
  "sourceDigestDate": "2026-06-01",
  "dateText": "2026年6月1日 星期一",
  "editorNote": [
    "今天的核心主题是<strong>Agentic 工程系统化——Rust 运行时、安全基准与记忆漂移测量三线并进</strong>。<a href=\"https://github.com/langgenius/dify\" target=\"_blank\" rel=\"noopener noreferrer\">Dify 突破 143K Stars</a> 成为 agentic workflow 平台事实标准；<a href=\"https://github.com/ginkida/rustyhand\" target=\"_blank\" rel=\"noopener noreferrer\">rustyhand</a> 用 Rust 单二进制实现 37 Agent + A2A + MCP，预示 Agent 运行时正从 Python 脚本走向系统级工程；<a href=\"https://github.com/samsaeed22/kevlar-benchmark\" target=\"_blank\" rel=\"noopener noreferrer\">kevlar-benchmark</a> 将 OWASP Top 10 框架应用于 Agent 注入攻击检测，安全测试进入标准化。",
    "自进化方面，<a href=\"https://github.com/elfvvv10/coherence-drift-benchmark\" target=\"_blank\" rel=\"noopener noreferrer\">coherence-drift-benchmark</a> 首次系统量化 Agent 在 24h/36h/72h 区间的记忆保持率、漂移速率和虚构倾向——这是长期自治 Agent 必须解决的基础难题。<a href=\"https://github.com/jmagly/agentic-sandbox\" target=\"_blank\" rel=\"noopener noreferrer\">agentic-sandbox</a> 提供 KVM 隔离 + A2A 执行器的自托管运行时，把 Agent 持久运行所需的安全边界工程化。",
    "Anthropic <a href=\"https://resources.anthropic.com/2026-agentic-coding-trends-report\" target=\"_blank\" rel=\"noopener noreferrer\">2026 Agentic Coding 报告</a>持续发酵：核心结论是 2026 年从单 Agent 转向多 Agent 编排，27% 的 AI 辅助工作是以前根本不会做的新类型任务。AWS 发布 <a href=\"https://aws.amazon.com/blogs/opensource/open-protocols-for-agent-interoperability-part-1-inter-agent-communication-on-mcp/\" target=\"_blank\" rel=\"noopener noreferrer\">Agent 互操作开放协议系列</a>，正式把 MCP + A2A 纳入企业级架构参考。"
  ],
  "lens": [
    {
      "label": "Agentic 开发",
      "value": 92
    },
    {
      "label": "Agent 自进化",
      "value": 82
    },
    {
      "label": "A2A / 互操作",
      "value": 88
    },
    {
      "label": "Agentic 架构",
      "value": 95
    },
    {
      "label": "Harness 工程",
      "value": 90
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
    }
  ],
  "items": [
    {
      "id": "hot-20260601-01",
      "section": "hot",
      "title": "Dify 突破 143K Stars：Agentic Workflow 平台达到大众采用临界点",
      "summary": "langgenius/dify 在 GitHub 上突破 143,000 Stars，成为 agentic workflow 开发领域 star 数最高的开源项目。Dify 提供可视化 Agent 编排、RAG pipeline、多模型接入和企业级部署能力，最新 v1.14.1 聚焦安全加固。其 star 增速表明 agentic workflow 平台从开发者工具走向企业基础设施。",
      "insight": "143K Stars 不仅是社区热度——它意味着 agentic workflow 平台的用户基础已大到足以形成生态锁定效应。",
      "url": "https://github.com/langgenius/dify",
      "source": "GitHub",
      "tags": ["Dify", "agentic-workflow", "open-source"],
      "label": "热榜",
      "kind": "hot",
      "importance": 10
    },
    {
      "id": "hot-20260601-02",
      "section": "hot",
      "title": "rustyhand：Rust 单二进制 Agent OS——37 Agent、A2A 协议、MCP 原生",
      "summary": "ginkida/rustyhand 用 Rust 实现完整 Agent 操作系统：单二进制部署 37 个 Agent，支持 26 个 LLM 提供商、37 个通信渠道（Telegram/Discord/Slack 等），内建 MCP server 和 A2A 协议，提供 120+ API 端点和 Web 管理面板。18 Stars 但架构完整度极高。",
      "insight": "Rust 单二进制 + A2A 原生支持是 Agent 运行时从 Python 脚本转向系统级工程的标志性方向。",
      "url": "https://github.com/ginkida/rustyhand",
      "source": "GitHub",
      "tags": ["Rust", "Agent-OS", "A2A", "MCP"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260601-03",
      "section": "hot",
      "title": "Anthropic 2026 Agentic Coding 报告持续发酵：27% AI 辅助工作是全新任务类型",
      "summary": "Anthropic 发布的 2026 Agentic Coding Trends Report 核心发现被广泛引用：2026 年是从单 Agent 到多 Agent 编排的转折年；27% 的 AI 辅助工作是以前完全不会做的新类型任务；Agent 将能连续工作数天而非数分钟。报告预测编排层而非 prompt 层将成为核心竞争力。",
      "insight": "27% 的新任务类型意味着 Agent 不只是加速现有工作——它在创造以前不存在的工作品类。",
      "url": "https://resources.anthropic.com/2026-agentic-coding-trends-report",
      "source": "Anthropic",
      "tags": ["Anthropic", "agentic-coding", "multi-agent"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260601-04",
      "section": "hot",
      "title": "AWS 发布 Agent 互操作开放协议系列：MCP + A2A 纳入企业架构参考",
      "summary": "AWS 开源博客发布「Open Protocols for Agent Interoperability」系列文章，正式将 MCP（工具层）和 A2A（Agent 层）纳入 AWS 的企业级 Agent 架构参考。文章详解如何在 MCP 之上实现 inter-agent 通信，并提供基于 AWS 基础设施的参考实现。",
      "insight": "当三大云厂商（Google 发起、AWS 背书、Azure 集成）都支持 A2A + MCP，协议战争基本结束——现在是工程实现竞争。",
      "url": "https://aws.amazon.com/blogs/opensource/open-protocols-for-agent-interoperability-part-1-inter-agent-communication-on-mcp/",
      "source": "AWS",
      "tags": ["AWS", "MCP", "A2A", "enterprise"],
      "label": "热榜",
      "kind": "hot",
      "importance": 9
    },
    {
      "id": "hot-20260601-05",
      "section": "hot",
      "title": "kevlar-benchmark：OWASP Top 10 框架应用于 Agent 注入攻击自动化检测",
      "summary": "samsaeed22/kevlar-benchmark 实现基于 OWASP Top 10 for AI Agents 的自动化安全测试框架。覆盖 Agent 特有的注入攻击（prompt injection、tool poisoning、context manipulation），自动生成攻击载荷并评估防御有效性。目标是让 Agent 安全测试像 Web 安全扫描一样标准化。",
      "insight": "OWASP Top 10 适配 Agent 场景说明安全社区已为 Agent 建立专属威胁模型——这是安全工程从 ad-hoc 走向体系化的关键一步。",
      "url": "https://github.com/samsaeed22/kevlar-benchmark",
      "source": "GitHub",
      "tags": ["OWASP", "agent-security", "injection"],
      "label": "热榜",
      "kind": "hot",
      "importance": 8
    },
    {
      "id": "keyong-20260601-01",
      "section": "keyong",
      "title": "rustyhand 的架构选择：为什么 Agent 运行时需要系统级语言",
      "summary": "rustyhand 用 Rust 实现 Agent OS 并原生支持 A2A + MCP，这个架构选择值得深思：当 Agent 需要长时间运行、管理多个并发任务、与外部系统保持稳定连接时，GC 暂停和动态语言的不确定性成为真实瓶颈。单二进制部署还解决了分布式环境下的依赖管理噩梦。",
      "insight": "→ Keyong 关联：直接关联「Agentic 架构」。Agent 运行时的语言选择不是偏好问题——长时运行 + 高并发 + 协议栈原生集成的需求组合，正在把最佳实践从 Python 推向 Rust/Go。",
      "url": "https://github.com/ginkida/rustyhand",
      "source": "GitHub",
      "tags": ["Rust", "runtime", "architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260601-02",
      "section": "keyong",
      "title": "coherence-drift-benchmark：自进化的可测量基线终于出现",
      "summary": "coherence-drift-benchmark 量化 AI Agent 在 24h/36h/72h 时间间隔后的记忆保持精度、漂移速率、虚构率和溯源能力。这是 Agent 自进化的基础设施——如果不能测量记忆漂移，就无法安全地让 Agent 从自身经验中学习。",
      "insight": "→ Keyong 关联：直接关联「Agent 自进化」。自进化的前提是「知道什么被遗忘了」——记忆漂移基准让自进化从不可控的黑箱变成可监测的工程过程。",
      "url": "https://github.com/elfvvv10/coherence-drift-benchmark",
      "source": "GitHub",
      "tags": ["memory-drift", "benchmark", "self-evolution"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260601-03",
      "section": "keyong",
      "title": "agentic-sandbox：KVM 隔离 + A2A 执行器的 Agent 持久运行方案",
      "summary": "jmagly/agentic-sandbox 提供自托管的 Agent 持久运行时：KVM 隔离虚拟机（或 rootless 容器）、A2A 协议执行器配合签名 AgentCard 发现、AIWG 任务分发、virtiofs 共享存储和 Web 管理面板。无需托管控制面，全部在本地硬件运行。",
      "insight": "→ Keyong 关联：关联「Agentic 架构」+「Harness 工程」。持久运行 Agent 需要的不是更好的 prompt，而是 OS 级别的隔离、可观测和恢复机制——sandbox 就是 Agent 的 container runtime。",
      "url": "https://github.com/jmagly/agentic-sandbox",
      "source": "GitHub",
      "tags": ["KVM", "sandbox", "A2A-executor", "persistent"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260601-04",
      "section": "keyong",
      "title": "AWS 把 MCP + A2A 写入企业架构参考的信号意义",
      "summary": "AWS 开源博客正式将 MCP（工具层协议）和 A2A（Agent 间协议）纳入企业级参考架构。这意味着「MCP 管工具、A2A 管 Agent」的分层模型已经从社区共识升级为云厂商的官方推荐路径。",
      "insight": "→ Keyong 关联：直接关联「A2A / 互操作」。当 AWS/Google/Azure 三大云同时背书同一套协议栈，企业用户的选型焦虑消失——剩下的是谁的实现质量更高。",
      "url": "https://aws.amazon.com/blogs/opensource/open-protocols-for-agent-interoperability-part-1-inter-agent-communication-on-mcp/",
      "source": "AWS",
      "tags": ["AWS", "A2A", "MCP", "reference-architecture"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 9
    },
    {
      "id": "keyong-20260601-05",
      "section": "keyong",
      "title": "kevlar-benchmark 对 Harness 工程的启示：安全测试即评测基础设施",
      "summary": "kevlar-benchmark 将 OWASP Top 10 for AI Agents 转化为可自动化运行的安全评测套件。这不仅是安全工具——它的模式（标准化威胁模型 → 自动化载荷生成 → 防御有效性评分）恰好是 Agent 评测基础设施应有的形态。",
      "insight": "→ Keyong 关联：关联「Harness 工程」。好的 harness 不是手写测试用例，而是把威胁模型编码为可自动运行的评测 pipeline——kevlar 在安全维度做到了这一点。",
      "url": "https://github.com/samsaeed22/kevlar-benchmark",
      "source": "GitHub",
      "tags": ["OWASP", "harness", "automated-testing"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260601-06",
      "section": "keyong",
      "title": "ReqForge：Spec→Plan→Build 的 Agent Harness 实践",
      "summary": "zxpmail/ReqForge 实现 Agent Harness for Claude Code、Cursor 和 OpenCode：从需求规格到计划到构建的流水线，配合 hooks 和 review 机制。/change-manager 支持 brownfield 项目（存量代码改造）。9 Stars 但思路完整。",
      "insight": "→ Keyong 关联：关联「Harness 工程」+「Agentic 开发」。Coding agent 的 harness 不只是沙箱——还需要把工程方法论（spec、plan、review）编码为 Agent 可执行的约束。",
      "url": "https://github.com/zxpmail/ReqForge",
      "source": "GitHub",
      "tags": ["ReqForge", "coding-harness", "spec-driven"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "keyong-20260601-07",
      "section": "keyong",
      "title": "Anthropic 报告核心论断：编排层 > Prompt 层成为竞争力关键",
      "summary": "Anthropic 2026 Agentic Coding 报告的核心论断是：多 Agent 编排能力将取代 prompt engineering 成为开发效率的主要差异化来源。27% 全新任务类型的出现说明 Agent 不只是加速——它在改变工作的定义本身。",
      "insight": "→ Keyong 关联：关联「Agentic 开发」。从 prompt 到编排的范式转移意味着 Agent 开发者的核心技能从「写好 prompt」变成「设计好 workflow 和工具组合」。",
      "url": "https://resources.anthropic.com/2026-agentic-coding-trends-report",
      "source": "Anthropic",
      "tags": ["orchestration", "paradigm-shift", "agentic-coding"],
      "label": "Keyong",
      "kind": "keyong",
      "importance": 8
    },
    {
      "id": "opensource-20260601-01",
      "section": "opensource",
      "title": "Dify v1.14.1：143K Stars Agentic Workflow 平台聚焦安全加固",
      "summary": "Dify 最新 v1.14.1 版本聚焦安全加固（security hardening），此前 v1.13.0 引入 Human-in-the-Loop 机制。作为 143K Stars 的 agentic workflow 开发平台，Dify 提供可视化 Agent 编排、RAG pipeline 和多模型接入，已成为社区事实标准。",
      "insight": "安全加固版本发布说明 Dify 正从开发者工具转型为生产级基础设施——安全性是企业采购的前置条件。",
      "url": "https://github.com/langgenius/dify",
      "source": "GitHub",
      "tags": ["Dify", "security", "HITL"],
      "label": "开源",
      "kind": "open",
      "importance": 10
    },
    {
      "id": "opensource-20260601-02",
      "section": "opensource",
      "title": "rustyhand（18 Stars）：Rust 实现的完整 Agent OS 含 A2A + MCP",
      "summary": "ginkida/rustyhand 用 Rust 单二进制实现完整 Agent 操作系统。37 个内置 Agent、26 个 LLM 提供商、37 个通信渠道（覆盖 Telegram/Discord/Slack 等主流平台），内建 MCP server 和 A2A 协议支持，120+ REST API 端点，配套 Web Dashboard。",
      "insight": "Rust 单二进制的部署体验 + 协议原生支持，是下一代 Agent 基础设施的理想形态。",
      "url": "https://github.com/ginkida/rustyhand",
      "source": "GitHub",
      "tags": ["rustyhand", "Rust", "Agent-OS"],
      "label": "开源",
      "kind": "open",
      "importance": 9
    },
    {
      "id": "opensource-20260601-03",
      "section": "opensource",
      "title": "agentic-sandbox（7 Stars）：KVM 隔离的自托管 Agent 运行时",
      "summary": "jmagly/agentic-sandbox 提供自托管 Agent 持久运行方案：KVM 虚拟机隔离（或 rootless 容器后备），A2A 协议执行器配合签名 AgentCard 发现机制，AIWG 任务分发，virtiofs 共享存储，Web 管理面板。完全本地化，无需外部控制面。",
      "insight": "自托管 + KVM 隔离解决了企业最关心的两个问题：数据不出域 + Agent 行为可控。",
      "url": "https://github.com/jmagly/agentic-sandbox",
      "source": "GitHub",
      "tags": ["sandbox", "KVM", "self-hosted"],
      "label": "开源",
      "kind": "open",
      "importance": 8
    },
    {
      "id": "opensource-20260601-04",
      "section": "opensource",
      "title": "Symbio（5 Stars）：33 特性的多 Agent 协同框架含动态 DAG 和本体化记忆",
      "summary": "854875058/Symbio（共生）定位 AI Infra 级多 Agent 协同框架，提供 33 个核心特性：动态 DAG 编排、本体化记忆、防过早完成机制、数据飞轮、神经符号安全、OpenTelemetry 可观测、HITL 人类介入、MCP 原生支持、语义缓存和 PromptOps 等。Python 实现。",
      "insight": "33 个特性的清单本身就是「生产级多 Agent 系统需要什么」的需求文档——值得作为架构设计参考。",
      "url": "https://github.com/854875058/Symbio",
      "source": "GitHub",
      "tags": ["Symbio", "multi-agent", "DAG", "memory"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "opensource-20260601-05",
      "section": "opensource",
      "title": "Dust（1.3K Stars）：自定义 AI Agent 平台加速工作流",
      "summary": "dust-tt/dust 是 1,368 Stars 的自定义 AI Agent 平台，支持快速构建面向团队工作流的 AI Agent。提供结构化的数据连接、工具调用和多 Agent 协作能力，面向非技术团队的 Agent 构建需求。",
      "insight": "面向非技术用户的 Agent 平台是赛道的重要分支——不是所有 Agent 构建者都应该写代码。",
      "url": "https://github.com/dust-tt/dust",
      "source": "GitHub",
      "tags": ["Dust", "no-code", "team-workflow"],
      "label": "开源",
      "kind": "open",
      "importance": 7
    },
    {
      "id": "voices-20260601-01",
      "section": "voices",
      "title": "Anthropic：2026 年从单 Agent 到多 Agent 编排是最大范式转移",
      "summary": "Anthropic 2026 Agentic Coding Trends Report 的核心预判：2026 年 Agent 能连续工作数天（而非分钟）；编排层取代 prompt 层成为核心竞争力；27% 的 AI 辅助工作是以前完全不存在的新任务类型。这些结论被行业广泛引用和讨论。",
      "insight": "「Agent 连续工作数天」的预测如果成真，意味着 Agent 的状态管理、记忆持久化和故障恢复变成必需能力而非可选功能。",
      "url": "https://resources.anthropic.com/2026-agentic-coding-trends-report",
      "source": "Anthropic",
      "tags": ["multi-agent", "orchestration", "trend-report"],
      "label": "观点",
      "kind": "voice",
      "importance": 9
    },
    {
      "id": "voices-20260601-02",
      "section": "voices",
      "title": "dev.to 实测：Claude Opus 4.7 在实际 Agent 循环中表现最优",
      "summary": "dev.to 的实测对比（非 benchmark）显示：2026 年 5 月 Claude Opus 4.7 在真实 agent loop 中表现最优，特别是在多步骤工具调用和长上下文保持方面。文章强调 benchmark 分数与实际 agentic 工作表现的差距，呼吁以真实任务而非人工测试评估 Agent 能力。",
      "insight": "Benchmark 与实际 agent loop 表现的差距再次被证实——评测体系需要更多真实场景的 harness。",
      "url": "https://dev.to/danishashko/the-best-llms-for-agentic-coding-in-2026-real-world-not-just-benchmarks-96n",
      "source": "dev.to",
      "tags": ["Claude-Opus-4.7", "real-world", "agentic-loop"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260601-03",
      "section": "voices",
      "title": "o-mega.ai：自进化 Agent 2026 指南——AIRS-Bench 引领评测新方向",
      "summary": "o-mega.ai 发布 Self-Improving AI Agents 2026 指南，介绍 Facebook Research 的 AIRS-Bench 等新一代自进化评测基准。指南梳理了从反馈循环、技能沉淀到持续改进的完整自进化路径，强调可测量性是自进化从概念到工程的关键。",
      "insight": "自进化不是魔法——它需要评测基准（如 AIRS-Bench）来验证「进化方向是否正确」，否则就是不受控的漂移。",
      "url": "https://o-mega.ai/articles/self-improving-ai-agents-the-2026-guide",
      "source": "o-mega.ai",
      "tags": ["AIRS-Bench", "self-evolution", "guide"],
      "label": "观点",
      "kind": "voice",
      "importance": 8
    },
    {
      "id": "voices-20260601-04",
      "section": "voices",
      "title": "motebit：用代数信任路由和可验证执行收据构建 Agent 经济协议",
      "summary": "motebit/motebit 提出 Agent 经济的开放协议：Ed25519 主权身份、代数信任路由（algebraic trust routing）、可验证执行收据。设计原则是 fail-closed——默认拒绝，必须显式授权。这是从技术协议到经济协议的理论扩展。",
      "insight": "fail-closed 设计意味着安全性从功能变成架构约束——Agent 经济系统必须默认不信任。",
      "url": "https://github.com/motebit/motebit",
      "source": "GitHub",
      "tags": ["trust-routing", "verifiable", "agent-economy"],
      "label": "观点",
      "kind": "voice",
      "importance": 7
    },
    {
      "id": "industry-20260601-01",
      "section": "industry",
      "title": "Google I/O 2026：Gemini 3.5 + Spark 个人 AI Agent 全面发布",
      "summary": "Google I/O 2026 发布 100+ 公告，核心是 Gemini 3.5 模型和 Gemini Spark 个人 AI Agent。Spark 作为嵌入 Google 全产品线的个人 Agent，支持跨应用任务编排、上下文记忆和主动建议。这是 Google 将 Agent 从开发者工具推向消费者产品的关键一步。",
      "insight": "个人 AI Agent 内置到全产品线意味着 Google 的 Agent 策略是「平台默认」而非「独立产品」——用户无需主动选择就能获得 Agent 能力。",
      "url": "https://www.cnbc.com/2026/05/19/google-ai-ultra-gemini-spark-omni.html",
      "source": "CNBC",
      "tags": ["Google", "Gemini-3.5", "Spark"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260601-02",
      "section": "industry",
      "title": "Karpathy 加入 Anthropic：顶级 AI 人才流向 Agent-first 公司",
      "summary": "Andrej Karpathy（前 Tesla AI 负责人、OpenAI 创始成员）加入 Anthropic。这是 2026 年最重要的人才流动之一，信号是 Agent-first 的技术方向对顶级人才的吸引力。Anthropic 同期完成 $30B 融资，估值达 $900B。",
      "insight": "Karpathy 的选择不是随机的——他加入 Anthropic 说明 Agent 安全和对齐方向对有深度技术判断力的人最有吸引力。",
      "url": "https://thecreatorsai.com/p/google-io-drops-100-things-karpathy",
      "source": "The Creators AI",
      "tags": ["Karpathy", "Anthropic", "talent"],
      "label": "行业",
      "kind": "industry",
      "importance": 9
    },
    {
      "id": "industry-20260601-03",
      "section": "industry",
      "title": "Dify v1.14.1 安全加固：开源 Agent 平台进入企业合规阶段",
      "summary": "Dify 最新版本 v1.14.1 聚焦安全加固（security hardening），此前 v1.13.0 引入 Human-in-the-Loop 机制。这标志着头部开源 Agent 平台从功能竞争转向安全合规竞争——企业客户的采购决策越来越取决于安全审计能力。",
      "insight": "从 HITL 到 security hardening 的版本优先级变化，说明 Dify 的企业客户正在进入生产部署而非 POC 阶段。",
      "url": "https://github.com/langgenius/dify/releases",
      "source": "GitHub",
      "tags": ["Dify", "security-hardening", "enterprise"],
      "label": "行业",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "industry-20260601-04",
      "section": "industry",
      "title": "neuradesk：LangGraph + DSPy + RAG 的多 Agent IT 服务平台支持 A2A",
      "summary": "Subh24ai/neuradesk 构建生产级多 Agent IT/HR 服务平台：用 LangGraph 编排、DSPy 优化 prompt、RAG 进行知识检索，自主处理企业工单。原生支持 A2A 协议，允许不同部门的 Agent 相互委托任务。",
      "insight": "企业服务场景是 A2A 协议的天然落地点——每个部门的 Agent 天然有能力边界，需要协议来委托和发现。",
      "url": "https://github.com/Subh24ai/neuradesk",
      "source": "GitHub",
      "tags": ["neuradesk", "IT-service", "LangGraph", "A2A"],
      "label": "行业",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "research-20260601-01",
      "section": "research",
      "title": "coherence-drift-benchmark：Agent 记忆漂移的首个量化方法论",
      "summary": "elfvvv10/coherence-drift-benchmark 为 AI Agent 记忆持久性提供可复现的量化方法。测量维度包括：保持精度（retention accuracy）、漂移速率（drift rate）、虚构倾向（confabulation）和溯源能力（provenance），覆盖 24h/36h/72h 时间间隔。属于 Creative Memory 项目 Track B。",
      "insight": "记忆漂移的量化是让长期自治 Agent 变得可信赖的前提——没有度量就没有改进。",
      "url": "https://github.com/elfvvv10/coherence-drift-benchmark",
      "source": "GitHub",
      "tags": ["memory-drift", "confabulation", "provenance"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260601-02",
      "section": "research",
      "title": "arXiv Survey：Agent 互操作协议全景——MCP、A2A、ACP、UCP 比较",
      "summary": "arXiv 2505.02279 发布 Agent 互操作协议综合调研，系统比较 MCP（工具层）、A2A（Agent 层）、ACP（Agent Communication Protocol）和 UCP（Unified Communication Protocol）四个新兴协议。分析各自适用场景、设计取舍和生态成熟度。",
      "insight": "四个协议并存说明 Agent 互操作仍在多路径探索阶段——但 MCP + A2A 的双层模型已获得最广泛的产业背书。",
      "url": "https://arxiv.org/html/2505.02279v1",
      "source": "arXiv",
      "tags": ["survey", "MCP", "A2A", "ACP", "UCP"],
      "label": "研究",
      "kind": "research",
      "importance": 9
    },
    {
      "id": "research-20260601-03",
      "section": "research",
      "title": "arXiv：Yet Even Less Is Even Better for Agentic Coding——Self-Play 强化学习",
      "summary": "arXiv 2604.00824 研究发现：在 agentic coding 场景中更少的监督数据配合 Self-Play 强化学习（如 SWE-RL）能获得更好的效果。论文探索了无标注数据训练 Agent 编码能力的边界，验证了「少数据 + 强 RL」路径的有效性。",
      "insight": "Self-Play RL 减少对标注数据的依赖——这对 Agent 自进化具有直接启示：让 Agent 在自我对弈中改进比人工标注更可扩展。",
      "url": "https://arxiv.org/pdf/2604.00824",
      "source": "arXiv",
      "tags": ["Self-Play", "SWE-RL", "less-data"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260601-04",
      "section": "research",
      "title": "kevlar-benchmark：OWASP Top 10 for AI Agents 的自动化安全评测方法",
      "summary": "samsaeed22/kevlar-benchmark 实现 OWASP AI Agent Security Top 10 的自动化评测。覆盖 prompt injection、tool poisoning、context manipulation、privilege escalation 等 Agent 特有攻击面，自动生成测试载荷和防御评分报告。",
      "insight": "标准化威胁分类 + 自动化评测 = 安全可复现——这是安全 harness 从「红蓝对抗」走向「持续集成」的路径。",
      "url": "https://github.com/samsaeed22/kevlar-benchmark",
      "source": "GitHub",
      "tags": ["OWASP", "prompt-injection", "security-eval"],
      "label": "研究",
      "kind": "research",
      "importance": 8
    },
    {
      "id": "research-20260601-05",
      "section": "research",
      "title": "MXP-JS：面向 Agent 通信的高性能二进制协议 SDK",
      "summary": "Zameneing/mxp-js 为 AI Agent 通信提供高性能 JavaScript/TypeScript SDK，基于二进制协议设计。相比 JSON-based 协议（如 A2A 的 HTTP+JSON），MXP 专注于低延迟和高吞吐的 Agent 间消息传递场景，适用于同一集群内的密集通信。",
      "insight": "二进制协议 vs JSON 协议不是替代关系——同集群内用 MXP 追求性能，跨域用 A2A 追求互操作，是合理的分层。",
      "url": "https://github.com/Zameneing/mxp-js",
      "source": "GitHub",
      "tags": ["MXP", "binary-protocol", "high-performance"],
      "label": "研究",
      "kind": "research",
      "importance": 7
    },
    {
      "id": "china-20260601-01",
      "section": "china",
      "title": "新华社：2026 年是智能体爆发年——日本政府 5 月起全面试用 AI 平台",
      "summary": "新华社报道称 2026 年为智能体爆发年。日本数字厅 3 月公布 7 家可用于政府机构的 AI 平台，计划 5 月起在全国 39 个部门试运行。文章分析了从对话 AI 到自主 Agent 的产品形态跃迁，强调各国政府正从旁观转向主动采用。",
      "insight": "政府采用 Agent 是重要的市场信号——政府场景对安全性、可审计性和可控性的要求最高，一旦入场说明技术成熟度已过门槛。",
      "url": "http://www.news.cn/globe/20260402/39ce4b6b703843a6aef41257f02976e0/c.html",
      "source": "新华社",
      "tags": ["智能体爆发", "政府采用", "日本"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260601-02",
      "section": "china",
      "title": "网易：大模型进入「价值验证」之年——Gemini Intelligence 和国产生态并进",
      "summary": "网易深度报道称 2026 年 5 月大模型行业进入「价值验证」阶段。Google 在 Android Show 发布 Gemini Intelligence，国产大模型生态同步加速。文章分析了从「能力展示」到「商业兑现」的行业转折点，以及 Agent 作为商业化路径的共识形成。",
      "insight": "「价值验证」意味着 2026 下半年 Agent 公司的生存压力将从「能做什么」转向「客户愿意为什么付费」。",
      "url": "https://www.163.com/dy/article/KTA5D4D30556MKQ5.html",
      "source": "网易",
      "tags": ["价值验证", "商业化", "Gemini"],
      "label": "国内",
      "kind": "industry",
      "importance": 8
    },
    {
      "id": "china-20260601-03",
      "section": "china",
      "title": "CSDN：2026 年 5 月 AI 行业大事件汇总——手机端百亿参数大模型成为目标",
      "summary": "CSDN 汇总 2026 年 5 月 AI 行业大事件：手机端本地运行百亿参数大模型成为硬件厂商共识目标，低功耗高推理、脱离云端依赖是关键指标。端侧 Agent 需要的不只是模型压缩，还需要本地化的 runtime 和工具调用能力。",
      "insight": "端侧 Agent 是 Agent 架构的另一个战场——当模型可以本地运行，Agent 的隐私和延迟问题同时解决。",
      "url": "https://blog.csdn.net/2401_84289488/article/details/160737064",
      "source": "CSDN",
      "tags": ["端侧推理", "百亿参数", "本地Agent"],
      "label": "国内",
      "kind": "industry",
      "importance": 7
    },
    {
      "id": "china-20260601-04",
      "section": "china",
      "title": "Dify 中文生态：国产 Agentic Workflow 平台 143K Stars 的全球影响力",
      "summary": "Dify（langgenius）作为中国团队创建的开源 agentic workflow 平台，以 143K Stars 成为全球该领域最大的开源项目。其中文社区生态活跃，在知乎、掘金和微信有大量实践分享。v1.14.1 安全加固表明项目已进入企业级成熟阶段。",
      "insight": "中国团队做出全球第一的 agentic 平台，说明在应用层工程化上，国内团队有能力引领国际标准。",
      "url": "https://dify.ai/zh",
      "source": "Dify",
      "tags": ["Dify", "国产开源", "全球第一"],
      "label": "国内",
      "kind": "industry",
      "importance": 9
    }
  ]
};
