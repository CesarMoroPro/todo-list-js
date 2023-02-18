export function ajouterUneNouvelletache() {
        // console.log('JS >> Layouts >> Header >> addNewTask.js chargée');

        //* Récupération des éléments utiles
        let inputTitreNouvelleTache = document.querySelector('#new-task-title');
        let boutonAjouterNouvelleTache = document.querySelector('#new-task-add');
        let alertMessage = document.querySelector('#alert-message');


        //* Fonctions concernant les inputs et le bouton de nouvelle tâche
        function masquerAlertMessage() {
                /**
                 * Si le contenu de l'input vaut au moins la valeur de 1 AU MOMENT DE CHAQUE FRAPPE CLAVIER
                 * Alors le message d'erreur doit être masqué
                 */
                if (inputTitreNouvelleTache.value.length > (-1)) {
                        alertMessage.classList.add('display-none');
                }
        }

        function soumissionNouvelleTache(e){
                //> 1 -  Je bloque le comportement par défaut
                e.preventDefault();
                
                //> 2 - Je crée le raisonnement conditionnel
                /**
                 *  Si le contenu de l'input "titre" à une longueur de 0
                 * Alors le message d'erreur est affiché (supprimer la classe display-none)
                 * Sinon, si le contenu vaut plus de 1 AU MOMENT DU CLIC BOUTON, 
                 * le message d'erreur doit être masqué
                 */
                if (inputTitreNouvelleTache.value.length == 0) {
                        alertMessage.classList.remove('display-none');
                } else if (inputTitreNouvelleTache.value.length > 0) {
                        alertMessage.classList.add('display-none');
                        console.log("tache envoyée");
                }
        }


        //* Event Listeners
        inputTitreNouvelleTache.addEventListener('keydown', masquerAlertMessage);
        boutonAjouterNouvelleTache.addEventListener('click', soumissionNouvelleTache);
}