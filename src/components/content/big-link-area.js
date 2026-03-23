function bigLinkTemplate(title, className) {
    const bigLinkItem = document.createElement('div');
    const bigLinkTitle = document.createElement('h2');
    bigLinkItem.classList.add('big-link-item', className);
    bigLinkTitle.innerHTML = `${title ? title : 'title'}`;
    bigLinkTitle.classList.add('big-link-title');
    bigLinkItem.append(bigLinkTitle);
    return bigLinkItem;
}

const bigLinkAreaContainer = document.createElement('div') 
const bigLinkTitles = ['TEST RIDE', 'PARTS & ACCESSORIES'];
bigLinkAreaContainer.classList.add('big-link-container');

for  (var title of bigLinkTitles) {
    const className = title.replace("&", "").split(" ").join('_').toLowerCase();
    const bigLinkItem = bigLinkTemplate(title, className);
    bigLinkAreaContainer.append(bigLinkItem);
}


export { bigLinkAreaContainer };