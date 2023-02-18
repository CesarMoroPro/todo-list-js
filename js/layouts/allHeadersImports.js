//> Import des différents modules de header
import { ajouterUneNouvelletache } from "./header/addNewTask.js";
import { statistiquesDesTachesDansLeHeader } from "./header/statisticsTasks.js";

export function allHeaderCategories() {
        //console.log("header.JS >> headerFunction chargée");

        ajouterUneNouvelletache();
        statistiquesDesTachesDansLeHeader();
}