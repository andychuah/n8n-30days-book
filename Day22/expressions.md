# Day 22 — Expressions

## AI Agent 節點（輸入信件）

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Prompt | `{{ $json.snippet }}` | Gmail 信件摘要 |

## IF 節點（判斷是否需要回覆）

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Value 1 | `{{ $json.content.parts[0].text }}` | AI 輸出（Gemini）|
| Value 1 | `{{ $json.output }}` | AI 輸出（OpenAI）|
| Operation | Contains | 包含「需要回覆]：是」則走 true |

## Gmail 節點（寄出草稿）

Code 節點執行後，用以下 Expression：

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Subject | `{{ $json.cleanSubject }}` | Code 節點提取的乾淨主旨 |
| Message | `{{ $json.cleanBody }}` | Code 節點提取的乾淨內文 |
| To | `{{ $('Gmail Trigger').item.json.From }}` | 回覆給原寄件人 |

## Slack 通知（可選）

```
📬 新郵件待審核
來自：{{ $json.from }}
意圖：{{ $json.output.split("\n")[0] }}
```
