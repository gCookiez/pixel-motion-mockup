import { trimmedModules } from '../recycle/trimmed-filenames';
const imagesContext = import.meta.glob('../../../public/bg-*.jpg', { eager: true, import: 'default' });

const images = trimmedModules(imagesContext);

console.log(images);


function storyTemplate(obj) {
    const storyContainer = document.createElement('div');
    const storyTitle = document.createElement('h1');
    const storyDesc = document.createElement('p');
    const storyLinkCont = document.createElement('div');
    const storyLink = document.createElement('h3');

    storyContainer.classList.add('story-container', 'pt-5', 'pb-5');
    storyContainer.setAttribute('style', `background-image: url(${obj.bg})`)
    storyTitle.innerHTML = `${obj.title}`;
    storyDesc.innerHTML = `${obj.story}`;
    storyDesc.classList.add('story-desc', 'mt-2', 'mb-5', 'p-3')
    storyLink.innerHTML = `${obj.link}`;
    storyLinkCont.classList.add('promo-redirect-link')

    storyLinkCont.append(storyLink)
    storyContainer.append(storyTitle, storyDesc, storyLinkCont);

    return storyContainer;
}

const storyContainer = document.createElement('div');
storyContainer.classList.add('stories-container');

const stories = [
    {
        bg: images['BG-1'],
        title: "TRIUMPH OF ANYTOWN",
        story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br> Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate , `,
        link: "Our Story"
    },
    {
        bg: images['BG-2'],
        title: "THE STORY",
        story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia `,
        link: "Locations"
    }
]

for (var story of stories) {
    storyContainer.append(storyTemplate(story));
}


export { storyContainer };