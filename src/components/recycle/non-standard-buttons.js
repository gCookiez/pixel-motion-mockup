import { multipleClassList } from "./class-list";

export function shopButtons(classes, text) {
    const buttonContainer = document.createElement('div');
    const buttonBody = document.createElement("div");
    const buttonBodyText = document.createElement("h4");

    buttonContainer.classList.add('front-button');
    multipleClassList(classes, (result) => {
        buttonContainer.classList.add(...result);
    })
    
    buttonBodyText.innerHTML = `${text}`;
    buttonBody.classList.add('button-body')
    buttonBody.append(buttonBodyText);
    buttonContainer.append(buttonBody);

    // buttonContainer.innerHTML = `${text}`;

    return buttonContainer;
}