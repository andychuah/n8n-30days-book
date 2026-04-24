# Day 20 — SerpAPI 設定與 Expressions

## 取得 SerpAPI Key
1. 前往：https://serpapi.com/
2. 免費帳號每月 100 次搜尋
3. 登入後在 https://serpapi.com/manage-api-key 找到你的 Key

## n8n Credential 設定
1. Settings → Credentials → Add Credential
2. 搜尋「SerpApi」
3. 填入 API Key

## AI Agent 節點設定

| 欄位 | 設定值 |
|------|--------|
| Tools | 新增 SerpAPI Tool |
| Prompt | `{{ $json.query.topic }}` |
| System Message | 見 `system_prompt.txt` |

## Webhook 觸發 URL 範例

```
https://你的n8n網址/webhook-test?topic=2026年AI晶片的最新發展
```
