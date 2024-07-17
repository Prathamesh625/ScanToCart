

module.exports = (err,req,res,next)=>{

    res.json({name:err.name,
      status:err.statuscode,
      msg:err.msg
    })

}


