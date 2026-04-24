// Day 08 — Merge 多來源 RSS 彙整成一封信
// 用途：把多個 RSS 來源的資料合併成單一字串
// 輸出欄位：body（字串）→ 填入 Send Email 的 Text 欄位

// 1. 取得所有輸入資料（來自 Merge 節點）
const items = $input.all();

// 2. 若沒有資料，提早結束
if (items.length === 0) {
  return [{ json: { body: '今天沒有新的更新。' } }];
}

// 3. 把多筆資料彙整成一個字串
let body = '📢 今日更新彙整：\n\n';

for (let i = 0; i < items.length; i++) {
  const item = items[i].json;

  body += `${i + 1}. ${item.title}\n`;
  body += `🔗 ${item.link}\n`;

  if (item.author) {
    body += `👤 ${item.author}\n`;
  }

  body += '\n'; // 每則之間加空行
}

body += '---\n由 n8n 自動整理發送';

// 4. 回傳彙整後的資料（單筆）
return [{ json: { body: body } }];
