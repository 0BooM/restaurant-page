import loadHomePage from "./modules/home.js";
import loadMenuPage from "./modules/menu.js";
import loadAboutPage from "./modules/about.js";

loadHomePage();

function btnsEventListeners() {
  const content = document.querySelector("#content");

  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutBtn = document.querySelector("#about");

  homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomePage();
  });

  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadMenuPage();
  });

  aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    loadAboutPage();
  });
}

btnsEventListeners();
