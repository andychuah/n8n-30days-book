# Day 17 — Expressions

## Webhook 節點（輸入）
觸發 URL 格式：
```
https://你的n8n網址/webhook-test?topic=你想查詢的主題
```

## AI Agent 節點

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Prompt | `{{ $json.query.topic }}` | 從 Webhook URL 參數取得查詢主題 |

## 輸出 Expression

取 AI Agent 的回覆（依模型不同）：

| 模型 | Expression |
|------|-----------|
| OpenAI (GPT) | `{{ $json.output }}` |
| Google Gemini | `{{ $json.content.parts[0].text }}` |
