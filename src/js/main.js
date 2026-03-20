
import '../scss/index.scss';
import { navBar } from '../components/header/nav-bar';
import { firstContainer } from '../components/content/search-products';
import { productGridContainer } from '../components/content/showcase-products';
import { promoContainer } from '../components/content/promo';

// app.append(navDivSimple(), welcomeHero(), gridFilters());
app.append(navBar, firstContainer, productGridContainer, promoContainer);
