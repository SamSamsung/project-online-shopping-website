# project-online-shopping-website
Ce projet vous est proposé par Zheng Eddy, Leroy Lemonnier Victor et Lelouch Samuel 

Le projet a été finalisé et rendu lors de la journée du vendredi 22 avril 2022. 

Pour le bon fonctionnement du site internet, il serait préférable et recommandé de lancer le programme sur le moteur de recherche: `chrome`

Enfin, pour le bon déroulement du lancement du site, nous vous demandons d’ouvrir le fichier “accueil.html”.

## Explication du projet : 
```
Notre groupe composé de Lelouch Samuel, Zheng Eddy et Leroy Lemonnier Victor, avons eu pour objectif de créer un site de vente en ligne, le plus réaliste possible. Nous nous sommes inspirés de nombreux sites, pour rendre la mise en page la plus compréhensible et la plus esthétique possible, tel que Amazon ou Fnac. 
Nous avons décidé d’avoir une proposition d’articles la plus élargie possible sur un grand nombre de thèmes différents. C’est pour cela que nous avons créé 5 catégories : celle des vêtements, celle de la technologie, celle du sport, celle de l’électroménager et enfin celle des meubles. Dans chaque catégorie, nous proposons 8 articles.
Sur tous les sites de vente en ligne, il y a toujours une bannière en haut de page pour rappeler sur quel site l’utilisateur se trouve. Nous avons reproduit ce modèle en ajoutant un logo fait par Ava Gasman, cousine de Samuel. Nous avons aussi ajouté une barre de recherche, un panier et une connexion que nous n'avons pas pu développer dans un cadre limité de temps du projet.
De plus, nous avons ajouté une autre bannière, en bas de page cette fois-ci, pour mettre les “À propos” du site où nous retrouvons la politique de confidentialité, la page qui sert à nous contacter (nous, créateurs suprêmes de ce site merveilleux) où nous proposons de nous contacter soit par téléphone soit par mail (Ils en ont de la chance d’avoir notre numéro). On retrouve également la page glossaire (en espagnol comme notre professeur génial de NSI, monsieur Senot, nous a demandé). On y définit chaque terme qui qualifie les catégories ventes. De plus, on y explique le choix du nom de notre entreprise, bientôt internationale et maître du monde : le “Flash” renvoie à la vitesse des livraisons. “Fives” représente les nombreuses catégories que propose notre site (elles sont au nombre de 5). Il y a une faute dans le mot “Fives” vous direz nous. Eh bien non, tout cela est fait dans le seul but d’avoir une référence aux noms des 3 programmeurs exceptionnels de ce site, VES sont les initiales de Victor-Eddy-Samuel. Enfin dans ce bas de page, nous avons ajouté un formulaire, que chaque utilisateur peut remplir, pour nous faire part de son avis sur notre site, par le biais de réponses à des questions, dans un premier temps, puis par un avis rédigé de maximum 300 caractères. 

Nous avons essayé de faire de notre mieux pour l’affichage. Nous avons utilisé les pourcentage pour que les pages du site s'adaptent au mieux à chaque ordinateur. Pour autant nous sommes pas tout à fait sûr que cela fonctionne très bien, nous nous excusons par avance.    
```

### Les fonctions javascript libres : 

Pour le projet, nous devions programmer une fonction javascript par personne:

- Samuel a donc codé les cookies fonctionnelle qui permettent lorsque l’on change de pages de garder les dernière information tel que la couleur du thème. 
- Victor a programmé le compteur de caractères dans la page avis. De plus, la fonction javascript bloque le nombre de caractères à 300. C'est-à-dire que l'utilisateur ne peut pas écrire au-dessus de 300 caractères.  
- Eddy s'est occupé de la fonction javascript qui lorsque l’utilisateur est inactif sur le site pendant plus de 60 secondes, le site bascule sur une page d’attente qui demande à l'utilisateur s’il est toujours présent.  



## Repartition du projet : 

Nous avons essayé de nous répartir le projet de manière la plus équitable possible : 

- Samuel s’est occupé de programmer la page d’accueil, ainsi que la page glossaire en espagnol et le fichier css “style”;
- Victor les pages spéciales, telles que les pages politique de confidentialité, contactez-nous et votre avis ainsi que les fichiers css “page_politique_style” et “dark_theme”; 
- Eddy une partie pages objets et les fichiers css “page_objets” et “page_avis_contact_glossaire” 

Arborescence du projet : 

```
C:.
│   accueil.html
│   readme.txt
│
├───repertoire_img
│   │   cookie.png
│   │   ecran-veille.gif
│   │   eddy.jpg
│   │   logo.png
│   │   logo_ico.png
│   │
│   └───images_objets
│       ├───Electromenager
│       │       electromenager1.jpeg
│       │       electromenager2.jpeg
│       │       electromenager3.jpeg
│       │       electromenager4.jpeg
│       │       electromenager5.jpeg
│       │       electromenager6.jpeg
│       │       electromenager7.jpeg
│       │       electromenager8.jpeg
│       │
│       ├───Meubles
│       │       meubles1.jpeg
│       │       meubles2.jpeg
│       │       meubles3.jpeg
│       │       meubles4.jpeg
│       │       meubles5.jpeg
│       │       meubles6.jpeg
│       │       meubles7.jpeg
│       │       meubles8.jpeg
│       │
│       ├───Sport
│       │       sport1.jpeg
│       │       sport2.jpeg
│       │       sport3.jpeg
│       │       sport4.jpeg
│       │       sport5.jpeg
│       │       sport6.jpeg
│       │       sport7.jpeg
│       │       sport8.jpeg
│       │
│       ├───Technologie
│       │       technologie1.jpeg
│       │       technologie2.jpeg
│       │       technologie3.jpeg
│       │       technologie4.jpeg
│       │       technologie5.jpeg
│       │       technologie6.jpeg
│       │       technologie7.jpeg
│       │       technologie8.jpeg
│       │
│       └───Vetements
│               vetement1.jpeg
│               vetement2.jpeg
│               vetement3.jpeg
│               vetement4.jpeg
│               vetement5.jpeg
│               vetement6.jpeg
│               vetement7.jpeg
│               vetement8.jpeg
│
├───repertoire_pages
│   │   page_avis.html
│   │   page_compte.html
│   │   page_contact.html
│   │   page_electromenager.html
│   │   page_glossaire.html
│   │   page_meubles.html
│   │   page_panier.html
│   │   page_politique.html
│   │   page_sport.html
│   │   page_technologie.html
│   │   page_vetements.html
│   │
│   └───imports
│           banner_pop_up.js
│           head.js
│           informations.js
│           sources_img.js
│
└───repertoire_style
        cookies.js
        cookies_dark_theme.js
        dark-theme.css
        fonctions.js
        page_avis_contact_glossaire.css
        page_objets.css
        page_politique_style.css
        style.css
```
