-- ajouter dans la table categorie les enregistrements suivants :
-- test,
-- dev,
-- tssr,
Insert into categorie(nom_categorie)
values 
('test'),
('dev'),
('tssr');

-- ajouter  dans la table exemple les enregistrements suivants :
-- test 10, 2001-11-26, 1, pas null, 2,
-- test 11, 2019-05-11, 0, valeurs, 3,
-- test 12, 2008-12-24, 1, valeurs, 1.

-- Bonus : faire en sorte que le nom_exemple soit en majuscule (en utilisant la méthode upper), 
-- et pas_null_exemple soit à l'envers en utilisant la méthode reverse)

insert into exemple(nom_exemple, date_exemple, valide_exemple, pas_null_exemple, id_categorie) values
(upper("test 10"), "2001-11-26", 1, reverse("pas null"), 2),
(upper("test 11"), "2019-05-11", 0, reverse("valeurs"), 3),
(upper("test 12"), "2008-12-24", 1, reverse("valeurs"), 1);



