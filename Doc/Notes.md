### Romain Schertenleib

# 08.11.2024

# Introduction du projet

- On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]

# Lecture du CDC 

- Point general:
    - Contrôler un serpent qui se déplace sur une grille
    - Manger de la nourriture (des pommes) pour grandir
    - Eviter de se heurter aux murs ou à son propre corps. 
    - Le score augmente à chaque fois que le serpent mange de la nourriture.

# meeting sur Git:[staged] / [stashed] files


# Une Introduction à JavaScript

- Javascript =/  java 
- JavaScript peut s’exécuter partout temps qu'il y a un moteur Javascript
- un langage de programmation "sur" 

- javaScriipt dans le navigateur est capable de :
    - Ajouter / modifier le HTML
    - Interaction avec l'utilisateur 
    - requêtes réseau 
    - obtenir et definir des cookies
    - se souvenir des données client 
    - les outils de développement nous permettent de voir les erreurs, avec F12

# Fondamentaux JavaScript 

- balise "script" 
    - 
    la balise "script" peut etre insérés dans n'importe quelle partie d'un document HTML 

- Le balisage moderne 
    -
    
    - Attribut type : 
        - 
        Avant l'attribut type était obligatoire, maintenant il n'est plus nécessaire.
        il peut aussi être utilisé pour les modules JavaScript.

- Scripts externes 
    - 
    Le fichier de script est attaché à HTML avec l’attribut src :

    - script src="/chemin/vers/script.js"></script
        
    Ici, /chemin/vers/script.js est un chemin absolu du script depuis la racine du site. On peut également fournir un chemin relatif à partir de la page en cours. Par exemple src="script.js" signifierait un fichier "script.js" dans le dossier courant.

- Les Variables 
    -
    Pour une variable en javaScript, il faut utiliser le mot-clé "LET"

    on peut aussi utiliser : var au lieu de let
    
    - EX :

        let message;

        let message; message = 'Hello';

        let message; mesage = 'Hello!'; alert(message);

        let user = 'John', age = 25, message = 'Hello';

- Constantes 
    - 
    Pour declarer une constante, on peut utiliser const

    - Ex :

        const myBirthday = '18.04.1982';

        const myBirthday = '18.04.1982'; myBirthday = '01.01.2001';

lecture jusqu'a la comparaisons 

semaine prochaine relire une partie et la documenter

# 15.11.2024
 
théorie sur les fichier présent dans la base de code:

- Un fichier de config de vite

- Un fichier gitignore pour ne pas mettre /node_modules dans le repo

- Un fichier package.json qui spécifie les dépendances

- Un fichier package-lock.json qui spécifie les modules installés

- Le html du jeu

- Les différent fichiers JS qui gérent chacun une chose différente (un pour la nourriture, un pour le score, etc)

- Le dossier node_modules qui contient tout ce que a besoin pour faire tourner le serveur

# pour la prochaine fois

afficher le score et gerer la colision entre la pomme et le serpent 

# 22.11.2024
## objectif du jour 
- Faire le git agenda
- commencer a faire les colisions
## Discution du debut du cours 
- Daily scrum chaqun pour soit 
- point JSP mis en place 4 pour le projet
- JDT fait avec git hub 

