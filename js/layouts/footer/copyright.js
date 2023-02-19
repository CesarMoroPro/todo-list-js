export function anneePourCopyright() {
        //console.log('copyright.js >> anneePourCopyright() chargée');

        //* Je crée les éléments à intégrer dans le code HTML
        let anneeAutomatique = new Date().getFullYear();

        //* Je récupère l'emplacement de la page où je veux intégrer la date
        let emplacementCopyright = document.getElementById('copyright');
        
        //* J'intègre l'élément créé dans l'emplacement récupéré
        emplacementCopyright.textContent = anneeAutomatique;
}