//^ Import de la fonction qui écoute le clic sur le bouton
import { startFunctionEventListenerOnTasksButtons } from '../../utils/startFunctionEventListener.js';

export function taskInProgressButtonFunction() {
        //console.log("taskInProgress.JS >> taskInProgressButtonFunction chargée");

       //* Récupération des éléments utiles
      // Tous les boutons "en cours"
      let tableauDesBoutonsEnCours = document.querySelectorAll('.en-cours');
      //console.log(tableauDesBoutonsEnCours); // renvoie une NodeList []

        //* Je crée une variable qui servira à vérifier la condition "tâche en cours : oui ou non"
        /**
         * Je définis un booléen :
         * Il doit être à TRUE si une tâche est en cours
         * Et à FALSE si aucune tâche n'est en cours
         */
       let uneTacheEstEnCours;
       //console.log('Booléen phase 1 : ' + uneTacheEstEnCours);

       
        //* Fonctions de traitement pour les événements déclenchés
        function changerEtatDeLaTache(paramBoutonEnCours) {

                // Je récupère le bouton "en cours" de la tâche courante
                let boutonEnCours = paramBoutonEnCours.currentTarget;
                //console.log(boutonEnCours); // Renvoie le bouton "en-cours"
                // Je récupère la tâche courante
                let tacheCourante = boutonEnCours.parentNode.parentNode.parentNode.parentNode;
                //console.log(tacheCourante); // Renvoie la tâche correspondante au bouton cliqué
                // Je récupère la tâche qui contient la classe "task-in-progress"
                let laTacheQuiEstDejaEnCours = document.querySelector('.task-in-progress');

                //console.log('Booléen phase 2 : ' + uneTacheEstEnCours);

                /**
                *> Ici je gère le traitement lorsque le bouton "En Cours" est cliqué
                * Condition : 
                * -> Si uneTacheEstEnCours vaut UNDEFINED ou FALSE (donc aucune tâche en cours)
                *               -> Ajouter la classe 'task-in-progress' à la tâche cliquée
                *               -> changer la valeur de uneTacheEstEnCours à TRUE
                * 
                * -> Sinon, si uneTacheEstEnCours vaut TRUE ET si la tache courante qui contient la classe 'task-in-progress' vaut la tache qui est déjà en cours qui contient la classe 'task-in-progress
                * 
                *               -> Lui supprimer la classe 'task-in-progress'
                *               -> Changer la valeur de uneTacheEstEnCours à FALSE
                * 
                * -> Sinon, si uneTacheEstEnCours vaut TRUE ET si la tache courante ne contient pas la classe 'task-in-progress' :
                *               -> Lui supprimer la classe 'task-in-progress'
                *               -> Ajouter cette classe à la tâche cliquée
                *               -> Changer la valeur de uneTacheEstEnCours à TRUE
                */

                if(uneTacheEstEnCours == undefined || uneTacheEstEnCours == false) {

                        //console.log('Booléen phase 3 : ' + uneTacheEstEnCours)

                        tacheCourante.classList.add('task-in-progress');
                        //console.log(tacheCourante);
                        // Donc une tâche est maintenant en cours
                        uneTacheEstEnCours = true;

                        //console.log('Booléen phase 4 : ' + uneTacheEstEnCours)

                } else if(uneTacheEstEnCours == true) {
                        
                        if(!tacheCourante.classList.contains('task-in-progress')){
                                
                                //console.log('Booléen phase 6 : ' + uneTacheEstEnCours) 
                                
                                laTacheQuiEstDejaEnCours.classList.remove('task-in-progress');
                                //console.log(tacheCourante);
                                tacheCourante.classList.add('task-in-progress');
                                // Et le booléen reste à true puisqu'une autre tâche est cliquée

                                //console.log('Booléen phase 7 : ' + uneTacheEstEnCours);
                        
                        } else if(tacheCourante.classList.contains('task-in-progress')) {

                                //console.log('Booléen phase 8 : ' + uneTacheEstEnCours);
                                //console.log(tacheCourante)

                                tacheCourante.classList.remove('task-in-progress');
                                //console.log('Booléen phase 9 : ' + uneTacheEstEnCours);
                                // Ici, plus aucune tâche n 'est en cours, donc booléen sur false
                                uneTacheEstEnCours = false;
                        }
                }

                //console.log('Booléen phase 5 : ' + uneTacheEstEnCours)
        }


       //* Événement au clic sur un bouton de "tâche en cours"
        // J'utilise la fonction créée dans les Utils JS
        startFunctionEventListenerOnTasksButtons(tableauDesBoutonsEnCours, changerEtatDeLaTache);

        // tableauDesBoutonsEnCours.forEach(boutonDeuneTacheEstEnCours => {
        //         boutonDeuneTacheEstEnCours.addEventListener('click', changerEtatDeLaTache, boutonDeuneTacheEstEnCours);
        // })
}