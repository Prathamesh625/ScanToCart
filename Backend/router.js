const express = require("express");


const { addProduct, getProduct, sendTocart } = require("./product");
const { post, login, hello, getAll } = require("./user");
const router = express.Router();

router.post("/createUser", post);
router.post("/createUser", getAll,(req,res)=>[
    res.json("user does exist")
]);
router.post("/login",login);
router.post("/new/product",addProduct);
router.put("/scan/product",sendTocart);
router.get("/get/user",getAll);


module.exports=router;
