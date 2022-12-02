/* *******************page accueil*******************/

console.log('modal')

let ouvrirMail = document.querySelector('.ouvrirMail');
let section = document.querySelectorAll('section');

// logo[0].addEventListener("click", function () {
//     afficherMail();
// })


// logo[1].addEventListener("click", function () {
//     alert('Message mail')
// })

/* *******************page velo *******************/
let modalMail = document.querySelector('modalMail');
let modalCookie = document.querySelector('modalCookie');
let close = document.querySelector('.close');

function afficherMail() {    
    modalMail.style.visibility = (modalMail.style.visibility == "visible") ? "hidden" : "visible";
    }



ouvrirMail.addEventListener("click", function(){
    afficherMail();
})