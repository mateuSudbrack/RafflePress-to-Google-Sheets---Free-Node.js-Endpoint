function doPost(e) {
  // Recupera os dados da requisição POST
  var body = JSON.parse(e.postData.contents);

  // Extrai os valores do corpo
  var fullname = body.fullname;
  var first_name = body.first_name;
  var last_name = body.last_name;
  var email = body.email;
  var giveaway_id = body.giveaway_id;
  var giveaway_name = body.giveaway_name;
  var sign_up_date = body.sign_up_date;

  // ID da planilha e nome da aba
  var spreadsheetId = '1h_HAphdjO-G-HNpWnoSFUnKnZF7OwSD3LLWEr00GxBE';
  var sheetName = 'page2';
  
  // Acessa a planilha
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  
  // Adiciona os dados na próxima linha disponível
  sheet.appendRow([fullname, first_name, last_name, email, giveaway_id, giveaway_name, sign_up_date]);
  
  // Responde com um status de sucesso
  return ContentService.createTextOutput("Dados inseridos com sucesso").setMimeType(ContentService.MimeType.TEXT);
}
