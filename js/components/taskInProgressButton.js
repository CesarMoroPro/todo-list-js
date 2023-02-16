export function taskInProgressButtonFunction() {
        //console.log("taskInProgress.JS >> taskInProgressButtonFunction chargée");

       //* Récupération des éléments utiles
      // Je récupère toutes les tâches sous forme de tableau exploitables avec forEach (donc querySelector, pas getElements !)
       let tableauDesTaches                     = document.querySelectorAll('.one-task__to-do');

       //* Je crée des éléments utiles
       /**
        * Ici je crée une variable qui sera attribuée à l'état en cours on non d'une tâche
        * Par défaut, toutes les tâches sont à l'arrêt, la variable aucuneTacheEnCours est donc vraie, donc initialisée à true
        */
        let aucuneTacheEnCours = true;

       
       
        //* Fonctions de traitement pour les événements déclenchés
        function changerEtatEnCoursDeLaTache(paramBoutonEnCours) {
                let boutonEnCours = paramBoutonEnCours.target;
                        console.log(boutonEnCours);

                if (boutonEnCours.classList.contains('task-in-progress')){
                        console.log('test')
                }

        }



       //* Je crée un événement :
       /**
        * Pour chaque tache du tableauDesTaches
        * Je récupère son bouton "En Cours".
        * Puis au clic sur ce bouton,
        * Je déclenche la fonction qui doit prendre en paramètre le bouton qui a été cliqué et sa tâche correspondante.
        * Pour faire ça, je dois les stocker dans une variable au préalable
        */
       tableauDesTaches.forEach(uneTachePrecise => {
                let tableauDesBoutonsEnCours = uneTachePrecise.querySelector('button.en-cours');

                tableauDesBoutonsEnCours.addEventListener('click', changerEtatEnCoursDeLaTache, tableauDesBoutonsEnCours);
       })

       /**
        * Au clic sur le bouton "boutonEnCours" d'une tâche, une fonction de traitement se déclenche
        * Il s'agit d'une liste d'éléments, donc boucle !
        */
        // tableauDesBoutonsEnCours.forEach(justeUnBoutonEnCoursEtRienDePlus => {
        //         let leBoutonQuiEstClique = justeUnBoutonEnCoursEtRienDePlus;
        //         justeUnBoutonEnCoursEtRienDePlus.addEventListener('click', changerEtatDeLaTacheCliquee, leBoutonQuiEstClique);
        // });



        // /**
        //         * Ici je gère le traitement lorsque le bouton "En Cours" est cliqué
        //         * Condition : 
        //         * -> Si la tache cliquée n'est pas déjà en cours 
        //         *                -> Si une autre tâche est en cours :
        //         *                               -> arrêter cette tâche
        //         *                               -> lancer la tâche cliquée
        //         *               -> Sinon, si aucune autre tâche est déjà en cours :
        //         *                                -> lancer la tâche cliquée
        //         * -> Si la tâche cliquée est déjà en cours :
        //         *                               -> arrêter cette tâche
        //         */
        // function changerEtatDeLaTacheCliquee(paramBoutonQuiEstClique) {


        //         tableauDesTaches.forEach(uneSeuleTache => {
        //                 // Si la tache cliquée précisémment contient la class 'task-in-progress' ET qu'elle est déjà en cours
        //                 if (uneSeuleTache.classList.contains('task-in-progress')) { // && cette tache est déjà en cours
        //                         // Supprimer la classe 'task-in-progress' de cette tache précise

        //                         // Et passer le booléen "aucuneTacheEnCours" à TRUE.
        //                 }
                        

        //                 // Si une tâche contient la class 'task-in-progress',
        //                 if (uneSeuleTache.classList.contains('task-in-progress')) {
        //                         // Alors il faut la supprimer de la tache qui la contient
        //                         // Puis l'ajouter sur la tache qui est cliquée
        //                         //Et enfin passer le booléen "aucuneTacheEnCours" à FALSE
                                


        //                         aucuneTacheEnCours = false;
        //                         uneSeuleTache.classList.remove('task-in-progress');

        //                         console.log("ici")
        //                 } else {
        //                         aucuneTacheEnCours = true;
        //                         uneSeuleTache.classList.add('task-in-progress');
        //                 }
        //         })

        //         if (aucuneTacheEnCours) {
        //                 console.log("coucou")
        //                 aucuneTacheEnCours = false;

        //         } else {

        //         }
        // }
}