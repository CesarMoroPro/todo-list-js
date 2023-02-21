//^ Import de la fonction qui écoute le clic sur le bouton
import { startFunctionEventListenerOnTasksButtons } from '../../utils/startFunctionEventListener.js';

//^ Import du calcul de nombre de tâches dans le header
import { statistiquesDesTachesDansLeHeader } from '../../layouts/header/statisticsTasks.js';

export function removeButtonFunction() {

        //* Je récupère les éléments utiles
        // Tous les boutons "supprimer"
        let tableauDesBoutonsSuppression = document.querySelectorAll('.supprimer');


        //* Fonction de traitement
        function supprimerLaTache(paramBoutonSupprimer){
                
                //> Je récupère la tâche parente entière du bouton de suppression cliqué
                let tacheCourante = paramBoutonSupprimer.currentTarget.parentNode.parentNode.parentNode.parentNode;
                //> Je récupère le contenu normal de la tâche courante
                let contenuNormal = tacheCourante.querySelector('.tache-contenu-normal');

                //> Processus de suppression cette tâche
                /**
                 * Ce mode de suppression ne conserve aucune trace de la tâche (contrairement au composant d'archivage)
                 * Il faut donc demander une confirmation à l'utilisateur pour valider la suppression
                 * Je veux que la demande de confirmation apparaisse dans la tâche elle-même
                 * 
                 * [En HTML] : Créer une div (class="demande-suppression") pour permettre de préparer le message de confirmation, en display-none
                 * [en HTML] : elle contient un texte et deux boutons "oui" et "non"
                 * 
                 * Puis en JS, appliquer un display-none au contenu normal de la tache courante
                 * en JS toujours, supprimer le display-none de la div qui demande à l'utilisateur de confirmer la suppression
                 * 
                 * Puis, événement conditionnel
                 */
                //> 1 - Modifier le background de la tâche courante ENTIÈRE pour le mettre en "couleur fixes" (aux couleurs du survol)
                tacheCourante.classList.add('one-task__done-confirmation-suppression');

                //> 2 - Masquer la div de contenu normal de la tâche
                contenuNormal.classList.add('display-none');

                //> 3 - Afficher la div de demande de suppression
                // Récupérer cette div 
                let divDemandeDeSuppression = tacheCourante.querySelector('.demande-suppression');
                // Supprimer le display-none de cette div
                divDemandeDeSuppression.classList.remove('display-none');

                //> 4 - Traitement des réponses à la demande de confirmation pour supprimer la tâche
                // Je récupère les boutons "oui" et "non"
                let ouiButton = divDemandeDeSuppression.querySelector('.confirmation');
                let nonButton = divDemandeDeSuppression.querySelector('.annulation');

                // Au clic sur "OUI", je déclenche une fonction
                ouiButton.addEventListener('click', () => {

                        // J'affiche le message de confirmation de la suppression pendant 3 secondes
                        // Je récupère l'élément
                        let successSuppressionMessage = document.querySelector('#alert-success-suppressionTask-message');
                        // Je supprime la classe display-none
                        successSuppressionMessage.classList.remove('display-none');

                        // Timer pour masquer le message après 3 secondes
                        setInterval(() => {
                                successSuppressionMessage.classList.add('display-none');
                        }, 3000);

                        // Je supprime définitivement la tâche courante entièrement
                        tacheCourante.remove();

                        //^ 5 - Je mets à jour le nombre de tâches dans le header
                        statistiquesDesTachesDansLeHeader();
                })

                // Au clic sur "non", j'annule la suppression demandée
                // Donc ne pas supprimer la tâche et la réafficher
                nonButton.addEventListener('click', () => {

                        // Je masque la div de demande de confirmation à l'utilisateur
                        divDemandeDeSuppression.classList.add('display-none');
                        // Je réaffiche normalement le contenu de la tâche à ne pas supprimer
                        contenuNormal.classList.remove('display-none');
                        // Je supprime la classe "one-task__done-confirmation-suppression" sur la tâche complète
                        tacheCourante.classList.remove('one-task__done-confirmation-suppression');
                })
        }


        //* Événement attaché aux boutons de suppression d'une tâche
        // J'utilise la fonction créée dans les Utils JS
        startFunctionEventListenerOnTasksButtons(tableauDesBoutonsSuppression, supprimerLaTache);

        // tableauDesBoutonsSuppression.forEach(unBoutonDeSuppression => {
        //         unBoutonDeSuppression.addEventListener('click', supprimerLaTache, unBoutonDeSuppression);
        // })
}