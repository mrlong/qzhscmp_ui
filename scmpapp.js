var fs = require('fs');
var ejs = require('ejs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');






var app = express();
module.exports = app;

app.response.loadview=function(filename,params,ismoble){
  var myismoble;
  var myparams = {};
  if(typeof params ==='boolean'){
      myismoble = params;
  }
  else{
    myparams = params;
    myismoble = ismoble || false; 
  };

  if (myismoble == false){
    this.render('./' + filename,myparams); 
  }
  else{
    this.render('./views_moblie/' + filename,myparams);   
  }
};


app.use(bodyParser());
app.use(express.static(__dirname + '/',{ maxAge: 86400000 }));
app.use(express.static(__dirname + '/'));

app.set('views', path.join(__dirname, './'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('view cache', false);

app.use(cookieParser());
app.use(session({
  name:'mrlongapp',
  secret: '7895123', 
  key: 'mrlongapp', 
  cookie: { secure: false,maxAge: 1000 * 60 * 60 * 24 * 1 }  //1天保存
}));


app.use('/',function(req,res,next){ 
  res.loadview('index.html');
});



app.listen(3002);
console.log('qzhscmp-ui stated on port 3002');