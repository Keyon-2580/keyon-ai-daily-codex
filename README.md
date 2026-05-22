# Keyong AI Frontier

本地静态版 AI 日报页面，参考 `pupujanet-eng.github.io/ai-frontier` 的信息架构和视觉节奏，并将 PM 关联改为 Keyong 关联。

当前内容已从用户提供的示例 HTML 中解析 `digest` 数据生成；后续每日内容由自动化采集和 Codex 分析更新。

## 本地预览

```bash
python3 -m http.server 4321 --directory keyong-ai-frontier
```

打开：

```text
http://localhost:4321
```

## 内容更新

- `data.js`：日报、7 日归档、分类卡片和 Keyong 关联洞察。
- `styles.css`：页面视觉样式。
- `app.js`：搜索、分类导航、归档切换、快捷键与信号图。
- `automation.config.json`：Keyong 关联主题、分类和采集源配置。
- `scripts/collect-news.mjs`：每日候选资讯采集脚本。
- `scripts/import-example-digest.mjs`：从示例 HTML 导入原始日报数据。

## 从示例 HTML 重新导入

```bash
node scripts/import-example-digest.mjs "/Users/keyon/Downloads/AI Frontier — 每日AI前沿速览.html"
```

## 自动化

已创建一个暂停状态的 Codex schedule：`keyong-ai-daily-digest`。

确认 GitHub Pages 目标仓库和分支后，再将它改为 ACTIVE。详细流程见 `DAILY_AUTOMATION.md`。
