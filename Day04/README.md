# Day 04 — RSS 訂閱監測

## 本章包含
- `workflow.json` — RSS Reader 讀取 YouTube 頻道更新

## RSS URL 公式（填入 RSS Reader 節點的 Feed URL 欄位）

### YouTube 頻道 RSS
```
https://www.youtube.com/feeds/videos.xml?channel_id=【你的頻道ID】
```

**如何取得頻道 ID：**
1. 開啟 YouTube 頻道頁面
2. 點擊頻道名稱右側的「...」
3. 選擇「分享頻道」→「複製頻道 ID」

**範例（MrBeast 的 RSS）：**
```
https://www.youtube.com/feeds/videos.xml?channel_id=UCX6OQ3DkcsbYNE6H8uQQuVA
```

### 常見網站 RSS 格式
| 平台 | RSS 格式 |
|------|---------|
| YouTube | `https://www.youtube.com/feeds/videos.xml?channel_id=頻道ID` |
| Medium | `https://medium.com/feed/@用戶名` |
| 痞客邦 | `https://帳號.pixnet.net/blog/feed/atom` |
| PTT | `https://www.ptt.cc/rss/tech` |
| 聯合新聞網 | `https://udn.com/rssfeed/news/2/BREAKINGNEWS` |
