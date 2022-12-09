import React, { useState } from "react";

function Compteur() {
  const [compt, setCompt] = useState(0);  
  const [bouton, setBouton] = useState();  

  function ajouter(e){
    setCompt(compt + 1);
    setBouton(e.target.innerText)
  }
  function soustraire(e){
    setCompt(compt - 1);
    setBouton(e.target.innerText)
  }
    
  return (
    <>
    <p> Compteur {compt}</p>
      <button onClick={ajouter}> +1 </button>
      <button onClick={soustraire}> -1 </button>
      <p >Vous avez cliquez sur {bouton}  </p>
    </>
  );
}
export default Compteur; 