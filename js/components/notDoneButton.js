//* Ce fichier a le même fonctionnement que le fichier "doneButton.js"
export function notDoneButtonFunction() {
        console.log('notDoneButton.js >> notDoneButtonFuction chargée');

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
                 let tacheAAnnulerParenteDuBoutonClique = paramBoutonAnnulerTache.currentTarget.parentNode.parentNode.parentNode;

                //> 1 -Je crée la nouvelle div dans la section "à exécuter" pour inclure la tache à rebasculer
                // Je crée une nouvelle div pour inclure le contenu de la div à basculer
                let nouvelleDivDeTacheAExecuter = document.createElement('div');
                nouvelleDivDeTacheAExecuter.appendChild(tacheAAnnulerParenteDuBoutonClique);

                // Puis je récupère la section des tâches non exécutées pour y inclure ma div nouvellement créée
                let sectionDesTachesAExecuter = document.querySelector('#main__left .all-tasks');
                sectionDesTachesAExecuter.appendChild(nouvelleDivDeTacheAExecuter);

                //> 2 - Je fais apparaitre la description de la tâche
                nouvelleDivDeTacheAExecuter.querySelector('.description').classList.remove('display-none');

                //> 3 - Je change les icônes de la div
                // Je récupère la div des icones à masquer, je les masque
                tacheAAnnulerParenteDuBoutonClique.querySelector('.icones-de-tache-terminee').classList.add('display-none');

                // Je récupère la div des icônes à afficher, je les affiche
               tacheAAnnulerParenteDuBoutonClique.querySelector('.icones-de-tache-a-executer').classList.remove('display-none');

        }


        //* Événement à détecter
        tableauDesBoutonsBasculerTacheEnNonTerminee.forEach(boutonDeLaTacheAAnnuler => {
                // L'élément retourné est un objet !
                boutonDeLaTacheAAnnuler.addEventListener('click', rebasculerLaTacheCommeNonExecutee, boutonDeLaTacheAAnnuler);
        })
}