let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
  let container = document.getElementById("cart-container");
  let total = 0;
  container.innerHTML = "";

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <img src="${item.img}">
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    container.appendChild(div);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function placeOrder() {
  alert("🎉 Order Placed Successfully!");
  localStorage.removeItem("cart");
  location.reload();
}

loadCart();