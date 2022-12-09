
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Calories() {
  const [genre, setGenre] = useState();
  const [poids, setPoids] = useState();
  const [taille, setTaille] = useState();
  const [age, setAge] = useState();
  const [activite, setActivite] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if ({ genre } == "femme") {
      return 655.1+(13.75*{poids})+(5*{taille})-(6.77*{age})*{activite}
    }else {
      return 66.5+(9.56*{poids})+(1.85*{taille})-(4.67*{age})*{activite}
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label name="genre">Choisir genre :</label>
        <select name="genre">
          <option  value={genre} onChange={(e) => setGenre(e.target.value)}>Femme</option>
          <option  value={genre} onChange={(e) => setGenre(e.target.value)}>Homme</option>
          </select>
        {/* <input value={genre} onChange={(e) => setGenre(e.target.value)} /> */}
       
        <label name="poids">Saisir poids : </label>
        <input value={poids} onChange={(e) => setPoids(e.target.value)} />
        <label name="taille">Saisir taille :</label>
        <input value={taille} onChange={(e) => setTaille(e.target.value)} />
        <label name="age">Saisir âge :</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
        <label name="activite">Choisir activité :</label>
        {/* <input value={activite} onChange={(e) => setActivite(e.target.value)} /> */}
        <select name="activite" >
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1.2</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1.4</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1.6</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1..7</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 1.9</option>
          <option value={activite} onChange={(e) => setActivite(e.target.value)}> coef 2</option>
        </select>
        <button>Envoyer</button>
      </form>
    </section>
  );
}
export default Calories;
