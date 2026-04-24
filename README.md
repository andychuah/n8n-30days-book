# 📦 n8n 30天自動化挑戰 — 書籍素材包

> 📖 **書名：n8n 30天自動化挑戰** by Andy Chuah
> 🌐 **GitHub：** https://github.com/andychuah/n8n-30days-book

本資料夾包含書中每一天所有「難以手打」的素材，**按天數分資料夾**，讀者看到第幾天就打開哪個資料夾。

---

## 📁 各天資料夾包含的檔案類型

| 檔案名稱 | 說明 |
|---------|------|
| `ai_assistant_prompt.txt` | 🆕 遇到問題時，把這段貼給 ChatGPT / Claude / Gemini 求助的 Prompt |
| `workflow.json` | 可直接匯入 n8n 的 Workflow JSON |
| `workflow_main.json` / `workflow_sub.json` | 主 + 子 Workflow（Day 26）|
| `system_prompt.txt` | 填入 AI Agent 節點 System Message 欄位的提示詞 |
| `code.js` | 填入 Code 節點的 JavaScript 程式碼 |
| `expressions.md` | 本章用到的 n8n Expressions 速查 |
| `node_settings.md` | 節點設定細節（不需要打字，直接對照）|
| `slack_blocks.txt` | Slack Block Kit JSON（格式化訊息）|
| `api_urls.md` | 本章用到的 API URL 與說明 |
| `*.html` | HTML 模板（Email 等）|

> 💡 **每一天的資料夾都有 `ai_assistant_prompt.txt`**，裡面是針對該章節預先寫好的求助 Prompt。遇到問題時，直接複製貼給 AI 工具，並附上截圖，就能快速得到幫助。

---

## 📅 各天素材概覽

| 天數 | AI 求助 Prompt | Workflow | System Prompt | Code | Expressions | 其他 |
|------|---------------|----------|---------------|------|-------------|------|
| intro | ✅ 通用版 | — | — | — | — | — |
| Day 00 | ✅ | — | — | — | — | 環境設定 |
| Day 01 | ✅ | — | — | — | — | — |
| Day 02 | ✅ | — | — | — | — | — |
| Day 03 | ✅ | ✅ | — | — | — | — |
| Day 04 | ✅ | ✅ | — | — | — | RSS URL 公式 |
| Day 05 | ✅ | ✅ | — | — | ✅ | — |
| Day 06 | ✅ | ✅ | — | — | — | 排程設定表 |
| Day 07 | ✅ | ✅ | — | ✅ | ✅ | — |
| Day 08 | ✅ | ✅ | — | ✅ | — | — |
| Day 09 | ✅ | — | — | — | — | 第一週回顧 |
| Day 10 | ✅ | ✅ | — | — | — | Google Sheets 欄位說明 |
| Day 11 | ✅ | ✅ | — | ✅ | ✅ | — |
| Day 12 | ✅ | ✅ | — | ✅ | — | Slack Blocks JSON |
| Day 13 | ✅ | ✅ | — | ✅ | ✅ | — |
| Day 14 | ✅ | — | — | — | — | API URL 清單 |
| Day 15 | ✅ | ✅ | — | — | ✅ | — |
| Day 16 | ✅ | — | — | — | — | 第二週回顧 |
| Day 17 | ✅ | ✅ | ✅ | — | ✅ | — |
| Day 18 | ✅ | ✅ | ✅ × 3 | — | ✅ | — |
| Day 19 | ✅ | ✅ | — | — | ✅ | — |
| Day 20 | ✅ | ✅ | ✅ | — | — | SerpAPI 設定 |
| Day 21 | ✅ | ✅ | ✅ | — | ✅ | — |
| Day 22 | ✅ | — | ✅ | ✅ | ✅ | — |
| Day 23 | ✅ | — | — | — | — | Human-in-the-Loop |
| Day 24 | ✅ | ✅ | ✅ | — | ✅ | 歡迎信 HTML 模板 |
| Day 25 | ✅ | ✅ | — | — | ✅ | Slack 錯誤警報 Blocks |
| Day 26 | ✅ | ✅ × 2 | ✅ | — | ✅ | — |
| Day 27 | ✅ | — | — | — | — | 社群模板 |
| Day 28 | ✅ | — | — | — | — | 自動化盤點 |
| Day 29 | ✅ | — | — | — | — | 健康檢查 |
| Day 30 | ✅ | — | — | — | — | 成長規劃 |

---

## 🚀 如何使用各種素材

### ai_assistant_prompt.txt — 遇到問題時求助 AI

每個資料夾都有一個針對該章節的求助 Prompt 模板。使用方式：

1. 打開對應天數的 `ai_assistant_prompt.txt`，全選複製
2. 貼給 ChatGPT、Claude 或 Gemini
3. 補充說明你遇到的錯誤訊息或問題描述
4. 附上截圖（如果有的話）

> 這個 Prompt 已預先告訴 AI 你在學習哪個章節、使用什麼工具，讓 AI 更快理解情境。

### workflow.json — 匯入工作流

1. 進入 n8n 編輯器
2. 左上角選單 → **Import from file**
3. 選擇對應的 `workflow.json`
4. 更新節點中的設定（API 金鑰、Email、Credentials 等）

### system_prompt.txt — AI Agent 提示詞

1. 打開 `.txt` 檔案，全選複製
2. 在 n8n AI Agent 節點找到 **System Message** 欄位
3. 貼上

### code.js — Code 節點程式碼

1. 打開 `.js` 檔案，全選複製
2. 在 n8n Code 節點中，刪除預設程式碼
3. 貼上
4. **請先閱讀程式碼開頭的注解**，確認前置條件

### slack_blocks.txt — Slack Block Kit

1. 在 Slack 節點，Message Type 選 **Blocks**
2. 切換到 **Expression 模式**（點欄位右側的 `=`）
3. 把 `{{ ... }}` 整段（含雙大括號）貼入 Blocks 欄位

### expressions.md — n8n 語法速查

直接對照文件，複製需要的 Expression 貼入對應欄位。

---

## ⚠️ 使用前需設定的內容

大部分 Workflow 需要你自行設定：
- **Credentials**（憑證）：Gmail、Slack、Google Sheets、Jira 等
- **Email 地址**：改成你自己的信箱
- **Sheet ID / Notion Database ID**：換成你自己的
- **Slack Channel**：換成你的頻道名稱
- **API Keys**：OpenAI、SerpAPI 等在 Settings → Credentials 設定

> 💡 書中每一章都有詳細的設定步驟說明，素材配合書本使用效果最佳。
