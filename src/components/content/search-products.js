import { containerTemplate } from '../recycle/class-list';
import { shopButtons } from '../recycle/non-standard-buttons';
import { trimmedModules } from '../recycle/trimmed-filenames';
import { bootstrapRows, bootstrapColumns } from '../recycle/rows-and-columns'

const imagesContext = import.meta.glob('../../../public/hero.jpg', { eager: true, import: 'default' });

const trimmedModule = trimmedModules(imagesContext)


const firstContainer = document.createElement('div');
const title = document.createElement('h2');
const titleContainer = bootstrapRows('title-container d-flex align-items-center p-3 pb-4');
const buttonContainer = document.createElement('div');
const searchContainer = bootstrapRows('search-area ms-0')
const searchPlaceholder = document.createElement('span');
const searchlhs =  bootstrapColumns('search-lhs col-2')
const searchrhs =  bootstrapColumns('search-rhs d-flex col-10 align-items-center')

const buttonNames = ["SHOP NEW", "SHOP-PREOWNED", "SPECIALS"];

title.classList.add('main-page-title', 'text-center');
title.innerHTML = 'Welcome to <br> Triumph of Anytown';
firstContainer.classList.add('search-container', 'p-4', 'pt-2', 'pb-5');
firstContainer.setAttribute('style', `background: url(${trimmedModule['HERO']})`)
buttonContainer.classList.add('button-grid');
searchPlaceholder.classList.add('search-placeholder')
searchPlaceholder.innerHTML = 'SEARCH RIDES'


for (var buttonText of buttonNames) {
    const shopButton = shopButtons('def filter-buttons', buttonText); 
    buttonContainer.append(shopButton);
}
searchrhs.append(searchPlaceholder);
searchContainer.append(searchlhs, searchrhs);
buttonContainer.append(searchContainer);
titleContainer.append(title)
firstContainer.append(titleContainer, buttonContainer);




export {firstContainer};

