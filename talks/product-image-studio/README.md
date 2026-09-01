# n8n 產品情境照 Workflow

輸入一張真實產品照，以及一至兩張風格參考圖。Workflow 會先讓 Gemini 理解產品與參考圖，再整理成攝影指示，交給圖片模型產生情境照，最後送回內建操作頁面。

## 下載

- [下載完整 Workflow JSON](./product_image_studio_workflow.json)

## 流程使用的模型

- `gemini-3.7-flash`：理解產品照與風格參考，撰寫攝影指示
- `gemini-3.1-flash-image`：產生最後的產品情境照

模型是否可用，仍以你的 Google Gemini API 帳號與區域為準。

## 匯入與啟動

1. 下載 `product_image_studio_workflow.json`。
2. 在 n8n 選擇 **Import from File**。
3. 在以下兩個 HTTP Request 節點綁定自己的 **Google Gemini (PaLM) API credential**：
   - `Gemini 3.7 Flash - Write Prompt`
   - `Gemini 3.1 Flash Image - Generate`
4. 儲存並 Publish Workflow。
5. 打開 `Open Product Studio` 節點的正式 Webhook 網址。
6. 上傳產品照與風格參考圖，開始測試。

## 安全與使用提醒

- 分享檔案不包含 API Key、密碼、OAuth token 或 Credential。
- 圖片模型可能改變產品比例、Logo、文字或包裝細節。
- 正式使用前，請人工確認生成結果。
- 建議先用於風格測試、提案示意、社群素材與正式拍攝前的場景規劃。

## 社群

遇到匯入或設定問題，歡迎加入 [n8n自動化新手村](https://www.facebook.com/groups/1650494196062369/) 討論。
