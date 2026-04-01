// 3D EFFECT
const jacket = document.getElementById("jacket");

if (jacket) {
document.addEventListener("mousemove", (e)=>{
let x = (window.innerWidth/2 - e.pageX)/25;
let y = (window.innerHeight/2 - e.pageY)/25;
jacket.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
}

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name,price});
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to Cart!");
}

function displayCart(){
let cartDiv = document.getElementById("cartItems");
let total = 0;

if(!cartDiv) return;

cartDiv.innerHTML = "";

cart.forEach(item=>{
cartDiv.innerHTML += `<p>${item.name} - ₱${item.price}</p>`;
total += item.price;
});

document.getElementById("total").innerText = "Total: ₱" + total;
}

function checkout(){
localStorage.setItem("orders", JSON.stringify(cart));
alert("Order Saved!");
localStorage.removeItem("cart");
location.reload();
}

// PAYMENT
function payNow(){
let method = document.getElementById("paymentMethod").value;

if(method==="gcash"){
alert("Scan QR to Pay");
}else{
alert("Cash on Delivery");
}
}
