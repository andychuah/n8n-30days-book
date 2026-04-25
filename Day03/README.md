# Day 03 — 你的第一個 n8n 自動化

## 本章包含
- `workflow.json` — 第一個手動 Workflow（Manual Trigger → Set → Debug）

## 節點設定重點

| 節點 | 欄位 | 設定值 |
|------|------|--------|
| Set | Name | message |
| Set | Value | Hello from n8n! |

## 關於 Expression

n8n 最常用的 Expression 語法：`{{ $json.欄位名 }}`

例如，若前一個節點輸出了一個 `message` 欄位，可用 `{{ $json.message }}` 來取用它。
