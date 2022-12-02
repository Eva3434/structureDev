
class Personnage {
  constructor(pseudo, classe, sante, attaque, niveau) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = niveau;
  }
  evoluer() {
    this.niveau ++;
    console.log(`${this.pseudo} passe au niveau ${this.niveau}`);
  }
  verifierSante() {
    if (this.sante <= 0) {
    this.sante = 0;
    console.log(`${this.pseudo} a perdu ! `);
    }else {console.log(`Il reste ${this.sante}`)}
}

    
 
  get informations() {
    console.log(
      `${this.pseudo} ${this.classe} a ${this.sante} points de vie et est au niveau ${this.niveau}`
    );
  }
}

class Magicien extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau){
        super(pseudo, "Magicien", 170, 90,1)
    }
    attaquer(personnage){
        personnage.sante  = personnage.sante - this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégâts)`);
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.sante = personnage.sante - (this.attaque*5);        
        console.log(`${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} (${this.attaque*5} dégâts)`);
        this.evoluer();
        personnage.verifierSante();
    }
}

let gandalf = new Magicien ("Gandalf");

class Guerrier extends Personnage{
    constructor(pseudo, classe, sante, attaque, niveau){
        super(pseudo, "guerrier", 350, 50,1)
    }
    attaquer(personnage){
        personnage.sante  = personnage.sante - this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégâts)`);
        this.evoluer();
        personnage.verifierSante();
    }
    coupSpecial(personnage){
        personnage.sante = personnage.sante - (this.attaque*5);        
        console.log(`${this.pseudo} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo} (${this.attaque*5} dégâts)`);
        this.evoluer();
        personnage.verifierSante();
    }
}
let aragorn = new Guerrier ("Aragorn");

aragorn.informations;
gandalf.informations;
gandalf.attaquer(aragorn);
aragorn.informations;
aragorn.attaquer(gandalf);
gandalf.informations;
gandalf.coupSpecial(aragorn);
