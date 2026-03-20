export function shopButtons(classes, text) {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('front-button', classes ? classes.split(' ') : null);
    buttonContainer.innerHTML = `${text}`;
    return buttonContainer;
}