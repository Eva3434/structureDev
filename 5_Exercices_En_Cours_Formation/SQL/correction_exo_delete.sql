-- Exercice 1 DELETE : 
-- Supprimer l'utilisateur qui à pour id_utilisateur ->2.

-- Exercice 2 DELETE :
-- Supprimer la séance qui à pour id_seance -> 2

-- suppression des entrés dans la table participer
delete from participer where id_seance >=2;
-- suppression des entrés dans la table detail
delete from detail where id_seance = 2;
-- suppression des entrés dans la table seance
delete from seance where id_seance >=2;
-- suppression de l'entrés dans la table utilisateur
delete from utilisateur where id_utilisateur = 2;

-- Exercice 3 DELETE :
-- Supprimer l'élève qui à pour id_eleve -> 3

-- suppression des entrés dans la table participer
delete from participer where id_eleve = 3;
-- suppression des entrés dans la table detail
delete from detail where id_eleve = 3;
-- suppression des entrés dans la table eleve
delete from eleve where id_eleve = 3;