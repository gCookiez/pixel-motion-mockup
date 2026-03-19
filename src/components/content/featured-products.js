import * as bootstrap from 'bootstrap';
import { bootstrapRows, bootstrapColumns } from '../recycle/rows-and-columns'

export function welcomeHero(welcome) {
	const welcomeDiv = document.createElement('div');
	const heroTitle = document.createElement('h1');

	welcomeDiv.classList.add('container', 'text-center');
	heroTitle.innerHTML = `${welcome ? welcome : "Welcome to Triumph of Anytown"}`;

	welcomeDiv.append(heroTitle);	

	return welcomeDiv;
}

export function gridFilters() {
	const gridButtonContainer = document.createElement('div');
	
	const buttonOne = document.createElement('button');
	const buttonTwo = document.createElement('button');
	const buttonThree = document.createElement('button');

	buttonOne.classList.add('btn', 'btn-primary');
	buttonTwo.classList.add('btn', 'btn-primary');
	buttonThree.classList.add('btn', 'btn-primary');

	buttonOne.innerHTML = `Shop new`;
	buttonTwo.innerHTML = `Shop pre-owned`;
	buttonThree.innerHTML = `Specials`;

	const rowOne = bootstrapRows();
	const rowtwo = bootstrapRows();

	const rowOneColOne = bootstrapColumns();
	const rowOneColTwo = bootstrapColumns();
	const rowTwoColOne = bootstrapColumns();

	rowOneColOne.append(buttonOne);
	rowOneColTwo.append(buttonTwo);
	rowTwoColOne.append(buttonThree);

	rowOne.append(rowOneColOne, rowOneColTwo);
	rowtwo.append(rowTwoColOne);

	gridButtonContainer.classList.add('container-lg', 'text-center');
	gridButtonContainer.append(rowOne, rowtwo);

	return gridButtonContainer;


	
}


