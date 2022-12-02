let bodySelector = document.querySelector("body");

let sectionCreation;
let imgCreation;
let pCreation;
let articleCreation;
let boutonCreation;
let gridSelector = document.querySelector('.grid');

fetch('https://picsum.photos/v2/list?limit=4')
  .then((response) => {
    return response.json()
  })
  .then((photos) => {
    photos.forEach(photo => {
      createElements();
      fillElements(photo.download_url, photo.author, photo.url)
      console.log("avan", photo.download_url)
      photo.download_url = photo.download_url.replace(photo.width, "500")
      photo.download_url = photo.download_url.replace(photo.height, "333")
      console.log("apres", photo.download_url)
      boutonCreation.addEventListener('click', function(){
      location.href= photo.url
        // window.open(photo.url);
})
;
      boutonCreation.textContent = "Visit";
      appendElements();
    });
  })

function createElements() {
   boutonCreation = document.createElement('button');
   pCreation = document.createElement("p");
   sectionCreation = document.createElement("section");
   imgCreation = document.createElement("img");
   articleCreation = document.createElement("article")
}

function fillElements(photoUrl, nomAuteur) {
  console.log("hello");
  imgCreation.src = photoUrl;
  pCreation.textContent = nomAuteur;
}

function appendElements() {
 gridSelector.append(sectionCreation);
 sectionCreation.append(articleCreation)
 articleCreation.append(pCreation);
 articleCreation.append(boutonCreation);
sectionCreation.append(imgCreation);
}





/*
<section class="grid">

      <section>
      <article>
      <p>Alejandro Escamilla</p> 
      <button>Visit</button>
      </div>
      </article>
      <img src="image.jpg" />

      <div class="two">Alejandro Escamilla<button>Visit</button></div>
      <img class=imgTwo src="image.jpg" />

      <div class="three">Alejandro Escamilla<button>Visit</button></div>
      <img src="image.jpg" />
      <div class="four">Alejandro Escamilla<button>Visit</button></div>
      <img class="" src="image.jpg" />

    </div>
*/