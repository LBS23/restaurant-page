export default (() => {
    const homeContainer = document.createElement("div");
    const header = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "Sushi Good";
    header.classList.add("container-header", "title");
    header.appendChild(title);
    const body = document.createElement("div");
    const bodyContent = document.createElement("p");
    bodyContent.textContent = "Here on Sushi Good, we offer you the best nikkei infusion available in the entire region, come and check out our menu!";
    body.classList.add("container-body", "intro");
    body.appendChild(bodyContent);
    homeContainer.append(header, body);
    return homeContainer;
})();
