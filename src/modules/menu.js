import ".././style.css";
export default function loadMenuPage() {
  const content = document.querySelector("#content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  let html =
    "<h1>Restaurant menu</h1><p>These are the dishes we serve. Our menu is not big, but the quality plays role here</p><h2>Burgers:</h2><p>Cheeseburger - 5$</p><p>BIG Mike - 10$</p><p>Chicker - 7$</p><p>Vegan Burger - 5$</p><h2>Side dish:</h2><p>Potato Fries - 3$</p><p>Sweet Potato Fries - 4$</p><h2>Sodas (Every soda cost 4$):</h2><p>Pepsi</p><p>Coca-cola</p><p>Fanta</p><p>Sprite</p>";

  menuDiv.insertAdjacentHTML("afterbegin", html);

  content.appendChild(menuDiv);
}
