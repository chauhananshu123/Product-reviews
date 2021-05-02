var express = require('express');
var router = express.Router();
var { authUrl, authCallback}  = require('./Controler/Auth');

router.get('/shopify',authUrl);
router.get('/shopify/callback',authCallback);

router.get('/server',(req,res)=>{
    res.sendFile(__dirname+'/Controler/script/load.js');
})

router.get("/okk",(req,res)=>{
    res.status(200).json({
        data:[
            "oankr","aish","kuber"
        ]
    })
})

module.exports = router;

