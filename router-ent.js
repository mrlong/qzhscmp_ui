
var express = require('express');
var router = express.Router();


//  /ent/
router.use('/',function(req,res,next){
  res.loadview('/cloud-ent/index.html');
});



module.exports=router;