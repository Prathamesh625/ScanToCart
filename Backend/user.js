const express = require("express");
const user = require("./schema");
const validator = require("validator");
const auth = require("./auth");
const errorHandler = require("./errorHandler");
const catchAsync = require("./catchAsync")
const { get } = require("./product");
const AppError = require("./AppError");
const ApiErrorClass = require("./AppError");
exports.post = async(req,res)=>{


    const {userName, password, mobile ,email,confirmPassword}= req.body;
    
    
    if(validator.default.isEmail(email)){
    try{
        const find = await user.findOne({email:email});
        if(find){
            res.json("Already exist");
        }
        else{
            const createUser = new user({
                userName,
                password,
                email,
                mobile,
                confirmPassword
               })

            const data = await createUser.save();
           res.json(data);
        }

    }catch(error){
     console.log(error);
    }
}
  else{
    res.json("enter valid email address");
  }
}



exports.hello = async(req,res,next)=>{
    next(errorHandler)
}



exports.login = async(req,res,next)=>{

    const {email,password}= req.body;
  
    try{
        const data = await user.findOne({email:email ,password:password});
        if(data){
           return res.json("sucessfully login");
           }
           throw new Error("user not found")
    }catch(error){
        console.log(error);
    }
}



const fun=async(req,res,next)=>{
    const user = undefined
    if(!user) return next(new ApiErrorClass(404,"user does not exists","not found"))
    res.json(user)
    next()
}

exports.getAll = catchAsync(fun)

exports.getAll = async(req,res,next)=>{
    
}



