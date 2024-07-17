class ApiErrorClass  {
    constructor(statusCode, msg,name) {
     // super(msg)
      this.name = name 
      this.statusCode = statusCode;
      this.msg = msg;
    }
  
  }
  
  module.exports = ApiErrorClass;