
var express = require('express');
var router = express.Router();



//网站的主页。
router.use(function(req,res,next){
  res.isadmin = true;   //注明是管理版本
  next(); 
});


//  /ent/
router.use('/',function(req,res,next){
  res.loadview('/cloud-ent/index.html');
});



module.exports=router;