# Day 14 — HTTP Request API 範例 URLs

## 本章用到的 API

### Cat Facts API（免費，無需 API Key）
```
https://catfact.ninja/fact
```
- Method: GET
- Authentication: None
- 回傳欄位：`fact`（一句貓咪冷知識）

## 取得 API 回應值的 Expression

```
{{ $json.fact }}
```

## 常見免費 API 推薦

| API | URL | 回傳內容 |
|-----|-----|---------|
| Cat Facts | `https://catfact.ninja/fact` | 貓咪冷知識 |
| Official Joke API | `https://official-joke-api.appspot.com/random_joke` | 英文笑話（setup + punchline） |
| 台灣天氣（氣象署）| `https://opendata.cwa.gov.tw/api/v1/rest/datastore/...` | 需申請 API Key |
| Exchange Rate | `https://open.er-api.com/v6/latest/USD` | 匯率（免費） |
| REST Countries | `https://restcountries.com/v3.1/name/taiwan` | 國家資訊 |

## 如何讀取 API 回應的欄位

執行後，在輸出面板查看 JSON 結構，然後用 `{{ $json.欄位名 }}` 引用。

例如 Official Joke API 的回傳：
```json
{
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!"
}
```

對應 Expression：
- `{{ $json.setup }}` → 笑話前半段
- `{{ $json.punchline }}` → 笑話後半段
