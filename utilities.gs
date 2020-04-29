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

String.prototype.hash = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    // numerical hash
    return hash;
}