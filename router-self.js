
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
router.use('/zb/template',function(req,res,next){
  res.loadview('zb/template.html');
});

router.use('/zb/diff',function(req,res,next){
  res.loadview('zb/diff.html');
});

router.use('/zb',function(req,res,next){
  res.loadview('zb/index.html');
});


//个人资料
router.use('/profile/headimg',function(req,res,next){
  res.loadview('profile/headimg.html');
});

router.use('/profile/weixin',function(req,res,next){
  res.loadview('profile/weixin.html');
});

router.use('/profile',function(req,res,next){
  res.loadview('profile/index.html');
});




router.use('/',function(req,res,next){
  res.loadview('index.html');
});



module.exports=router;