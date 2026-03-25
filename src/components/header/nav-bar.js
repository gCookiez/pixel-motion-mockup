import * as bootstrap from 'bootstrap';
import { bootstrapColumns, bootstrapRows } from '../recycle/rows-and-columns';
import heroLogo from '../../../public/dealer_logo.png'

const navBar = document.createElement('div');
const navRow = bootstrapRows();

const hamburger = bootstrapColumns();
const logoCont = bootstrapColumns();
const logo = document.createElement('img');
const details = bootstrapColumns();

navRow.classList.add('text-center')

hamburger.innerHTML = `<h1> Ham </h1>`
logo.setAttribute('src', heroLogo)
logo.classList.add('hero-logo')
logoCont.append(logo)
logoCont.classList.add('d-flex', 'align-items-center')
details.innerHTML = `<h1> details </h1>`

navRow.append(hamburger, logoCont, details)
navBar.append(navRow);

export {navBar};

