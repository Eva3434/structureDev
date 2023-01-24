import React, { useState } from "react";

function Taches() {
  const [tache, setTache] = useState([]);
  const [nomTache, setNomTache] = useState("");
  localStorage.getItem('tache')
 

  const handleSubmit = (event) => {
    event.preventDefault();    
    setNomTache(tache);
    localStorage.setItem("nomTache", tache);
}
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label> Créer tache</label>
          <input
            name="nomTache"
            value={tache}
            onChange={(e) => setTache(e.target.value)}
          />
          <button>Créer tache</button>
        </form>
        <h1>{nomTache}</h1>
      </>
    );
  };


export default Taches;
