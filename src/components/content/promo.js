function promoButton(title) {
	const promoButton = document.createElement('div');
	const promoButtonTitle = document.createElement('h3');

	promoButtonTitle.innerHTML = `${title ? title : 'LINK'}`;
	promoButton.classList.add("promo-redirect-link", 'p-1', 'ps-0', 'mb-3');
	promoButton.append(promoButtonTitle);
	return promoButton;
}


const promoContainer = document.createElement('div');
const promoTitle = document.createElement('h1');
const promoLinks = document.createElement('div')
const promoLinkTitles = ['PROMOTIONS', 'EVENTS'];

promoContainer.classList.add('promo-container', 'd-flex', 'flex-column', 'p-5', 'mt-3', 'mb-3');

promoTitle.innerHTML = `VIEW CURRENT PROMOTIONS AND EVENTS`;
promoTitle.classList.add('promo-title');
promoLinks.classList.add('promo-links-container', 'mt-3');

for (var promoLink of promoLinkTitles) {
	const iterPromoLink = promoButton(promoLink);
	promoLinks.append(iterPromoLink);
}


promoContainer.append(promoTitle, promoLinks);

export { promoContainer };