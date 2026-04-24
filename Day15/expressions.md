# Day 15 — Switch 節點 Expressions

## Set 節點（提取指令關鍵字）

| 欄位名稱 | Expression | 說明 |
|---------|-----------|------|
| command | `{{ $json.text.split(" ").slice(1).join(" ").trim() }}` | 去掉 @mention，取後面的關鍵字 |

> 例如：用戶輸入「@bot 笑話」→ command = 「笑話」

## Switch 節點設定

| 欄位 | 設定值 |
|------|--------|
| Value 1 | `={{ $json.command }}` |
| Output 笑話 | Equals → 笑話 |
| Output 貓咪 | Equals → 貓咪 |
| Output 幫助 | Equals → 幫助 |

> ⚠️ 注意：Value 1 前面有 `=` 號（Expression 模式的寫法）

## 各分支的 HTTP Request URL

| 分支 | URL | 說明 |
|------|-----|------|
| 笑話 | `https://official-joke-api.appspot.com/random_joke` | 英文笑話 API |
| 貓咪 | `https://catfact.ninja/fact` | 貓咪冷知識 API |
| 幫助 | （不需要 HTTP Request）| 直接在 Slack 節點填寫說明文字 |

## Slack Reply 節點 Expressions

| 分支 | Text Expression |
|------|----------------|
| 笑話回覆 | `{{ $json.setup }} ... {{ $json.punchline }}` |
| 貓咪回覆 | `🐱 貓咪冷知識：{{ $json.fact }}` |
| 幫助回覆 | （固定文字，無需 Expression）可填寫：「我能做到：\n• @bot 笑話\n• @bot 貓咪\n• @bot 幫助」 |
