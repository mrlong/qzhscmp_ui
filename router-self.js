
var express = require('express');
var router = express.Router();



//网站的主页。
router.use(function(req,res,next){
  res.viewstyle = 'cloud-self';   
  next(); 
});



//工程库

router.use('/project/detail/:guid',function(req,res,next){
  res.loadview('project/detail.html');
});

router.use('/project',function(req,res,next){
  res.loadview('project/project.html');
});


//  /资料库/
router.use('/files',function(req,res,next){
  res.loadview('files.html');
});

//指标
router.use('/zb',function(req,res,next){
  res.loadview('zb/index.html');
});


router.use('/',function(req,res,next){
  res.loadview('index.html');
});



module.exports=router;