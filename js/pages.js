import { getData } from "./function.js";

const wrapper = document.querySelector(".common");

function createPages(product) {
  return `<div class="pages_wrapper pages_wrapper_container">
    <img width="550" height="400"
        src="${product.attributes.image}"
        alt="picture">

    <div class="info">
        <h1>${product.attributes.title}</h1>
        <h5>${product.attributes.company}</h5>
        <h6>$${product.attributes.price}</h6>
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

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];
  if (!id) {
    window.location.assign("http://127.0.0.1:5500/");
    return;
  }
  getData(`https://strapi-store-server.onrender.com/api/products${id}`)
    .them((data) => {
        
    })
    .catch((error) => {
      return error;
    });
});
