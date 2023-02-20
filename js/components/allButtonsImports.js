//> Import des boutons
import { taskInProgressButtonFunction } from './buttons/taskInProgressButton.js';
import { doneButtonFunction } from './buttons/doneButton.js';
import { notDoneButtonFunction } from './buttons/notDoneButton.js';
import { afficherOuMasquerLaDescriptionTache } from './buttons/descriptionButton.js';
import { removeButtonFunction } from './buttons/removeButton.js';
import { archiveButtonFunction } from './buttons/archiveButton.js';

export function allButtonsTasks() {

        afficherOuMasquerLaDescriptionTache();
        taskInProgressButtonFunction();
        doneButtonFunction();
        notDoneButtonFunction();
        removeButtonFunction();
        archiveButtonFunction();
}