-- Exercice 1 requête de consultation :
-- Depuis la base de données scolaire, écrire les requêtes de consultation suivante :
-- -afficher la liste des classes avec leurs id et leurs nom,
-- -afficher la liste des séances avec leurs id, nom, date, id_type, id_utilisateur,
-- -afficher la liste des détail avec leur id, note, commentaire, matériel oublie, id_seance et id_eleve triée par note (croissant),
-- -afficher la liste des élèves avec leur id, nom, prénom, âge, sexe triée par nom (croissant ), prénom (croissant) et dont le sexe = F,
-- -afficher la liste des élèves avec leur id, nom, prénom, âge, sexe triée par nom (décroissant ), prénom (décroissant) et dont le sexe = G,

SELECT id_classe AS id, nom_classe AS nom FROM  classe;
SELECT id_seance as id, nom_seance AS nom, date_seance AS date, id_type AS type, id_utilisateur AS utilisateur FROM seance;
SELECT id_detail, note_detail, commentaire_seance, materiel_oublie_detail, id_seance, id_eleve FROM detail ORDER BY note_detail ASC ;
SELECT id_eleve, nom_eleve, prenom_eleve, age_eleve, sexe_eleve FROM eleve WHERE sexe_eleve="F" ORDER BY nom_eleve ASC, prenom_eleve ASC;
SELECT id_eleve, nom_eleve, prenom_eleve, age_eleve, sexe_eleve FROM eleve WHERE sexe_eleve="G" ORDER BY nom_eleve DESC, prenom_eleve DESC;

-- Bonus : 
-- afficher tout les utilisateurs avec  en majuscule (nom, prenom), mail, password, trié par mail,
-- Afficher toutes les séances avec id,  nom en majuscule, trié par date décroissant.

SELECT UPPER(nom_utilisateur), UPPER(prenom_utilisateur), mail_utilisateur, password_utilisateur FROM utilisateur ORDER BY mail_utilisateur;
SELECT id_seance, UPPER(nom_seance), date_seance FROM seance ORDER BY date_seance DESC;



-- CORRECTION
select id_classe, nom_classe from classe;
select id_seance, nom_seance, date_seance, id_type, id_utilisateur from seance;
select id_detail, note_detail, commentaire_seance, materiel_oublie_detail, id_seance, id_eleve
from detail order by note_detail asc;
select id_eleve, nom_eleve, prenom_eleve, age_eleve, sexe_eleve from eleve where sexe_eleve = 'F'
order by nom_eleve ASC, prenom_eleve ASC;
select id_eleve, nom_eleve, prenom_eleve, age_eleve, sexe_eleve from eleve where sexe_eleve = 'G'
order by nom_eleve DESC, prenom_eleve DESC;

-- Bonus
select upper(nom_utilisateur), upper(prenom_utilisateur), mail_utilisateur, password_utilisateur 
from utilisateur order by mail_utilisateur ASC;
select id_seance, upper(nom_seance), date_seance from seance order by date_seance DESC;