<?php

$url = explode("/",$_SERVER['REQUEST_URI']);
$url = $url[count($url) - 1];
var_dump($_SERVER, $url);

switch($url){
    case "accueil.php":
        require_once 'accueil.php';
        break;
    case "contact.php":
        require_once "contact.php";
        break;
}

?>