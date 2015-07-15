
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

router.all('/zb/create/2/:id',function(req,res,next){
  res.loadview('zb/create-2.html');
});

router.use('/zb/create/3/:id',function(req,res,next){
  res.loadview('zb/create-3.html');
});

router.use('/zb/create',function(req,res,next){
  res.loadview('zb/create-1.html');
});

router.use('/zb/manydiff/:guid',function(req,res,next){
  res.loadview('zb/manydiff.html');
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

//我的信息

router.use('/message',function(req,res,next){
  res.loadview('message/index.html');
});


//材料管理


router.use('/basic/add',function(req,res,next){
  res.loadview('basic/add.html');
});

router.use('/basic/edit',function(req,res,next){
  res.loadview('basic/edit.html');
});
router.use('/basic',function(req,res,next){
  res.loadview('basic/index.html');
});





router.use('/',function(req,res,next){
  res.loadview('index.html');
});



module.exports=router;