import * as bootstrap from 'bootstrap';

function promoButton(title) {
	const promoButton = document.createElement('div');
	const promoButtonTitle = document.createElement('h3');

	promoButtonTitle.innerHTML = `${title ? title : 'LINK'}`;
	promoButton.append(promoButtonTitle);
	return promoButton;
}


const promoContainer = document.createElement('div');
const promoTitle = document.createElement('h1');
const promoLinks = document.createElement('div')
const promoLinkTitles = ['PROMOTIONS', 'EVENTS'];

promoContainer.classList.add('promo-container');
promoTitle.innerHTML = `VIEW CURRENT PROMOS AND EVENTS`;
promoLinks.classList.add('promo-links-container');

for (var promoLink of promoLinkTitles) {
	const iterPromoLink = promoButton(promoLink);
	promoLinks.append(iterPromoLink);
}


promoContainer.append(promoTitle, promoLinks);

export { promoContainer };