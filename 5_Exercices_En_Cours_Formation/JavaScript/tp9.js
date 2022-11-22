console.log("Tp numero 9");

// Faite une comparaison en utilisant un switch sur une variable prénom
//     dans le switch vous pouvez checker 3 prénom de fille et 3 garçons
//     votre programme demande un prénom
//     si vous entrez un des 3 alors console log vous ete un garçon
//     pareille pour fille
//     sinon console log invalide ou prénom non reconnus
//     comparaison insenssible a la casse

    // Bonus pour une ternaire moin de 18 ans majeu : mineur

let prenom = 'prenomFille2';

switch (prenom) {
    case 'prenomFille1' :     
    case 'prenomFille2' : 
    case 'prenomFille3' : 
    console.log('vous etes une fille');
    break; 
    case 'prenomGarcon1' : 
    case 'prenomGarcon2' :  
    case 'prenomGarcon3' : 
    console.log('vous etes un garcon');
    break; 
    default : 
    console.log("prénom non reconnus")
};

let age = 19
let result = age < 18 ? "Mineur" : "majeur";
console.log(result)

// CORRECTION 

var nameOfUser = prompt("Quel est ton prenom");

nameOfUser = nameOfUser.toLowerCase(); //Met le texte en minuscule toUpperCase() met en majuscule

switch (nameOfUser) {
  case "john":
    console.log("tu est un garçon");
    break;
  case "jâmes":
    console.log("tu est un garçon");
    break;
  case "bob":
    console.log("tu est un garçon");
    break;
  case "sarah":
    console.log("tu est une fille");
    break;
  case "amy":
    console.log("tu est une fille");
    break;
  case "joy":
    console.log("tu est une fille");
    break;
  default:
    console.log(
      "Désolé votre nom de figure pas dans la bases de données ou votre entrée est incorecte"
    );
    break;
}

//Bonus

var age = prompt("Quel est ton age ?");

age = +age; //conversion de type
//vous pouvez le faire également avec parseInt() ou Number()

age < 18 ? console.log("Vous êtes mineur") : console.log("Vous êtes majeur");

// à faire en commentant la l 48 ou pas pour voir la différence / peut etre essayer avec les autres conversion
console.log(typeof age); //Verification du type, c'est une string mais le résultat est tout de même juste ?

//Petite explication, si age est inférieur a 18 alors vous êtes mineur sinon vous êtes majeur

//Autre version un peu plus optimisé (refacto), fait par benjamin

let surname = prompt("Quel est votre prénom");
let men = "Tu est un gars";
let woman = "Tu est une femme";
let error = "Ceci n'est pas un prénom";
switch (surname.toLowerCase()) {
  case "jean":
  case "bernard":
  case "benjamin":
    console.log(men);
    break;
  case "jeanne":
  case "maria":
  case "fatima":
  case "ophelie":
    console.log(woman);
    break;
  default:
    console.log(error);
    break;
}
age = prompt("Quel âge as tu ?");
age >= 18 ? console.log("tu est majeur") : console.log("tu est mineur");