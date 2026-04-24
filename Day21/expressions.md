# Day 21 — Slack Bot Expressions

## Set 節點（整理 Slack 訊息）

| 欄位 | Expression | 說明 |
|------|-----------|------|
| channel_id | `{{ $json.event.channel }}` | 記住要回覆到哪個頻道 |
| user_message | `{{ $json.event.text.replace('<@' + $json.event.bot_id + '>', '').trim() }}` | 移除 @mention，取出乾淨的用戶訊息 |

## AI Agent 節點

| 欄位 | Expression |
|------|-----------|
| Prompt / Input | `{{ $json.user_message }}` |

## Slack Reply 節點

| 欄位 | Expression | 說明 |
|------|-----------|------|
| Channel | `{{ $json.channel_id }}` | 回覆到原本的頻道 |
| Text | `{{ $json.output }}` | AI 的回覆（OpenAI）|
| Text | `{{ $json.content.parts[0].text }}` | AI 的回覆（Gemini）|

## 節點連線順序
```
Slack Trigger → Set（整理訊息）→ AI Agent → Slack（回覆）
```
