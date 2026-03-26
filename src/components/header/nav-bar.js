import * as bootstrap from 'bootstrap';
import { bootstrapColumns, bootstrapRows } from '../recycle/rows-and-columns';
import { trimmedModules } from '../recycle/trimmed-filenames';
import heroLogo from '../../../public/dealer_logo.png'
import hamIcon from '../../../public/hamburger.png'
const imagesContext = import.meta.glob('../../../public/menu-icons/*.png', { eager: true, import: 'default' });
const trimmedModule = trimmedModules(imagesContext);

console.log(trimmedModule);

const navBar = document.createElement('div');
const navRow = bootstrapRows('pt-1 pb-1');

const hamburgerCont = bootstrapColumns('d-flex ms-3 col-3 align-items-center justify-content-start');
const hamburger = document.createElement('img');
const logoCont = bootstrapColumns('col-5');
const logo = document.createElement('img');
const details = bootstrapColumns('menu-buttons col-3 me-3 d-flex align-items-center gap-2 justify-content-around');

for (var [key, icon] of Object.entries(trimmedModule)) {
    const img = document.createElement('img');
    img.setAttribute('src', icon);
    img.classList.add('menu-icon', `${key.toLowerCase()}`)
    details.append(img);
}

navRow.classList.add('text-center')
hamburger.classList.add('menu-icon', 'ham')
hamburger.setAttribute('src', hamIcon)
hamburgerCont.append(hamburger)
logo.setAttribute('src', heroLogo)
logo.classList.add('hero-logo')
logoCont.append(logo)
logoCont.classList.add('d-flex', 'align-items-center')

navRow.append(hamburgerCont, logoCont, details)
navBar.append(navRow);

export {navBar};

