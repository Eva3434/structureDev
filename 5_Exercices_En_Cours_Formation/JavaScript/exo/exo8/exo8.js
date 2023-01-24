console.log("exo 8");

window.onload = () => {
  let reponse = window.prompt("Voulez vous afficher le paragraphe?");
  if (reponse == "oui") {
    document.querySelector("div").hidden = false;
  } else {
    document.querySelector("div").hidden = true;
  }
};
