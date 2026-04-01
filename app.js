// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to Cart!");
}

function displayCart(){
let div=document.getElementById("cartItems");
let total=0;
if(!div)return;

div.innerHTML="";
cart.forEach(item=>{
div.innerHTML+=`<p>${item.name} - ₱${item.price}</p>`;
total+=item.price;
});

document.getElementById("total").innerText="Total: ₱"+total;
}

function checkout(){
localStorage.setItem("orders",JSON.stringify(cart));
alert("Order Saved!");
localStorage.removeItem("cart");
window.location="payment.html";
}

// PAYMENT
function payNow(){
let method=document.getElementById("paymentMethod").value;
let status=document.getElementById("status");

if(method==="gcash"){
status.innerText="Processing payment...";

setTimeout(()=>{
status.innerText="✅ Payment Verified!";
alert("Payment Successful!");
},3000);

}else{
status.innerText="Cash on Delivery Confirmed";
alert("Order placed!");
}
}
