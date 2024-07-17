const express = require("express");
const mongoose = require("mongoose");
const  cors = require("cors")
const router = require("./router");

//PiLzlgvijwfAVlQn
const app = express();
const errorHandler = require("./errorHandler")
app.use(express.json());
app.use(cors({
    origin:"*"
}))
const port = 8000;
const url = "mongodb+srv://prathameshthorat1:PiLzlgvijwfAVlQn@simple.wwmtalu.mongodb.net/simpleapp?retryWrites=true&w=majority"

//const url = "mongodb+srv://AddToCart:hmL0pPkrrjs9MQo4@cluster0.e8mzuh8.mongodb.net/ATCDatabase?retryWrites=true&w=majority"
mongoose.connect(url);
const db = mongoose.connection;
db.on("error",(error)=>{
    console.log(error);
});

db.once("open",()=>{
    console.log("sucessfully connected");
});



app.use("/v1",router);
app.use(errorHandler)


app.listen(port , ()=>{
    console.log(`i am listing from port http://localhost:${port}`);
})