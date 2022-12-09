import React, { useState } from "react";

function Timer(){
    const [heure, setHeure] = useState(new Date()); 

    setInterval(() =>setHeure(new Date()),1000)

   
    return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {heure.toLocaleTimeString()}</h2>
        </div>
      );
}

export default Timer