//^ Import de la fonction qui écoute le clic sur le bouton
import { startFunctionEventListenerOnTasksButtons } from '../../utils/startFunctionEventListener.js';

export function afficherOuMasquerLaDescriptionTache() {
        //console.log('descriptionButton.js >> afficherOuMasquerLaDescriptionTache chargée')

        //* Récupération des éléments utiles
        // Toutes les boutons "Afficher - masquer la description"
        let tableauDesBoutonsPourAfficherLaDescription = document.querySelectorAll('.afficher-masquer-description');


        //* Fonction de traitement de l'événement
        function afficherOuMasquerDescription(paramBoutonDescription) {

                //> Traitement CONDITIONNEL
                /**
                 * Si le contenu de la description contient la string "Masquer la description"
                 * Alors : 
                 *      -> remplacer par la string "Afficher la description"
                 *      -> ajouter la classe "display-none" à la description
                 *                      --> Nécessite de récupérer la description de la tache au préalable
                 *                              --> Nécessite de récupérer la tâche courante en premier !
                 *
                 * Sinon, si le contenu de la description contient la string "Afficher la description"
                 * Alors : 
                 *      -> remplacer par la string "Masquer la description"
                 *      -> supprimer la classe "display-none"
                 *                      --> Nécessite de récupérer la description de la tache au préalable
                 *                              --> Nécessite de récupérer la tâche courante en premier !
                 */

                // Je récupère la tâche courante, donc la tâche parente du bouton fourni en argument
                let tacheCourante = paramBoutonDescription.currentTarget.parentNode;
                // Je récupère le bouton "Afficher - masquer" de la tâche courante  également
                let boutonAfficherMasquerDeLaTacheCourante = paramBoutonDescription.currentTarget;

                // Je récupère la description de la tâche courante 
                let descriptionDeLaTache = tacheCourante.querySelector('.description');

                if(boutonAfficherMasquerDeLaTacheCourante.textContent === "Masquer la description") {
                        boutonAfficherMasquerDeLaTacheCourante.textContent = "Afficher la description";
                        descriptionDeLaTache.classList.add('display-none');
                } 
                else if(boutonAfficherMasquerDeLaTacheCourante.textContent === "Afficher la description") {
                        boutonAfficherMasquerDeLaTacheCourante.textContent = "Masquer la description";
                        descriptionDeLaTache.classList.remove('display-none');
                }
        }


        //* Événement, au clic sur un bouton "afficher ou masquer la description"
        // J'utilise la fonction créée dans les Utils JS
        startFunctionEventListenerOnTasksButtons(tableauDesBoutonsPourAfficherLaDescription, afficherOuMasquerDescription);

        // tableauDesBoutonsPourAfficherLaDescription.forEach(boutonAfficherOuMasquerDescription => {
        //         boutonAfficherOuMasquerDescription.addEventListener('click', afficherOuMasquerDescription, boutonAfficherOuMasquerDescription);
        // })
}