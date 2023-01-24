create database ticket_caisse;
use ticket_caisse;

-- ajout des tables

create table vendeur(
id_vendeur int primary key auto_increment not null,
nom_vendeur varchar(50) not null,
prenom_vendeur varchar(50) not null
)Engine=InnoDB;

create table ticket(
id_ticket int primary key auto_increment not null,
date_ticket datetime not null,
id_vendeur int not null,
id_magasin int not null
)Engine=InnoDB;

create table magasin(
id_magasin int primary key auto_increment not null,
nom_magasin varchar(50) not null,
nom_rue_magasin varchar(50) not null,
num_rue_magasin varchar(50) not null,
ville_magasin varchar(50) not null,
code_postal_magasin int not null
)Engine=InnoDB;

create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50)
)Engine=InnoDB;

create table produit(
id_produit int primary key auto_increment not null,
nom_produit varchar(50),
description_produit text not null,
prix_produit float not null
)Engine=InnoDB;

create table completer(
id_categorie int not null,
id_produit int not null,
primary key(id_categorie, id_produit)
)Engine=InnoDB;

create table ajouter(
id_ticket int not null,
id_produit int not null,
quantite int not null,
primary key(id_ticket, id_produit)
)Engine=InnoDB;

-- ajout des contraintes foreign key
alter table ticket
add constraint fk_localiser_magasin
foreign key(id_magasin)
references magasin(id_magasin);

alter table ticket
add constraint fk_servir_vendeur
foreign key(id_vendeur)
references vendeur(id_vendeur);

alter table ajouter
add constraint fk_ajouter_produit
foreign key(id_produit)
references produit(id_produit);

alter table ajouter
add constraint fk_ajouter_ticket
foreign key(id_ticket)
references ticket(id_ticket);

alter table completer
add constraint fk_completer_produit
foreign key(id_produit)
references produit(id_produit);

alter table completer
add constraint fk_completer_categorie
foreign key(id_categorie)
references categorie(id_categorie);