
function Deconnexion() {
  function Deco() {
    localStorage.removeItem("connecte");
}
    return (
      <form>
        <button onClick={Deco} >
          Déconnexion
        </button>
      </form>
    );
  
}
export default Deconnexion
