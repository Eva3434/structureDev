-- Exercice 2 insert :
-- Ajouter dans la base scolaire les enregistrements suivants :
-- role ->utilisateur, moderateur, admin,
-- utilisateur-> Tétrault, Guilllaume, Gtétrault, gt@free.fr, Azerty77, 1
-- utilisateur-> Laramée, Eglantine , EglantineL , el@free.fr, Azerty99, 2
-- utilisateur-> Labbé, Nadine , nLabbé ,ln@free.fr, Azerty44, 3
-- Mettre à jour les enregistrements :
-- changer le role des utilisateurs dont le prénom commence  est plus petit que L par la valeur (id_role -> 3)
-- Bonus : mettre à jour le mot de passe de Guillaume -> Azerty2022 en md5 (utiliser la fonction SQL md5)

INSERT INTO role_utilisateur(nom_role) values ("utilisateur"), ("moderateur"), ("admin");
INSERT INTO utilisateur(nom_utilisateur, prenom_utilisateur, login_utilisateur, mail_utilisateur, password_utilisateur, id_role) values
("Tétrault", "Guilllaume", "Gtétrault", "gt@free.fr", "Azerty77", 1),
("Laramée", "Eglantine" , "EglantineL" , "el@free.fr", "Azerty99", 2),
("Labbé","Nadine" , "nLabbé" ,"ln@free.fr", "Azerty44", 3);
UPDATE utilisateur SET id_role = 3 WHERE prenom_utilisateur < 'L';
UPDATE utilisateur SET password_utilisateur = md5('Azerty2022') WHERE prenom_utilisateur = 'Guillaume';

-- Exercice 3 insert 
-- Ajouter dans la base scolaire les enregistrements suivants :
-- classe -> nom_classe(6G1, 6G5, 5G9),
-- eleve  -> 
-- ( Bernard, Emmanuelle, 11, F, 1, 1), 
-- ( Turner, Rodrigue, 12, G, 0, 3),
-- (Patrice, Cloutier, 10, G, 1, 2),
-- (Marjolaine, Faucher, 11, F, 1, 1).
-- type_seance ->nom_type(études, sport, club),
-- seance (étude, 2022-10-06 17:00:00, 1, 1),
-- (foot, 2022-08-22 13:15:00, 2, 2),
-- (échec, 2022-10-06 17:00:00, 3, 2),
-- participer -> (1, 1), (1, 2), (1, 3), (2,1), (3,2).
-- Mathieu MITH — Aujourd’hui à 13:53
-- renommer la classe 6G1 - > 6G7,     6G5 -> 6G3,
-- Mettre le nom de tous les élèves en majuscule (fonction upper),
-- Changer la date de la séance 2 -> 2022-01-11 18:00:20.

INSERT INTO classe(nom_classe) VALUES ("6G1"),("6G5"),("5G9");
INSERT INTO eleve(nom_eleve, prenom_eleve, age_eleve, sexe_eleve, boursier_eleve, id_classe) values
( "Bernard", "Emmanuelle", 11, "F", 1, 1), 
( "Turner", "Rodrigue", 12, "G", 0, 3),
("Patrice", "Cloutier", 10, "G", 1, 2),
("Marjolaine", "Faucher", 11, "F", 1, 1);
INSERT INTO type_seance(nom_type) VALUES ("études"), ("sport"), ("club");
INSERT INTO seance(nom_seance, date_seance, id_type, id_utilisateur) VALUES
("étude", "2022-10-06 17:00:00", 1, 1),
("foot", "2022-08-22 13:15:00", 2, 2),
("échec", "2022-10-06 17:00:00", 3, 2);
INSERT INTO participer(id_seance, id_eleve) VALUES 
(1, 1), (1, 2), (1, 3), (2,1), (3,2);
UPDATE classe SET nom_classe = "6G7" WHERE nom_classe = "6G1";
UPDATE classe SET nom_classe = "6G3" WHERE nom_classe = "6G5";
UPDATE eleve set nom_eleve = UPPER(nom_eleve) where nom_eleve = nom_eleve;
-- ou 
UPDATE eleve set nom_eleve = UPPER(nom_eleve);
UPDATE seance SET date_seance = "2022-01-11 18:00:20" where id_seance = 2; 

-- Exercice 3 suite :
-- Ajouter dans la table détail les enregistrements suivants :
-- (18, bon travail, 0, 1, 2), (12, participe et fait de son mieux, 0, 1, 3), (7, ne fais rien et est en retard, 1, 2, 1)
-- Remplacer les notes supérieure à 12 par 19 et remplacer les matériel oublié (1 ) par 0.

INSERT INTO detail(note_detail, commentaire_seance, materiel_oublie_detail, id_seance, id_eleve) VALUES
(18, "bon travail", 0, 1, 2), 
(12, "participe et fait de son mieux", 0, 1, 3), 
(7, "ne fais rien et est en retard", 1, 2, 1);
UPDATE detail SET note_detail = '19' WHERE note_detail > '12';
UPDATE detail SET materiel_oublie_detail = "0" WHERE materiel_oublie_detail = "1";
