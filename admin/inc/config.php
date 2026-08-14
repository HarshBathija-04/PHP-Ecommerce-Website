<?php
// Error Reporting Turn On
ini_set('error_reporting', E_ALL);

// Setting up the time zone
date_default_timezone_set('America/Los_Angeles');

// Host Name
$dbhost = 'sql207.infinityfree.com';

// Database Name
$dbname = 'if0_42651040_HBStore';

// Database Username
$dbuser = 'if0_42651040';

// Database Password
$dbpass = 'Ansuharsh2004';

// Defining base url
define("BASE_URL", "https://hbstore.infinityfreeapp.com/");

// Getting Admin url
define("ADMIN_URL", BASE_URL . "admin" . "/");

try {
	$pdo = new PDO("mysql:host={$dbhost};dbname={$dbname}", $dbuser, $dbpass);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch( PDOException $exception ) {
	echo "Connection error :" . $exception->getMessage();
}