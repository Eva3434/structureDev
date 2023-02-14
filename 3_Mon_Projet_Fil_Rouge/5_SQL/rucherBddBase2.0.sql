create database rucherdelestagnol;
use rucherdelestagnol;

create table droits(
id_droit int primary key auto_increment not null, 
nom_droit varchar(50) not null
)Engine=InnoDB;

create table utilisateurs(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null, 
prenom_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null,
mot_de_passe_utilisateur varchar(50) not null,
num_rue_utilisateur varchar(50) not null,
nom_rue_utilisateur varchar(50) not null,
cp_utilisateur varchar(50) not null,
ville_utilisateur varchar(50) not null,
pays_utilisateur varchar(50) not null,
tel_utilisateur varchar(50) not null,
id_droit int not null
)Engine=InnoDB;

create table commander(
id_utilisateur int,
id_produit int,
id_livraison int,
quantite int not null, 
date_commande datetime not null, 
statut_livraison tinyint,
primary key(id_utilisateur, id_produit, id_livraison)
);
create table livraisons(
id_livraison int primary key auto_increment not null, 
nom_livraison varchar(50) not null
)Engine=InnoDB;

create table produits(
id_produit int primary key auto_increment not null,
nom_produit varchar(50) not null, 
description_produit text not null, 
prix_produit float not null, 
stock_produit int not null,
image_produit varchar(200), 
id_categorie int not null
)Engine=InnoDB; 

create table appartenir(
id_produit int, 
id_categorie int,
primary key(id_produit, id_categorie)
)Engine=InnoDB;

create table categories(
id_categorie int primary key auto_increment not null, 
nom_categorie varchar(50) not null
)Engine=InnoDB; 

alter table utilisateurs
add constraint fk_posseder_droits
foreign key(id_droit)
references droits(id_droit);

alter table commander
add constraint fk_commander_utilisateurs
foreign key(id_utilisateur)
references utilisateurs(id_utilisateur);

alter table commander
add constraint fk_commander_livraisons
foreign key(id_livraison)
references livraisons(id_livraison);

alter table commander
add constraint fk_commander_produits
foreign key(id_produit)
references produits(id_produit);

alter table produits
add constraint fk_appartenir_categories
foreign key(id_categorie)
references categories(id_categorie);



