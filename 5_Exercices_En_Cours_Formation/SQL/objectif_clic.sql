create database objectif_clic ;
use objectif_clic; 

create table utilisateur( 
id_utilisateur int primary key auto_increment not null, 
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null ,
num_rue_utilisateur varchar(50) not null ,
nom_rue_utilisateur varchar(50) not null,
code_postal_utilisateur int not null,
ville_utilisateur varchar(50) not null,
mail_utilisateur varchar(50) not null,
password_utilisateur varchar(50) not null,
id_role int not null
) Engine=InnoDB;

create table role( 
id_role int primary key auto_increment not null, 
nom_role varchar(50) not null
) Engine=InnoDB;

create table article ( 
id_article int primary key auto_increment not null, 
nom_article varchar(50) not null, 
description_article text, 
prix_article float not null 
) Engine=InnoDB; 

create table acheter (
id_article int not null,
id_utilisateur int not null,
id_statut int not null,
qte_article int not null,
date_commande date not null,
primary key (id_article, id_utilisateur, id_statut)
) Engine=InnoDB; 

create table statut (
id_statut int primary key auto_increment not null, 
nom_statut varchar(50) not null
) Engine=InnoDB; 

create table devis (
id_devis int primary key auto_increment not null, 
date_devis date not null,
prix_devis float not null,
description_devis varchar(200),
id_utilisateur int
)Engine=InnoDB;

create table contact (
id_contact int primary key auto_increment not null, 
date_contact date not null,
message_contact text not null,
id_utilisateur int not null,
id_type_contact int not null
) Engine=InnoDB;


create table type_contact (
id_type_contact int primary key auto_increment not null, 
nom_type_contact varchar(50)
) Engine=InnoDB;


alter table utilisateur 
add constraint fk_posseder_role
foreign key (id_role)
references role(id_role);

alter table acheter 
add constraint fk_acheter_utilisateur 
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table acheter 
add constraint fk_acheter_article 
foreign key (id_article)
references article(id_article) ;

alter table acheter 
add constraint fk_acheter_statut 
foreign key (id_statut)
references statut(id_statut);

alter table devis
add constraint fk_demander_utilisateur
foreign key (id_utilisateur) 
references utilisateur(id_utilisateur); 

alter table contact 
add constraint fk_envoyer_utilisateur 
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table contact 
add constraint fk_attribuer_contact 
foreign key (id_type_contact)
references type_contact(id_type_contact);