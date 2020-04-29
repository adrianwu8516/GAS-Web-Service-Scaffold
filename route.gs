function doGet(e){
  Logger.log(JSON.stringify(e))
  if(e.pathInfo !== ''){  
    switch(e.pathInfo){
      case 'index': 
        return messageController(JSON.stringify(e))
      default:
        return messageController("404 Not Found!!")
    }
  }else{
    return messageController("TaiwanCareer(c) 2020. All Rights Reserved.")
  }
}