// Serves the QShots Growth dashboard as a Google Apps Script web app.
// The page itself reads the Qshots Tracker sheet live, so nothing here needs changing when data is added.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('QShots Growth')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
