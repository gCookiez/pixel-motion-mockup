
const imagesContext = import.meta.glob('../../../public/*.png', { eager: true, import: 'default' });

const trimmedModules = Object.fromEntries(
  Object.entries(imagesContext).map(([path, module]) => [
    path.slice(path.lastIndexOf('/') + 1, -3).split('_').join(" ").toUpperCase().replace('.', ''), // Trims './dir/' and '.js'
    module
  ])
);


function productGridItem(title, link, itemClass) {
  const productItem = document.createElement('div');
  const imgLink = document.createElement('img');
  const detailGroup = document.createElement('div')
  const productTitle = document.createElement('h4');
  const showLink = document.createElement('a');


  showLink.setAttribute('href', '#');
  productItem.classList.add('product-item', itemClass);
  productTitle.innerHTML = `${title ? title : 'PRODUCT'}`;
  imgLink.setAttribute('src', link);
  imgLink.classList.add('showcase-pro-img')
  detailGroup.classList.add('details-group');



  showLink.innerHTML = 'SHOP NOW';
  detailGroup.append(productTitle, showLink);
  productItem.append(imgLink, detailGroup );

  return productItem;

}


const productGridContainer = document.createElement('div');

productGridContainer.classList.add('showcase-pro-grid', 'd-sm-flex');

for (var [key, product] of Object.entries(trimmedModules)) {
  const classVer = key.split(' ').join('_').toLowerCase();
  const productCompile = productGridItem(key, product, classVer);
  productGridContainer.append(productCompile);
}

export { productGridContainer };

// adjust to query for tablet later