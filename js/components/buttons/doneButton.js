//^ Import de la fonction qui écoute le clic sur le bouton
import { startFunctionEventListenerOnTasksButtons } from '../../utils/startFunctionEventListener.js';

//^ Import du calcul de nombre de tâches dans le header
import { statistiquesDesTachesDansLeHeader } from '../../layouts/header/statisticsTasks.js';

export function doneButtonFunction() {
        //console.log("doneButton.JS >> doneButtonFunction chargée");

        //* Récupération des éléments utiles
        // Tous les boutons "tâche exécutée"
        let tableauDesBoutonsTacheExecutee = document.querySelectorAll('.executee');

        //console.log(tableauDesBoutonsTacheExecutee);

        
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
                 * Je commence par récupérer la section "terminées" pour y inclure la tâche et son contenu
                 * 
                 * Ensuite, une fois dans la section "terminées", je devrai :
                 *      -> Cacher la description de la tâche
                 *      -> Changer les icônes
                 */

                //> 1 - Je récupère la section "terminées" pour inclure ma tâche terminée 
                // Je récupère la section contenant les tâches déjà exécutées
                let sectionDesTachesTerminees = document.querySelector('#main__right .all-tasks');
                // J'y inclus la tache courante cliquée
                sectionDesTachesTerminees.appendChild(tacheExecuteeParenteDuBoutonClique);
                //! Ça fonctionne dès ce point, mais pourquoi ça supprime la div de la section "à exécuter" alors que je suis censé l'avoir dupliquée ? (approfondir la doc appendChild)

                //> 2 - Je change la classe de la tache courante 'to-do' en 'done'
                tacheExecuteeParenteDuBoutonClique.classList.remove('one-task__to-do');
                tacheExecuteeParenteDuBoutonClique.classList.add('one-task__done');

                //> 3 - J'ajoute la classe pour masquer la description
                // Je récupère la description
                let descriptionDeLaTache = tacheExecuteeParenteDuBoutonClique.querySelector('.description');
                descriptionDeLaTache.classList.add('display-none');
                //console.log(sectionDesTachesTerminees)

                //> 4 - Je change les icones d'interactions quand la tâche est en mode "terminée"
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

                //> 5 - Je change le contenu du bouton "afficher - masquer la description"
                let boutonAfficherOuMasquerDescription = tacheExecuteeParenteDuBoutonClique.querySelector('.afficher-masquer-description');
                boutonAfficherOuMasquerDescription.textContent = "Afficher la description"

                //> 5 - Je mets à jour le nombre de tâches dans le header
                statistiquesDesTachesDansLeHeader();
        }
        

        //* Je crée un événement
        // J'utilise la fonction créée dans les Utils JS
        startFunctionEventListenerOnTasksButtons(tableauDesBoutonsTacheExecutee, marquerLaTacheCommeExecutee);
}