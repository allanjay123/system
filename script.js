let cart = [];
let points = 0;

// Navigation Logic
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if(a.innerText.toLowerCase() === pageId) a.classList.add('active');
    });
}

// 3D Rotate Simulation
let currentView = 'front';
function rotateJacket() {
    const img = document.getElementById('main-jacket');
    img.style.opacity = '0.5';
    setTimeout(() => {
        img.src = (currentView === 'front') ? 'jacket-back.png' : 'jacket-front.png';
        currentView = (currentView === 'front') ? 'back' : 'front';
        img.style.opacity = '1';
    }, 200);
}

// Cart System
function addToCart(name, price) {
    cart.push({name, price});
    updateCartUI();
    alert(name + " added to bag!");
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = "₱" + total.toLocaleString();
}

function openCart() {
    if(cart.length === 0) return alert("Your bag is empty.");
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Payment & Points System
function processOrder(method) {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let earned = Math.floor(total * 0.05); // 5% points back
    points += earned;
    
    if(method === 'QR') {
        alert("Generating QR... Scan to pay ₱" + total);
    } else {
        alert("Order Confirmed! (COD)");
    }
    
    // Update Loyalty Points
    document.getElementById('user-points').innerText = points;
    document.getElementById('points-badge').style.display = 'block';
    
    cart = [];
    updateCartUI();
    closeCart();
}

// Size Calculator
function calculateSize() {
    const w = document.getElementById('weight').value;
    const res = document.getElementById('size-result');
    if(!w) return alert("Please enter weight");
    
    if(w < 55) res.innerText = "YOUR SIZE: SMALL";
    else if(w < 70) res.innerText = "YOUR SIZE: MEDIUM";
    else if(w < 85) res.innerText = "YOUR SIZE: LARGE";
    else res.innerText = "YOUR SIZE: XL / XXL";
}

// Newsletter
function subscribe() {
    const email = document.getElementById('email-sub').value;
    if(email.includes('@')) alert("Subscribed! Check email for 10% OFF code.");
}
