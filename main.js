//^ Imports du header
import  { allHeaderCategories } from './js/layouts/allHeadersImports.js';

//^ Imports de tous les components
import { allComponentsCategories } from './js/components/allComponentsImports.js';


function goMonPetitJs() {
        // console.log("le DOM est chargé");
        
        // Je fais appel aux modules de Header
        allHeaderCategories();

        // Je fais appel aux modules de composants
        allComponentsCategories();
}

window.addEventListener('DOMContentLoaded', goMonPetitJs);