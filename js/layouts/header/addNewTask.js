export function ajouterUneNouvelletache() {
        console.log('JS >> Layouts >> Header >> addNewTask.js chargée');

        //* Récupération des éléments utiles
        let inputTitreNouvelleTache = document.querySelector('#new-task-title');
        let boutonAjouterNouvelleTache = document.querySelector('#new-task-add');
        let alertMessage = document.querySelector('#alert-error-message');


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
                 * et un message de confirmation pour la nouvelle tâche apparaît pendant 3 secondes
                 */
                if (inputTitreNouvelleTache.value.length == 0) {

                        alertMessage.classList.remove('display-none');

                } else if (inputTitreNouvelleTache.value.length > 0) {

                        alertMessage.classList.add('display-none');
                        let alertSuccessMessage = document.querySelector('#alert-success-addTask-message');
                        alertSuccessMessage.classList.remove('display-none');

                        setInterval(() => {
                                alertSuccessMessage.classList.add('display-none');
                        }, 3000);

                        sendTheNewTask();
                }

                //> 3 - Je crée la fonction qui crée la nouvelle tâche
                function sendTheNewTask() {
                        console.log('Test dans la fonction sendTheNewTask()');

                        // Je récupère la valeur du titre de la nouvelle tâche
                        let titreDeLaNouvelleTache = document.querySelector('#new-task-title').value;
                        // Je récupère la valeur de la description de la nouvelle tâche
                        let descriptionDeLaNouvelleTache = document.querySelector('#new-task-excerpt').value;

                        //= J'en suis ici pour l'ajout d'une tâche !

                }
        }


        //* Event Listeners
        inputTitreNouvelleTache.addEventListener('keydown', masquerAlertMessage);
        boutonAjouterNouvelleTache.addEventListener('click', soumissionNouvelleTache);
}