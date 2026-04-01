import * as bootstrap from 'bootstrap';
import { bootstrapColumns, bootstrapRows } from '../recycle/rows-and-columns';
import { trimmedModules } from '../recycle/trimmed-filenames';
import heroLogo from '@public/dealer_logo.png'
import hamIcon from '@public/hamburger.png'
import { shopButtons } from '../recycle/non-standard-buttons';
const imagesContext = import.meta.glob('@public/menu-icons/*.png', { eager: true, import: 'default' });
const socialsContext = import.meta.glob('@public/social-icon/*.png', { eager: true, import: 'default' });
const trimmedModule = trimmedModules(imagesContext);
const socialsTrimmed = trimmedModules(socialsContext);


//main container
const navBarBase = document.createElement('div');

//components from different sizes 
const navBarMobile = document.createElement('div');
const navBarDesktop = document.createElement('div')
const navRowDesktop = bootstrapRows('nav-row-desktop p-3');
const navRowMobile = bootstrapRows('nav-row-mobile pt-1 pb-1');
const navHamRowDesktop = bootstrapRows('nav-row-ham-desktop d-xs-none d-sm-flex d-md-flex d-lg-none justify-content-end p-2 h-50');

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
desktopLogo.classList.remove('col-5');
desktopLogo.classList.add('col-sm-4' , 'col-md-5')
const desktopRHS = bootstrapColumns('details col-sm-8 col-md-7 d-flex flex-column align-items-end gap-2')

const rhsTop = bootstrapRows('nav-details-and-contact d-flex justify-content-end');
const rhsBot = bootstrapRows('h-50 w-100 d-md-flex justify-content-end d-sm-grid gap-2');

//rhs top
const addressNavCol = bootstrapColumns('nav-address w-auto col-sm-7 col-md-9 d-flex justify-content-end');
const contactNavCol = bootstrapColumns('nav-contact w-auto col-sm-5 col-md-3 d-flex justify-content-end');

const addressNav = document.createElement('div');
const addressNavIcon = document.createElement('img');
const addressNavText = document.createElement('span');

const contactNav = document.createElement('div');
const contactNavText = document.createElement('span');


addressNav.classList.add('justify-content-end', 'd-flex')

addressNavIcon.setAttribute('src', trimmedModule['LOCATION']);
addressNavText.innerHTML = '17979 NE Glisan St, Portland, OR 97230';

contactNav.classList.add('justify-content-start', 'd-flex', 'ps-3')
contactNavText.innerHTML = '503.000.000'

addressNav.append(addressNavIcon, addressNavText);
contactNav.append(contactNavText);


//rhs bot

const socialsCont = bootstrapColumns('socials-cont d-flex col-sm-auto col-md-3 col-lg-auto pe-lg-0 justify-content-lg-end justify-content-end h-100 gap-3 align-items-center');
const eventsCont = bootstrapColumns('events-cont d-flex col-sm-auto col-md-3 col-lg-auto justify-content-end align-items-center');
const valuesCont = bootstrapColumns('values-cont d-flex col-sm-auto col-md-5 col-lg-auto h-100 gap-1 align-items-center');

const fbLogo = document.createElement('img');
const instaLogo = document.createElement('img');
const youtubeLogo = document.createElement('img');
const eventsLogo = document.createElement('img');



const eventsButton = shopButtons('events-button events-width-a ps-lg-0', 'Events')
eventsButton.querySelector('.button-body').classList.add('ps-3', 'pe-5', 'gap-1')
eventsButton.querySelector('.button-body').prepend(eventsLogo);


const valuesIcon = document.createElement('img');
const valuesText = document.createElement('span');

fbLogo.setAttribute('src', socialsTrimmed['FB'])
instaLogo.setAttribute('src', socialsTrimmed['INSTA'])
youtubeLogo.setAttribute('src', socialsTrimmed['YOUTUBE'])
eventsLogo.setAttribute('src', socialsTrimmed['CALENDAR'])

valuesIcon.setAttribute('src', socialsTrimmed['RELOAD']);
valuesText.innerHTML = 'VALUE YOUR TRADE';

const hamClone = hamburgerCont.cloneNode(true);

hamClone.classList.remove('col-3', 'col', 'justify-content-start')
hamClone.classList.add('justify-content-end')
hamClone.querySelector('.ham').classList.add('pe-2');
navHamRowDesktop.append(hamClone);



eventsCont.append(eventsButton);
socialsCont.append(fbLogo, instaLogo, youtubeLogo)
valuesCont.append(valuesIcon, valuesText)
rhsBot.append(socialsCont, eventsCont, valuesCont)


const hr = document.createElement('hr');

hr.classList.add('border', 'border-1', 'border-black', 'w-75', 'm-0', 'opacity-100')

addressNavCol.append(addressNav);
contactNavCol.append(contactNav);
rhsTop.append(addressNavCol, contactNavCol);

desktopLogo.querySelector('.hero-logo').classList.add('desktop-logo')
navBarDesktop.classList.add('nav-bar-desktop', 'd-none', 'd-sm-block', 'd-md-block')

desktopRHS.append(rhsTop, hr, rhsBot);
navRowDesktop.append(desktopLogo, desktopRHS);
navBarDesktop.append(navRowDesktop, navHamRowDesktop);





navBarBase.append(navBarMobile, navBarDesktop)

export { navBarBase };

