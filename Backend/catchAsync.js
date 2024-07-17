module.exports =fn=>{

   return async(req,res,next)=>{
        try {
            fn(req,res,next) 
         } catch (error) {
             console.log(error)
         }
    }



}


