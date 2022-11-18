-- Exercice 2 SELECT inner join :
-- afficher la liste des eleves avec leur id, nom, prenom, nom classe,
-- afficher la liste des séances avec leur id, nom, date, nom_type, nom et prenom de l'utilisateur.

SELECT id_eleve, nom_eleve, prenom_eleve, nom_classe FROM eleve INNER JOIN classe ON eleve.id_eleve = classe.id_classe;

SELECT id_seance, nom_seance, date_seance, nom_type, nom_utilisateur, prenom_utilisateur FROM seance 
INNER JOIN utilisateur ON seance.id_utilisateur = utilisateur.id_utilisateur 
INNER JOIN type_seance ON seance.id_type = type_seance.id_type ;

-- CORRECTION 
SELECT id_eleve, nom_eleve, prenom_eleve, nom_classe
FROM eleve INNER JOIN classe ON
eleve.id_classe = classe.id_classe;

SELECT id_seance, nom_seance, date_seance, nom_utilisateur, prenom_utilisateur, nom_type
FROM seance 
INNER JOIN utilisateur ON seance.id_utilisateur = utilisateur.id_utilisateur
INNER JOIN type_seance ON seance.id_type = type_seance.id_type;