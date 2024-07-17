
const mongoose = require("mongoose");

const cartschema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDetails:{
        type:String
    }

});

const product = mongoose.model("cart",cartschema);
module.exports = product;