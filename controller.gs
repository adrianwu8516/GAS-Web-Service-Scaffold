function messageController(parameter){
  Logger.log(parameter)
  var message = parameter.message
  Logger.log(message)
  return render('viewMessage', {'message':message})
}

function indexController(){
  return render('viewIndex')
}