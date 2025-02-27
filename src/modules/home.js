import ".././style.css";
import burgerImageSrc from "../img/blackBurger.jpg";
export default function loadHomePage() {
  const content = document.querySelector("#content");

  const burgerImg = document.createElement("img");
  burgerImg.src = burgerImageSrc;
  burgerImg.alt = "A delicious black burger";

  const imgWelcomeSection = document.createElement("div");
  imgWelcomeSection.classList.add("img-welcome-section");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info-div");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "BurgerHouse";

  const restaurantDesc = document.createElement("h2");
  restaurantDesc.classList.add("restaurant-desc");
  restaurantDesc.innerHTML = `Our restaurant is a place for a real burger lowers!<br /><br />
            Here you will find excellent taste, backed by excellent quality
            products.`;
  infoDiv.appendChild(restaurantName);
  infoDiv.appendChild(restaurantDesc);

  imgWelcomeSection.appendChild(burgerImg);
  imgWelcomeSection.appendChild(infoDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("hours");
  let html =
    '<h2 class="opening-hours">Opening hours</h2><p>Monday: 12:00 - 18:00</p><p>Tuesday: 12:00 - 18:00</p><p>Wednesday: 12:00 - 18:00</p><p>Thursday: 12:00 - 18:00</p><p>Friday: 12:00 - 22:00</p><p>Saturday: 10:00 - 24:00</p><p>Sunday: 10:00 - 18:00</p>';
  hoursDiv.insertAdjacentHTML("afterbegin", html);

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("location-info");
  const locationPara = document.createElement("p");
  locationPara.textContent = "We are located on: 132 Los Pollos Avenue, Texas";
  locationInfo.appendChild(locationPara);

  content.appendChild(imgWelcomeSection);
  content.appendChild(hoursDiv);
  content.appendChild(locationInfo);
}
