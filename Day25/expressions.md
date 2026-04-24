# Day 25 — Error Handler Expressions

## Slack 警報節點

### Text 欄位（保底顯示，純文字）
```
n8n 工作流執行失敗！工作流：{{ $json.workflow.name }}
```

### Blocks 欄位（精美格式）
見 `slack_error_blocks.txt`

## Error Trigger 的可用欄位

| Expression | 說明 |
|-----------|------|
| `{{ $json.workflow.name }}` | 出錯的工作流名稱 |
| `{{ $json.execution.error.message }}` | 完整錯誤訊息 |
| `{{ $json.execution.error.message.substring(0, 200) }}` | 截斷到前 200 字（防止訊息太長） |
| `{{ $json.execution.url }}` | 執行記錄連結（一鍵跳到 Log，最重要！）|
