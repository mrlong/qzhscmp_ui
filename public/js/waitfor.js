/*等待窗口*/


//var _html = "<div id='Waitingfor' class=\"container_full modal-backdrop fade in\">" +
//  "<div class=\"container\">" +
//  "<div class=\"alert alert-danger\" role=\"alert\" " + "style=\"position:absolute;top:40%;left:30%;width:40%;z-index:2040; \""  + ">{{DATA}}</div>" +
//  "</div>" +
// "</div>"
//position:absolute; background:#000; z-index:1px; zoom:1; 



var _html ="<div id='Waitingfor' class=\"container_full modal-backdrop fade in\" style=\" \">" +
  "<div class=\"modal-dialog11\" style=\"\">" +
  "<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"position:fixed;top:40%;left:30%;width:40%;height:20px;z-index:1050;overflow: hidden;background-clip: padding-box;  transform: translate(0,0);   transition: transform .3s ease-out;filter:alpha(opacity=50);\">" +
  "{{DATA}}" +
  "</div>" +
  "</div>" +
  "</div>";



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

