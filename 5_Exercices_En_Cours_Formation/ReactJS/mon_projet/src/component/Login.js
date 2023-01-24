import React, { useState } from "react";


function Login() {
  const [login, setLogin] = useState("");
  const [mdp, setMdp] = useState("");
  const bonLogin = localStorage.getItem("Login");
  const bonMdp = localStorage.getItem("mdp");

  const handleSubmit = (event) => {
    if (login === bonLogin && mdp === bonMdp) {
      alert("c'est OK");
      localStorage.setItem("connecte", true);
    //   redirect("./http://localhost:3000/");

    } else {
      alert("info incorrectes");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Se connecter</h1>
      <label name="login">Login :</label>
      <input value={login} onChange={(e) => setLogin(e.target.value)} />
      <label name="mdp">Mot de passe :</label>
      <input value={mdp} onChange={(e) => setMdp(e.target.value)} />
      <button>Connexion</button>
    </form>
  );
}
export default Login;
