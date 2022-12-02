let sectionSelector = document.querySelector("section");
let meteo = document.querySelector("label");
let bouton = document.querySelector("button");
let phraseTemps = document.querySelector(".temps");
let imageMeteo = document.querySelector("img");
let temperature = document.querySelector(".temperature");
let url =
  "https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric";

function requete(ville) {
  fetch(  `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric&lang=fr `)
    .then((response) => {    
      return response.json();
    })
    .then((meteo) => {
      console.log(meteo);
      //traitement de l'affichage
      phraseTemps.innerText =`Il fait ${meteo.weather[0].description} a ${ville}` ;
      temperature.innerText = `${Math.round(meteo.main.temp)}°`;
      imageMeteo.src =  `http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`      
    });
}

function recupererVille() {
  let ville = document.querySelector("input").value;
  return ville
};

bouton.addEventListener("click", function () {
    requete(recupererVille());
});
