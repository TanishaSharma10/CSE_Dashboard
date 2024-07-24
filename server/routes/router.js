const express = require("express");
const router = new express.Router();
const Products=require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrpty = require("bcryptjs");

// get product data api
router.get("/getproducts", async(req,res)=>{
    try{
        const productsdata = await Products.find();
        //console.log("console the data" + productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
} )


//get individual data
router.post("/register", async (req, res) => {
     //console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill all details" });
        console.log("No data available");

    };

    try{
        const preuser= await USER.findOne({email : email});
        if(preuser){
            res.status(422).json({error:"this user isalready present"});
        }else if(password !== cpassword){
            res.status(422).json({error:"Password not matching"});
        }else{
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });
            const storedata= await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    }catch(error){
    
    }
})


module.exports = router;