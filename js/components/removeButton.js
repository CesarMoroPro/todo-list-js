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

                //> Je supprime cette tâche
                /**
                 * Ce mode de suppression ne conserve aucune trace de la tâche (contrairement au composant d'archivage)
                 * Il faut donc demander une confirmation à l'utilisateur pour valider la suppression
                 * Je veux que la demande de confirmation apparaisse dans la tâche elle-même
                 * 
                 * [En HTML] : Créer une div (class="demande-suppression") pour permettre de préparer le message de confirmation, en display-none
                 * [en HTML] : elle contient un texte et deux boutons "oui" et "non"
                 * 
                 * Puis en JS, appliquer un display-none au contenu normal de la tache courante
                 * en JS, supprimer le display-none de la div qui demande à l'utilisateur de confirmer la suppression
                 * 
                 * Événement :
                 *      -> clic sur "oui" :
                 *              -> supprime la tâche définitivement
                 *      -> clic sur "non" :
                 *              -> réassigne la classe display-none sur la div de demande de confirmation de suppression
                 *              -> et retire la classe display-none du contenu de la tâche
                 *              -> et retire la classe one-task__done-confirmation-suppression de la tâche complète
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

                //> 4 - Au clic sur "oui", supprimer définitivement la tâche
                // Je récupère le bouton "oui"
                let ouiButton = divDemandeDeSuppression.querySelector('.confirmation');
                // Au clic, je déclenche une fonction
                ouiButton.addEventListener('click', () => {
                        // Elle supprime la tâche courante entièrement
                        tacheCourante.remove();
                        // J'affiche un message de confirmation de la suppression pendant 3 secondes
                        let messageConfirmationSuppression = document.createElement('p');
                        messageConfirmationSuppression.textContent = "La tâche a été définitivement supprimée.";
                        messageConfirmationSuppression.classList.add('message-de-confirmation-apres-suppression');
                        // J'intègre ce paragraphe en dessus de la section "#main__right .all-tasks"
                        document.querySelector('#main__right .all-tasks').parentNode.appendChild(messageConfirmationSuppression);

                        // Timer pour garder le message pendant 3 secondes
                        setInterval(() => {
                                messageConfirmationSuppression.remove();
                        }, 3000);
                })

                //> 5 - Au clic sur "non", ne pas supprimer la tâche et la réaffchier
                // Je récupère le bouton "non"
                let nonButton = divDemandeDeSuppression.querySelector('.annulation');
                // Au clic, je déclenche une fonction
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
        tableauDesBoutonsSuppression.forEach(unBoutonDeSuppression => {
                unBoutonDeSuppression.addEventListener('click', supprimerLaTache, unBoutonDeSuppression);
        })
}