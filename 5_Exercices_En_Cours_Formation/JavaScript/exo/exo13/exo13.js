console.log("exo 13");

let inputSelector = document.querySelector(".inputPays");
let buttonSelector = document.querySelector("button");


buttonSelector.addEventListener("click", function () {


  
  var pays = inputSelector.value;
  (async function univ() {
    try {
      let response = await fetch(
        `http://universities.hipolabs.com/search?country=${pays}`
      );
      let universite = await response.json();

      universite.forEach((nom) => {
        let sectionCreation = document.createElement("section");
        document.body.append(sectionCreation);
        sectionCreation.textContent = nom.name;
      });     
    if (universite.length > 50) {    
        let labelVille = document.createElement('label');
        document.body.append(labelVille); 
        labelVille.textContent = "saisir nom ville"   ; 
        let inputVille = document.createElement('input');
        document.body.append(inputVille); 



        // (async function univ() {
        //     try {
        //       let response = await fetch(
        //         `http://universities.hipolabs.com/search?country=${ville}`
        //       );
        //       let universite = await response.json();
        
        //       universite.forEach((nom) => {
        //         let sectionCreation = document.createElement("section");
        //         document.body.append(sectionCreation);
        //         sectionCreation.textContent = nom.name; });     
        
   
        //       console.log("data:", universite);
        //     } catch (err) {
        //       alert(err);
        //     }
        //   })();
}







      console.log("data:", universite);
    } catch (err) {
      alert(err);
    }
  })();
});
