export function doneButtonFunction() {
        console.log("doneButton.JS >> doneButtonFunction chargée");

                //* Récupération des éléments utiles
                // Tous les boutons "tâche exécutée"
                let tableauDesBoutonsTacheExecutee = document.querySelectorAll('.executee');
                // La section contenant les tâches à exécuter
                let sectionDesTachesAExecuter = document.querySelector('#main__left .all-tasks');
                // La sectoin contenant les tâches déjà exécutées
                let sectionDesTachesTerminees = document.querySelector('#main__right .all-tasks');
                console.log(sectionDesTachesTerminees);



                //* Je crée des éléments utiles


                //* Fonctions de traitement pour les événements déclenchés
                function marquerLaTacheCommeExecutee(paramBoutonDeTacheExecutee) {
                        /**
                         * NOTE : puisque l'argument retourné est un objet, on doit l'exploiter comme tel.
                         * Ce qui signifie atteindre sa propriété "currentTarget" pour le manipuler
                         */

                        // Je récupère la tâche associée au bouton cliqué (troisième parent du bouton)
                        let tacheExecuteeParenteDuBoutonClique  = paramBoutonDeTacheExecutee.currentTarget.parentNode.parentNode.parentNode;
                        // console.log(tacheExecuteeParenteDuBoutonClique);


                }
                

                //* Je crée un événement
                tableauDesBoutonsTacheExecutee.forEach(boutonDeLaTacheExecutee => {
                        // NOTE : l'élément retourné est un objet. Il faudra l'exploiter comme tel dans la fonction de traitement
                        boutonDeLaTacheExecutee. addEventListener('click', marquerLaTacheCommeExecutee, boutonDeLaTacheExecutee);
                })
                

}