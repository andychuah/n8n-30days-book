# Day 26 — Execute Workflow（子工作流）Expressions

## 子工作流（AI 文字助理模組）

### AI Agent 節點 Prompt 欄位
```
{{ $json.prompt }}
```

> ⚠️ 注意：n8n 的 Expression 語法是 `{{ $json.prompt }}`，大括號和 `$` 都是必須的。

## 呼叫方（主工作流）範例

### Execute Workflow 節點

| 欄位 | 設定值 |
|------|--------|
| Workflow | 選擇「AI 文字助理模組」|
| prompt | 填入你要傳給子工作流的指令 |

### 主工作流示範 Prompt（Slack 訊息整理版）
```
【指令】：請將以下本週工作記錄整理成適合在 Slack 發出的條列摘要，語氣輕鬆，使用 Emoji。
【內容】：{{ $json.weekly_notes }}
```

### 主工作流示範 Prompt（Email 草稿版）
```
【指令】：請根據以下訊息，草擬一封正式的商務回信 Email，包含稱呼與結語。
【內容】：{{ $json.raw_message }}
```
