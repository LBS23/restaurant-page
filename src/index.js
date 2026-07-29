import home from "./home.js";
import menu from "./menu.js";

console.log("Webpack running correctly!");

const div = document.querySelector("#content");
const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");
const contactBtn = document.querySelector("#contact-button");

div.append(home);