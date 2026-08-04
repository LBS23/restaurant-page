
export default function createPage() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("form-container");
    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("form-title");
    contactTitle.textContent = "Contact us";
    const contactForm = document.createElement("form");
    const formName = document.createElement("input");
    formName.classList.add("form-input");
    const nameLabel = document.createElement("label");
    nameLabel.classList.add("form-label");
    nameLabel.htmlFor = "formName";
    nameLabel.textContent = "Name: ";
    formName.id = "formName";
    formName.required = true;
    formName.name = "clientName";
    const formMail = document.createElement("input");
    formMail.classList.add("form-input");
    const mailLabel = document.createElement("label");
    mailLabel.classList.add("form-label");
    mailLabel.textContent = "E-Mail: ";
    mailLabel.htmlFor = "mailLabel";
    formMail.required = true;
    formMail.id = "mailLabel";
    formMail.name = "clientMail";
    const formReason = document.createElement("select");
    formReason.classList.add("form-input");
    const reasonLabel = document.createElement("label");
    reasonLabel.classList.add("form-label");
    reasonLabel.textContent = "What is your concern?: ";
    reasonLabel.htmlFor = "clientReason";
    formReason.id = "clientReason";
    formReason.name = "reason";
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    option1.value = "query";
    option1.textContent = "Query";
    option2.value = "reservation";
    option2.textContent = "Reservation";
    option3.value = "complaint";
    option3.textContent = "Complaint";
    const messageLabel = document.createElement("label");
    messageLabel.classList.add("form-label");
    messageLabel.htmlFor = "formMessage";
    const formMessage = document.createElement("textarea");
    messageLabel.textContent = "Additional Information: ";
    formMessage.id = "formMessage"
    formMessage.placeholder = "What's wrong?";
    formMessage.rows = 5;
    formMessage.cols = 50;
    formMessage.name = "userMessage";

    formReason.append(option1, option2, option3);
    contactForm.append(nameLabel, formName, mailLabel, formMail, reasonLabel, formReason, messageLabel, formMessage);
    contactContainer.append(contactTitle, contactForm)
    return contactContainer
};