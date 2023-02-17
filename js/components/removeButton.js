export function removeButtonFunction() {

        //* Je récupère les éléments utiles
        // Tous les boutons "supprimer"
        let tableauDesBoutonsSuppression = document.querySelectorAll('.supprimer');


        //* Fonction de traitement
        function supprimerLaTache(paramBoutonSupprimer){
                
                //> Je récupère la tâche parente du bouton de suppression cliqué
                let tacheCourante = paramBoutonSupprimer.currentTarget.parentNode.parentNode.parentNode.parentNode;

                //> Je supprime cette tâche
                /**
                 * Ce mode de suppression ne conserve aucune trace de la tâche (contrairement au composant d'archivage)
                 * Il faut donc demander une confirmation à l'utilisateur pour valider la suppression
                 * Je veux que la demande de confirmation apparaisse dans la tâche elle-même, en floutant le contenu habituel
                 * et en s'implémentant par dessus.
                 * 
                 * Récupérer le contenu de la tâche
                 * [En HTML] : englober tout le contenu dans une div
                 * Ici en JS, lui assigner une classe qui gère le flou et le background coloré de manière fixe
                 * [En HTML] : Créer une div pour permettre de préparer le message de confirmation
                 * [En HTML] : Masquer cette div par défaut avec display-none
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
                //> 1 - Modifier le background de la tâche courante
                tacheCourante.classList.add('one-task__done-confirmation-suppression');
        }


        //* Événement attaché aux boutons de suppression d'une tâche
        tableauDesBoutonsSuppression.forEach(unBoutonDeSuppression => {
                unBoutonDeSuppression.addEventListener('click', supprimerLaTache, unBoutonDeSuppression);
        })
}