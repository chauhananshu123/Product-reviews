require("dotenv").config();
var express = require('express');
var router = express.Router();
var jwt = require("jsonwebtoken");

router.get("/test",(req,res)=>{
   res.status(200).json({
      test:[
         "name",
         "email",
         "mobile"
      ]
   })
})

router.get("/redi",(req,res) => {
   res.redirect('/');
})


router.get("/token",(req,res)=>{
   let token = jwt.sign({
      shopName:"blue-heavenn.myshopify.com",
      user:"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"
    },
      process.env.API_SECRET_KEY,
      {
        expiresIn:"10h"
      }
    )
    res.status(200).json({
      message:"Auth Set !",
      token:token
    })
})

router.post("/token/verify",(req,res) => {
   try {
      let token = req.headers.authorization.split(" ")[1];
      console.log(token);
      let decoded = jwt.verify(token, process.env.API_SECRET_KEY );
       return  res.status(200).json({
                  status:200,
                  message:"flag1",
                  token:decoded
               })
   } catch (error) {
      return   res.status(200).json({
                  status:200,
                  message:"flag0"
               })
   }
});


module.exports = router;
