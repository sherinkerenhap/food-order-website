let cart = JSON.parse(localStorage.getItem("cart")) || [];
/* ADD TO CART */
function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert(name + " added to cart");
}
/* SHOW CART */
function loadCart(){
let items = JSON.parse(localStorage.getItem("cart")) || [];
let list = document.getElementById("cartItems");
let total = 0;
list.innerHTML="";
items.forEach((item,index)=>{
let li = document.createElement("li");
li.innerHTML =
item.name + " - ₹" + item.price +
" <button onclick='removeItem("+index+")'>Remove</button>";
list.appendChild(li);
total += item.price;
});
document.getElementById("total").innerText="Total ₹"+total;
}
/* REMOVE ITEM */
function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}
/* SEARCH FOOD */
function searchMenu() {
    let input = document.getElementById("searchFood").value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    let found = false;

    cards.forEach(card => {
        let name = card.getAttribute("data-name").toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    // Show "not available" message
    let notFound = document.getElementById("notFound");
    if (found) {
        notFound.style.display = "none";
    } else {
        notFound.style.display = "block";
    }
}