# Day 07 — IF 節點 Expressions

## IF 節點設定

| 欄位 | 設定值 | 說明 |
|------|--------|------|
| Value 1 | `{{ $json.title }}` | 檢查 RSS 是否有標題 |
| Operation | Is Not Empty | 有標題就走 true，沒有走 false |

## Send Email 節點（true 路徑）

在 Text 欄位填入（切換到 Expression 模式）：
```
{{ $json.body }}
```

> `$json.body` 是 Code 節點輸出的彙整內容（見 code.js）

## 確認設定
- IF 節點 Value 1：`{{ $json.title }}`
- Send Email Text：`{{ $json.body }}`
