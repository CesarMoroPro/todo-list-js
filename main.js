//^ Imports du header
import  { allHeaderCategories } from './js/layouts/allHeadersImports.js';

//^ Imports de tous les components
import { allComponentsCategories } from './js/components/allComponentsImports.js';

//^ Imports du footer
import { allFooterCategories } from './js/layouts/allFooterImports.js';


function goMonPetitJs() {
        // console.log("le DOM est chargé");
        
        // Je fais appel aux modules de Header
        allHeaderCategories();

        // Je fais appel aux modules de composants
        allComponentsCategories();

        // Je fais appel aux modules de Footer
        allFooterCategories();
}

window.addEventListener('DOMContentLoaded', goMonPetitJs);