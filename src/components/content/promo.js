import { trimmedModules } from "../recycle/trimmed-filenames";
import { containerTemplate } from "../recycle/class-list";
import { underLineButton } from "../recycle/non-standard-buttons";
import { bootstrapColumns, bootstrapRows } from "../recycle/rows-and-columns";
// const imagesContext = import.meta.glob('@public/promo.jpg', { eager: true, import: 'default' });
// const trimmedModule = trimmedModules(imagesContext);

const promoContainer = document.createElement('div');
const promoOverlay = document.createElement('div');
const promoObject = bootstrapRows('promo-content d-md-flex');
const promoObjectCol = bootstrapColumns('promo-content-lhs col-12 col-sm-7 flex-md-column gap-md-5 gap-lg-0');

const promoTitle = document.createElement('h1');
const promoLinks = document.createElement('div');
const imageExt = document.createElement('div');

const promoLinkTitles = ['PROMOTIONS', 'EVENTS'];

promoContainer.classList.add('promo-container', 'd-flex', 'flex-row', 'mt-3', 'position-relative');
promoOverlay.classList.add('promo-overlay', ...containerTemplate('list'), 'w-100', 'h-50', 'd-md-flex', 'flex-md-column', 'justify-content-center')
// promoContainer.setAttribute('style', `background-image: url(${trimmedModule['PROMO']})`)

promoTitle.innerHTML = `VIEW CURRENT PROMOTIONS AND EVENTS`;
promoTitle.classList.add('promo-title');
promoLinks.classList.add('promo-links-container', 'mt-3', 'd-md-flex', 'gap-2', "mt-md-5");

for (var promoLink of promoLinkTitles) {
	const iterPromoLink = underLineButton('p-1 ps-0 mb-3', promoLink);
	promoLinks.append(iterPromoLink);
}

imageExt.classList.add('mini-img-promo', 'position-absolute')

promoObjectCol.append(promoTitle,promoLinks)
promoObject.append(promoObjectCol)
promoOverlay.append(promoObject)
promoContainer.append(promoOverlay, imageExt);

export { promoContainer };