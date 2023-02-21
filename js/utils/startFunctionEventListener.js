export function startFunctionEventListenerOnTasksButtons(paramTableau, paramFonction) {
        paramTableau.forEach(boutonCourant => {
                boutonCourant.addEventListener('click', paramFonction, boutonCourant);
        });
}