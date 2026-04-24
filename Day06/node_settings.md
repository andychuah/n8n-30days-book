# Day 06 — Schedule 定時觸發節點設定

## Schedule Trigger 節點設定

| 欄位 | 設定值 | 說明 |
|------|--------|------|
| Trigger Interval | Days | 每天執行一次 |
| Trigger at Hour | 7pm | 晚上 7 點（可依需求改） |
| Trigger at Minute | 0 | 整點執行 |
| Timezone | Asia/Taipei | 台灣時間 |

## 常用 Cron 時間設定參考

| 需求 | 設定 |
|------|------|
| 每天早上 8 點 | Hour: 8am, Minute: 0 |
| 每天晚上 9 點 | Hour: 9pm, Minute: 0 |
| 每週一早上 9 點 | Interval: Weeks, Day: Monday, Hour: 9am |
| 每小時整點 | Interval: Hours |
| 每 30 分鐘 | Interval: Minutes, value: 30 |

> ⚠️ 注意：Schedule 觸發只在工作流「已啟用（Activated）」的狀態下才會自動執行。
> 測試時請改用 Manual Trigger 手動測試，確認沒問題後再啟用。
