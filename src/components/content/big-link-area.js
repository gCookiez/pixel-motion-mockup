import * as bootstrap from 'bootstrap';

function bigLinkTemplate(title) {
    const bigLinkItem = document.createElement('div');
    const bigLinkTitle = document.createElement('h2');
    bigLinkItem.classList.add('big-link-item');
    bigLinkTitle.innerHTML = `${title ? title : 'title'}`;
    bigLinkItem.append(bigLinkTitle);
    return bigLinkItem;
}

const bigLinkAreaContainer = document.createElement('div');
const bigLinkTitles = ['TEST RIDE', 'PARTS & ACCESSORIES'];
bigLinkAreaContainer.classList.add('big-link-container');

for  (var title of bigLinkTitles) {
    const bigLinkItem = bigLinkTemplate(title);
    bigLinkAreaContainer.append(bigLinkItem);
}


export { bigLinkAreaContainer };