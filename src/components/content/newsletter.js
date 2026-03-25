import { containerTemplate } from "../recycle/class-list";
import { shopButtons } from "../recycle/non-standard-buttons";

const newsLetterContainer = document.createElement("div");
const newsLetterTitle = document.createElement("h2");
const newsLetterForm = document.createElement("h2");
const newsLetterFormCont = document.createElement("div");
const submitButton = shopButtons("newsletter-submit", "SUBMIT");

newsLetterContainer.classList.add("newsletter-container", ...containerTemplate('list'));
newsLetterFormCont.classList.add("promo-redirect-link")
newsLetterTitle.classList.add("newsletter-title",  "pb-3");
newsLetterTitle.innerHTML = "JOIN OUR NEWSLETTER";
newsLetterForm.innerHTML = "name@domain.com";


newsLetterFormCont.append(newsLetterForm);

newsLetterContainer.append(newsLetterTitle, newsLetterFormCont, submitButton);

export { newsLetterContainer };





