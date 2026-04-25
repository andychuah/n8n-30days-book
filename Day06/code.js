// Day 06 — RSS 彙整程式碼
// 功能：把多個 RSS 項目合併成一封 Email 的內容
// 使用方式：
//   1. 在 n8n 新增 Code 節點
//   2. 點開 Code 節點
//   3. 在程式碼區域，貼上以下內容：

// 1. Get all input items
const items = $input.all();
// 2. If no data, return early
if (items.length === 0) {
    return [{ json: { body: '今天沒有新的更新。' } }];
}
// 3. Aggregate items into a single string
let body = '📋 今日更新彙整：\n\n';
for (let i = 0; i < items.length; i++) {
    const item = items[i].json;

    // Using backticks (`) for clean multiline template literals
    body += `${i + 1}. ${item.title}\n`;
    body += `🔗 ${item.link}\n`;

    if (item.author) {
        body += `👤 ${item.author}\n`;
    }

    body += '\n'; // Add space between items
}
body += '---\n由 n8n 自動整理發送';
// 4. Return the aggregated data as a single item
return [{ json: { body: body } }];
