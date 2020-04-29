var Route = {};
Route.path = function(route, callback){
  Route[route] = callback;
}

function doGet(e){
  Logger.log(JSON.stringify(e))
  
  Route.path('index', indexController)
  Route.path('message', messageController)
  
  if(Route[e.pathInfo]){
    return Route[e.pathInfo](e.parameter)
  }else{
    return messageController("Error!")
  }
}