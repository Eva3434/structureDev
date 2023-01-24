import Voiture from "./Voiture";
import React from "react";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "", marque: "" };
  }

  // function Garage() {
  //     let infoVoiture = {
  //         nom: "ibiza",
  //         marque: "seat",
  //     };

  render() {
    return (
      <div>
        <h1>Qui a t il dans mon garage ?</h1>
        {/* <Voiture marque={infoVoiture.marque} nom={infoVoiture.nom} /> */}
        <Voiture marque={this.state.marque} nom={this.state.nom} />
        <form>
          <label>Marque</label>
          <input
            type="text"
            value={this.state.marque}
            onChange={(e) => this.setState({ marque: e.target.value })}/>
          <label>Nom</label>
          <input
            type="text"
            value={this.state.nom}
            onChange={(e) => this.setState({ nom: e.target.value })}/>
            <button >Envoyer</button>
        </form>
      </div>
    );
  }
}
// }
export default Garage;
