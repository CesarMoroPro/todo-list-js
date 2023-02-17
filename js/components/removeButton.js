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
                 * Je veux que la demande de confirmation apparaisse dans la tâche elle-même, en floutant le contenu habituel
                 * et en s'implémentant par dessus.
                 * 
                 * Ici en JS, appliquer un display-none au contenu normal de la tache courante
                 * 
                 * [En HTML] : Créer une div pour permettre de préparer le message de confirmation en display-none
                 * [en HTML] : elle contient un texte et deux boutons "oui" et "non"
                 * Ici en JS, supprimer le display-none de la div de message de confrmation
                 * 
                 * Événement :
                 *      -> clic sur "oui" :
                 *              -> supprime la tâche définitivement
                 *      -> clic sur "non" :
                 *              -> réassigne la classe display-none sur le message de confirmation
                 *              -> et retire la classe floue du contenu de la tâche
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
                // "au clic, je déclenche une fonction"
                ouiButton.addEventListener('click', () => {
                        // Elle supprime la tâche courante entièrement
                        tacheCourante.remove();
                        // J'affiche un message de confirmation de la suppression pendant 3 secondes
                        let messageConfirmationSuppression = document.createElement('p');
                        messageConfirmationSuppression.textContent = "La tâche a été définitivement supprimée."
                        messageConfirmationSuppression.classList.add('message-de-confirmation-apres-suppression');
                        // J'intègre ce paragraphe en dessus de la section "#main__right .all-tasks"
                        // Je récupère la section
                        let sectionTachesTerminees = document.querySelector('#main__right .all-tasks');
                        // J'intègre le message pendant 3 secondes
                        sectionTachesTerminees.parentNode.appendChild(messageConfirmationSuppression);
                        setInterval(() => {
                                messageConfirmationSuppression.remove();
                        }, 3000);
                })


        }


        //* Événement attaché aux boutons de suppression d'une tâche
        tableauDesBoutonsSuppression.forEach(unBoutonDeSuppression => {
                unBoutonDeSuppression.addEventListener('click', supprimerLaTache, unBoutonDeSuppression);
        })
}