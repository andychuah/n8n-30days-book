// Day 11 — 每日營運報告（Email 純文字版）
// 用途：從 Google Sheets 讀取最新一週各部門資料，產出格式化週報
// 輸出欄位：report（字串）→ 填入 Send Email 的 Text 欄位

// 取得所有輸入的資料
const items = $input.all();

// 找出資料中最新的日期（以毫秒為單位）
let latestTimestamp = 0;

items.forEach(item => {
  const ts = new Date(item.json['Timestamp']).getTime();
  if (ts > latestTimestamp) latestTimestamp = ts;
});

// 將最新日期格式化為台灣時間字串
const latestDateStr = new Date(latestTimestamp).toLocaleDateString('zh-TW', {
  timeZone: 'Asia/Taipei',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// 篩選出「最新一週」的所有部門資料
const latestEntries = items.filter(item => {
  const ts = new Date(item.json['Timestamp']).getTime();
  return ts === latestTimestamp;
});

// 分別抓取各部門的最新資料（若無資料則給予空物件以防報錯）
const mktData   = latestEntries.find(e => e.json['部門'] === '行銷')?.json  || {};
const salesData = latestEntries.find(e => e.json['部門'] === '業務')?.json  || {};
const csData    = latestEntries.find(e => e.json['部門'] === '客服')?.json  || {};

// 撰寫各部門總結報告
const report = `
📊 各部門最新週報彙整
━━━━━━━━━━━━━━━━━━━━━━
📅 結算日期：${latestDateStr}

📢 【行銷部】
• 本週發文數：${mktData['本週發文數'] || 0} 篇
• 觸及率：${mktData['觸及率(%)'] || 0}%
• 新增粉絲：${mktData['新增粉絲數'] || 0} 人
📝 備註：${mktData['備註'] || '無'}

💼 【業務部】
• 新增客戶：${salesData['本週新增客戶數'] || 0} 家
• 成交金額：$${Number(salesData['成交金額(元)'] || 0).toLocaleString('zh-TW')} 元
• 拜訪次數：${salesData['拜訪次數'] || 0} 次
📝 備註：${salesData['備註'] || '無'}

🎧 【客服部】
• 處理件數：${csData['本週處理件數'] || 0} 件
• 平均回應：${csData['平均回應時間(小時)'] || 0} 小時
• 客戶滿意度：${csData['客戶滿意度(%)'] || 0}%
📝 備註：${csData['備註'] || '無'}

━━━━━━━━━━━━━━━━━━━━━━
🤖 由 n8n 自動產生
`.replace(/^\s+/gm, '');

// 回傳報告
return [{ json: { report: report } }];
