import { containerTemplate } from "../recycle/class-list";
import { bootstrapColumns,bootstrapRows } from "../recycle/rows-and-columns";

const devFooterContainer = bootstrapRows(`dev-footer ${containerTemplate('string')}`);
const copyright = document.createElement("span");
const devQuickLinks = bootstrapRows('dev-quick-links d-flex pt-3 pb-3')

const devQuickLinkLHS = bootstrapColumns('dev-link-lhs')
const vr = document.createElement("div");
const devQuickLinkRHS = bootstrapColumns('dev-link-rhs')

const privacy = document.createElement('span');
const siteMap = document.createElement('span');

const devMessage = bootstrapRows('dev-msg p-1 text-center');

copyright.classList.add('copyright-msg');

copyright.innerHTML = `©2025. Triumph of Anytown. All Rights Reserved. (503) 000-000`;

privacy.innerHTML = 'Privacy'
siteMap.innerHTML = 'Site Map'
vr.classList.add('vr', 'p-0')


devQuickLinkLHS.append(privacy)
devQuickLinkRHS.append(siteMap)
devQuickLinks.append(devQuickLinkLHS, vr, devQuickLinkRHS)
devMessage.innerHTML = `While great effort is made to ensure the accuracy of the information on this site, errors can occur. Please verify all pricing information with a customer service representative. This is easily done by calling us or visiting us at the dealership.`;


devFooterContainer.append(copyright, devQuickLinks, devMessage);

export { devFooterContainer };
