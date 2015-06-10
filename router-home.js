
var express = require('express');
var router = express.Router();

//网站的主页。
router.use(function(req,res,next){
  res.viewstyle = 'home';   
  next(); 
});



//home
router.use('/register',function(req,res,next){ 
  res.loadview('register.html');
});

router.use('/',function(req,res,next){ 
  res.loadview('index.html');
});


module.exports=router;