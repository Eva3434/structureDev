console.log("Tp numero6");

//Créez une alerte dans la fonction affichant le message disant que l’utilisateur aura bientôt son âge + 1 an (en faisant le calcul dans la fonction alert().

let age = prompt("Quel âge avez vous?");

function afficherAge(age){  
    age = parseInt(age)  
    alert(`Vous aurez bientôt ${age+1} ans`);
};
afficherAge(age);

// CORRECTION 

function howOldAreYou() {
    var age = prompt("tu a quel age ?");
    console.log(typeof age);
    age = Number(age); //type conversions
    console.log(typeof age);
    alert("dans un an tu aura" + (age + 1));
  }