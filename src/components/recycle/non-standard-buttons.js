export function shopButtons(classes, text) {
    const buttonContainer = document.createElement('div');
    const buttonBody = document.createElement("div");
    const buttonBodyText = document.createElement("h4");

    const classList = classes.trim() !== '' ? classes.split(' ') : null;
    buttonContainer.classList.add('front-button');
    classList !== null ? buttonContainer.classList.add(...classList) : null
    
    buttonBodyText.innerHTML = `${text}`;
    buttonBody.classList.add('button-body')
    buttonBody.append(buttonBodyText);
    buttonContainer.append(buttonBody);

    // buttonContainer.innerHTML = `${text}`;

    return buttonContainer;
}