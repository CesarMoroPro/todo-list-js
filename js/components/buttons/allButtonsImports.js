//> Import des boutons
import { taskInProgressButtonFunction } from './taskInProgressButton.js';
import { doneButtonFunction } from './doneButton.js';
import { notDoneButtonFunction } from './notDoneButton.js';
import { afficherOuMasquerLaDescriptionTache } from './descriptionButton.js';
import { removeButtonFunction } from './removeButton.js';
import { archiveButtonFunction } from './archiveButton.js';

export function tousLesBoutonsDeTaches() {

        afficherOuMasquerLaDescriptionTache();
        taskInProgressButtonFunction();
        doneButtonFunction();
        notDoneButtonFunction();
        removeButtonFunction();
        archiveButtonFunction();
}