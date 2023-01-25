// let notreActivite = document.querySelector(".notreActivite");

// document.addEventListener("scroll", (event) => {
//   let creationImage = document.createElement("img");
//   creationImage.setAttribute("src", "images/imageFond.jpg");
//   creationImage.classList.add("imgNotreActivite");
//   notreActivite.appendChild(creationImage);
//   let creationDiv = document.createElement("div");
//   creationDiv.textContent = "La miellerie";
//   creationImage.appendChild(creationDiv);
// }
// );


(function() {
    let effetJS = document.querySelector('.effetJS')[0];

    var posImg = effetJS.offsetTop;

    function effet(){
      var posCurseur = this.pageYOffset;

      if(posImg-posCurseur<300){
        effetJS.style.left = 0;
        effetJS.style.opacity = 1;
      }else{
        effetJS.style.left = "160%";
        effetJS.style.opacity = 0;
      }
    }
    
    window.addEventListener("scroll", effet);
  })();
