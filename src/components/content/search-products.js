import { containerTemplate } from '../recycle/class-list';
import { shopButtons } from '../recycle/non-standard-buttons';
import { trimmedModules } from '../recycle/trimmed-filenames';
import { bootstrapRows, bootstrapColumns } from '../recycle/rows-and-columns'

import search from "@public/menu-icons/search.png";

// const imagesContext = import.meta.glob('@public/hero.jpg', { eager: true, import: 'default' });

// const trimmedModule = trimmedModules(imagesContext)


const firstContainer = document.createElement('div');
const title = document.createElement('h2');
const titleContainer = bootstrapRows('title-container d-flex align-items-center p-3 pb-4');
const buttonContainer = document.createElement('div');
const searchContainer = bootstrapRows('search-area ms-0')
const searchPlaceholder = document.createElement('span');
const searchlhs =  bootstrapColumns('search-lhs col-2 d-flex align-items-center justify-content-center')
const searchrhs =  bootstrapColumns('search-rhs d-flex col-8 align-items-center')

const hiddenHamMenu = bootstrapRows('hidden-ham-menu d-none d-lg-flex justify-content-center mb-3 mt-3 ps-3 pe-3');
const hamMenuWrapper = bootstrapRows('text-light fw-semibold ham-menu-wrapper ps-3 pe-3 d-flex justify-content-center gap-1');

const titleBreak = document.createElement('br')
titleBreak.classList.add('d-sm-none', 'd-lg-none', 'd-sm-block');

const hamMenuList = ["AMAZING DEALS", "MOTORCYCLES", "SERVICE", "PARTS", "FINANCING", "ABOUT US"]
const buttonNames = ["SHOP NEW", "SHOP-PREOWNED", "SPECIALS"];

for(var i of hamMenuList) {
    const col = bootstrapColumns('menu-col col-1 d-flex justify-content-center w-auto ps-3 pe-3');
    const spanHolder = document.createElement('span')
    const vr = document.createElement('div');
    vr.classList.add('vr', 'border', 'border-white', 'opacity-100' , 'p-0')
    // spanHolder.classList.add('w-25');
    spanHolder.innerHTML = `${i}`;
    col.append(spanHolder);
    hamMenuWrapper.append(col, vr)
}

const searchImg = document.createElement('img');
searchImg.setAttribute('src', search);
console.log(titleBreak._proto_);
title.classList.add('main-page-title', 'text-center');
title.innerHTML = `Welcome to ` + titleBreak.outerHTML + `Triumph of Anytown`;
firstContainer.classList.add('search-container', 'p-4', 'pt-2', 'pb-sm-5');

buttonContainer.classList.add('button-grid', 'ps-lg-5', 'pe-lg-5', 'ms-lg-5', 'me-lg-5', 'row-gap-lg-4', 'column-gap-lg-5');
searchPlaceholder.classList.add('search-placeholder')
searchPlaceholder.innerHTML = 'SEARCH RIDES'


for (var buttonText of buttonNames) {
    const shopButton = shopButtons('def filter-buttons', buttonText); 
    buttonContainer.append(shopButton);
}
hiddenHamMenu.append(hamMenuWrapper)
searchlhs.append(searchImg);
searchrhs.append(searchPlaceholder);
searchContainer.append(searchlhs, searchrhs);
buttonContainer.append(searchContainer);
titleContainer.append(title)
firstContainer.append(hiddenHamMenu, titleContainer, buttonContainer);




export {firstContainer};

