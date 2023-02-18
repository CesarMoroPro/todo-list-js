export function taskInProgressButtonFunction() {
        //console.log("taskInProgress.JS >> taskInProgressButtonFunction chargée");

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
                * -> Si tacheEnCours vaut UNDEFINED ou FALSE (donc aucune tâche en cours)
                *               -> Ajouter la classe 'task-in-progress' à la tâche cliquée
                *               -> changer la valeur de tacheEnCours à TRUE
                * 
                * -> Sinon, si tacheEnCours vaut TRUE(donc une tâche est déjà en cours)
                *               -> Si la tâche en cours est la tâche recliquée :
                *                               -> Lui supprimer la classe 'task-in-progress'
                *                               -> Changer la valeur de tacheEnCours à FALSE
                * 
                *               -> Sinon, si la tâche en cours est une autre tâche que la tâche cliquée :
                *                               -> Lui supprimer la classe 'task-in-progress'
                *                               -> Ajouter cette classe à la tâche cliquée
                *                               -> Changer la valeur de tacheEnCours à TRUE
                */

                if(tacheEnCours == undefined || tacheEnCours == false) {

                        tacheCourante.classList.add('task-in-progress');
                        tacheEnCours = true;
                        console.log(tacheEnCours)

                } else if(tacheEnCours == true) {
                        
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
}