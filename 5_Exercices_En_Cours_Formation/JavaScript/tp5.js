console.log("Tp numero 5");

// function afficherMessage () {
//     console.log("Message")
// };
// afficherMessage();


let nom = "le nom";
function afficherMessage (nom) {
    console.log("Bonjour "+ nom);
}
afficherMessage(nom);


// CORRECTION
/* Créer une fonction qui permet de console.log un message*/

function hello(){
    console.log("hello");
}

let hello2 = () => {
    console.log("hello");
}

hello2();
hello();

function hello(nom, prenom){
    console.log(`Bonjour ${nom} ${prenom}`);
};
let hello2 = (nom, prenom) =>{
    console.log("Bonjour " + nom + " " + prenom);
    console.log(`Bonjour ${nom} ${prenom}`);
}
hello("Navone", "Ruben");
hello2("Navone", "Ruben");




