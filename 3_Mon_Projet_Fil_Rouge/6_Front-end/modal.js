let modalSelector = document.querySelector("#modal");
let croixSelector = document.querySelector(".croix");
let boutonConnexion = document.querySelector(".boutonConnexion");
let back = document.querySelector("#back");


croixSelector.addEventListener("click", function () {
  modalSelector.classList.add("d-none");
  back.classList.remove("modalBack");
  modalSelector.classList.remove("modal-template");
});

boutonConnexion.addEventListener("click", function () {
  modalSelector.classList.remove("d-none");
  modalSelector.classList.add("modal-template");
  back.classList.add("modalBack");
});
