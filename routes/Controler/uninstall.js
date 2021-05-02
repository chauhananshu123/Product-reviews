var shopWebModel = require('../../models/uninstall');
var shopModel = require('../../models/shop');

exports.unistallData =  (req, res) => {
var domain = req.body.domain;

var deleteDataShop = shopModel.findOneAndRemove({shopDomain:domain})
    deleteDataShop.exec()
    .then(result=>{

var findDomain = shopWebModel.findOne({domain:domain});
    findDomain.exec((err,getData)=>{
    if(getData){
var uninstallData = {
    name: req.body.name,
    email: req.body.email, 
    domain: req.body.domain,
    shop_owner: req.body.shop_owner,
    country: req.body.country,
    address1: req.body.address1,
    zip: req.body.zip,
    city: req.body.city,
    phone: req.body.phone,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    }
var uninstallUpdate = shopWebModel.findOneAndUpdate({domain:domain},uninstallData);
    uninstallUpdate.exec((err,updatedData)=>{
        res.status(200).json({
            message:"flag1"
        })
    });
} else {
    var uninstallData = {
        name: req.body.name,
        email: req.body.email, 
        domain: req.body.domain,
        shop_owner: req.body.shop_owner,
        country: req.body.country,
        address1: req.body.address1,
        zip: req.body.zip,
        city: req.body.city,
        phone: req.body.phone,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        }
var uninstallInsert = new shopWebModel(uninstallData);
    uninstallInsert.save((err,updatedData)=>{
        res.status(200).json({
            message:"flag1"
        })
      });
    }
  });

 


    })/////
    .catch(err=>{
        res.status(200).json({
            message:"flag1"
        })
    })

}

