const wrap = document.querySelector("#wrap");

const product = document.querySelector("#product");
 product.addEventListener("click", function () {
  window.location.assign("http://127.0.0.1:5500/");
});

function getCart(product) {
  return `<div class="wrapper wrapper_container">
    <img width="150" height="160"
        src="${product.attribute.image}"
        alt="picture">
    <span class="title">
        <h3>${product.attribute.title}</h3>
        <h4>${product.attribute.company}</h4>
    </span>
    <span class="count">
        <p>Amount</p>
        <select id="select">
            <option value="${product.count}">${product.count}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
        </select>
    </span>
    <p class="price">$${product.attribute.price / 100}</p>

    <button>PLEASE LOGIN</button>
</div>`;
}

function save(products) {
  const cart = {
    id: products.id,
    time: products.time,
    count: products.count,
    attribute: products.attribute,
  };


  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  data.push(cart);
  localStorage.setItem("products", JSON.stringify(data));

  const card = getCart(cart);
  wrap.innerHTML += card;
}

document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  if (data.length > 0) {
    data.forEach((value) => {
      const cart = getCart(value);
      wrap.innerHTML += cart;
    });
  }
});
