# Day 05 — 用到的 Expressions

## Filter 節點（篩選今天的 RSS）

| 欄位 | 設定 |
|------|------|
| Value 1 | `{{ $json.pubDate }}` |
| Value 2 | 今天的日期（固定值，或用 `{{ $now.toFormat('yyyy-MM-dd') }}`） |

## Send Email 節點（信件內容）

在 Text 欄位，切換到 Expression 模式，填入：

```
📰 {{ $json.title }}

🔗 連結：{{ $json.link }}

👤 作者：{{ $json.author }}
```
