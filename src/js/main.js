
import * as bootstrap from 'bootstrap';
import '../scss/index.scss';
import { navBar } from '../components/header/nav-bar';
import { firstContainer } from '../components/content/search-products';
import { videoSnippet } from '../components/content/mobile-only';
import { productGridContainer } from '../components/content/showcase-products';
import { promoContainer } from '../components/content/promo';
import { bigLinkAreaContainer } from '../components/content/big-link-area';
import { featuredVehicleContainer } from '../components/content/featured-vehicles';
import { teamContainer } from '../components/content/meet-the-team';
import { storyContainer} from '../components/content/story-board';
import { reviewContainer } from '../components/content/review';
import { newsLetterContainer } from '../components/content/newsletter';
import { dealerInfoContainer } from '../components/footer/dealer-info';
import { linkgroups } from '../components/footer/quick-links';
import { devFooterContainer } from '../components/footer/pixel-motion';


const header = [navBar];
const content = [firstContainer, videoSnippet, productGridContainer, promoContainer, bigLinkAreaContainer, featuredVehicleContainer, teamContainer, storyContainer, reviewContainer, newsLetterContainer]
const footer = [dealerInfoContainer, linkgroups, devFooterContainer]
// app.append(navDivSimple(), welcomeHero(), gridFilters());
app.append(...header, ...content, ...footer);
