-- Exercice 3 SELECT INNER JOIN :
-- Depuis la base de données ci-dessus (caisse).
-- Ecrire les requêtes suivantes :
-- Afficher la liste des tickets avec leur id, leur date et le nom et prénom du vendeur,
-- Afficher la liste des articles du ticket (id_ticket = 1) avec leur nom , leur prix, la quantité.
-- Afficher la liste de tous les articles vendu pour tout les tickets dont la date est plus petite que 2022-01-01 00:00:00.


SELECT id_ticket, date_ticket, nom_vendeur, prenom_vendeur FROM ticket INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur; 
SELECT nom_article, prix_article, qtx_article FROM ajouter 
INNER JOIN article ON ajouter.id_article = article.id_article
INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket 
WHERE ticket.id_ticket = 1;
SELECT nom_article FROM article INNER JOIN ajouter ON article.id_article = ajouter.id_article
INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket WHERE date_ticket < "2022-01-01 00:00:00";


-- CORRECTION

SELECT id_ticket, date_ticket, nom_vendeur, prenom_vendeur FROM
ticket INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur;

SELECT nom_article, prix_article, qtx_article FROM ajouter
INNER JOIN article ON ajouter.id_article = article.id_article
WHERE ajouter.id_ticket = 1;

SELECT nom_article, description_article, prix_article FROM ajouter 
INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket
INNER JOIN article ON ajouter.id_article = article.id_article
WHERE ticket.date_ticket < '2022-01-01 00:00:00';
