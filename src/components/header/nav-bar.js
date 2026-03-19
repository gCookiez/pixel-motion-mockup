import * as bootstrap from 'bootstrap';



export function columnBase(classes) {
    const columnBase = document.createElement('div');
    columnBase.classList.add('col', ...classes);
    return columnBase;
}


// TODO: Find Icon pack for webpage
export function hamburgerButton(content) {
    const columnContent = columnBase(['w-25', 'h-auto', 'd-inline-block']);
    const title = document.createElement('h4');
    title.innerHTML = `${content || ''}`
    columnContent.append(title);

    return columnContent;
}

export function navDivSimple() {
    const navBarDiv = document.createElement('div');
    const rowContentsDiv = document.createElement('div');
   
    const hamburger = hamburgerButton('hm');
    const logo = hamburgerButton('logo');
    const details = hamburgerButton('details');
    

    const navBarClasses = ['container-lg', 'text-center', 'bg-light']
    const buttonClasses = ['row', 'align-items-start', 'bg-light', 'text-dark']

    navBarDiv.classList.add(...navBarClasses);
    rowContentsDiv.classList.add(...buttonClasses);

    rowContentsDiv.append(hamburger, logo, details);

    navBarDiv.append(rowContentsDiv);

    return navBarDiv;
}


