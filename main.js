//^ Imports des layouts
import  { headerFunction } from './js/layouts/header.js';

//^ Imports des components
import { taskInProgressButtonFunction } from './js/components/taskInProgressButton.js';
import { doneButtonFunction } from './js/components/doneButton.js';
import { notDoneButtonFunction } from './js/components/notDoneButton.js';
import { afficherOuMasquerLaDescriptiontache } from './js/components/descriptionButton.js';

function goMonPetitJs() {
        
        console.log("le DOM est chargé");
        
        headerFunction();
        afficherOuMasquerLaDescriptiontache();
        taskInProgressButtonFunction();
        doneButtonFunction();
        notDoneButtonFunction();

}

window.addEventListener('DOMContentLoaded', goMonPetitJs);