function render(file, argsObject){
  var html_page = HtmlService.createTemplateFromFile(file)
  if(argsObject){
    var keys = Object.keys(argsObject);
    keys.forEach(function(key){
      html_page[key] = argsObject[key]
    })
  }
  return html_page
        .evaluate()
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
