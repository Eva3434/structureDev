console.log('exo 10'); 

let body = document.body;
let headerButton = document.querySelector('.header'); 
let mainButton = document.querySelector('.main'); 
let footerButton = document.querySelector('.footer'); 




headerButton.addEventListener('click', function(){
    let header = document.createElement('header');
    body.prepend(header);    
    headerButton.remove();
    header.textContent = 'texte header';      
});
let header  = document.querySelector('header');
mainButton.addEventListener('click', function(){
    let main = document.createElement('main');
    body.insertBefore(main, body.children[1]); 
    mainButton.remove();
    main.textContent = 'texte main';   
    
});
footerButton.addEventListener('click', function(){
    let footer = document.createElement('footer');
    body.append(footer);
    footerButton.remove();
    footer.textContent = 'texte footer'; 
});

console.log(body.children);