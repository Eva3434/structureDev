<?php 
    if(!isset($content)){
        $content = "404 ERROR";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- nav>ul>(a>li{entry $})*5 -->
    <nav>
        <ul>
        <a href="accueil.php">
                <li>accueil</li>
            </a>
            <a href="contact.php">
                <li>contact</li>
            </a>
            <a href="">
                <li>entry 3</li>
            </a>
            <a href="">
                <li>entry 4</li>
            </a>
            <a href="">
                <li>entry 5</li>
            </a>
        </ul>
    </nav> 
    <main>
    <?= $content ?>
    </main>
    <!-- footer>ul>(a>li{entry $})*5 -->
    <footer>
        <ul>
            <a href="accueil.php">
                <li>accueil</li>
            </a>
            <a href="contact.php">
                <li>contact</li>
            </a>
            <a href="">
                <li>entry 3</li>
            </a>
            <a href="">
                <li>entry 4</li>
            </a>
            <a href="">
                <li>entry 5</li>
            </a>
        </ul>
    </footer>

    <script src="script.js" type="module"></script>
</body>
</html>