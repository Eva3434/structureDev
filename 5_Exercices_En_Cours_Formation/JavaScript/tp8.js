console.log("Tp numero 8");

// Une fonction qui prend l'heure en entrée
// et qui renvoie selon l'heure c'est le matin,
// c'est l'après-midi c'est le soir.
// Fait une première version en pseudo code

const dateDuJour = new Date()

function quelleHeure(heure) {
  if (heure < 12) {
    return `Il est ${heure}h donc c'est le matin!`;
  } else if (heure > 12 && heure < 18) {
    return `Il est ${heure}h donc c'est l'après midi!`;
  } else {
    return `Il est ${heure}h donc c'est le soir!`;
  }
}
console.log(quelleHeure(dateDuJour.getHours()));
