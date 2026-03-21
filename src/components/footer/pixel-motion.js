const devFooterContainer = document.createElement("div");
const copyright = document.createElement("span");
const devQuickLinks = document.createElement("div");
const devMessage = document.createElement("div");

devFooterContainer.classList.add("dev-footer");
copyright.innerHTML = `©2025. Triumph of Anytown. All Rights Reserved. (503) 000-000`;
devQuickLinks.classList.add("dev-quick-links");
devQuickLinks.innerHTML = `Privacy | Site Map`;
devMessage.classList.add("dev-message-links");
devMessage.innerHTML = `While great effort is made to ensure the accuracy of the information on this site, errors can occur. Please verify all pricing information with a customer service representative. This is easily done by calling us or visiting us at the dealership.`;


devFooterContainer.append(copyright, devQuickLinks, devMessage);

export { devFooterContainer };
