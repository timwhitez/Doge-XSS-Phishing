<?php

$db = "botIPs.txt";
$addr = $_SERVER["REMOTE_ADDR"];

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");


if(isset($_GET['getaddr'])){
	header('Content-type: text/json; charset=utf-8');
	if (isset($_COOKIE['bobo'])){
		echo 'var returnCitySN = {"cip": "'.$addr.'", "bobo":"111111"};';
		}
		else{
			echo 'var returnCitySN = {"cip": "'.$addr.'", "bobo": "000000"};';
		}
}
if(isset($_GET['bobo'])){
	setcookie("bobo","bobo", time()+3600*240);	
}


if(isset($_GET['ip'])){
	$botIP = @$_GET['ip'];
	$line = file_get_contents($db);
	$botIPs = explode("\n", $line);
	if (@in_array(base64_encode($botIP), $botIPs)) {
		echo "ip exist";
	}else {
		$bots = fopen($db, "a") or die("Unable to open bots file!");
		fwrite($bots, base64_encode($botIP) . "\n");
		fclose($bots);
	}
}


if(isset($_GET['search'])){

	$ip = @$_GET['search'];

	if (file_exists($db)) {
		$line = file_get_contents($db);
		$botIPs = explode("\n", $line);
		if (@in_array(base64_encode($ip), $botIPs)) {
			echo "in";
		}else {
			echo "bobo";
		}
	}
}
?>
