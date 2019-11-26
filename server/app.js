// app.js
var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors')
app.use(cors())
PrizeRoute=require('../routes/PrizeRoute')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-auth-token");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    next();
  });

app.use('/v1/api/prize', PrizeRoute);
app.get('/',async(req,res)=>{
    res.send({message:'Welcome Home'})
})



module.exports = app;
