//^ Imports du header
import  { allHeaderCategories } from './js/layouts/allHeadersImports.js';

//^ Imports de tous les components
import { allButtonsTasks } from './js/components/allButtonsImports.js';

//^ Imports du footer
import { allFooterCategories } from './js/layouts/allFooterImports.js';


function goMonPetitJs() {
        // console.log("le DOM est chargé");
        
        // Je fais appel aux modules de Header
        allHeaderCategories();

        // Je fais appel aux modules "composants de boutons"
        allButtonsTasks();

        // Je fais appel aux modules de Footer
        allFooterCategories();
}

window.addEventListener('DOMContentLoaded', goMonPetitJs);