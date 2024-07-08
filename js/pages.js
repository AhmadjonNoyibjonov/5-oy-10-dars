import { getUrl } from "./function.js";

const cart = document.querySelector("#cart");

cart.addEventListener('click',function() {
  window.location.assign('http://127.0.0.1:5500/Pages/cart.html')
})

const wrapper = document.querySelector(".common");
function createPages(product) {
  return `<div class="pages_wrapper pages_wrapper_container">
    <img width="550" height="400"
        src="${product.attributes.image}"
        alt="picture">

    <div class="info">
        <h1>${product.attributes.title}</h1>
        <h5>${product.attributes.company}</h5>
        <h6>$${product.attributes.price / 100}</h6>
        <p>${product.attributes.description}</p>

        <span>
            <select id="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

            <button>ADD TO BAG</button>
        </span>
    </div>
</div>`;
}

function getDataStroge() {
  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }
  return data;
}

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];
  if (!id) {
    window.location.assign("http://127.0.0.1:5500/");
    return;
  }
  getUrl(`https://strapi-store-server.onrender.com/api/products/${id}`)
    .then((data) => {
      if (data.data.id) {
        const card = createPages(data.data);
        wrapper.innerHTML = card;
      } else {
        wrapper.innerHTML = "Bunday mahsulot topilmadi.";
      }
      const select = document.querySelector(".info span select");
      const button = document.querySelector(".info span button");
      button &&
        button.addEventListener("click", function (event) {
          event.preventDefault();
          let product = {
            id: data.data.id,
            time: Date.now(),
            count: select.value * 1,
            attribute: data.data.attributes,
          };
          let products = getDataStroge();
          let isExist = products.find((element) => {
            return element.id == product.id;
          });
          if (isExist && isExist.id) {
            products = products.map((element) => {
              if (element.id === product.id) {
                element.count += product.count;
              }
              return element;
            });
          } else {
            products.push(product);
          }
          localStorage.setItem("products", JSON.stringify(products));
          window.location.assign(
            `http://127.0.0.1:5500/Pages/cart.html?id=${id}`
          );
        });
    })
    .catch((error) => {
      wrapper.innerHTML = "Bunday mahsulot topilmadi.";
      return error;
    });
});
