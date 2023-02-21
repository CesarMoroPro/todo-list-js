//^ Import du calcul de nombre de tâches dans le header
import { statistiquesDesTachesDansLeHeader } from '../../layouts/header/statisticsTasks.js';

export function archiveButtonFunction() {
        //console.log('archiveButton.js >> archiveButtonFunction chargée');

        //* Récupération des éléments utiles
        // Tous les boutons "archiver"
        let tableauDesBoutonsAArchiver = document.querySelectorAll('.archiver');
        // La section des tâches terminées
        let sectionDesTachesTerminees = document.querySelector('#main__right .all-tasks');

        //* Je crée un tableau pour archiver les tâches
        let tableauArchivageDeTaches = [];


        //* Fonction de traitement pour archiver une tâche
        function archiverLaTache(paramBoutonArchiver) {
                
                //> Je récupère la tâche parente du bouton "archiver"
                let tacheCourante = paramBoutonArchiver.currentTarget.parentNode.parentNode.parentNode.parentNode;
                
                //> Je copie le contenu de la tâche complète dans le tableau des tâches archivées
                tableauArchivageDeTaches.push(tacheCourante);
                //console.log(tableauArchivageDeTaches);

                //> Je supprime la tache courante de la liste des tâches terminées
                tacheCourante.remove();

                //> Je mets à jour le nombre de tâches dans le header
                statistiquesDesTachesDansLeHeader();
        }


        //* Événement au clic sur un bouton "archiver"
        tableauDesBoutonsAArchiver.forEach(boutonArchiver => {
                boutonArchiver.addEventListener('click', archiverLaTache, boutonArchiver);
        })
}