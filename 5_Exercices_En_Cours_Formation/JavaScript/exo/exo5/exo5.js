console.log('exo5 ');

let array = [];

for(let i=0; i<20; i++){
    array.push(Math.floor(Math.random()*100))
}
let p = document.querySelector('p');
p.textContent = array.filter(valeurSupp);

function valeurSupp(valeur){
    return valeur >= 10;
};

