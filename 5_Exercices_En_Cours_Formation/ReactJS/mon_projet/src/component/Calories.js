import React, {useState } from "react";

function Calories() {
  const [genre, setGenre] = useState();
  const [poids, setPoids] = useState();
  const [taille, setTaille] = useState();
  const [age, setAge] = useState();
  const [activite, setActivite] = useState();
  const [calorie, setCalorie] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if ({ genre } === "femme") {
      let result = 655.1 + 9.56 * poids + 1.85 * taille - 4.67 * age;
      let calcul = result * activite;
      console.log(calcul);
      setCalorie(Math.round(calcul));
    } else {
      let result = 66.5 + 13.75 * poids + 5 * taille - 6.77 * age;
      let calcul = result * activite;
      console.log(calcul);
      setCalorie(Math.round(calcul));
    }
  };
  console.log(genre);
  console.log(poids);
  console.log(taille);
  console.log(age);
  console.log(activite);
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label name="genre">Choisir genre :</label>
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="femme">Femme</option>
          <option value="homme">Homme</option>
        </select>

        <label name="poids">Saisir poids : </label>
        <input
          type="number"
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
        />
        <label name="taille">Saisir taille :</label>
        <input
          type="number"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
        />
        <label name="age">Saisir âge :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label name="activite">Choisir activité :</label>
        <select
          name="activite"
          value={activite}
          onChange={(e) => setActivite(e.target.value)}
        >
          <option value={1}> coef 1</option>
          <option value={1.2}> coef 1.2</option>
          <option value={1.4}> coef 1.4</option>
          <option value={1.6}> coef 1.6</option>
          <option value={1.7}> coef 1.7</option>
          <option value={1.9}> coef 1.9</option>
          <option value={2}> coef 2</option>
        </select>
        <button>Envoyer</button>
      </form>
      <h1>{calorie}</h1>
    </section>
  );
}
export default Calories;
