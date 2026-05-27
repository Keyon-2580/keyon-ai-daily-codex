# Daily Automation

目标流程：

1. Codex 每天定时运行。
2. 运行 `scripts/collect-news.mjs` 获取最新候选资讯。
3. Codex 阅读候选资讯，按当前页面模块分类并生成 `data.js`。
4. 保留最近 7 日日报归档。
5. 校验页面，再提交并推送到 GitHub Pages 仓库。

当前 Codex schedule：`keyong-ai-daily-digest`，已设为每日执行。

GitHub 发布仓库：

```text
https://github.com/Keyon-2580/keyon-ai-daily-codex.git
```

发布方式：仓库使用 `gh-pages` 分支发布静态站。每日任务需要先推 `main`，再推 `main:gh-pages`。

## 推荐日更命令

```bash
cd /Users/keyon/Documents/alibaba/obsidian/work/keyong-ai-frontier
node scripts/collect-news.mjs --out tmp/latest-candidates.json
node --check data.js
```

## Codex 日更 Prompt

```text
你在 keyong-ai-frontier 项目里执行每日 AI 日报更新。

先运行：
node scripts/collect-news.mjs --out tmp/latest-candidates.json

读取 tmp/latest-candidates.json、automation.config.json 和当前 data.js。
基于候选资讯生成新的 data.js，要求：

1. 所有资讯必须来自候选资讯或你主动搜索到的真实来源，保留原文 URL 和 source。
2. 分类沿用页面模块：
   - 全球热榜
   - Keyong关联
   - 开源热项
   - 大佬说
   - 行业动态
   - 前沿研究
   - 国内速递
   - 7日AI日报
3. Keyong关联不要写 Keyong 的具体项目名称，只根据工作主题做关联解读：
   - Agentic 开发
   - Agent 自进化
   - A2A / 互操作
   - Agentic 架构
   - Harness 工程
4. 每条卡片包含 title、summary、insight、url、source、tags、importance。
5. 7日AI日报只保留最近 7 天，新增今天，删除第 8 天。
6. editorNote 写成“今日洞见”，用 2-4 段总结当日主线。
7. 不要编造不存在的来源、数字或发布日期；不确定就降级为候选，不进主卡片。
8. 完成后运行：
   node --check data.js
   node --check app.js
   node scripts/snapshot.mjs   # 保存当天快照到 history/ 并清理 >7 天的旧文件
   python3 -m http.server 4321 --directory .  # 如需本地预览
9. 若校验通过且 GitHub remote/发布分支已配置，提交并推送：
   git add data.js history/ 
   git commit -m "Update AI frontier daily digest YYYY-MM-DD"
   git push origin main
   git push origin main:gh-pages
10. 若 remote 或发布分支未配置，保留本地文件并报告缺失信息。
```

## API Key

`scripts/collect-news.mjs` 支持可选环境变量：

- `TAVILY_API_KEY`
- `EXA_API_KEY`
- `GITHUB_TOKEN`

没有这些 key 时，会使用 GitHub、arXiv、Hacker News、RSS 等公开来源作为候选池。
