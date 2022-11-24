console.log("DOM TP 21");

// - Créez une fonctions permettant de générer une couleurs aléatoirement.
// - Essayez de faire changer la couleur d’un bouton toutes les 2 secondes à l’aide de setInterval et de
// votre fonction.
// - Créez un lien permettant d’arrêter ce changement de couleur. 

function changeCouleur(){
    let color = '#' +(Math.random()*0xFFFFFF<<0).toString(16)
    return color
};

let button = document.querySelector('button');

button.addEventListener("mouseenter", function(){
    var intervalColorButton = setInterval(() => {
        button.style.background = changeCouleur()
    }, 2000);
    button.addEventListener("click", function() {
        clearInterval(intervalColorButton)
        button.style.background = "#FFFFFF";
    })
});

// CORRECTION 
let randomColor = () => { 
    return Math.floor(Math.random() * 255);
  };
  
  let intervalIsLaunched = false;
  let interval;
  let buttonSelectorColorChanger = document.querySelector("#testingMath");
  
  let colorChanger = () => {
    let colorPicked = `rgb(${randomColor()},${randomColor()},${randomColor()})`; //gabarit litéral
    buttonSelectorColorChanger.style.backgroundColor = colorPicked;
  };
  
  window.addEventListener("load", function(){
    console.log("hello");
    intervalSet();
  })
  
  function intervalSet(){
    if(intervalIsLaunched){
      console.log("l'intervalle est arreter");
      intervalIsLaunched = false;
      clearInterval(interval);
    }else{
      console.log("l'intervalle est déclencher")
      intervalIsLaunched = true;
      interval = setInterval(function(){
        colorChanger();
      }, 2000);
    }
  }
  
  let colorChangerStopButton = document.querySelector("#colorChangerStopButton");
  colorChangerStopButton.addEventListener("click", function(){
    intervalSet();
  });

