import { shopButtons } from '../recycle/non-standard-buttons';


const firstContainer = document.createElement('div');
const buttonContainer = document.createElement('div');
const searchContainer = document.createElement('div');

const buttonNames = ["SHOP NEW", "SHOP-PREOWNED", "SPECIALS"];


firstContainer.classList.add('container');
buttonContainer.classList.add('button-grid');
searchContainer.classList.add('search-area')

for (var buttonText of buttonNames) {
    const shopButton = shopButtons('def', buttonText); 
    buttonContainer.append(shopButton);
}

buttonContainer.append(searchContainer);
firstContainer.append(buttonContainer);




export {firstContainer};

