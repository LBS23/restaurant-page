const aboutTitle = document.createElement("h2");
const aboutBody = document.createElement("p");
const aboutContainer = document.createElement("div");
export default (() => {
    aboutTitle.textContent = "About Us";
    aboutTitle.classList.add("about", "title");
    aboutBody.textContent = `Established in 2021, Dear Sushi is the perfect place for the experience you dream of, a combination of classic japanese cuisine and the never-ending savory/sweetness of Andean flavors. We're located in Lima, Peru, our heart sits on the main plaza at a walking distance from the "Casa de Pizarro" building,`
    aboutBody.classList.add("about", "body");
    aboutContainer.append(aboutTitle, aboutBody);
    return aboutContainer;
})();