console.log("Tp numero 10");


// Pour la boucle do while créez un programme qui demande le prénom tant que celui-ci est
// vide (prompt et alert)

for(let i=0; i<5; i++);


let n = 0;
while (n < 3) {
  n++;
}
console.log(n);


do {let prenom = prompt("quel est ton prenom ?")}
while (prenom === "");

// CORRECTION 

// Une boucle while

while (true) {
  console.log("bug");
  break; //si vous enlevé ce break elle devient infinis
}

//boucle do while
var aNumber = 2;
do {
  aNumber += 1;
  console.log("aNumber vaut " + aNumber);
} while (aNumber < 5);

//boucle for

for (i = 0; i < 5; i++) {
  console.log("Tour " + i);
}

//Avec la boucle dowhile demandez un prénom j'usqua l'obtenir

do {
  var name = prompt("What's your name ?");
} while (name === "" || name === null);