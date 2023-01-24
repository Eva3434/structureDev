insert into role (nom_role) values 
('Utilisateur'),
('Admin'); 

insert into article (nom_article, description_article, prix_article) values
("Seau Rouge", "seau rouge troué.....", 30),
("Seau Bleu", "seau bleu troué.....", 30),
("Seau Vert", "seau vert troué.....", 30),
("Seau Orange", "seau orange troué.....", 30);

insert into utilisateur (nom_utilisateur, prenom_utilisateur, num_rue_utilisateur, nom_rue_utilisateur, 
code_postal_utilisateur, ville_utilisateur, mail_utilisateur, password_utilisateur, id_role) values
('Tétrault', 'Guilllaume', 4, 'rue de la mairie', 34430, 'St jean de vedas', 'gt@free.fr', 'Azerty77',1),
('Laramée', 'Eglantine', 48, 'rue du marché', 34570, 'Villeneuve', 'el@free.fr', 'Azerty57',1),
('Labbé', 'Nadine',  16, 'rue des ecoles', 34570, 'Pignan', 'ln@free.fr', 'Azerty79',1);

insert into statut (nom_statut) values 
("Commande en attente de traitement"),
("Commande en cours de traitement"),
("Commande expédiée");

INSERT INTO acheter (id_article, id_utilisateur, id_statut, qte_article, date_commande) values
(2, 3, 1, 2, '2022-01-01'),
(1, 2, 3, 1, '2022-04-22'),
(4, 1, 2, 5, '2022-11-24'),
(3, 3, 1, 3, '2022-06-30');

SELECT nom_utilisateur, prenom_utilisateur, nom_article, qte_article, date_commande FROM acheter
INNER JOIN article ON acheter.id_article = article.id_article
INNER JOIN utilisateur ON acheter.id_utilisateur = utilisateur.id_utilisateur;

SELECT nom_article, sum(qte_article) as "Quantité totale", round(sum(qte_article*prix_article),2) AS "Chiffre d'affaire" FROM acheter 
INNER JOIN article ON acheter.id_article = article.id_article
GROUP BY article.id_article; 