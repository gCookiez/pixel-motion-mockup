import * as bootstrap from 'bootstrap';

function productGridItem(title) {
    const productItem = document.createElement('div');
    const productTitle = document.createElement('h4');
    const showLink = document.createElement('a');

    showLink.setAttribute('href', '#');
    // add image area;
    productItem.classList.add('product-item');
    productTitle.innerHTML = `${title ? title : 'PRODUCT'}`;
    showLink.innerHTML = 'SHOP NOW';

    productItem.append(productTitle, showLink);

    return productItem;

}

const productGridContainer =  document.createElement('div');
const productName = ["ADVENTURE", "MODERN CLASSIC", "MOTOCROSS", "ROADSTER", "ROCKET 3", "SPORT"];
productGridContainer.classList.add('showcase-pro-grid');

for (var product of productName) {
    const productCompile = productGridItem(product);
    productGridContainer.append(productCompile);
}

export { productGridContainer };

