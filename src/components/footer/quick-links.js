function quickLinksTemplate(obj) {
    const quickLinkGroup = document.createElement("div");
    const quickLinkTitle = document.createElement("h2");
    const quickLinks = document.createElement("div");

    quickLinkGroup.classList.add('quick-link-group')
    quickLinkTitle.classList.add('quick-link-title')
    quickLinks.classList.add('quick-links')

    quickLinkTitle.innerHTML = `${obj.title}`;

    for (var link of obj.links) {
        const quickItem = document.createElement("div");
        quickItem.innerHTML = `${link}`;
        quickLinks.append(quickItem);
    }

    quickLinkGroup.append(quickLinkTitle, quickLinks);

    return quickLinkGroup;
}

const linkgroups = document.createElement('div');
linkgroups.classList.add('link-groups')

const links = [
    {
        title: "QUICK LINKS",
        links: ['New Bikes', "Pre-Owned", "Financing", "Get a Quote"]
    },
    {
        title: "SERVICE DEPT.",
        links: ["Service Appointment", "Order Parts"]
    },
    {
        title: "DEALER INFO",
        links: ["About Us", "Location & Directions", "Contact Us"]
    },
]

for (var link of links) {
    linkgroups.append(quickLinksTemplate(link));
}

export { linkgroups };