import React, { useState } from "react";

function ChangePrenom() {
  const [prenom, setPrenom] = useState();
  const newPrenom = (e) => {
    setPrenom(e.target.value);
  };
  return (
    <>
      <h1>Bonjour, {prenom} ! </h1>
      <input onChange={newPrenom}/>
    </>
  );
}
export default ChangePrenom;