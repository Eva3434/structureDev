console.log("Tp numero 11");

// Crée un programme qui demande à l'utilisateur de choisir entre 3
//     Sort (boule de feu - trait de glaçe - chaîne d'éclair)

//     Boule de feu fait 40 dégats
//     Trait de glaçes 35
//     Chaîne d'éclairs 25
//     Si l'utilisateur choisis l'un de ses trois sorts, une alerte apparait
//     disant que vous avez choisis le "nom du sort" qui fait les dégat annoncé
//     plus tôt
//     Si l'utilisateur choisis un sort autre que les trois ci-dessus, vous créez
//     une erreur et l'affichez.
//     Throw new Error ("Les autres sorts ne sont pas de votre niveau");
//     Tips Utilise Switch cases.

let reponse = prompt(
  `Choisir un sort :\n Boule de feu fait 40 dégats\n Trait de glaçes 35\n Chaîne d'éclairs 25`
);

switch (reponse) {
  case "Boule de feu":
    alert("Vous avez choisi Boule de feu qui fait 40 dégats");
    break;
  case "Chaîne d'éclairs":
    alert("Vous avez choisi Chaîne d'éclairs qui fait 25 dégats");
    break;
  case "Trait de glaçes":
    alert("Vous avez choisi Trait de glaçes qui fait 35 dégats");
    break;
  default:
    throw new Error("Les autres sorts ne sont pas de votre niveau");
}

// CORRRECTION 
// alert("Bienvenu jeune aventurier un combat ce prépare est tu pret ?");

// var ready = confirm("Voulez vous jouer à ce jeux ?"); //confirm crée un dial box oui/non output true / false


//   function choice() {
//     var choice = prompt(
//       "1- boule de feu \n 2- trait de glaçe \n 3- chaine d'éclair"
//     );
//     choice = +choice; // cast choice en number
//     if (choice === 1 || choice === 2 || choice === 3) {
//       return choice;
//     } else {
//       throw new Error("Tu ne peut lancer un sort qui n'est pas de ton niveau");
//     }
//   }


// if (ready === true) {
//   // Notre jeux
//   let fireball = 40;
//   let snowball = 35;
//   let thunderBolt = 25;

//   alert("Un monstre cyclopéen t'attaque, avec quelle sort va tu te défendre ?");
//   try{
//   var spell = choice();
//   }catch(error){
//    alert(error);
//   }
//   switch (spell) {
//     case 1:
//       alert(
//         "La boule de feu lui eclate au visage lui infligeant " +
//           fireball +
//           " dégats"
//       );
//       break;
//     case 2:
//       alert(
//         "Un trait de glaçe pourfend l'air et parvient à l'atteindre lui infligeant " +
//           snowball +
//           " dégats"
//       );
//       break;
//     case 3:
//       alert(
//         "Plusieur éclairs tombe du ciel, deux eclair le touche cela lui inflige " +
//           thunderBolt +
//           " dégats"
//       );
//       break;
//   }
//   alert("Le monstre tombe, le combat et finis. VICTOIRE !");
// } else {
//   alert("Dommage tu rate une belle aventure !");
// }



//version de Benjamin
try {
    let sort = prompt(
      "Choisissez un nouveau sort parmis les suivant : boule de feu - trait de glace - chaine d'éclair"
    );
    
    let degat;
  
    switch (sort) {
      case "boule de feu":
        degat = 40;
        break;
      case "trait de glace":
        degat = 35;
        break;
      case "chaine d'éclair":
        degat = 25;
        break;
      default:
        throw new Error("Les autres sorts ne sont pas de votre niveau");
    }
    alert(
      "Félicitation vous avez choisis " +
        sort +
        " qui fait " +
        degat +
        " dégats. "
    );
  } catch (error) {
    alert(error);
  }