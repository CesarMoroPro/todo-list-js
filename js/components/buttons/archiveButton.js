//^ Import du calcul de nombre de tâches dans le header
import { statistiquesDesTachesDansLeHeader } from '../../layouts/header/statisticsTasks.js';

export function archiveButtonFunction() {
        //console.log('archiveButton.js >> archiveButtonFunction chargée');

        //* Récupération des éléments utiles
        // Tous les boutons "archiver"
        let tableauDesBoutonsArchiver = document.querySelectorAll('.archiver');


        //* Création d'éléments utiles
        /**
         * Ici, je crée un tableau dans lequel je vais enregistrer les tâches qui sont archivées par l'utilisateur.
         * Elles seront supprimées de la liste des tâches terminées mais seront disponibles dans le tableau.
         * 
         */
        let tableauDesTachesArchivees = [];

        let sectionDesTachesTerminees = document.querySelector('#main__right .all-tasks');
        //* Fonction de traitement pour archiver une tâche
        function archiverLaTache(paramBoutonArchiver) {
                
                //> Je récupère la tâche parente du bouton archiver
                let tacheCourante = paramBoutonArchiver.currentTarget.parentNode.parentNode.parentNode.parentNode;
                
                //> Je copie le contenu de la div complète dans le tableau des tâches archivées
                tableauDesTachesArchivees.push(tacheCourante);
                console.log(tableauDesTachesArchivees);

                //> Je supprime la tache courante de la liste des tâches terminées
                
                sectionDesTachesTerminees.remove(tacheCourante);



                //> Je mets à jour le nombre de tâches dans le header
                statistiquesDesTachesDansLeHeader();
        }


        //* Événement au clic sur un bouton "archiver"
        tableauDesBoutonsArchiver.forEach(boutonArchiver => {
                boutonArchiver.addEventListener('click', archiverLaTache, boutonArchiver);
        })
}