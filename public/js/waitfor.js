/*等待窗口*/


var _html = "<div id='Waitingfor' class=\"container_full modal-backdrop fade in\">" +
  "<div class=\"container\">" +
  "<div class=\"alert alert-danger\" role=\"alert\" " + "style=\"position:absolute;top:40%;left:40% \""  + ">{{DATA}}</div>" +
  "</div>" +
 "</div>"

 function startwaitfor(parent,msg){          
    var themsg = msg?msg:'正加载中，请稍候...';
    var thehtml = _html.replace(/{{DATA}}/ig,themsg); 
    parent.append(thehtml);
 };
   
 function endwaitfor(){  
    var waitingfor = document.getElementById('Waitingfor');  
    if(waitingfor!=null){  
        waitingfor.parentNode.removeChild(waitingfor);  
    };    
 };

