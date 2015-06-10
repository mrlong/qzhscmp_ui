
var express = require('express');
var router = express.Router();

//网站的主页。
router.use(function(req,res,next){
  res.viewstyle = 'cloud-ent';   
  next(); 
});

//  /ent/
router.use('/',function(req,res,next){
  res.loadview('index.html');
});



module.exports=router;