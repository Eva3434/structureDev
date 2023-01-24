console.log("exo7");

let eurosInput = document.querySelector(".euros");
let francsInput = document.querySelector(".francs");


eurosInput.addEventListener("input", function(e){
  francsInput.value = parseFloat((e.target.value)*1.06).toFixed(2);
});

francsInput.addEventListener("input", function(e){
  eurosInput.value = parseFloat((e.target.value)/1.06).toFixed(2);
});
