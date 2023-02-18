export function taskInProgressButtonFunction() {
        console.log("taskInProgress.JS >> taskInProgressButtonFunction chargée");

       //* Récupération des éléments utiles
      // Tous les boutons "en cours"
      let tableauDesBoutonsEnCours = document.querySelectorAll('.en-cours');

       
        //* Fonctions de traitement pour les événements déclenchés
        function changerEtatDeLaTache(paramBoutonEnCours) {

                // Je récupère le bouton "en cours" de la tâche courante
                let boutonEnCours = paramBoutonEnCours.currentTarget;
                // Je récupère la tâche courante
                let tacheCourante = boutonEnCours.parentNode.parentNode.parentNode.parentNode;
                // Je définis un booléen correspondant l'état "en cours" ou non de la tâche.
                let tacheEnCours;

                /**
                *> Ici je gère le traitement lorsque le bouton "En Cours" est cliqué
                * Condition : 
                * -> premier passage : si tacheEnCours vaut undefined
                *               -> changer état à en cours
                *               -> changer la valeur de tacheEnCours à TRUE
                * 
                * 
                * -> Si la tache cliquée n'est pas déjà en cours
                *                -> Si une autre tâche est en cours :
                *                               -> arrêter cette tâche
                *                               -> lancer la tâche cliquée
                *               -> Sinon, si aucune autre tâche est déjà en cours :
                *                                -> lancer la tâche cliquée
                * -> Si la tâche cliquée est déjà en cours :
                *                               -> arrêter cette tâche
                */

                if(tacheEnCours != true) {
                        tacheCourante.classList.add('task-in-progress');
                        tacheEnCours = true;
                        console.log(tacheEnCours)
                }
                else if(tacheEnCours == true) {
                        // Je récupère la tâche qui contient la classe "task-in-progress"
                        let tacheDejaEnCours = document.querySelector('.task-in-progress');
                        // Je supprime cette classe de cette tâche
                        tacheDejaEnCours.classList.remove('task-in-progress')
                        // Je passe la variable tacheEnCours à FALSE
                        tacheEnCours = false;
                }

        }



       //* Événement au clic sur un bouton de "tâche en cours"
        tableauDesBoutonsEnCours.forEach(boutonDeTacheEnCours => {
                boutonDeTacheEnCours.addEventListener('click', changerEtatDeLaTache, boutonDeTacheEnCours);
        })

        
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