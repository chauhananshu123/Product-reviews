const  mongoose =  require('mongoose');
const uninstallSchema = mongoose.Schema({
      name: String,
      email: String,
      domain: String,
      shop_owner:String,
      country:String,
      address1:String,
      zip:String,
      city:String,
      phone:String,
      latitude:String,
      longitude:String,
  });
  const shopWebModel = mongoose.model('uninstalledStores',uninstallSchema);
  
  
  module.exports = shopWebModel;