//                  MODAL CONNEXION

let modalSelector = document.querySelector("#modal");
let croixSelector = document.querySelector(".croix");
let boutonConnexion = document.querySelector(".boutonConnexion");
let back = document.querySelector("#back");

boutonConnexion.addEventListener("click", function () {
  modalSelector.classList.remove("d-none");
  modalSelector.classList.add("modal-template");
  back.classList.add("modalBack");
});

croixSelector.addEventListener("click", function () {
  modalSelector.classList.add("d-none");
  back.classList.remove("modalBack");
  modalSelector.classList.remove("modal-template");
});

//                  MODAL INSCRIPTION

let boutonInscription = document.querySelector(".boutonInscription");
let modalInscSelector = document.querySelector("#modalInsc");
let croixSelectorInsc = document.querySelector(".croixInsc");

boutonInscription.addEventListener("click", function () {
  modalInscSelector.classList.remove("d-noneInsc");
  modalInscSelector.classList.add("modal-templateInsc");
  back.classList.add("modalBackInsc");
});

croixSelectorInsc.addEventListener("click", function () {
  modalInscSelector.classList.add("d-noneInsc");
  back.classList.remove("modalBackInsc");
  modalInscSelector.classList.remove("modal-templateInsc");
});

