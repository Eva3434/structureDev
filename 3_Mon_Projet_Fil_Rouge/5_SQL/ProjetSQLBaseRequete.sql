insert into droit (nom_droit) values 
('Client'),
('Admin'); 

insert into produit (nom_produit, description_produit, prix_produit, stock_produit) values
("Miel de montagne", "miel de montagne en pot de 400gr", 8, 100),
("Miel de garrigues", "miel de garrigues en pot de 400gr", 8, 100),
("Miel de chataignier", "miel de chataignier en pot de 400gr", 8, 100),
("Miel de lavande", "miel de lavande en pot de 400gr", 8, 100),
("Pollen", "pollen sec pot 200gr", 9, 100),
("Gelée royale", "pot gelée royale pot 15gs", 25, 100),
("Coffert", "coffret deux pots de miel", 17, 100);

insert into categorie (nom_categorie) values 
('Miels'),
('Produits de la ruche'),
('Coffrets cadeaux'); 

insert into appartenir (id_categorie, id_produit) values
(1,1),
(1,2),
(1,3),
(1,4),
(2,5),
(2,6),
(3,7);

insert into coordonnees(nom_coordonnees, prenom_coordonnees, num_rue_coordonnees, nom_rue_coordonnees, 
code_postal_coordonnees, ville_coordonnees, pays_coordonnees, tel_coordonnees, mail_coordonnees) values
('Deserres','Agathe',20, 'rue Sébastopol',91700, 'SAINTE-GENEVIÈVE-DES-BOIS', 'France', '01.32.08.97.07', 'AgatheDeserres@teleworm.us'),
('Souplet','Coralie',83, 'place Stanislas',44100, 'NANTES', 'France','02.03.38.07.22','CoralieSouplet@jourrapide.com'),
('Vaillancour',"Frontino", 65, "rue Porte d'Orange",81100, 'CASTRES', 'France','05.11.38.36.83','FrontinoVaillancour@jourrapide.com'),
('Desjardins','Leone',98, 'rue de la Hulotais',69800, 'SAINT-PRIEST', 'France', '04.17.15.01.15','LeoneDesjardins@armyspy.com'),
('Abril','Antoine',80, 'rue des Coudriers', 03000, 'MOULINS', 'France', '04.87.99.31.18', 'AntoineAbril@dayrep.com'); 

insert into utilisateur(login_utilisateur, password_utilisateur, id_droit) values
('AgatheDeserres@teleworm.us', 'Azerty', 1),
('CoralieSouplet@jourrapide.com', 'Azerty',1),
('FrontinoVaillancour@jourrapide.com', 'Azerty',1),
('LeoneDesjardins@armyspy.com', 'Azerty',1),
('AntoineAbril@dayrep.com', 'Azerty',1);

insert into commander(id_coordonnees, id_produit, quantite, date_commande) values
(1,7,2, '2021-02-07'),
(2,4,1, '2021-03-21'),
(4,1,5, '2021-04-18'),
(1,3,2,  '2021-02-28'); 

-- afficher les commandes avec nom et prenom clients
SELECT nom_coordonnees, prenom_coordonnees, nom_produit, quantite, date_commande FROM commander
INNER JOIN produit ON produit.id_produit = commander.id_produit
INNER JOIN coordonnees ON coordonnees.id_coordonnees = commander.id_coordonnees;

-- afficher le chiffre d'affaire par produit
SELECT nom_produit, sum(quantite) as "Quantité totale", round(sum(quantite*prix_produit),2) AS "Chiffre d'affaire" FROM commander 
INNER JOIN produit ON commander.id_produit = produit.id_produit
GROUP BY produit.id_produit; 
