import { trimmedModules } from "../recycle/trimmed-filenames";
const imagesContext = import.meta.glob('@public/big-link/*.png', { eager: true, import: 'default' });
const images = trimmedModules(imagesContext);

function bigLinkTemplate(title, className, img) {
    const srcImg = document.createElement('img')
    const bigLinkItem = document.createElement('div');
    const bigLinkTitle = document.createElement('h2');
    
    bigLinkItem.classList.add('big-link-item', className, 'd-flex', 'gap-2');
    bigLinkTitle.innerHTML = `${title ? title : 'title'}`;
    bigLinkTitle.classList.add('big-link-title', 'mb-0');
    bigLinkItem.append(bigLinkTitle);

     if (img != undefined) {
        srcImg.setAttribute('src', img);
        srcImg.classList.add('big-link-img');
        bigLinkItem.append(srcImg);
     }
    
    return bigLinkItem;
}

const bigLinkAreaContainer = document.createElement('div')
// const bigLinkTitles = ['TEST RIDE', 'PARTS & ACCESSORIES'];
const bigLinkTitles = [
    {
        title: "TEST RIDE",
        link: "MOTO"
    },
    {
        title: "PARTS & ACCESSORIES",
        link: "COG"
    },
]
bigLinkAreaContainer.classList.add('big-link-container');

for (var item of bigLinkTitles) {
    const className = item.title.replace("&", "").split(" ").join('_').toLowerCase();
    const bigLinkItem = bigLinkTemplate(item.title, className, images[item.link]);
    bigLinkAreaContainer.append(bigLinkItem);
}


export { bigLinkAreaContainer };