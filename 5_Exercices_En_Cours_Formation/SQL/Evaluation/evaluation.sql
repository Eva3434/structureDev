CREATE DATABASE judo;
USE judo;

CREATE TABLE judoka(
id_judoka int primary key auto_increment not null,
nom_judoka varchar(50),
prenom_judoka varchar(50),
age_judoka int not null,
sexe_judoka varchar(50),
id_ceinture int not null
)Engine=InnoDB;

CREATE TABLE ceinture(
id_ceinture int primary key auto_increment not null, 
couleur_ceinture varchar(50)
) Engine=InnoDB;

CREATE TABLE participer(
id_competition int not null, 
id_judoka int not null, 
primary key (id_competition, id_judoka)
) Engine=InnoDB; 

CREATE TABLE competition(
id_competition int primary key auto_increment not null, 
nom_competition varchar(50), 
date_debut_competition date not null,
date_fin_competition date not null
)Engine=InnoDB;

ALTER TABLE judoka 
add constraint fk_posseder_ceinture
foreign key (id_ceinture)
references ceinture(id_ceinture);

ALTER TABLE participer 
add constraint fk_participer_judoka
foreign key (id_judoka)
references judoka(id_judoka); 

ALTER TABLE participer 
add constraint fk_participer_competition 
foreign key (id_competition)
references competition(id_competition); 




