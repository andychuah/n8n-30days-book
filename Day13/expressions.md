# Day 13 — Expressions

## Set 節點（解析指令）

| 欄位 | Expression | 說明 |
|------|-----------|------|
| command | `{{ $json.text.replace(/<@[A-Z0-9]+>\s*/, '').trim() }}` | 移除 @mention，取出乾淨的關鍵字 |
| query_keyword | `{{ $json.text.split(' ').slice(1).join(' ').trim() }}` | 取第二個詞後的所有內容（去掉指令前綴） |

> 例如：用戶輸入「@bot 查詢 業務」→ query_keyword = 「查詢 業務」

## Code 節點

前置引用：
```
$('解析指令').first().json.query_keyword
```

## Slack Reply 節點

| 欄位 | Expression |
|------|-----------|
| Text | `{{ $json.message }}` |
