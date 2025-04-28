import "./styles.css";
import { showHome } from "./home";
import { showMenu } from "./menu";

const homebutton = document.getElementById("buttonhome");
const menubutton = document.getElementById("buttonmenu");
const contactbutton = document.getElementById("buttoncontact");
const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

homebutton.addEventListener("click", () => {
  console.log("Home Button Pressed");
  clearContent();
  showHome(content);
});

menubutton.addEventListener("click", () => {
  console.log("Menu Button Pressed");
  clearContent();
  showMenu(content);
});

contactbutton.addEventListener("click", () => {
  console.log("Conact Button Pressed");
});

showHome(content);
console.log("Hello, world!");
