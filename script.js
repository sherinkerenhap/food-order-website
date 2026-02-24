// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart
function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// Go to cart page
function goToCart() {
    window.location.href = "cart.html";
}

// Display cart items
function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

// Place Order (IMPORTANT 🔥)
function placeOrder() {
    alert("Order placed successfully!");

    // Clear cart
    cart = [];
    localStorage.removeItem("cart");

    // Refresh page
    window.location.reload();
}

// Reset Cart (New Customer)
function resetCart() {
    cart = [];
    localStorage.removeItem("cart");
    window.location.reload();
}

// Auto display cart when cart page loads
displayCart();