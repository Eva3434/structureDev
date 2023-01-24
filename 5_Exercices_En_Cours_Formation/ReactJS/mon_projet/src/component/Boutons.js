import React from "react";

function Boutons() {
  function but(i) {
   return function(){i ? alert("vrai") : alert("faux");} 
  }
  return (
    <>
      <button onClick={but(true)}> C'est le but </button>
      <button onClick={but(false)}> C'est dans les gradins </button>
    </>
  );
}

export default Boutons;
