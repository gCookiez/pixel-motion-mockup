const newsLetterContainer = document.createElement("div");
const newsLetterTitle = document.createElement("h2");
const newsLetterForm = document.createElement("div");
const submitForm = document.createElement("div");

newsLetterContainer.classList.add("newsLetter-container");
newsLetterTitle.innerHTML = "JOIN OUR NEWSLETTER";
newsLetterForm.innerHTML = "name@domain.com";
submitForm.innerHTML = "SUBMIT";

newsLetterContainer.append(newsLetterTitle, newsLetterForm, submitForm);

export { newsLetterContainer };





