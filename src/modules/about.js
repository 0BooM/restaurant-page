import ".././style.css";

export default function loadAboutPage() {
  const content = document.querySelector("#content");

  const aboutDiv = document.createElement("div");
  aboutDiv.innerHTML =
    "<h2>About us</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Solutanostrum vitae modi voluptatem, labore, perspiciatis dicta minima esse atque numquam id accusantium, eligendi provident! Atque consectetur ad dolorum deleniti deserunt, fuga accusamus, commodi eius officiis cum delectus rem! Veniam, ipsa unde recusandae, tenetur molestiae amet laborum inventore explicabo eveniet illo vitae exercitationem? Corporis unde voluptatem vero, ipsa ut voluptatibus, harum ipsam magni officiis laboriosam, ratione cumque porro eum sapiente reprehenderit at minus molestias modi dolorum. Temporibus, quis accusantium. Ratione reiciendis qui nisi? Cumque laudantium quibusdam quam, error odio alias. A ducimus obcaecati cumque illo provident saepe doloribus iste reiciendis pariatur? </p>";
  aboutDiv.classList.add("about");

  const contactDiv = document.createElement("div");
  contactDiv.innerHTML =
    "<h2>Contact</h2><p>Email: burgerhouse@gmail.com</p><p>Tel: (253) 752-1959</p>";
  contactDiv.classList.add("contact");

  content.appendChild(aboutDiv);
  content.appendChild(contactDiv);
}
