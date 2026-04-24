// Day 13 — Slack Bot 模糊比對週報查詢
// 用途：根據用戶輸入的關鍵字，從 Google Sheets 資料中找出對應部門的最新週報
// 前置：需有「解析指令」Set 節點，儲存 query_keyword 欄位
// 輸出欄位：found（boolean）, message（字串）

const query = $('解析指令').first().json.query_keyword.toLowerCase().trim();

const allRows = $input.all();

// 模糊比對：只要包含關鍵字就算命中（不需完全一樣）
const matched = allRows.filter(row => {
  const dept = row.json['部門']?.toLowerCase();
  return dept && (query.includes(dept) || dept.includes(query));
});

// 沒找到的情況
if (matched.length === 0) {
  return [{
    json: {
      found: false,
      message: `抱歉，找不到「${query}」的週報資料。\n請輸入正確的部門名稱（行銷、業務、客服）。`
    }
  }];
}

// 找到了：排序後取最新一筆
matched.sort((a, b) => new Date(b.json['Timestamp']) - new Date(a.json['Timestamp']));

const r    = matched[0].json;
const dept = r['部門'];

let details = '';
if (dept === '行銷') {
  details = `📮 本週發文數：${r['本週發文數']} 篇\n📈 觸及率：${r['觸及率(%)']}%\n👥 新增粉絲：${r['新增粉絲數']} 人`;
} else if (dept === '業務') {
  details = `🤝 新增客戶：${r['本週新增客戶數']} 家\n💰 成交金額：$${Number(r['成交金額(元)']).toLocaleString()}\n📞 拜訪次數：${r['拜訪次數']} 次`;
} else if (dept === '客服') {
  details = `📋 處理件數：${r['本週處理件數']} 件\n⏱️ 平均回應：${r['平均回應時間(小時)']} 小時\n⭐ 客戶滿意度：${r['客戶滿意度(%)']}%`;
}

const message = `嗨！幫你找到 ${dept}部門最新週報 📊\n\n${details}\n\n📅 更新時間：${r['Timestamp']}\n💬 備註：${r['備註'] || '無'}`;

return [{ json: { found: true, message } }];
