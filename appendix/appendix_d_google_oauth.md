# 附錄 D：Google 整合設定完全指南
## （Zeabur 自架 n8n 適用）

如果你使用的是 **n8n Cloud 官方雲端版本**，Google 的整合設定非常簡單，只需在節點中點「Connect」，完成 Google 帳號授權即可。

但如果你跟著本書在 **Zeabur 上架設了自己的 n8n（自架版）**，設定 Google 整合時需要多幾個步驟，因為你需要在 Google Cloud Console 建立自己的 OAuth 應用程式，才能讓 n8n 取得授權。

這個步驟很多初學者卡住，所以特別寫在這裡，一次搞定。

---

## 適用範圍

- **Day 10**：Google Sheets 整合
- **Day 22**：Gmail Trigger（收信觸發器）
- 其他需要 Google OAuth2 的 n8n 節點

---

## 第一步：建立 Google Cloud 專案

1. 前往 https://console.cloud.google.com/
2. 登入你的 Google 帳號（建議使用你平常用來存取 Sheets 和 Gmail 的帳號）
3. 在頂端的專案選擇器，點擊「選取專案」→「新增專案」
4. 填入專案名稱（例如：`n8n-integration`），點擊「建立」
5. 等待幾秒，新專案建立完成後，確認頂端已切換到你剛建立的專案

---

## 第二步：啟用你需要的 API

1. 在左側選單，找到「API 和服務」→「程式庫」
2. 搜尋「**Google Sheets API**」，點進去，按「啟用」按鈕
3. 回到程式庫，搜尋「**Google Drive API**」，同樣按「啟用」（Sheets 操作需要 Drive 權限）
4. 如果你要設定 Gmail Trigger（Day 22），同樣搜尋並啟用「**Gmail API**」

---

## 第三步：設定 OAuth 同意畫面

1. 在「API 和服務」中，點擊「OAuth 同意畫面」
2. User Type 選擇「**外部**」（External），點擊「建立」
3. 填入應用程式名稱（例如：`My n8n`），支援電子郵件填你自己的 Google 帳號
4. 其他欄位可以先跳過，直接按「儲存並繼續」三次，到達「摘要」頁面，按「返回資訊主頁」
5. 在同意畫面設定頁面，找到「**測試使用者**」區塊，點擊「新增使用者」，加入你自己的 Google 帳號

> ⚠️ **重要**：一定要把自己加入「測試使用者」，否則後續授權會被 Google 拒絕。

---

## 第四步：建立 OAuth 憑證

1. 在「API 和服務」中，點擊「憑證」
2. 點擊上方「建立憑證」→「**OAuth 用戶端 ID**」
3. 應用程式類型選擇「**網路應用程式**」
4. 名稱填入：`n8n-credential`（或任何你喜歡的名稱）
5. 在「**已授權的重新導向 URI**」欄位，填入你的 n8n 回呼網址，格式為：
   ```
   https://你的n8n網域/rest/oauth2-credential/callback
   ```
   例如：如果你的 n8n 網址是 `https://n8n.example.zeabur.app`，就填入：
   ```
   https://n8n.example.zeabur.app/rest/oauth2-credential/callback
   ```
6. 點擊「建立」，你會看到「**用戶端 ID**」和「**用戶端密鑰**」，把這兩個值複製下來！
   > ⚠️ **這個視窗關閉後就看不到密鑰了，要重新產生。請立即複製儲存好。**

---

## 第五步：在 n8n 建立 Google Credential

1. 回到你的 n8n 介面，進入「Credentials」頁面（左側選單）
2. 點擊「Add Credential」，搜尋並選擇「**Google Sheets OAuth2 API**」（或「Google OAuth2 API」）
3. 將你剛才複製的「用戶端 ID」貼入「**Client ID**」欄位
4. 將「用戶端密鑰」貼入「**Client Secret**」欄位
5. 點擊「**Connect**」，瀏覽器會跳出 Google 授權視窗，選擇你要連結的 Google 帳號，允許所有權限
6. 授權完成後，回到 n8n，你會看到 Credential 狀態變成「**Connected**」，大功告成！

---

## 常見問題

### 問：授權時出現「此應用程式未通過 Google 驗證」的警告

**答：** 這是因為你的 Google Cloud 應用程式還在「測試模式」。

- 點擊「**進階**」→「**前往 \[你的應用程式名稱\]（不安全）**」，就可以繼續。
- 這是正常的，因為你是在為自己用，不需要讓 Google 審查你的應用。

---

### 問：回呼網址該填什麼？我的 n8n 網址怎麼確認？

**答：**

- 登入你的 n8n
- 在瀏覽器網址列看到的 `https://xxxx.zeabur.app` 就是你的 n8n 網域
- 回呼網址就是在這個網域後面加上 `/rest/oauth2-credential/callback`

---

### 問：設定完之後，Google Sheets 節點還是顯示授權失敗

**答：**

- 回到 Google Cloud Console，確認你在「測試使用者」中已加入自己的 Google 帳號
- 沒有加入測試使用者，授權會被 Google 拒絕
- 確認「Google Sheets API」和「Google Drive API」都已啟用

---

> 📖 如有其他問題，歡迎在 LinkedIn 上找作者 Andy Chuah，分享你遇到的情況。
