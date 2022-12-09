console.log("exo 1");

let titre = document.querySelectorAll("h2");
let affiche = true;



titre.forEach((elementT) => {
  elementT.addEventListener("click", function () {   
    if(affiche == true){
        elementT.nextElementSibling.style.display = "none";
        affiche = false;
    }else {
        elementT.nextElementSibling.style.display = "block";
    affiche = true;
    }
  })
});

