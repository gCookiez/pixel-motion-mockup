function reviewBoxTemplate(obj) {
    const reviewBoxContainer = document.createElement('div');
    const user = document.createElement("h4");
    const date = document.createElement("span");
    const review = document.createElement("p");

    reviewBoxContainer.classList.add("review-box");

    user.innerHTML = `${obj.user}`;
    date.innerHTML = `${obj.date}`;
    review.innerHTML = `${obj.review}`;

    reviewBoxContainer.append(user, date, review);

    return reviewBoxContainer;

}

const reviewContainer = document.createElement("div");
const reviewCarousel = document.createElement("div");
const reviewTitle = document.createElement("h2");

const reviews = [
    {
        user: "Scott Hoofnagle",
        date: "2024-10-02",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Anthony M",
        date: "2024-10-01",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Brandon Johnson",
        date: "2024-08-03",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Deasal Conner",
        date: "2024-08-16",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
]



reviewContainer.classList.add("review-container");
reviewCarousel.classList.add("review-carousel");
reviewTitle.innerHTML = `FEATURED REVIEWS`;

for (var review of reviews) {
    reviewCarousel.append(reviewBoxTemplate(review));
}

reviewContainer.append(reviewTitle, reviewCarousel);


export { reviewContainer };
