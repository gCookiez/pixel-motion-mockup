import * as bootstrap from 'bootstrap';
import { bootstrapColumns, bootstrapRows } from '../recycle/rows-and-columns';

const navBar = document.createElement('div');
const navRow = bootstrapRows();

const hamburger = bootstrapColumns();
const logo = bootstrapColumns();
const details = bootstrapColumns();

navRow.classList.add('text-center')

hamburger.innerHTML = `<h1> Hamburger </h1>`
logo.innerHTML = `<h1> logo </h1>`
details.innerHTML = `<h1> details </h1>`

navRow.append(hamburger, logo, details)
navBar.append(navRow);

export {navBar};

