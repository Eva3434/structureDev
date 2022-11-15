create database cours;
use cours;

create table exemple(
id_exemple int primary key auto_increment not null,
nom_exemple varchar(50) not null,
date_exemple date not null,
valide_exemple tinyint(1) default 0,
pas_null_exemple varchar(100) null
)Engine=InnoDB;

-- modification de la base
alter table exemple
add id_categorie int not null;

-- ajout de la table 
create table categorie(
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;

-- ajout contrainte
alter table exemple
add constraint fk_ajouter_categorie
foreign key(id_categorie)
references categorie(id_categorie);