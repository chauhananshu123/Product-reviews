require('dotenv').config()
var crypto =  require('crypto');
var cookie  = require('cookie');
var nonce = require('nonce')();
var querystring =  require('querystring');
var request = require('request-promise');
var shopModel = require('../../models/shop');
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET_KEY;
const scopes = process.env.APP_SCOPE;
const forwardingAddress = process.env.APP_URL; 
var installationEmail = require('./email/installationMail');

var jwt = require("jsonwebtoken");


exports.authUrl = (req, res) => {
const shop = req.query.shop;
if (shop) {

  const state = nonce();
  const redirectUri = forwardingAddress + '/shopify/callback';
  const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;
  
  res.cookie('state', state);
  res.redirect(installUrl);

  } else {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }
}

exports.authCallback =  (req, res) => {
const { shop, hmac, code, state } = req.query;
const stateCookie = cookie.parse(req.headers.cookie).state;

var shopExistTancefind = shopModel.find({shopName:shop})
    shopExistTancefind.exec()
    .then(result=>{


if(result.length == 1){ 
  var token = jwt.sign({
    shopName:result[0].shopName,
    user:result[0].shopName
    },
      process.env.API_SECRET_KEY,
      {
        expiresIn:"10h"
      }
    )
   res.redirect('/index/'+token);
   console.log("app opened");
 
} else {

if (shop && hmac && code) {
      // DONE: Validate request is from Shopify
  const map = Object.assign({}, req.query);
  delete map['signature'];
  delete map['hmac'];
  const message = querystring.stringify(map);
  const providedHmac = Buffer.from(hmac, 'utf-8');
  const generatedHash = Buffer.from(
        crypto
        .createHmac('sha256', apiSecret)
        .update(message)
        .digest('hex'),
        'utf-8'
        );
  let hashEquals = false;
  
  try {
      hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
    } catch (e) {
      hashEquals = false;
  };
  
if (!hashEquals) {
      return res.status(400).send('HMAC validation failed');
  } 

const accessTokenRequestUrl = `https://${shop}/admin/oauth/access_token`;
const accessTokenPayload = {
    client_id: apiKey,
    client_secret: apiSecret,
    code,
  };
// Access Token json Api
request.post(accessTokenRequestUrl, { json: accessTokenPayload })
       .then((accessTokenResponse) => {
const accessToken = accessTokenResponse.access_token;

const shopRequestHeaders = {
     'X-Shopify-Access-Token': accessToken,
     'Accept' : "application/json",
     'Content-Type' : "application/json"
       };
// Shop json Api
const shopJson = `https://${shop}/admin/api/${process.env.API_VERSION}/shop.json`;
request.get({
    url: shopJson,
    headers: shopRequestHeaders,
    json: true
  },function (error, response, body) { 
let shopDomainToRedi = body.shop.domain;

var dataToInsert = {
    shopName:shop,
    shopDomain:body.shop.domain,
    shopToken:accessToken,
    Date:new Date()
}
var shopDataInsert = new shopModel(dataToInsert) 
    shopDataInsert.save((err,result_s)=>{

   
var createScriptTagUrl = `https://${shop}/admin/api/${process.env.API_VERSION}/script_tags.json`;
var scriptTagBody = {
    "script_tag": {
    "event": "onload",
    "src": `${process.env.APP_URL}/server`
      }
    }
request.post({
  url: createScriptTagUrl,
  body: scriptTagBody,
  headers: shopRequestHeaders,
  json: true
  },function (error, response, body) { 
  
 // console.log(body);

var webhookUrl = `https://${shop}/admin/api/${process.env.API_VERSION}/webhooks.json`;
var webhookBody  = {
    "webhook": {
    "topic": "app/uninstalled",
    "address": `${process.env.APP_URL}/api/uninstall`,
    "format": "json"
      }
    }

request.post({
    url: webhookUrl,
    body: webhookBody,
    headers: shopRequestHeaders,
    json: true
    },function (error, response, body) {
      
      var token = jwt.sign({
        shopName:shop,
        user:accessToken
        },
          process.env.API_SECRET_KEY,
          {
            expiresIn:"10h"
          }
        )
      
                        
        res.redirect('/index/'+token);
        console.log("app New opn");

    
        });
      });
    });
    //8888
  });
})
.catch((error) => {
    res.status(error.statusCode).send(error.error.error_description);
});
  } else {
      res.status(400).send('Required parameters missing');
    }
  }
}) 
.catch(error=>{
    res.status(400).send("error-occur");
})

}