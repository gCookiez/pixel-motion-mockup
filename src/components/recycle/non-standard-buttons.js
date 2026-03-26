import { multipleClassList } from "./class-list";
import { bootstrapColumns, bootstrapRows } from "./rows-and-columns";

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

export function underLineButton(classes, title) {
    const container = document.createElement("div");
    const promoButtonTitle = document.createElement('h3');
    const promoPoint = document.createElement('h3');
    const promoWrapper = bootstrapRows('promo-wrapper');
    const promoLHS = bootstrapColumns('promo-lhs');
    const promoRHS = bootstrapColumns('promo-rhs d-flex justify-content-end');

    promoButtonTitle.innerHTML = `${title ? title : 'LINK'}`;
    promoPoint.innerHTML = `>`;
    
    container.classList.add('promo-redirect-link');
    multipleClassList(classes, (result) => {
        container.classList.add(...result);
    })

    promoPoint.classList.add('promo-point');

    promoLHS.append(promoButtonTitle);
    promoRHS.append(promoPoint);
    promoWrapper.append(promoLHS, promoRHS);
    container.append(promoWrapper);
    return container;

}