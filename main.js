//^ Imports des layouts
import  { headerFunction } from './js/layouts/header.js';

//^ Imports des components
import { taskInProgressButtonFunction } from './js/components/taskInProgressButton.js';
import { doneButtonFunction } from './js/components/doneButton.js';

function goMonPetitJs() {
        
        console.log("le DOM est chargé");
        
        headerFunction();
        taskInProgressButtonFunction();
        doneButtonFunction();
}

window.addEventListener('DOMContentLoaded', goMonPetitJs);