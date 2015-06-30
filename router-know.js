var express = require('express');
var router = express.Router();



//网站的主页。
router.use(function(req,res,next){
  res.viewstyle = 'know';   
  next(); 
});



//知识库

//法律法则
router.use('/law/centent/:guid',function(req,res,next){
  res.loadview('law/centent.html');
});

router.use('/law',function(req,res,next){
  res.loadview('law/index.html');
});



router.use('/',function(req,res,next){
  res.loadview('index.html');
});




module.exports=router;