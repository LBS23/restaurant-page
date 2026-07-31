import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";


console.log("Webpack running correctly!");

const div = document.querySelector("#content");
const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");
const contactBtn = document.querySelector("#contact-button");

div.append(home);

homeBtn.addEventListener("click", () => {
    div.replaceChildren(home);
})
menuBtn.addEventListener("click", () => {
    div.replaceChildren(menu);
})
aboutBtn.addEventListener("click", () => {
    div.replaceChildren(about);
})