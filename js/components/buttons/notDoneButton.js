//^ Import du calcul de nombre de tâches dans le header
import { statistiquesDesTachesDansLeHeader } from '../../layouts/header/statisticsTasks.js';

export function notDoneButtonFunction() {
        // console.log('notDoneButton.js >> notDoneButtonFuction chargée');

        //* Récupération des éléments utiles
        // Tous les boutons "Rebasculer la tâche en non-terminée"
        let tableauDesBoutonsBasculerTacheEnNonTerminee = document.querySelectorAll('.basculer-en-non-executee');


        //* Fonction de traitement pour les événements déclenchés
        function rebasculerLaTacheCommeNonExecutee(paramBoutonAnnulerTache) {
                 /**
                 * NOTE : puisque l'argument retourné est un objet, on doit l'exploiter comme tel.
                 * Ce qui signifie atteindre sa propriété "currentTarget" pour le manipuler
                 */

                 // Je commence par récupérer la tâche associée au bouton cliqué
                 let tacheAAnnulerParenteDuBoutonClique = paramBoutonAnnulerTache.currentTarget.parentNode.parentNode.parentNode.parentNode;

                //> 1 - Je récupère la section "à exécuter" pour inclure ma tâche à rebasculer
                // Je récupère la section des tâches non exécutées pour y inclure ma div nouvellement créée
                let sectionDesTachesAExecuter = document.querySelector('#main__left .all-tasks');
                sectionDesTachesAExecuter.appendChild(tacheAAnnulerParenteDuBoutonClique);

                //> 2 - Je change la classe de la tache courante 'done' en 'to-do'
                tacheAAnnulerParenteDuBoutonClique.classList.replace('one-task__done', 'one-task__to-do');
                //console.log(sectionDesTachesAExecuter);

                //> 3 - Je fais apparaitre la description de la tâche
                tacheAAnnulerParenteDuBoutonClique.querySelector('.description').classList.remove('display-none');

                //> 4 - Je change les icônes de la div
                // Je récupère la div des icones à masquer, je les masque
                tacheAAnnulerParenteDuBoutonClique.querySelector('.icones-de-tache-terminee').classList.add('display-none');

                // Je récupère la div des icônes à afficher, je les affiche
               tacheAAnnulerParenteDuBoutonClique.querySelector('.icones-de-tache-a-executer').classList.remove('display-none');

                 //> 5 - Je change le contenu du bouton "afficher - masquer la description"
                 tacheAAnnulerParenteDuBoutonClique.querySelector('.afficher-masquer-description').textContent = "Masquer la description";

                //> 6 - Je mets à jour le nombre de tâches dans le header
                statistiquesDesTachesDansLeHeader();
        }


        //* Événement à détecter
        tableauDesBoutonsBasculerTacheEnNonTerminee.forEach(boutonDeLaTacheAAnnuler => {
                // L'élément retourné est un objet !
                boutonDeLaTacheAAnnuler.addEventListener('click', rebasculerLaTacheCommeNonExecutee, boutonDeLaTacheAAnnuler);
        })
}