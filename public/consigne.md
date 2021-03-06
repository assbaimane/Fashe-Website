# E-commerce "Flash."

## Instructions :
- Technology: React | Hooks
- Use of components
- Use of state & useSate, props
- Use and implementation of several conditional displays
- Tree must be worked
- All methods that you find relevant are accepted (linked to React)
- Create the pages of the "Flashe" site. (in appendix).
- Private repository: cs_project_react_firstname1_firstname2
- Mandatory Trello per team
- You can put the images you want
 

## Features
- Use "React Router Dom" for navigation:
    X- an "active" class is added to the clicked page
    - the "heart" and "basket" icons are functional.
    X- When clicking on the basket icon, a dropdown appears with the selected items and a summary of each item + the total price (see image in appendix).
    - The item number is updated on the basket icon
    X- Via the dropdown, possibility to have access to the basket page
    X- When clicking on the heart icon, you can access the "favorite" page

- Each product:
    X- has one/several tags (best seller, new, old, sale) and a category (women, men, kids, accessory)
    X- if the product is "new" or "old", a span is added at the top left of the product with the tag in question (see image in appendix)
    - possibility of activating a "sold". The price (-20%) and the display change automatically.
    X- at the hover, possibility of adding the product to my basket (add to cart = 1) + possibility of liking the product so that it is automatically added to the "favorite" page
    X- when you click on the product, a "products-details" page with the product in question and its details is displayed (more details in the next part)

- on the product-detail page is:
    - the data of the clicked product (image, name, price, description, category)
    - possibility of adding the product to my basket via the "add to cart" btn + possibility of choosing the quantity
    - possibility to choose size and color in addition

- on the "product" page is
    X- an alert at the top of the page which shows us the number of products on sale
    X- a filter that sorts according to the categories of each product (a sentence is updated each time with the number of products found)
    X- a search bar that filters with product names

- on the "basket" page is:
    X- all the products added to the basket with their quantities and the total price of each one.
    X- possibility to change the quantity and the price adapts automatically
    - the final price that the user will have to pay for all the items in the basket

- on the "favorite" page is:
    X- the same result as the "basket" page with two different loans.
    X- the final price of all products is no longer there
    X- an "add" btn which adds the product in question to the basket and removes it from the favorite page

- on the "home" page is:
    X- a carousel with a btn on it which leads to the product page
    X- a filter that filters in relation to product tags (maximum 4 products displayed)

X- on the "about" & "contact" page, do as in the images (static)
X- the footer as in the picture (static)




# E-commerce "Flashe." 

## Consignes : 
- Technologie : React | Hooks 
- Utilisation des composants
- Utilisation des state & useSate, props
- Utilisation et mises en place de plusieurs affichages conditonnelle 
- Arbor??sence doit ??tre travaill?? 
- Toute les m??thodes que vous trouvez pertiantes sont accept??es ( li??e ?? React)
- Cr??er les pages du site "Flashe." (en annexe).
- Repo priv?? : cs_projet_react_prenom1_prenom2
- Trello obligatoire par ??quipe
- Vous pouvez mettre les images que vous voulez
 

## Fonctionalit??s 
- Utiliser " React Router Dom " pour la navigation : 
    - une class "active" se rajoute sur la page cliqu??
    - l'icon "coeur" et "panier" sont fonctionnels. 
    - Au clique de l'icon panier, un dropdown apparait avec les articles choisis et un r??sum?? de chaque article + le prix total (voir image en annexe). 
    - Le nbr d'article se met ?? jour sur l'icon du panier 
    - Via le dropdown, possibilit?? d'avoir acc??s ?? la page panier
    - Au clique de l'icon coeur, possibilit?? d'avoir acc??s ?? la page "coup de coeur"

- Chaque produit : 
    - a un/plusieurs tags (best seller, new, old, sale) et une cat??gorie (women,men,kids,accessoire)
    - si le produit est "new" ou "old", un span se rajoute en haut ?? gauche du produit avec le tag en question (voir image en annexe)
    - possibilit?? d'activ?? un "sold". Le prix (-20%) et l'affichage se change automatiquement. 
    - ?? l'over, possibilit?? d'ajouter le produit dans mon panier (add to cart = 1 ) + possibilit?? de liker le produit afin qu'il rajoute automatiquement  sur la page "coup de coeur" 
    - au clique du produit, une page "products-details" avec le produit en question et ses d??tails s'affiche (plus de d??tails dans la partie suivante)

- sur la page product-detail se trouve : 
    - les donn??es du produit cliqu?? (image, nom, prix, description, categorie)
    - possibilit?? d'ajouter le produit dans mon panier via le btn  "add to cart" + possibilit?? de choisir la quantit??
    - possibilit?? de choisir taille et color en plus

- sur la page "product" se trouve
    - une alert en haut de page qui nous montre le nbr de produit sold??
    - un filtre qui trie par rapport aux cat??gories de chaque produit (une phrase se met ?? jours avec ?? chaque fois le nbr de produit trouv??)
    - une barre de recherche qui filtre avec les noms des produits

- sur la page "panier" se trouve : 
    - tous les produits ajout??s dans le panier avec leurs quantit??s et le prix total de chaqu'un. 
    - possibilit?? de changer la quantit?? et le prix s'adapte automatiquement 
    - le prix final que l'user devrai payer pour tous les articles du panier

- sur la page "coup de coeur" se trouve : 
    - le m??me r??sultat que la page "panier" ?? deux diff??rencse pr??t. 
    - le prix final de tous les produits n'y est plus
    - un btn "add" qui rajoute le produit en qeustion dans le panier et le supprime de la page coup de coeur

- sur la page "home" se trouve : 
    - un carrousel avec un btn dessus qui amm??ne vers la page product
    - un filter qui filtre par rapport aux tags des produits (affich?? maximum 4 produits)

- sur la page "about" & "contact", faire comme sur les images (static)
- le footer comme sur l'image (static)