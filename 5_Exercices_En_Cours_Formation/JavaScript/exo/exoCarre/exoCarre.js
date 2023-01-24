console.log("carre");

let pCreation;
let body = document.querySelector("body");
let pSelector = document.querySelectorAll('p');

function createElement() {
  pCreation = document.createElement("p");
  pCreation.textContent = "carre";
  body.append(pCreation);
}
for (i = 0; i < 4; i++) {
  createElement();
}
pSelector.forEach(carre => {
    carre.addEventListener('click', function(){
        alert(`c'est un carré`)
    })
});
