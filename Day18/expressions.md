# Day 18 — Expressions

## AI Agent 節點

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Messages / Prompt | `{{ $json.chatInput }}` | 把輸入的信件內容傳給 AI |

## 取得 AI 回覆

| 模型 | Expression |
|------|-----------|
| OpenAI (GPT) | `{{ $json.output }}` |
| Google Gemini | `{{ $json.content.parts[0].text }}` |

> 💡 不確定用哪個？先執行一次，在輸出面板看 JSON 結構再決定。
