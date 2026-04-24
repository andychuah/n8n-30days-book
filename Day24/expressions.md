# Day 24 — Expressions

## Set 節點（儲存 AI 研究結果）

| 欄位 | Expression |
|------|-----------|
| ai_research | `{{ $json.output }}` |

## Jira 節點（建立任務）

| 欄位 | Expression |
|------|-----------|
| Summary（標題）| `[新客戶] {{ $json.client_name }} - {{ $json.project_type }}` |

## Notion 節點（建立頁面）

| 欄位 | Expression |
|------|-----------|
| Name / Title | `{{ $json.client_name }}` |
| Contact | `{{ $json.contact_person }}` |
| Email | `{{ $json.client_email }}` |

## Google Drive 節點（建立資料夾）

| 欄位 | Expression |
|------|-----------|
| Name | `{{ $json.client_name }}` |

## Send Email 節點（歡迎信）

| 欄位 | Expression |
|------|-----------|
| To | `{{ $json.client_email }}` |
| Subject | `歡迎加入！{{ $json.client_name }} 專案啟動` |

## Slack 節點（團隊通知）

Text 欄位填入：
```
🎉 新客戶加入！

公司名稱：{{ $json.client_name }}
聯絡人：{{ $json.contact_person }}
專案類型：{{ $json.project_type }}

📋 相關連結：
• Jira：{{ $json.jira_url }}
• Notion：{{ $json.notion_url }}
• Drive：{{ $json.drive_url }}
```

## Notion 備忘欄位（可填入 Blocks）

```
- **公司名稱**：{{ $json.client_name }}
- **聯絡人**：{{ $json.contact_person }}
- **Email**：{{ $json.client_email }}
- **專案類型**：{{ $json.project_type }}

### AI 研究結果
{{ $json.ai_research }}
```
