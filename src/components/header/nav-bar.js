import * as bootstrap from 'bootstrap';
import { bootstrapColumns, bootstrapRows } from '../recycle/rows-and-columns';
import { trimmedModules } from '../recycle/trimmed-filenames';
import heroLogo from '@public/dealer_logo.png'
import hamIcon from '@public/hamburger.png'
const imagesContext = import.meta.glob('@public/menu-icons/*.png', { eager: true, import: 'default' });
const trimmedModule = trimmedModules(imagesContext);



//main container
const navBarBase = document.createElement('div'); 

//components from different sizes 
const navBarMobile = document.createElement('div');
const navBarDesktop = document.createElement('div')
const navRowDesktop = bootstrapRows('p-3');
const navRowMobile = bootstrapRows('pt-1 pb-1');

//shared
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

navBarBase.classList.add('nav-bar-base');



// mobile components
navBarMobile.classList.add('nav-bar-mobile', 'd-block', 'd-sm-none', 'd-md-none');
navRowMobile.classList.add('text-center');
hamburger.classList.add('menu-icon', 'ham')
hamburger.setAttribute('src', hamIcon)
hamburgerCont.append(hamburger)
logo.setAttribute('src', heroLogo)
logo.classList.add('hero-logo')
logoCont.append(logo)
logoCont.classList.add('d-flex', 'align-items-center')
navRowMobile.append(hamburgerCont, logoCont, details)
navBarMobile.append(navRowMobile);

// desktop components
const desktopLogo = logoCont.cloneNode(true);
navBarDesktop.classList.add('nav-bar-desktop', 'd-none', 'd-sm-block', 'd-md-block')
navRowDesktop.append(desktopLogo)
navBarDesktop.append(navRowDesktop)




navBarBase.append(navBarMobile, navBarDesktop)

export {navBarBase};

