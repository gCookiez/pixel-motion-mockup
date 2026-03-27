import { dealerInfoContainer } from "./dealer-info";
import { linkgroups } from "./quick-links";

const transformFooter = document.createElement('div');
transformFooter.classList.add('transform-footer');

transformFooter.append(dealerInfoContainer, linkgroups);
export {transformFooter};
