import "./styles.css";
import { showHome } from "./home";

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
});

contactbutton.addEventListener("click", () => {
  console.log("Conact Button Pressed");
});

console.log("Hello, world!");
