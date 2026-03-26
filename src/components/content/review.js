import { carouselFiller } from "../recycle/carousel";
import { bootstrapRows, bootstrapColumns } from "../recycle/rows-and-columns";
import star from '../../../public/star.png'
import gLogo from '../../../public/Google.png'

function reviewRating(count) {
    const reviewContainer = bootstrapRows('review-rating p-0 ps-2 gap-1 mt-3 mb-3');
    const img = document.createElement('img');
    img.setAttribute('src', star);
    img.classList.add('star-icon', 'p-0');

    for (var x = 0; x < count; x++) {
        reviewContainer.append(img.cloneNode(true));
    }

    return reviewContainer;

}

function reviewBoxTemplate(obj) {
    const reviewBoxContainer = document.createElement('div');
    const reviewBoxWrapper = document.createElement('div');
    
    const infoAndSource = bootstrapRows('info-and-source');
    const reviewStars = reviewRating(obj.rate);
    const sourceCont = document.createElement('div');
    const source = document.createElement('img')
    const iasLHS = bootstrapColumns('info-LHS col-7')
    const iasRHS = bootstrapColumns('info-RHS col-5 d-flex justify-content-end')

    const userIcon = document.createElement('div')
    const subRow = document.createElement('div');
    const userIconCol = document.createElement('div');
    const detailsCol = document.createElement('div');

    const initialDigit = document.createElement('h4')
    const user = document.createElement("span");
    const date = document.createElement("span");
    const review = document.createElement("p");
    const readMore = document.createElement("span");

    subRow.classList.add('info-and-source-s-row','d-flex', 'gap-3');
    userIconCol.classList.add('icon-cont');
    detailsCol.classList.add('details-cont', 'p-0', 'pt-1');

    sourceCont.classList.add('source-cont', 'me-2', 'mt-2')
    source.setAttribute('src', gLogo);
    source.classList.add('g-logo');
    reviewBoxContainer.classList.add("review-box", "p-3", "pb-1");
    reviewBoxWrapper.classList.add("review-box-wrapper", "ps-4", "p-3", "pb-4");

    initialDigit.classList.add('initial-digit')
    userIcon.classList.add('review-user-icon')
    user.classList.add('review-user')
    date.classList.add('review-date')
    readMore.classList.add('read-more')

    initialDigit.innerHTML = `${obj.user[0].toUpperCase()}`
    user.innerHTML = `${obj.user}`;
    date.innerHTML = `${obj.date}`;
    review.innerHTML = `${obj.review}`;
    readMore.innerHTML = 'Read more'

    userIcon.append(initialDigit);
    userIconCol.append(userIcon)
    detailsCol.append(user, date)
    subRow.append(userIconCol, detailsCol)
    sourceCont.append(source)
    iasLHS.append(subRow, reviewStars);
    iasRHS.append(sourceCont);
    infoAndSource.append(iasLHS, iasRHS)
    reviewBoxWrapper.append(infoAndSource, review, readMore)
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
        rate: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Anthony M",
        date: "2024-10-01",
        rate: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "jonas",
        date: "2024-09-14",
        rate: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Brandon Johnson",
        date: "2024-08-03",
        rate: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    },
    {
        user: "Deasal Conner",
        date: "2024-08-16",
        rate: 5,
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
