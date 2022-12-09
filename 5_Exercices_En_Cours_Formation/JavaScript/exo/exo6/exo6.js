console.log('exo 6')

let array = [];
// let valeurBase = 0;

for(let i=0; i<10; i++){
    array.push(Math.floor(Math.random()*10))
}
let sommeValeurs = array.reduce(
    (a, b) => a + b,
    // valeurBase
  );
console.log(array);
console.log(sommeValeurs);