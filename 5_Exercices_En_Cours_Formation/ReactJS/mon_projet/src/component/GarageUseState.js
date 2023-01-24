import React, { useState } from "react";
import Voiture from "./Voiture";

function DisplayGarage() {
  const [marque, setMarque] = useState();
  const [nom, setNom] = useState();
  const marqueVoiture = (e) => {
    setMarque(e.target.value);
    
  };
  const nomVoiture = (e) => {
    setNom(e.target.value);
  };
  const listeVoitures = (e) => {
    e.preventDefault();
    let nomVoiture = e.target.children[1].value;
    let marqueVoiture = e.target.children[3].value;
    
    setMarque(marqueVoiture);
   console.log(e.target.children[1].value);
   console.log(e.target.children[3].value)
  }
// setNom(...nom, nomVoiture);
  return (
    <div>
      <h1>Qui a t il dans mon garage ?</h1>
      <Voiture marque={marque} nom={nom} />

      <form onSubmit={listeVoitures}>
        <label>Marque</label>
        <input type="text" onChange={marqueVoiture} />
        <label>Nom</label>
        <input type="text"  onChange={nomVoiture}/>
        <button>Envoyer</button>
      </form>

    </div>
  );
}

export default DisplayGarage;
