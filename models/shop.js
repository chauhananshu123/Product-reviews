const mongoose =  require('mongoose');
const shopSchema = mongoose.Schema({
       shopName:{
              type:String,
              required:true
       },
       shopDomain:{
              type:String,
              required:true
       },
       shopToken:{
              type:String,
              required:true
       },
       Date:{
              type:String,
              required:true
       },
});
const shopModel = mongoose.model('ShopDetail',shopSchema);

module.exports = shopModel;



