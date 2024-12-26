function doPost(e) {

  var body = JSON.parse(e.postData.contents);

  var fullname = body.fullname;
  var first_name = body.first_name;
  var last_name = body.last_name;
  var email = body.email;
  var giveaway_id = body.giveaway_id;
  var giveaway_name = body.giveaway_name;
  var sign_up_date = body.sign_up_date;

// sheet ID & Name
  var spreadsheetId = '';
  var sheetName = '';
  
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  

  sheet.appendRow([fullname, first_name, last_name, email, giveaway_id, giveaway_name, sign_up_date]);
  
  // Response
  return ContentService.createTextOutput("Dados inseridos com sucesso").setMimeType(ContentService.MimeType.TEXT);
}
