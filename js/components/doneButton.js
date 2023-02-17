export function doneButtonFunction() {
        //console.log("doneButton.JS >> doneButtonFunction chargée");

        //* Récupération des éléments utiles
        // Tous les boutons "tâche exécutée"
        let tableauDesBoutonsTacheExecutee = document.querySelectorAll('.executee');

        
        //* Fonctions de traitement pour les événements déclenchés
        function marquerLaTacheCommeExecutee(paramBoutonDeTacheExecutee) {
                /**
                 * NOTE : puisque l'argument retourné est un objet, on doit l'exploiter comme tel.
                 * Ce qui signifie atteindre sa propriété "currentTarget" pour le manipuler
                 */

                // Je récupère la tâche associée au bouton cliqué (troisième parent du bouton)
                let tacheExecuteeParenteDuBoutonClique  = paramBoutonDeTacheExecutee.currentTarget.parentNode.parentNode.parentNode.parentNode;
                
                /**
                 * > Je veux déplacer cette tâche de la section "à exécuter" vers la section "terminées"
                 * Je commence par créer une nouvelle div dans la section "terminées" pour y inclure la tâche et son contenu
                 * 
                 * Ensuite, une fois dans la section "terminées", je devrai :
                 *      -> Cacher la description de la tâche
                 *      -> Changer les icônes
                 */

                //> 1 - Je crée la nouvelle div dans la section "terminées" pour inclure ma tâche terminée 
                // Je crée une nouvelle div de tâche terminée (donc sans oublier les class nécessaires !)
                let nouvelleDivDeTacheTerminee = document.createElement('div');
                // J'inclus dans cette div ma tache récupérée via l'argument dans l'event Listener
                nouvelleDivDeTacheTerminee.appendChild(tacheExecuteeParenteDuBoutonClique);
                // Maintenant, j'inclus cette div dans la section des "tâches terminées"
                // Je récupère la section contenant les tâches déjà exécutées
                let sectionDesTachesTerminees = document.querySelector('#main__right .all-tasks');
                sectionDesTachesTerminees.appendChild(nouvelleDivDeTacheTerminee);
                //! Ça fonctionne dès ce point, mais pourquoi ça supprime la div de la section "à exécuter" alors que je suis censé l'avoir dupliquée ? (approfondir la doc appendChild)

                //> 2 - J'ajoute la classe pour masquer la description
                // Je récupère la description
                let descriptionDeLaTache = nouvelleDivDeTacheTerminee.querySelector('.description');
                descriptionDeLaTache.classList.add('display-none');

                //> 3 - Je change les icones d'interactions quand la tâche est en mode "terminée"
                /**
                 * Premièrement, je récupère la div des icônes "en cours" et "exécutée" de la tâche ciblée (rappel : la tache parente)
                 * J'applique simplement la classe "display-none" pour la masquer
                 * Je ne la supprime pas puisque l'utilisateur pourra rebasculer la tâche en non-terminée si besoin
                 * 
                 * Deuxièmement, je récupère la div des icônes "basculer", "archiver", et "supprimer" de la tâche ciblée
                 * Je supprime la classe "display-none" pour afficher cette div
                 * Je ne supprime pas cette div car elle devra apparaitre quand l'utilisateur aura terminée cette tâche
                 */
                let divDesIconesDeTacheAExecutee = tacheExecuteeParenteDuBoutonClique.querySelector('.icones-de-tache-a-executer');
                divDesIconesDeTacheAExecutee.classList.add('display-none');

                let divDesIconesDeTacheTerminee = tacheExecuteeParenteDuBoutonClique.querySelector('.icones-de-tache-terminee');
                divDesIconesDeTacheTerminee.classList.remove('display-none');

                //> 4 - Je change le contenu du bouton "afficher - masquer la description"
                let boutonAfficherOuMasquerDescription = tacheExecuteeParenteDuBoutonClique.querySelector('.afficher-masquer-description');
                boutonAfficherOuMasquerDescription.textContent = "Afficher la description"
        }
        

        //* Je crée un événement
        tableauDesBoutonsTacheExecutee.forEach(boutonDeLaTacheExecutee => {
                // NOTE : l'élément retourné est un objet. Il faudra l'exploiter comme tel dans la fonction de traitement
                boutonDeLaTacheExecutee. addEventListener('click', marquerLaTacheCommeExecutee, boutonDeLaTacheExecutee);
        })
}