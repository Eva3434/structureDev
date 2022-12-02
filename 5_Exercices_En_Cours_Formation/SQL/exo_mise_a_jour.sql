-- Exercice 1 requête de mise à jour update :
-- Remplacer la valeur nom_exemple de la table exemple par 'mise à jour' pour les enregistrements (id_exemple -> 1, 3).

-- méthode 1 avec l'opérateur =
update exemple set nom_exemple = 'mise à jour' where id_exemple = 1;
update exemple set nom_exemple = 'mise à jour' where id_exemple = 3;

-- méthode 2 avec l'opérateur de comparaison IN (valeur1, valeur2, valeur3, ...) pour appliquer sur les valeurs entre ()
update exemple set nom_exemple = 'mise à jour' where id_exemple IN (1, 3);

-- LIKE qui sert a rechercher toutes les valeurs commençant par mi, finissant par ur ("%ur") ou contenant mise ("%mise%")
update exemple set nom_exemple = 'mise à jour' where nom_exemple like "mi%";