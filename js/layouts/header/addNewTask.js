import { statistiquesDesTachesDansLeHeader } from "./statisticsTasks.js";
import { allButtonsTasks } from '../../components/allButtonsImports.js';

export function ajouterUneNouvelletache() {
        // console.log('JS >> Layouts >> Header >> addNewTask.js chargée');

        //* Récupération des éléments utiles
        // Input d'ajout de tâche > Titre
        let inputTitreNouvelleTache = document.querySelector('#new-task-title');
        // Input d'ajout de tâche > description
        let boutonAjouterNouvelleTache = document.querySelector('#new-task-add');
        // message d'erreur
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

                        // Déclenchement de la fonction qui envoie les infos de la tâche créée
                        sendTheNewTask();

                        /**
                         * Ici, les boutons de nouvelles tâches ne sont pas encore fonctionnels
                         * puisque les boutons de tâche ont déjà été récupérés au chargement du DOM.
                         * Il faut donc prévoir de récupérer de nouveau les boutons pour les inclure dans le tableau parcouru par la boucle
                         * du "addEventListener" dans chaque fichier de bouton.
                         * EN SOMME, il faut relancer les fonctions d'interaction des boutons
                         */
                        allButtonsTasks();
                       
                        /**
                         * Relancer le chargement des statistiques à chaque nouvelle tâche créée
                         */
                        statistiquesDesTachesDansLeHeader();
                }




                //> 3 - Je crée la fonction qui crée la nouvelle tâche
                function sendTheNewTask() {
                       // console.log('Test dans la fonction sendTheNewTask()');

                        // Je récupère la section des tâches à exécuter
                        let sectionDesTachesAExecuter = document.querySelector('#main__left .all-tasks');
                        // Je récupère la première tâche de la section tâche à exécuter
                        let premiereTache = document.querySelector('#main__left .one-task__to-do');

                        // Je crée une nouvelle div de tâche
                        let nouvelleDivDeTache = document.createElement('div');
                        // J'ajoute les classes .one-task et .one-task__to-do
                        nouvelleDivDeTache.classList.add('one-task', 'one-task__to-do');
                        // J'insère la nouvelle div de tâche en première position, donc avant 'premiereTache'
                        sectionDesTachesAExecuter.insertBefore(nouvelleDivDeTache, premiereTache);

                        // J'insère la nouvelle tâche complète avec titre et description par défaut
                        // Sous forme de fonction pour pouvoir en déclencher 2 l'une après l'autre (voir détail de la seconde)
                        function insertNouvelleTache(paramNouvelleTache){
                                paramNouvelleTache.innerHTML = `
                                        <div class="demande-suppression display-none">
                                                <p class="question">La suppression d'une tâche est irréversible. Êtes-vous sûr ? Si non, pensez à l'archiver ;)</p>
                                                <div class="div-boutons-confirmation">
                                                        <p class="confirmation">Oui</p>
                                                        <p class="annulation">Non</p>
                                                </div>
                                        </div>
                                        
                                        <div class="tache-contenu-normal">
                                                <div class="title-buttons">
                                                        <h3><!-- INSERTION EN JS--></h3>
                                                        <div class="icones-de-tache-a-executer">
                                                                <button class="icon-contours en-cours" title="Tâche en cours">
                                                                        <svg class="icon time" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                                                                        </svg>                                                                            
                                                                </button>
                                                                <button class="icon-contours executee" title="Tâche exécutée">
                                                                        <svg class="icon done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                                                        </svg>                                                                      
                                                                </button>
                                                        </div>
                                                        <div class="icones-de-tache-terminee display-none">
                                                                <button class="icon-contours basculer-en-non-executee" title="Basculer en tâche à exécuter">
                                                                        <svg class="icon back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                                                                        </svg>                                                                      
                                                                </button>
                                                                <button class="icon-contours archiver" title="Archiver la tâche">
                                                                        <svg class="icon archive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                                                                <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                                                        </svg>                                                                      
                                                                </button>
                                                                <button class="icon-contours supprimer" title="Supprimer la tâche">
                                                                        <svg class="icon trash"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                                                                        </svg>                                                                      
                                                                </button>
                                                        </div>
                                                </div>
                                                <p class="afficher-masquer-description">Masquer la description</p>
                                                <p class="description"><!-- INSERTION EN JS --></p>
                                        </div>`
                        };

                        // Maintenant que la nouvelle tâche est créée dans le DOM, il est possible de récupérer son titre et sa decription, ce qui n'était pas possible si ce code se trouvait dans la fonction précédente                        
                        function remplacerElementsDansLaTache(paramTitre, paramDescription){
                                // Titre
                                paramTitre.textContent = inputTitreNouvelleTache.value;
                                // Description
                                // Récupérer la valeur de l'input description et remplacer la description d'une nouvelle tâche par cette nouvelle valeur
                                let inputDescriptionNouvelleTache = document.querySelector('#new-task-excerpt');
                                paramDescription.textContent = inputDescriptionNouvelleTache.value;
                        }

                        
                        // Ici, je peux maintenant appeler les deux fonctions dans l'ordre.
                        insertNouvelleTache(nouvelleDivDeTache);

                        let titreARemplacer = nouvelleDivDeTache.querySelector('h3');
                        let descriptionARemplacer = nouvelleDivDeTache.querySelector('.description');
                        remplacerElementsDansLaTache(titreARemplacer, descriptionARemplacer);
                }


                //> 4 - Recharger le DOM
                /**
                 * L'ajout d'une nouvelle tâche ne fait pas intégrer celle-ci automatiquement dans le DOM.
                 * Donc les stats ne changent pas,
                 * Et aucun bouton n'est fonctionnel sur cette nouvelle tâche.
                 ** Il faut donc relancer le chargement des statistiques quand une tâche a fini d'être envoyée, après l'appel à sendTheNewTask() dans l'étape 2
                 ** Il faut faire de même pour que les boutons puissent être fonctionnels
                 */                
        }


        //* Event Listeners
        inputTitreNouvelleTache.addEventListener('keydown', masquerAlertMessage);
        boutonAjouterNouvelleTache.addEventListener('click', soumissionNouvelleTache);
}