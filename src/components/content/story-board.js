function storyTemplate(obj) {
    const storyContainer = document.createElement('div');
    const storyTitle = document.createElement('h1');
    const storyDesc = document.createElement('p');
    const storyLink = document.createElement('div');

    storyContainer.classList.add('story-container');
    storyTitle.innerHTML = `${obj.title}`;
    storyDesc.innerHTML = `${obj.story}`;
    storyLink.innerHTML = `${obj.link}`;

    storyContainer.append(storyTitle, storyDesc, storyLink);

    return storyContainer;
}

const storyContainer = document.createElement('div');
storyContainer.classList.add('stories-container');

const stories = [
    {
        title: "TRIUMPH OF ANYTOWN",
        story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. /n Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate , `,
        link: "Our Story"
    },
    {
        title: "THE STORY",
        story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia `,
        link: "Locations"
    }
]

for (var story of stories) {
    storyContainer.append(storyTemplate(story));
}


export { storyContainer };