create database projet;
use projet; 

create table droit(
id_droit int primary key auto_increment not null, 
nom_droit varchar(50)
)Engine=InnoDB;

create table utilisateur(
id_utilisateur int primary key auto_increment not null,
login_utilisateur varchar(50) not null,
password_utilisateur varchar(100) not null, 
id_droit int not null
) Engine=InnoDB;

create table posseder(
id_coordonnees int not null, 
id_utilisateur int not null, 
primary key (id_coordonnees, id_utilisateur)
) Engine=InnoDB; 


create table coordonnees( 
id_coordonnees int primary key auto_increment not null, 
nom_coordonnees varchar(50) not null,
prenom_coordonnees varchar(50) not null ,
num_rue_coordonnees varchar(50) not null ,
nom_rue_coordonnees varchar(50) not null,
code_postal_coordonnees int not null,
ville_coordonnees varchar(50) not null,
pays_coordonnees varchar(50) not null,
tel_coordonnees varchar(50) not null,
mail_coordonnees varchar(50) not null
) Engine=InnoDB;

create table commander(
id_coordonnees int not null,
id_produit int not null, 
quantite int not null, 
date_commande datetime not null,
primary key(id_coordonnees, id_produit)
)Engine=InnoDB; 

create table produit(
id_produit int primary key auto_increment not null,
nom_produit varchar(50) not null,
description_produit text not null,
prix_produit float not null, 
stock_produit int not null
) Engine=InnoDB;

create table appartenir(
id_categorie int not null,
id_produit int not null,
primary key(id_categorie, id_produit)
) Engine=InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null, 
nom_categorie varchar(50)
)Engine=InnoDB; 

alter table utilisateur 
add constraint fk_connecter_droit
foreign key (id_droit)
references droit(id_droit);

alter table posseder
add constraint fk_posseder_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table posseder
add constraint fk_posseder_coordonnes
foreign key (id_coordonnees)
references coordonnees(id_coordonnees);

alter table commander
add constraint fk_commander_coordonnees
foreign key (id_coordonnees)
references coordonnees(id_coordonnees);

alter table commander
add constraint fk_commander_produit
foreign key (id_produit)
references produit(id_produit);

alter table appartenir
add constraint fk_appartenir_produit
foreign key (id_produit)
references produit(id_produit);

alter table appartenir
add constraint fk_appartenir_categorie
foreign key (id_categorie)
references categorie(id_categorie);

