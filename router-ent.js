
var express = require('express');
var router = express.Router();

//网站的主页。
router.use(function(req,res,next){
  res.viewstyle = 'cloud-ent';   
  next(); 
});

//工程管理
router.use('/project/detail/:guid',function(req,res,next){
  res.loadview('project/detail.html');
});

router.use('/project',function(req,res,next){
  res.loadview('project/project.html');
});

//企业成员
router.use('/member/add',function(req,res,next){
  res.loadview('member/add.html');
});

router.use('/member/edit',function(req,res,next){
  res.loadview('member/edit.html');
});


router.use('/member',function(req,res,next){
  res.loadview('member/index.html');
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


router.use('/createent',function(req,res,next){
  res.loadview('index/createent.html');
});

//设置
router.use('/setting',function(req,res,next){
  res.loadview('setting/index.html');
});


//  /ent/
router.use('/',function(req,res,next){
  res.loadview('index/index.html');
});



module.exports=router;