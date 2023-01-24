import React, { useState } from "react";

const ToggleBouton = () => {
    const [toggle, setToggle] = useState(false)
  
    return(
        <>
        <button onClick={() => setToggle(!toggle)}>Change background</button>
        {toggle && (
            <style>{'body { background-color: red; }'}</style>
        )}
      </>
    )
  }
  export default ToggleBouton