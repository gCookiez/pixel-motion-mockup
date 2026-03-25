import { containerTemplate } from '../recycle/class-list';
import { shopButtons } from '../recycle/non-standard-buttons';
import { trimmedModules } from '../recycle/trimmed-filenames';

const imagesContext = import.meta.glob('../../../public/hero.jpg', { eager: true, import: 'default' });

const trimmedModule = trimmedModules(imagesContext)


const firstContainer = document.createElement('div');
const buttonContainer = document.createElement('div');
const searchContainer = document.createElement('div');

const buttonNames = ["SHOP NEW", "SHOP-PREOWNED", "SPECIALS"];


firstContainer.classList.add('search-container', ...containerTemplate('list'));
firstContainer.setAttribute('style', `background: url(${trimmedModule['HERO']})`)
buttonContainer.classList.add('button-grid');
searchContainer.classList.add('search-area');


for (var buttonText of buttonNames) {
    const shopButton = shopButtons('def filter-buttons', buttonText); 
    buttonContainer.append(shopButton);
}

buttonContainer.append(searchContainer);
firstContainer.append(buttonContainer);




export {firstContainer};

