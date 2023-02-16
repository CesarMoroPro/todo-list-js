export function doneButtonFunction() {
        console.log("doneButton.JS >> doneButtonFunction chargée");

                //* Récupération des éléments utiles
                let tableauDesBoutonsTacheExecutee = document.querySelectorAll('.executee');


                //* Je crée des éléments utiles


                //* Fonctions de traitement pour les événements déclenchés
                function validerLaTache(paramTacheCiblee) {
                        console.log(paramTacheCiblee)
                        
                }

                //* Je crée un événement
                tableauDesBoutonsTacheExecutee.forEach(element => {
                        // Pour chaque bouton de tâche exécutée, je récupère la tâche associée (quatrième parent)
                        let tacheCibleeParLeBouton = element.parentNode.parentNode.parentNode.parentNode;
                        element. addEventListener('click', validerLaTache, tacheCibleeParLeBouton);
                })
                

}