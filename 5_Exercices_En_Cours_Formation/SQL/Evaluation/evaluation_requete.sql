INSERT INTO ceinture (couleur_ceinture) values
('blanche'), 
('jaune'),
('orange'),
('verte'),
('bleu'),
('marron'), 
('noire'); 


INSERT INTO judoka(nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_ceinture) values 
('Lachance', 'Dominique', 16, 'F', 2),
('Porter', 'Gilbert', 18, 'H', 3), 
('Lemaître', 'Anne', 15, 'F', 4), 
('Robert', 'Juliette', 12, 'F', 1),
('Montminy', 'Pierre', 17, 'H', 5), 
('Charrette', 'Pascal', 21, 'H', 6), 
('Guay', 'Émilie', 19, 'F', 6),
('Maheu', 'Louise', 14, 'F', 4), 
('Poulin', 'Raymond', 26, 'H', 7), 
('Dupret', 'Alain', 20, 'H', 6);

INSERT INTO competition (nom_competition, date_debut_competition, date_fin_competition) values
('judo31', '2021-02-06', '2021-02-07'), 
('Judo11', '2021-02-27', '2021-02-28'), 
('Judo81', '2021-03-20', '2021-03-21'),
('Judo82', '2021-04-17', '2021-04-18'); 

INSERT INTO participer (id_competition, id_judoka) values
(1, 1),
(1, 3),
(1, 4),
(2, 2),
(2, 5),
(2, 6),
(2, 9),
(3, 1),
(3, 9),
(4, 1),
(4, 3),
(4, 8),
(4, 4);

UPDATE judoka SET id_ceinture = id_ceinture + 1 where id_ceinture < 5; 

INSERT INTO judoka(nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_ceinture) values 
('Dupont', 'Jeanne', 16, 'F', 4),
('Durant', 'Tom', 18, 'H', 2); 

DELETE FROM judoka where id_judoka > 10;

SELECT nom_judoka, prenom_judoka, couleur_ceinture FROM judoka 
INNER JOIN ceinture ON judoka.id_ceinture = ceinture.id_ceinture
where couleur_ceinture = 'verte';
 
 -- afficher le nombre de participants à la compétition dont le nom est judo31 
SELECT count(id_judoka) as 'Nombre de participants' FROM participer 
 INNER JOIN competition ON participer.id_competition = competition.id_competition
 WHERE nom_competition = 'judo31';

 
SELECT nom_judoka, prenom_judoka, age_judoka, sexe_judoka FROM judoka 
INNER JOIN  participer ON judoka.id_judoka = participer.id_judoka
INNER JOIN competition ON participer.id_competition = competition.id_competition 
where nom_competition = 'judo81';

-- -afficher la liste des judokas étant ceinture marron et dont l’âge est supérieur à 19 ans.
SELECT nom_judoka, prenom_judoka  FROM judoka 
INNER JOIN ceinture ON judoka.id_ceinture = ceinture.id_ceinture
WHERE couleur_ceinture = "marron" AND age_judoka > 19; 

-- afficher la liste des judokas avec leurs couleurs de ceinture (inner join avec la table niveau) et trier cette liste par ordre alphabétique (tri sur le champ nom_judoka). 
SELECT nom_judoka, prenom_judoka, couleur_ceinture FROM judoka 
INNER JOIN ceinture ON judoka.id_ceinture = ceinture.id_ceinture
ORDER BY nom_judoka asc; 



