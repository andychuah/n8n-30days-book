# Day 19 — Webhook Expressions

## Webhook 觸發 URL 格式

```
https://你的n8n網址/webhook-test?topic=你想查詢的主題
```

多個參數用 `&` 分隔：
```
https://你的n8n網址/webhook-test?topic=AI&lang=zh
```

## 取得 URL 參數的 Expression

| 參數名 | Expression |
|-------|-----------|
| topic | `{{ $json.query.topic }}` |
| lang | `{{ $json.query.lang }}` |
| body 中的欄位 | `{{ $json.body.欄位名 }}` |

## AI Agent Prompt

```
{{ $json.query.topic }}
```

## 生產環境注意事項

| 環境 | URL | 說明 |
|------|-----|------|
| 測試 | Test URL | 每次點「Listen for Test Event」才有效 |
| 生產 | Production URL | 需啟用（Activate）工作流，24 小時可用 |
