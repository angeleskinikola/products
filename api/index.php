<?php

declare(strict_types = 1);

spl_autoload_register(function($class) {
	require __DIR__ . "/src/$class.php";
});

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

header("Content-type: application/json; charset=UTF-8");

$parts = explode("/", $_SERVER["REQUEST_URI"]);

if ($parts[2] != "products") {
	http_response_code(404);
	exit;
}

// $database = new Database("localhost", "product_db", "root", "");
$database = new Database("localhost", 
						"id19970019_product_db", 
						"id19970019_root", 
						"0jvgS[IMG2m\$Uph6");


$gateway = new ProductGateway($database);

$controller = new ProductController($gateway);

$controller->processRequest($_SERVER["REQUEST_METHOD"]);
