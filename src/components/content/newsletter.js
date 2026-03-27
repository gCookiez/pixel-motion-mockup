import { containerTemplate, containerTemplateMd } from "../recycle/class-list";
import { shopButtons } from "../recycle/non-standard-buttons";

const newsLetterContainer = document.createElement("div");
const newsLetterTitle = document.createElement("h2");

const newsLetterGroupForm = document.createElement("div");
const newsLetterForm = document.createElement("h2");
const newsLetterFormCont = document.createElement("div");
const submitButton = shopButtons("newsletter-submit", "SUBMIT");

newsLetterContainer.classList.add("newsletter-container", ...containerTemplate('list'), ...containerTemplateMd('list'));
newsLetterFormCont.classList.add("promo-redirect-link")
newsLetterTitle.classList.add("newsletter-title",  "pb-3");
newsLetterTitle.innerHTML = "JOIN OUR NEWSLETTER";
newsLetterForm.innerHTML = "name@domain.com";
newsLetterGroupForm.classList.add('group-newsletter','d-flex', 'gap-4');

newsLetterFormCont.append(newsLetterForm);
newsLetterGroupForm.append(newsLetterFormCont, submitButton)


newsLetterContainer.append(newsLetterTitle, newsLetterGroupForm);

export { newsLetterContainer };





