<h1>FIND YOUR SUPERHERO</h1>

<h3>Tout savoir sur findyoursuperhero</h3>

En janvier 2022, alors que nous étions de nouveau dans une crise covid, j'ai pu constater une fois de plus l'impact négatif que cela causait auprès des jeunes enfants, et notamment celui sur ma fille. Dans un âge où ils devraient avoir leurs esprits centrés sur l'imaginaire et l'apprentissage de nouvelles capacités, ils étaient plutôt dans un environnement extrêment lourd et stressant, inhibant leur développement.

Durant cette période, j'étais en pleine découverte de React, et, conformément à mon leitmotiv d'être utile aux autres (c'est aussi pour cela que j'ai choisi d'être développeur), je me suis interrogé sur comment faire en sorte que mon apprentissage de cette techno de mon côté, puisse être transposé de façon bénéfique à ma fille et ses camarades de classe dans un 1er temps, puis à n'importe qui dans un second temps.

C'est ainsi que me vint l'idée de créer une petite application web sur un thème qui pourrait stimuler leur imaginaire l'espace de quelques instants, et pour cela quoi de mieux que les superhéros ! Je voulais aussi pour le coup que cela puisse aussi leur servir afin de découvrir simplement l'usage d'un site / application web en dehors d'un cadre scolaire. Il faudrait donc qu'il y ait un minimum de fonctionnalités, mais avec un maximum d'informations afin de permettre à ces utilisateurs souvent néophytes de pouvoir se répérer et utiliser l'application.
Ainsi, basé sur une API publique, Findyoursuperhero était né et sera hébergé en ligne pendant 1an (www.findyoursuperhero.com).
Les coûts d'hébergement et de fonctionnement étant devenus trop important, j'ai décidé de ne pas continuer l'hébergement en ligne.

Cependant, cette application, aussi simple soit-elle, je l'ai conçue pour les autres, et elle fonctionne très bien de manière locale sur un ordianteur chez soi.
Ce serait dommage que cela ne puisse pas profiter à d'autres, c'est pourquoi je la mets à disposition de tous.

<h3>Que peut-on faire avec ?</h3>

Rechercher des informations sur d'éventuels superhéros, par rapport au nom que l'on aura rentré dans le champ de recherche et, bien sûr, suivant ce que la base de donnée a comme infos conernant la demande.
Comme évoqué avant, c'est une application qui se veut la plus simple possible et pensée essentiellement pour être utilisée par des enfants !

<h3>Marche à suivre et installation </h3>

1. Il vous faudra d'abord télécharger localement l'application sur votre machine. Pour ce faire deux solutions :

-   cloner le projet dans votre dossier de destination via la commande git clone suivi de l'url que vous donnera github pour cela
-   télécharger directement le fichier compressé et l'ouvrir dans votre répertoire de destination

2. Il vous faudra installer l'application en lançant la commande npm install depuis le dossier où est l'application

3. Afin de pouvoir communiquer avec l'api, il vous faudra vous enregistrer auprès d'elle afin d'obtenir une clé d'ahutentification. Cette clé, il faudra la mettre à la place de ${apikey} à la ligne 66 du fichier character.jsx (qui se situe dans src/pages/) ou bien créer une variable d'environnement REACT_APP_ApiKey si vous savez faire et mettre donc en valeur la clé obtenue.
   Pour obtenir cette clé, voici le lien de l'api où il faudra vous inscrire : https://superheroapi.com/ .
   Il est à noter que sans elle, vous ne pourrez pas utiliser correctement l'application puisque les recherches de personnage n'aboutiront pas.

<h3>Lancer l'application</h3>

Toujours depuis le dossier où vous avez installé l'application, lancez la commande `npm start` et l'application devrait démarrer quelques secondes après, ouvrant un onglet de navigation via le port localhost:3000 (le plus souvent) ou un autre.
Voilà, ça y est, vous pouvez maintenant l'utiliser 😊
