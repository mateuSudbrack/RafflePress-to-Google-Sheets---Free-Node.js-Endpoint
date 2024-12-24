
# RafflePress to Google Sheets - Free Node.js Integration for Giveaway Automation

Seamlessly connect RafflePress to Google Sheets using this free Node.js integration. This script allows you to automatically log giveaway entries from RafflePress directly into a Google Sheet, making it easier to track participants and manage your contests.

## Features
- Directly send RafflePress giveaway data to Google Sheets.
- Automatically maps and logs user details like name, email, and sign-up date.
- No need for external APIs or web apps – fully integrated with Google Sheets.
- Simple setup and easy to customize for your specific giveaway needs.

Perfect for anyone running RafflePress giveaways who wants a streamlined way to organize participant data without manual effort. 🚀

---

## Prerequisites
- A **Google Account** with access to Google Sheets.
- A RafflePress giveaway set up to send data.

---

## How to Deploy

### Step 1: Open Google Apps Script
1. Go to [Google Apps Script](https://script.google.com/).
2. Create a new project.

### Step 2: Paste the Script Code
Replace the default content in the editor with the following script (same as `rafflepressEndpoint.GS`):

```javascript
function doPost(e) {
  // Parse the POST data
  var body = JSON.parse(e.postData.contents);

  // Extract the fields
  var fullname = body.fullname;
  var first_name = body.first_name;
  var last_name = body.last_name;
  var email = body.email;
  var giveaway_id = body.giveaway_id;
  var giveaway_name = body.giveaway_name;
  var sign_up_date = body.sign_up_date;

  // Google Sheet ID and sheet/tab name
  var spreadsheetId = 'YOUR_GOOGLE_SHEET_ID';
  var sheetName = 'YOUR_SHEET_NAME';

  // Open the spreadsheet and sheet
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  // Append the data to the sheet
  sheet.appendRow([fullname, first_name, last_name, email, giveaway_id, giveaway_name, sign_up_date]);

  // Return a success message
  return ContentService.createTextOutput("Data successfully added").setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Replace Sheet Details
1. Replace `YOUR_GOOGLE_SHEET_ID` with the ID of your Google Sheet.
2. Replace `YOUR_SHEET_NAME` with the name of the tab (e.g., `page2`).

### Step 4: Deploy as a Web App
1. Click on `Deploy` > `New deployment`.
2. Select **Web app** as the deployment type.
3. Configure:
   - **Project version**: New version.
   - **Execute as**: `Me`.
   - **Who has access**: Select `Anyone` if RafflePress needs to send data without requiring authentication.
4. Deploy and copy the generated URL.

If everything is set up correctly, the data will be added to your Google Sheet.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
``` 
