import React, { useState } from "react";

function Colonnes() {
  const [majCol, setMajCol] = useState([
    { nom: "tache1", cat: "en_cours" },
    { nom: "tache2", cat: "fait" },
    { nom: "tache3", cat: "en_cours" },
    { nom: "tache4", cat: "en_cours" },
    { nom: "tache5", cat: "fait" },
    { nom: "tache6", cat: "pas_fait" },
    { nom: "tache7", cat: "pas_fait" },
  ]);
  // console.log(majCol);
  var kanban = {
    pas_fait: [],
    en_cours: [],
    fait: [],
  };

  const supprimer = (e) => {
    // console.log(e.target.parentElement)
    let taskToRemove = e.target.parentElement.textContent.slice(
      0,
      e.target.parentElement.textContent.indexOf("Suivant")
    );
    const copie = majCol.filter((task) => task.nom !== taskToRemove);
    setMajCol(copie);
    // console.log("test", majCol);
  };

  const suivant = (e) => {
    // console.log(e.target.parentElement.parentElement.parentElement.id)
    // console.log("value", )

    let tacheEncours = e.target.parentElement.parentElement.parentElement.id;
    let temp = Object.keys(kanban);
    let taskToSwitch = e.target.parentElement.textContent.slice(
      0,
      e.target.parentElement.textContent.indexOf("Suivant")
    );
    taskToSwitch = `${taskToSwitch}`;
    let indexOfCurrentTaskColonnes = temp.indexOf(tacheEncours);
    let indexOfNewCurrentTaskColonnes = indexOfCurrentTaskColonnes + 1;
    let newCate = `${temp[indexOfNewCurrentTaskColonnes]}`
    // console.log("Prochaine colonne : ", temp[indexOfNewCurrentTaskColonnes])
    // const copie = majCol.filter((task) => {
    //   if(task.nom == taskToSwitch) {
    //     task.cat = temp[indexOfNewCurrentTaskColonnes]
    //   }
    // })
    majCol.forEach((task) => {
      let curentTask = `${task.nom}`.replaceAll(" ", "")
      taskToSwitch = taskToSwitch.replaceAll(" ", "")
      if (taskToSwitch == curentTask) {
        task.cat = newCate
      }

    });
  };

  majCol.map((tache) => {
    kanban[tache.cat].push(
      <span>
        {tache.nom}
        <button onClick={suivant}> Suivant </button>
        <button onClick={supprimer}>Supprimer</button>
        {/* <button onClick={precedent}> Précedent </button> */}
      </span>
    );
  });

  const envoyerForm = (e) => {
    // setMajCol(e.target.value)
    e.preventDefault();
    console.log(e.target.parentElement.children[1].value);
    setMajCol([
      ...majCol,
      { nom: e.target.parentElement.children[1].value, cat: "pas_fait" },
    ]);
    console.log("dans envyerformb" + majCol);
  };

  // console.log(kanban);
  // console.log(kanban.pas_fait);

  return (
    <>
      <form>
        <label>Ajouter tache : </label>
        <input />
        <button onClick={envoyerForm}>Envoyer</button>
      </form>
      <section>
        <div id="pas_fait" className="0">
          Pas fait
          <p>{kanban.pas_fait}</p>
        </div>
        <div id="en_cours" className="1">
          En cours
          <p>{kanban.en_cours}</p>
        </div>
        <div id="fait" className="2">
          Fait
          <p>{kanban.fait}</p>
        </div>
      </section>
    </>
  );
}

export default Colonnes;

// import React, { useState } from "react";

// function Colonnes() {
//   const [majCol, setMajCol] = useState([
//     { nom: "tache1", cat: "en_cours" },
//     { nom: "tache2", cat: "fait" },
//     { nom: "tache3", cat: "en_cours" },
//     { nom: "tache4", cat: "en_cours" },
//     { nom: "tache5", cat: "fait" },
//     { nom: "tache6", cat: "pas_fait" },
//     { nom: "tache7", cat: "pas_fait" },
//   ]);
//   console.log(majCol);
//   var kanban = {
//     en_cours: [],
//     pas_fait: [],
//     fait: [],
//   };

//   const supprimer = (e) => {
//     // console.log(e.target.parentElement)
//     let taskToRemove = e.target.parentElement.textContent.slice(0, e.target.parentElement.textContent.indexOf("Supprimer"));
//     const copie = majCol.filter((task) => task.nom !== taskToRemove);
//     setMajCol(copie);
//     // console.log("test", majCol);
//   };

//   majCol.map((tache) => {
//     kanban[tache.cat].push(
//       <span>
//         {tache.nom}
//         <button onClick={supprimer}>Supprimer</button>
//       </span>
//     );
//   });

//   const envoyerForm = (e) => {
//     // setMajCol(e.target.value)
//     e.preventDefault();
//     console.log(e.target.parentElement.children[1].value);
//     setMajCol([
//       ...majCol,
//       { nom: e.target.parentElement.children[1].value, cat: "pas_fait" },
//     ]);
//     console.log("dans envyerformb" + majCol);
//   };

//   console.log(kanban);
//   console.log(kanban.pas_fait);

//   return (
//     <>
//       <form>
//         <label>Ajouter tache : </label>
//         <input />
//         <button onClick={envoyerForm}>Envoyer</button>
//       </form>
//       <section>
//         <div id="pasFait">
//           Pas fait
//           <p>{kanban.pas_fait}</p>
//         </div>
//         <div id="enCours">
//           En cours
//           <p>{kanban.en_cours}</p>
//         </div>
//         <div id="fait">
//           Fait
//           <p>{kanban.fait}</p>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Colonnes;
