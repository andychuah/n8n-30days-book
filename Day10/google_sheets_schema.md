# Day 10 — Google Sheets 欄位結構

## 各部門週報 Sheet 欄位

| 欄位名稱 | 類型 | 說明 |
|---------|------|------|
| Timestamp | 日期時間 | Google Forms 自動填入 |
| 部門 | 文字 | 行銷 / 業務 / 客服 |
| 本週發文數 | 數字 | 行銷部專用 |
| 觸及率(%) | 數字 | 行銷部專用 |
| 新增粉絲數 | 數字 | 行銷部專用 |
| 本週新增客戶數 | 數字 | 業務部專用 |
| 成交金額(元) | 數字 | 業務部專用 |
| 拜訪次數 | 數字 | 業務部專用 |
| 本週處理件數 | 數字 | 客服部專用 |
| 平均回應時間(小時) | 數字 | 客服部專用 |
| 客戶滿意度(%) | 數字 | 客服部專用 |
| 備註 | 文字 | 所有部門共用 |

> 💡 建議用 Google Forms 建立問卷，讓各部門填寫，自動寫入這個 Sheet。
> Google Forms 建立的 Sheet 會自動有 Timestamp 欄位。

## Node 設定重點

| 節點 | 欄位 | 設定值 |
|------|------|--------|
| Google Sheets Trigger | Event | Row Added |
| Google Sheets Trigger | Sheet | 選擇對應部門的 Sheet |
| Google Sheets（寫入） | Operation | Append Row |
| Google Sheets（寫入） | Sheet | 中央總表 |
