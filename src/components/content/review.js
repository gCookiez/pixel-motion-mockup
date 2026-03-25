import { carouselFiller } from "../recycle/carousel";
import { bootstrapRows, bootstrapColumns } from "../recycle/rows-and-columns";

function reviewBoxTemplate(obj) {
    const reviewBoxContainer = document.createElement('div');
    const reviewBoxWrapper = document.createElement('div');
    
    const infoAndSource = bootstrapRows('info-and-source');
    const iasLHS = bootstrapColumns('info-LHS col-7')
    const iasRHS = bootstrapColumns('info-RHS col-5')

    const userIcon = document.createElement('div')
    const subRow = bootstrapRows('info-and-source-s-row');
    const userIconCol = bootstrapColumns('icon-cont col-4')
    const detailsCol = bootstrapColumns('details-cont col-8 p-0 pt-1')

    const initialDigit = document.createElement('h4')
    const user = document.createElement("span");
    const date = document.createElement("span");
    const review = document.createElement("p");

    reviewBoxContainer.classList.add("review-box", "p-3", "pb-1");
    reviewBoxWrapper.classList.add("review-box-wrapper", "p-3" ,"pt-2");

    initialDigit.classList.add('initial-digit')
    userIcon.classList.add('review-user-icon')
    user.classList.add('review-user')
    date.classList.add('review-date')

    initialDigit.innerHTML = `${obj.user[0].toUpperCase()}`
    user.innerHTML = `${obj.user}`;
    date.innerHTML = `${obj.date}`;
    review.innerHTML = `${obj.review}`;

    userIcon.append(initialDigit);
    userIconCol.append(userIcon)
    detailsCol.append(user, date)
    subRow.append(userIconCol, detailsCol)
    iasLHS.append(subRow)
    infoAndSource.append(iasLHS, iasRHS)
    reviewBoxWrapper.append(infoAndSource, review)
    reviewBoxContainer.append(reviewBoxWrapper);

    return reviewBoxContainer;

}

const reviewContainer = document.createElement("div");
const reviewCarousel = document.createElement("div");
const {list, carouselModule} = new carouselFiller();
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
        user: "jonas",
        date: "2024-09-14",
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
reviewTitle.classList.add("review-title", "mt-5", "mb-3");
reviewTitle.innerHTML = `FEATURED REVIEWS`;

for (var [iter, review] of Object.entries(reviews)) {
    carouselModule.addSlide(reviewBoxTemplate(review), iter)
}

reviewCarousel.append(list);

reviewContainer.append(reviewTitle, reviewCarousel);


export { reviewContainer };
