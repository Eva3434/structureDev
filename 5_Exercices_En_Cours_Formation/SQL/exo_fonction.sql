-- Exercice 4 SELECT fonction :
-- Créer une requête qui va retourner la somme  de tout les articles de la table article (prix_article),
-- Créer une requête qui va retourner la somme de tout les articles (table ajouter) (prix_article*qtx_article),
-- Créer une requête qui va retourner la somme de tout les articles du ticket 1 (table ajouter) (somme (prix_article * qtx_article)). 

SELECT round(sum(prix_article),2) FROM article;
SELECT sum(prix_article*qtx_article) FROM ajouter INNER JOIN article ON ajouter.id_article = article.id_article;
SELECT sum(prix_article*qtx_article) FROM ajouter 
INNER JOIN article ON  ajouter.id_article = article.id_article
WHERE ajouter.id_ticket = 1;

-- Bonus : 
-- Afficher la liste des articles depuis ajouter  avec :  id, nom, prix, quantité , prix total (prix*qtx) du ticket 1.

SELECT round(sum(prix_article*qtx_article), 2) AS montant, article.id_article, nom_article, prix_article, qtx_article  FROM ajouter
INNER JOIN article ON ajouter.id_article = article.id_article
WHERE ajouter.id_ticket = 1;


-- CORRECTION 
-- requête 1 afficher la somme totale des articles (prix_article)
SELECT round(sum(prix_article), 2) AS somme_totale FROM article;

-- requête 2 afficher la somme totale des articles (prix * qtx) de ajouter
SELECT ROUND(SUM(prix_article * qtx_article), 2) AS total FROM ajouter 
INNER JOIN article ON ajouter.id_article = article.id_article;

-- REquête 3 total du ticket 1
SELECT ROUND(SUM(prix_article * qtx_article), 2) AS total FROM ajouter 
INNER JOIN article ON ajouter.id_article = article.id_article
WHERE ajouter.id_ticket = 1;

-- requête BONUS sous total de chaque articles (prix * qtx) dans le ticket 1
SELECT ajouter.id_article, nom_article, prix_article, qtx_article,
CONCAT(ROUND(prix_article * qtx_article, 2), " €") AS sous_total  
FROM ajouter 
INNER JOIN article ON ajouter.id_article = article.id_article
WHERE ajouter.id_ticket = 1;

-- Exemple de requête sous total (article * qtx) et total ticket 1 :

SELECT ajouter.id_article, nom_article, prix_article, qtx_article, 
round((qtx_article * prix_article),2) as sous_total, 
(select round(sum(prix_article*qtx_article),2) 
FROM ajouter INNER join article on ajouter.id_article = article.id_article 
WHERE ajouter.id_ticket = 1) AS total
FROM ajouter INNER join article on ajouter.id_article = article.id_article 
WHERE ajouter.id_ticket = 1;

 -- Afficher le chiffre d'affaires total de chaque vendeur.

SELECT nom_vendeur, prenom_vendeur, round(sum(qtx_article * prix_article),2) AS "Chiffre d'affaire" FROM ticket
INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur
INNER JOIN ajouter ON ticket.id_ticket = ajouter.id_ticket 
INNER JOIN article ON ajouter.id_article = article.id_article
 GROUP BY vendeur.id_vendeur ;
 -- CORRECTION 

 SELECT nom_vendeur AS nom, prenom_vendeur AS prenom, 
ROUND(SUM(prix_article * qtx_article),2) AS 'chiffre d\'affaire' FROM ajouter 
INNER JOIN article ON ajouter.id_article = article.id_article
INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket
INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur
GROUP BY ticket.id_vendeur;