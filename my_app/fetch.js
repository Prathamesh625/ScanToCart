

import axios from "axios";
const url = "http://localhost:8000/v1/login"

export const AuthEmail=async(email,password)=>{
    const emailAddress = await axios.post(url,{
        email:'aj655128@gmail.com',
        password:"prath898"
    })
   console.log(emailAddress)

}




/*

export const AuthEmail=async(email)=>{
    const emailAddress = await axios.post(url,{
        email:email,
    })
   console.log(emailAddress.data)

}


const email = AuthEmail("aj655128@gmail.com");
console.log(email)


export const AuthPassword=async(password)=>{
const pwd = await axios.post(url,{
    password:password,
 })

 if(pwd.data.password===password){
    return "successful";
 }

}


*/