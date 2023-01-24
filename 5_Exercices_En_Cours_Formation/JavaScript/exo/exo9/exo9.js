console.log('exo 9')

let body = document.querySelector('body');
let bouton = document.querySelector('button'); 

bouton.addEventListener('click', function(){
    let p = document.createElement('p');
    body.append(p);
    p.textContent = 'afficher paragraphe';
});