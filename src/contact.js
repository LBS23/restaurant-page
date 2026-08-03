
export default function createPage() {
        const contactContainer = document.createElement("div");
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact us";
    const contactForm = document.createElement("form");
    const formName = document.createElement("input");
    const nameLabel = document.createElement("label");
    nameLabel.htmlFor = "formName";
    nameLabel.textContent = "Name: ";
    formName.id = "formName";
    formName.required = true;
    formName.name = "clientName";
    const formMail = document.createElement("input");
    const mailLabel = document.createElement("label");
    mailLabel.textContent = "E-Mail: ";
    mailLabel.htmlFor = "mailLabel";
    formMail.required = true;
    formMail.id = "mailLabel";
    formMail.name = "clientMail";
    const formReason = document.createElement("select");
    const reasonLabel = document.createElement("label");
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
    messageLabel.htmlFor = "formMessage";
    const formMessage = document.createElement("textarea");
    messageLabel.textContent = "Tell us what's wrong: ";
    formMessage.id = "formMessage"
    formMessage.name = "userMessage";

    formReason.append(option1, option2, option3);
    contactForm.append(nameLabel, formName, mailLabel, formMail, reasonLabel, formReason, messageLabel, formMessage);
    contactContainer.append(contactTitle, contactForm)
    return contactContainer
};