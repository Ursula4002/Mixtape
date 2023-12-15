# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- What to do here -->

Context Mixtape
Vous êtes un passionné de musique qui cherche à se faire engager comme DJ. Vous aimeriez mettre en valeur vos goûts musicaux incroyables en présentant une sélection de vos chansons préférées, également connue sous le nom de "mixtape". Puisque vous savez déjà comment écrire du code React, quelle meilleure utilisation pourrait-il y avoir pour pratiquer React Context ?

Cette application vous permettra de mettre en pratique vos compétences en matière de React Context en mettant en place un Context qui stockera globalement les paramètres de visualisation de la mixtape. Elle comprendra un composant wrapper dédié pour son Provider qui met en place l'état React et une fonction de mise à jour de l'état.

Instruction
Créer un MixtapeContext
Commençons le projet en créant un mixtapeContext. Vous utiliserez cet objet Context dans toute l'application pour stocker les données de la liste de lecture.
Créez un nouveau fichier mixtapeContext.jsx. Dans ce fichier, créez et exportez une variable nommée mixtapeContext dont la valeur est un nouvel objet Context créé à l'aide de l'API React.createContext().

L'objet mixtapeContext sera utilisé dans cette application par le biais d'un Provider. Cela vous permettra de définir l'état de sa valeur.
Créez et exportez un composant de fonction nommé MixtapeProvider. Il doit recevoir deux props :

children et songs Il doit rendre les children enveloppés dans un mixtapeContext.Provider. Pour l'instant, passez un objet qui contient la valeur songs comme valeur du Provider.

En plus de la valeur songs, mixtapeContext va stocker et fournir deux éléments d'état :

genre : initialement tous ; sera utilisé ultérieurement pour filtrer les chansons en fonction du genre
sortOrder : initinitialement "ascending"; sera ultérieurement utilisé pour trier les chansons par date
Les valeurs genre et sortOrder et leurs fonctions de mise à jour seront utiles aux consommateurs du MixtapeContext. Ajoutez ces quatre variables au props du composant mixtapeContext.Provider.

Rendu des chansons
Maintenant que vous avez créé un composant MixtapeProvider, utilisons-le ! Ouvrez App.js et examinez le composant App et la variable songs qu'il contient. N'hésitez pas à modifier les chansons comme vous le souhaitez - tant que chacune contient un artiste, un genre, un nom et une année. Une fois que vous avez fini de personnaliser votre mixtape, enveloppez le contenu rendu de App avec le MixtapeProvider, en passant songs comme props.

Travaillons à l'obtention d'un composant App qui rende la liste des chansons. Un composant SongList partiellement terminé est fourni dans le fichier songList.jsx. Importez SongList dans App.js et rendez-la dans le MixtapeProvider.

Pour que SongsList puisse récupérer cette liste de chansons, ainsi que les paramètres de filtrage et d'ordre, il doit récupérer l'objet Contexte. Dans songList.jsx, utilisez useContext() pour récupérer le genre, sortOrder et les songs de MixtapeContext en haut du composant SongsList.

Maintenant que le composant SongList a accès aux songs fournies, il est temps de les afficher à l'écran. Enfin, de la meilleure musique ! Par commodité, votre espace de travail comporte déjà un composant Song dans un fichier Song.js. Chaque élément du tableau de songs possède des propriétés qui peuvent être directement utilisées comme props du composant Song.

Filtrage et tri
Maintenant que vos chansons sont rendues, nous allons remplir les contrôles de filtrage par genre et de tri par date dans la mixtape.
Dans App.js, importez le composant Controls existant du fichier Controls.js. Rendez ensuite un composant Controls dans le composant App, au-dessus de SongList. Vous pouvez maintenant supprimer le TODO du composant Controls.

Dans Controls.js, au début du composant Controls, récupérez les éléments genre et sortOrder ainsi que leurs fonctions de mise à jour d'état dans MixtapeContext.

Dans le composant Controls, ajoutez un <select>comme enfant du <div> retourné. Réglez sa valeur sur le genre du MixtapeContext et ses enfants devraient être cinq <option> :

Un dont la valeur est "all" et le contenu du texte est All
Un pour le hip hop, le rap, le rock et la pop
Maintenant que la sélection a les options dont elle a besoin, nous pouvons l'utiliser pour contrôler le contexte. Donnez au <select> un gestionnaire d'événement onChange qui met à jour la valeur genre du MixtapeContext.

Le contrôle du genre n'est utile que si les chansons sont filtrées en fonction de ce genre. Dans le composant SongList, filtrez les chansons affichées en fonction de la valeur du genre. Si le genre est "all", toutes les chansons doivent être affichées ; sinon, seules les chansons dont la propriété .genre correspond au genre du contexte doivent être affichées.

Travaillons ensuite sur sortOrder. Il sera également contrôlé par des éléments du composant Controls. De retour dans le composant Controls, ajoutez cette fois un composant <button> après le composant <select>. Le texte du bouton doit afficher la valeur actuelle de sortOrder. Ensuite, donnez au <button> un gestionnaire d'événement onClick qui fait basculer l'ordre entre "ascending" et "descending".

Enfin, retournez au composant SongList et triez les chansons filtrées. Si l'ordre est "ascending", les années inférieures doivent être placées en premier ; si l'ordre est "descending", les années supérieures doivent être placées en premier. À ce stade, toutes les commandes doivent être correctement connectées. Vous devriez pouvoir filtrer les chansons par genre et modifier leur ordre de tri. C'est très bien !