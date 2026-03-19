
import '../scss/index.scss';
import { navDivSimple } from '../components/header/nav-bar';
import { welcomeHero, gridFilters } from '../components/content/featured-products'

// const app = document.querySelector('#app');

// const divTest = document.createElement('div');
// const hOneTest = document.createElement('h1');
// const buttonTest = document.createElement('button');

// divTest.classList.add('container', 'py-4', 'px-3', 'mx-auto')
// hOneTest.innerHTML = 'Hello, Bootstrap and Vite';
// buttonTest.classList.add('btn','btn-primary')
// buttonTest.innerHTML = 'Primary Button';


// divTest.append(hOneTest,buttonTest);

app.append(navDivSimple(), welcomeHero(), gridFilters());
