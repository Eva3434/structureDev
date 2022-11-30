console.log('tp objet')
// - Créez un constructeur de “Stagiaire” avec pour attributs : nom, prénom, age, ville de naissance
// - Ce constructeur aura pour méthode “sePresenter” qui affichera tous les attributs nom, prénom,
// age et le nom de la ville de naissance.
// - Creéz un constructeur de “Ville” avec pour attribut : nom, nombre d’habitants, pays.
// - Créez deux objets de “stagiaire” et créez autant d’objets de “ville” que necessaire pour pouvoir
// assigner ces objets à l’attribut “ville” de naissance”.

function Stagiaire(nom, prenom, age, villeDeNaissance){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.villeDeNaissance = villeDeNaissance;
    this.SePresenter = () => {
        console.log(`${this.prenom} ${this.nom} ${this.villeDeNaissance.nom}`);
    }
}

function Ville(nom, habitants, pays){
    this.nom = nom;
    this.habitants = habitants; 
    this.pays = pays; 
    this.presenterVille = () => {
        console.log(`${this.nom} ${this.habitants} ${this.pays}`);
        }
}
let mtp = new Ville('Montpellier', '50000', 'France');
let Saussan = new Ville('Saussan', '2000', 'France');

let stagiaire1 = new Stagiaire("Nomfj", "Prenomff", "50", mtp);
let stagiaire2 = new Stagiaire("Nomfej", "Prenomfs","48","Saussan");




stagiaire1.SePresenter();
// stagiaire2.SePresenter();
// Mtp.presenterVille();
// Saussan.presenterVille();