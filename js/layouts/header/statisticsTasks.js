export function statistiquesDesTachesDansLeHeader() {
        console.log('statisticsTasks.js >> statistiquesDesTachesDansLeHeader.js chargée');

        //* Récupération des éléments utiles
        // Emplacement du nombre total de tâches existantes
        let emplacementNombreTotalDeTaches = document.getElementById('total-tasks');
        // Emplacement du nombre de tâches terminées
        let emplacementNombreDeTachesTerminees = document.getElementById('done-tasks');
        // Emplacement de la stat du nombre de taches terminées =
        let emplacementStatTachesTerminees = document.getElementById('stat-done-tasks');
        // console.log(emplacementNombreTotalDeTaches, emplacementNombreDeTachesTerminees, emplacementStatTachesTerminees)

        // Tableau de tâches à exécuter
        let tableauDesTachesAExecuter = document.querySelectorAll('.one-task__to-do');
        // Tableau de tâches déjà terminées
        let tableauDesTachesTerminees = document.querySelectorAll('.one-task__done');


        //* Calculs
        // nombre de tâches dans le tableau des tâches à exécuter
        let nombreDeTachesAExecuter = tableauDesTachesAExecuter.length;
        // nombre de tâches dans le tableau des tâches terminées
        let nombreDeTachesTerminees = tableauDesTachesTerminees.length;
        // nombre total de tâches existantes
        let nombreTotalDeTachesExistantes = nombreDeTachesAExecuter + nombreDeTachesTerminees;
        // statistique du nombre de tâches terminées arrondie à l'entier le plus proche
        let statNombreDeTachesTerminees = Math.round((nombreDeTachesTerminees / nombreTotalDeTachesExistantes) *100);
        //console.log(nombreDeTachesAExecuter, nombreDeTachesTerminees, nombreTotalDeTachesExistantes, statNombreDeTachesTerminees+'%');


        //* Injection des calculs dans la page html
        // Nombre de tâches total existantes
        emplacementNombreTotalDeTaches.innerText = nombreTotalDeTachesExistantes;
        // Nombre de tâches terminées
        emplacementNombreDeTachesTerminees.textContent = nombreDeTachesTerminees;
        // Stat du nombre de tâches terminées
        emplacementStatTachesTerminees.textContent = statNombreDeTachesTerminees + ' %';
}