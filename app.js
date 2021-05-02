var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./config/db");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/path');
var webhookRouter = require('./routes/webhook');

var app = express();

 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use(usersRouter);
app.use(webhookRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*",(req,res)=> {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

module.exports = app;
