create database exo1;
use exo1;
create table article (
id_article int primary key auto_increment not null,
nom_article varchar(50) not null,
contenu_article text not null,
date_article datetime not null,
id_utilisateur int not null
) Engine=InnoDB;

create table commentaire ( 
id_commentaire int primary key auto_increment not null,
contenu_commentaire text not null,
date_commentaire datetime not null,
id_utilisateur int not null,
id_article int not null
) Engine=InnoDB;

create table role_utilisateur (
id_role_utilisateur int primary key auto_increment not null, 
nom_role_utilisateur varchar(50) not null
) Engine=InnoDB;

create table categorie (
id_categorie int primary key auto_increment not null, 
nom_categorie varchar(50)
) Engine=InnoDB;

create table utilisateur (
id_utilisateur int primary key auto_increment not null, 
nom_utilisateur varchar(50),
prenom_utilisateur varchar(50),
mail_utilisateur varchar(50),
mdp_utilisateur varchar(100),
id_role int not null
) Engine=InnoDB;

create table attribuer (
id_categorie int not null,
id_article int not null,
primary key(id_categorie, id_article)
)Engine=InnoDB;

alter table utilisateur 
add constraint fk_posseder_role
foreign key (id_role)
references role_utilisateur(id_role_utilisateur);

alter table article 
add constraint fk_rediger_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaire 
add constraint fk_ajouter_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaire 
add constraint fk_completer_article
foreign key (id_article)
references article(id_article);

alter table attribuer 
add constraint fk_attribuer_article_article
foreign key (id_article)
references article(id_article);

alter table attribuer 
add constraint fk_attribuer_categorie_categorie
foreign key (id_categorie)
references categorie(id_categorie);



