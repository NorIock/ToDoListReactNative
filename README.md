# ToDoListReactNative

Il s'agit de ma premire applicatio sous React Native afin de le tester et de voir les différences avec React.

Pour cette toDoList qui ne possède q'un front-end et pas de back-end, j'ai utilisé les Hooks, mais aussi React Native Element et Expo. J'ai aussi beaucoup utilisé les callBack function afin de mieux découper les différents components et d'être plus dans la Good Practice. Sur mes précédent projet React, mes composant étaient trop gros car j'évitais de transmettre des variables entre components parents et enfants ou j'utilisais UseContext.

Tout se fait à partir du même écran. Vous avez la possibilité de créer les listes de taches, vous pouvez les supprimer et modifier le statut de En Cours à Fait ou inversement.

Sur l'écran, vous avez un Header, la liste qui s'affiche ou un message vous invitant à en créer une s'il n'y en a pas, et un bouton ajouter une tâche. En appuyant sur le bouton, une fenêtre s'ouvre permettant d'ajouter une nouvelle tâche. En touchant la tâche, vous pouvez soit la supprimer, soit modifier son statut.
