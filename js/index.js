import { getUrl } from "./function.js";

const wrapper = document.querySelector(".wrapper");
const loader = document.querySelector(".loader");

function CreateCard(product) {
  return `<div class="card" data-id="${product.id}">
    <img width="400" height="200"
        src="${product.attributes.image}"
        alt="product picture">
    <h3>${product.attributes.title}</h3>
    <p>$${product.attributes.price / 100}</p>
</div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  getUrl("https://strapi-store-server.onrender.com/api/products")
    .then((data) => {
      data.data.length > 0 &&
        data.data.forEach(function (product) {
          let card = CreateCard(product);
          wrapper.innerHTML += card;
          loader.style.display = "none";
        });

      const cards = document.querySelectorAll(".card");
      cards.length > 0 &&
        cards.forEach((value) => {
          value.addEventListener("click", function () {
            const cardId = this.getAttribute("data-id");
            if (cardId) {
              window.location.assign(
                `http://127.0.0.1:5500/Pages/pages.html?id=${cardId}`
              );
            }
          });
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
