//
// 处理兼容的ie8
//
//

String.prototype.trim = function ()  
{  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}  
String.prototype.ltrim = function ()  
{  
    return this.replace(/(^\s*)/g, "");  
}  
String.prototype.rtrim = function ()  
{  
    return this.replace(/(\s*$)/g, "");  
}  

