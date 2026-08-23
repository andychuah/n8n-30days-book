# 使用 n8n 打造 Gmail AI 助理

這是 Andy 的 20 分鐘 n8n 講座分享包。

這條 workflow 會監看新郵件，請 Gemini 判斷郵件類型，再由 n8n 貼上 Gmail 標籤。只有確實需要回覆的郵件，才會建立一封**未寄出的 Gmail 草稿**；最後是否寄出，仍由使用者決定。

## 下載

- [下載完整 Workflow 分享包 ZIP](Gmail_AI助理_Workflow_分享包.zip)
- [直接查看主 workflow JSON](gmail_ai_assistant_workflow.json)
- [直接查看可選的 Demo Sender JSON](optional_demo_sender.json)

完整設定與測試方式請閱讀分享包內的 `README.md`。

## 安全界線

- 主流程只使用 Gmail `Create a draft`，沒有連接 `Send a message`。
- 不自動刪除郵件。
- 不替使用者承諾價格、折扣、批准或時程。
- 先用五到十封測試信驗證，再慢慢擴大範圍。

## Credential 與隱私

分享檔不包含 API key、OAuth token、密碼、講者信箱或講者 n8n 網址。匯入後必須綁定你自己的 Gmail OAuth 與 Gemini credential。
