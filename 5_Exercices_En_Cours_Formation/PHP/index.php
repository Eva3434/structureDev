<?php
    echo "Hello world";   
?>
<br>
<?php
    echo $valeur = "ma valeur";
    echo gettype($valeur);
?>
<br>
<?php
    echo $valeur = 1;
    echo gettype($valeur);
?>
<br>
<?php 
    $valeur = 5;
    echo $valeur;
    echo gettype($valeur);
    $varNom = "Eva";
    echo $varNom; 
    $varBool = false; 
    echo gettype($varBool);
?>
<br>
<?php
    $a = 12;
    $b = 10; 
    $total = $a + $b;
    echo $total;
?>
<br>
<?php
    $a= 5;
    $b= 3;
    $c= $a + $b;
    echo $a;
    echo $b; 
    echo $c;
    $a = 2;
    echo $a;
    $c = $b - $a;
    echo $a;
    echo $b;
    echo $c;
?>
<br>
<?php 
    $a = 15;
    $b = 23;
    echo $a;
    echo $b;
    $c = $a;
    $a = $b;
    $b = $c;
    echo $a;
    echo $b;
?>
<br>
<?php
    // var_dump($argv);      
    // $prixHT = ($argv[1]);
    // $qte = ($argv[2]);
    // $tva = ($argv[3]);
    // $total = ($prixHT + ($prixHT*$tva/100)) * $qte;
    // echo $total;
?>
<br>
<?php
    $a = 'bonjour';
    echo "\$a" . $a;
?>
<br>
<?php
    $a = 'Bon';
    $b = 'jour';
    $c = 10;
    echo $a .$b .$c+1;
?>
<br>
<?php
    $a = "Bonjour";
    echo "<p>" .$a ." l'adrar</p>"; 
?>
<br>
<?php   
    function soustraire($a,$b){        
        return $a - $b;
    }
    echo soustraire(20,10);
?>
<br>
<?php
    function arrondir($a){
        return round($a);
    }
    echo arrondir(2,5);
?>
<br>
<?php
    function somme($a,$b,$c){
        return $a+$b+$c;
    }
    echo somme(4,2,1);
?>
<br>
<?php
    function moyenne($a,$b,$c){
        return ($a+$b+$c)/3;
    }
    echo moyenne(10,30,20);
?>
<br>
<?php
    function valeur($a){
        if($a >= 0){
            return "positif";            
        }
        else {
            return "negatif";
        };
    }
    echo valeur(-1);
    echo valeur(6);
?>
<br>
<?php
    function compare($a,$b,$c){
        if($a>$b){
            return $a;
        }else if($a>$c){
            return $a;
        }else if($b>$c){
            return $b;
        }else if($c>$a){
            return $c;
        }else if($c>$b){
            return $c;
        } else if($b>$a){
            return $b;
        }
    };
    echo compare(10,30,40);
    echo compare(10,80,6);
    echo compare(60,2,1);
?>
<br>
<?php
    function comparer($a,$b,$c){
        if($a<$b){
            return $a;
        }else if($a<$c){
            return $a;
        }else if($b<$c){
            return $b;
        }else if($c<$a){
            return $c;
        }else if($c<$b){
            return $c;
        } else if($b<$a){
            return $b;
        }
    };
    echo comparer(10,30,40);
    echo comparer(10,80,6);
    echo comparer(60,2,1);
?>
<br>
<?php
    function maximum($a,$b,$c){
        return max($a,$b,$c);
    };
    echo maximum(10,30,40);
    echo maximum(10,80,6);
    echo maximum(60,2,1);
?>
<br>
<?php
    function minimum($a,$b,$c){
        return min($a,$b,$c);
    };
    echo minimum(10,30,40);
    echo minimum(10,80,6);
    echo minimum(60,2,1);
?>
<br>
<?php  
    function maxVal($a){ 
        $resultat = $a[0];       
        foreach ($a as $value) {
            if($resultat < $value){
                $resultat = $value;        
            }
        }
        return $resultat;
    }
    $table = array(10,9,20,13);
    echo maxVal($table);    
?>
<br>
<?php 
    function moyenneTab($a){
        
        foreach ($a as $value) {
            return array_sum($a)/count($a);
        }
    }
    $table = array(10,30,50,20);
    echo moyenneTab($table);
?>
<br>
<?php  
    function minVal($a){ 
        $resultat = $a[0] ;      
        foreach ($a as $value) {
            if($resultat > $value){
                $resultat = $value;        
            }
        }
        return $resultat;
    }
    $table = array(10,9,20,13);
    echo minVal($table);    
?>
<br>
<form method="post">
    <input type="number" name="valeur1">
    <br>
    <input type="number" name="valeur2">
    <br>
    <input type="submit" value="Envoyer">
</form>
<?php    
    if(isset($_POST['valeur1']) && isset($_POST['valeur2'])){
        $valeur1 = $_POST['valeur1'];
        $valeur2 = $_POST['valeur2'];
        $result = $valeur1 + $valeur2; 
        echo "le resultat est : $result";        
    } ;    
?>
<br>
<form method="get">
    <label> Prix HT : </label>
    <input type="number" name="prixHt">
    <br>
    <label> Quantité : </label>
    <input type="number" name="nbArt">
    <br>
    <label> Taux TVA : </label>
    <input type="number" name="tva">
    <br>
    <input type="submit" value="Envoyer">
</form>
<?php
if(isset($_GET['prixHt']) && isset($_GET['nbArt'])&& isset($_GET['tva'])){
    $prixHt = $_GET['prixHt'];
    $nbArt = $_GET['nbArt'];
    $tva = $_GET['tva'];
    $prixTtc = ($prixHt + ($prixHt*$tva/100)) * $nbArt;
    echo "le resultat est : $prixTtc";        
} ; 
?>