import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";




function Header(){
    return( <nav>   
    <Link to="/Hello"><Button variant="warning"> Hello </Button> </Link>
    <Link to="/Clock"><Button variant="primary"> Clock </Button> </Link>
    <Link to="/Input"><Button variant="danger"> Input </Button> </Link>
    <Link to="/Panier"><Button variant="warning"> Panier </Button> </Link>
    <Link to="/Boutons"><Button variant="primary"> Boutons </Button> </Link>
    <Link to="/Timer" ><Button variant="danger"> Timer </Button> </Link>
    <Link to="/Compteur"><Button variant="warning"> Compteur </Button> </Link>
    <Link to="/Garage" ><Button variant="primary"> Garage </Button> </Link>
    <Link to="/ToggleBouton"><Button variant="danger"> ToggleBouton </Button> </Link>
    <Link to="/DisplayGarage"><Button variant="warning"> DisplayGarage </Button> </Link>
    <Link to="/ExempleBouton" ><Button variant="primary"> ExempleBouton </Button> </Link>
    <Link to="/inputHook" ><Button variant="danger"> Change Prenom </Button> </Link>
    <Link to="/Calories" ><Button variant="warning"> Calories </Button> </Link>
    <Link to="/ListeTaches" ><Button variant="warning"> Liste de tâches </Button> </Link>
    <Link to="/Deconnexion" ><Button variant="warning"> Déconnexion </Button> </Link>

    
    </nav>)
}

export default Header