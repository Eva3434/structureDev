import React from "react";

function Panier() {
  const fruits = ["Pomme", "Fraise", "Cerise"];
  return (
    <>
      <h1>Qu'est-ce que j'ai dans mon panier ?</h1>
      <p>
        {fruits.map((fruit) => (
          <div>J'ai un/une {fruit} dans mon panier</div>
        ))}
      </p>
    </>
  );
}
export default Panier;
