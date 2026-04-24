// Day 12 — 週報資料整理（Slack Block Kit 版，Step 1/2）
// 用途：把 Google Sheets 資料整理成 JSON 物件，供後續 Slack Blocks 使用
// 輸出欄位：date, mkt, sales, cs（JSON 物件，不是字串）

const items = $input.all();

// 找出最新日期
let latestTimestamp = 0;

items.forEach(item => {
  const ts = new Date(item.json['Timestamp']).getTime();
  if (ts > latestTimestamp) latestTimestamp = ts;
});

const latestDateStr = new Date(latestTimestamp).toLocaleDateString('zh-TW', {
  timeZone: 'Asia/Taipei', year: 'numeric', month: 'long', day: 'numeric'
});

// 篩選出最新一週資料
const latestEntries = items.filter(item =>
  new Date(item.json['Timestamp']).getTime() === latestTimestamp
);

// 直接輸出 JSON 物件（Slack Blocks 需要直接引用各欄位，不能包成字串）
return [{
  json: {
    date:  latestDateStr,
    mkt:   latestEntries.find(e => e.json['部門'] === '行銷')?.json  || {},
    sales: latestEntries.find(e => e.json['部門'] === '業務')?.json  || {},
    cs:    latestEntries.find(e => e.json['部門'] === '客服')?.json  || {}
  }
}];
