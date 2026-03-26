import { trimmedModules } from "../recycle/trimmed-filenames";
import { containerTemplate } from "../recycle/class-list";
import { underLineButton } from "../recycle/non-standard-buttons";
const imagesContext = import.meta.glob('../../../public/promo.jpg', { eager: true, import: 'default' });
const trimmedModule = trimmedModules(imagesContext);

const promoContainer = document.createElement('div');
const promoOverlay = document.createElement('div');
const promoTitle = document.createElement('h1');
const promoLinks = document.createElement('div')
const promoLinkTitles = ['PROMOTIONS', 'EVENTS'];

promoContainer.classList.add('promo-container', 'd-flex', 'flex-column', 'mt-3');
promoOverlay.classList.add('promo-overlay', ...containerTemplate('list'))
promoContainer.setAttribute('style', `background: url(${trimmedModule['PROMO']})`)

promoTitle.innerHTML = `VIEW CURRENT PROMOTIONS AND EVENTS`;
promoTitle.classList.add('promo-title');
promoLinks.classList.add('promo-links-container', 'mt-3');

for (var promoLink of promoLinkTitles) {
	const iterPromoLink = underLineButton('p-1 ps-0 mb-3', promoLink);
	promoLinks.append(iterPromoLink);
}

promoOverlay.append(promoTitle, promoLinks)
promoContainer.append(promoOverlay);

export { promoContainer };