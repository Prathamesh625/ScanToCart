const { default: mongoose } = require("mongoose");
const product = require("./productSchema");
const user = require("./schema")

exports.addProduct = async(req,res) =>{
    
    const {productName , productPrice , barCode , productDetails} = req.body;
    try{

        const newProduct = new product({
            productName,
            productPrice,
            barCode,
            productDetails
        });

        const saveProduct = await newProduct.save();
        res.json(saveProduct);
    }catch(err){
        console.log(err);
    }
}

exports.getProduct = async(req,res) => {

    const {barCode} = req.body;
    try{
        const scanProduct = await product.findOne({barCode:barCode});
        res.json(scanProduct);
    }catch(err){
        console.log(err);
    }
}

exports.get = async(req,res) => {

 res.json({success:true})
}


exports.sendTocart = async(req,res) => {



    try {
        const send = await user.updateOne({
          email:"thoratprathamesh23@gmail.com"  
        },{$push:{
            cart:{
                id:new mongoose.Types.ObjectId,
                productName:"rice" ,
                productPrice:60,
                barCode:12344 ,
                productDetails:"nice rice" 
            }
        }

        })

        res.json(send)

    } catch (error) {
        res.json(error)
    }

}