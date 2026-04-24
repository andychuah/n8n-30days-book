// Day 22 — Gmail AI 自動回信：清理 AI 輸出，提取可寄出的主旨與內文
// 用途：AI 輸出包含分析標記（[需要回覆]、[回覆草稿] 等），這段程式把它們過濾掉
// 前置：前一個節點為 AI Agent
//   - 使用 Google Gemini：const rawText = $input.first().json.content.parts[0].text;
//   - 使用 OpenAI GPT：const rawText = $input.first().json.output;
// 輸出欄位：cleanSubject（字串）, cleanBody（字串）

// ⬇️ 根據你使用的 AI 模型，選擇其中一行（另一行加 // 注解掉）
const rawText = $input.first().json.content.parts[0].text;  // Google Gemini
// const rawText = $input.first().json.output;              // OpenAI GPT

// 1. 提取主旨：抓取「主旨：」後面的內容
const subjectMatch = rawText.match(/主旨：\s*(.*)/);
const cleanSubject = subjectMatch ? subjectMatch[1].trim() : '（AI 自動生成回覆）';

// 2. 提取內文：抓取草稿區塊，並把裡面的「主旨：...」這行刪除
let cleanBody = '無法提取回覆內容';

const draftSplit = rawText.split(/\[回覆草稿\]：/);

if (draftSplit.length > 1) {
  // 將「主旨：」開頭的一整行（包含後面的換行符號）替換成空白，只留下真正的正文
  cleanBody = draftSplit[1].replace(/主旨：.*\n*/, '').trim();
}

return {
  cleanSubject,
  cleanBody
};
