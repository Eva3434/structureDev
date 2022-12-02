insert into role (nom_role) values 
('Admin'),
('Vendeur'),
('Client'); 

insert into article (nom_article, description_article, prix_article) values
("photo", "photo.....", 20),
("photos noir et blanc", "photos noir et blanc.....", 60),
("Photos couleur", "Photos couleur.....", 60),
("Shooting 1h", "shooting 1 heure.....", 300),
("Shooting 2h", "shooting 2 heures.....", 550);

insert into utilisateur (nom_utilisateur, prenom_utilisateur, num_rue_utilisateur, nom_rue_utilisateur, 
code_postal_utilisateur, ville_utilisateur, mail_utilisateur, password_utilisateur, id_role) values
('Tétrault', 'Guilllaume', 4, 'rue de la mairie', 34430, 'St jean de vedas', 'gt@free.fr', 'Azerty77',3),
('Laramée', 'Eglantine', 48, 'rue du marché', 34570, 'Villeneuve', 'el@free.fr', 'Azerty57',3),
('Labbé', 'Nadine',  16, 'rue des ecoles', 34570, 'Pignan', 'ln@free.fr', 'Azerty79',3);

insert into statut (nom_statut) values 
("Commande en attente de traitement"),
("Commande en cours de traitement"),
("Commande expédiée");

INSERT INTO acheter (id_article, id_utilisateur, id_statut, qte_article, date_commande) values
(2, 3, 1, 2, '2022-01-01'),
(1, 2, 3, 1, '2022-04-22'),
(4, 1, 2, 5, '2022-11-24'),
(5, 3, 1, 3, '2022-06-30'),
(3, 3, 1, 3, '2022-03-14');

INSERT INTO devis (date_devis, prix_devis, id_utilisateur) values
('2022-04-22', 600, 2),
('2022-03-16', 150, 1),
('2022-10-08', 200, 3);

insert into type_contact (nom_type_contact) values
("Demande de devis"),
("Demande de renseignements"),
("Autre demande");

INSERT INTO contact (date_contact, message_contact, id_utilisateur, id_type_contact) values
('2022-04-22', 'message.....', 3,1),
('2022-12-26', 'message.....', 1,2),
('2022-09-05', 'message.....', 2,3);

SELECT nom_utilisateur, prenom_utilisateur, nom_article, qte_article, date_commande FROM acheter
INNER JOIN article ON acheter.id_article = article.id_article
INNER JOIN utilisateur ON acheter.id_utilisateur = utilisateur.id_utilisateur;

SELECT nom_article, sum(qte_article) as "Quantité totale", round(sum(qte_article*prix_article),2) AS "Chiffre d'affaire" FROM acheter 
INNER JOIN article ON acheter.id_article = article.id_article
GROUP BY article.id_article; 


SELECT nom_utilisateur, date_contact, nom_type_contact, message_contact FROM contact
INNER JOIN utilisateur ON contact.id_utilisateur = utilisateur.id_utilisateur 
INNER JOIN type_contact ON contact.id_type_contact = type_contact.id_type_contact
ORDER BY contact.date_contact;

SELECT date_devis, nom_utilisateur, description_devis, prix_devis FROM devis
INNER JOIN utilisateur ON devis.id_utilisateur = utilisateur.id_utilisateur
ORDER BY devis.date_devis;