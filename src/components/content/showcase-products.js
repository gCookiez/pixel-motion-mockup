
const imagesContext = import.meta.glob('../../../public/*.png', {eager: true, import: 'default'});

const trimmedModules = Object.fromEntries(
  Object.entries(imagesContext).map(([path, module]) => [
    path.slice(path.lastIndexOf('/') + 1, -3).split('_').join(" ").toUpperCase().replace('.', ''), // Trims './dir/' and '.js'
    module
  ])
);


function productGridItem(title, link) {
    const productItem = document.createElement('div');
    const productTitle = document.createElement('h4');
    const imgLink = document.createElement('img');
    const showLink = document.createElement('a');
    //add container for title and link for proper alignment

    showLink.setAttribute('href', '#');
    productItem.classList.add('product-item');
    productTitle.innerHTML = `${title ? title : 'PRODUCT'}`;
    imgLink.setAttribute('src', link);
    imgLink.classList.add('showcase-pro-img')
    showLink.innerHTML = 'SHOP NOW';

    productItem.append(imgLink, productTitle, showLink);

    return productItem;

}


const productGridContainer =  document.createElement('div');

productGridContainer.classList.add('showcase-pro-grid');

for (var [key, product] of Object.entries(trimmedModules)) {
    const productCompile = productGridItem(key, product);
    productGridContainer.append(productCompile);
}

export { productGridContainer };

