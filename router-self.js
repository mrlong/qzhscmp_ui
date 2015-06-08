
var express = require('express');
var router = express.Router();



//网站的主页。
router.use(function(req,res,next){
  res.isadmin = true;   //注明是管理版本
  next(); 
});



//工程库

router.use('/project',function(req,res,next){
  res.loadview('/cloud-self/project.html');
});


//  /资料库/
router.use('/files',function(req,res,next){
  res.loadview('/cloud-self/files.html');
});


router.use('/',function(req,res,next){
  res.loadview('/cloud-self/index.html');
});



module.exports=router;