// import logo from '../asset/logo.svg';
import "../style/App.css";
import Hello from "./Clock";
import Clock from "./Clock";
import Input from "./Input";
import Panier from "./Panier";
import Boutons from "./Boutons";
import ChangePrenom from "./inputHook";
import Timer from "./Timer";
import Compteur from "./Compteur";
import ToggleBouton from "./Toggle";
import Garage from "./Garage";
import DisplayGarage from "./GarageUseState";
import ExempleBouton from "./Bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Calories from "./Calories";
import Login from "./Login";
import Deconnexion from "./Deconnexion";
import ListeTaches from "./ListeTaches/ListeTaches";
import Todolist from "./ToDoList/Todolist";

function App() {
  return (
    <>
    {localStorage.getItem('connecte') ?
    <>
    <Header />
    <Routes>
          <Route exact path="/Hello" element={<Hello name="fthytfhy" />} />
          <Route exact path="/Clock" element={<Clock />} />
          <Route exact path="/Input" element={<Input />} />
          <Route exact path="/Panier" element={<Panier />} />
          <Route exact path="/Boutons" element={<Boutons />} />
          <Route exact path="/Timer" element={<Timer />} />
          <Route exact path="/Compteur" element={<Compteur />} />
          <Route exact path="/inputHook" element={<ChangePrenom />} />
          <Route exact path="/Garage" element={<Garage />} />
          <Route exact path="/ToggleBouton" element={<ToggleBouton />} />
          <Route exact path="/DisplayGarage" element={<DisplayGarage />} />
          <Route exact path="/ExempleBouton" element={<ExempleBouton />} />
          <Route exact path="/Calories" element={<Calories />} />
          <Route exact path="/ListeTaches" element={<ListeTaches/>} />
          <Route exact path="/Todolist" element={<Todolist/>} />
          <Route exact path="/Deconnexion" element={<Deconnexion />} />
        </Routes>
        </> 
        : <Login />}
          
    </>
  );
}

export default App;
