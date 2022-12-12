import React, { useState } from "react";

function Colonnes() {
  const [colonne, setColonne] = useState([]);
  const [nomColonne, setNomColonne] = useState("");
  localStorage.getItem('statut')
 

  const handleSubmit = (event) => {
    event.preventDefault();    
    setNomColonne(colonne);
    localStorage.setItem("statutColonne", colonne);
}
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label> Créer colonne</label>
          <input
            name="nomColonne"
            value={colonne}
            onChange={(e) => setColonne(e.target.value)}
          />
          <button>Créer colonne</button>
        </form>
        <h1>{nomColonne}</h1>
      </>
    );
  };


export default Colonnes;
