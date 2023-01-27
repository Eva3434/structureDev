<?php
include('connect.php');
include('index.html');

if (!empty($_POST["formIncription"])){
    $// On recherche si l'adresse email existe déjà en BDD
    $select = $db->prepare("SELECT login_utilisateur FROM utilisateur WHERE login_utilisateur=:mot_de_passe_inscription;");
    $select->bindParam(":mot_de_passe_inscription", $_POST["mot_de_passe_inscription"]);
    $select->execute();
}


?>