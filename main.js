import  { headerFunction } from './js/header.js';

function goMonPetitJs() {
        
        console.log("le DOM est chargé");
        
        headerFunction();

}

window.addEventListener('DOMContentLoaded', goMonPetitJs);