// Navigatation Engine
function navTo(pageId) {
    // Remove active from all pages and links
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));

    // Activate selected page
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');
    
    // Add animation
    targetPage.classList.add('animate__animated', 'animate__fadeInUp');

    // Update Nav Link
    const activeLink = document.querySelector(`a[href="#${pageId}"]`);
    if(activeLink) activeLink.classList.add('active');

    window.scrollTo(0, 0);
}

// Sidebar Links Event Listener
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').replace('#', '');
        navTo(id);
    };
});

// Size Picker Logic
function updateSize(size) {
    document.querySelectorAll('.size-picker button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('size-val').innerText = size;
}

// Payment Switcher
function setPay(type) {
    document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('active'));
    const qrBox = document.getElementById('qr-container');
    
    if(type === 'QR') {
        document.getElementById('pay-qr').classList.add('active');
        qrBox.style.display = 'block';
    } else {
        document.getElementById('pay-cash').classList.add('active');
        qrBox.style.display = 'none';
    }
}

// Checkout Logic
function initiateCheckout() {
    const size = document.getElementById('size-val').innerText;
    const btn = document.querySelector('.btn-checkout');
    
    btn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> PROCESSING...";
    btn.disabled = true;

    // Simulate Server
    setTimeout(() => {
        showToast(`Order Placed: Size ${size} Jacket!`);
        btn.innerHTML = "Confirm Order";
        btn.disabled = false;
        
        // Go back to Home after 3 seconds
        setTimeout(() => navTo('home'), 2000);
    }, 2000);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Tyco Dev Scroll Effect (Navbar)
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 8%";
        nav.style.background = "rgba(8, 8, 8, 0.95)";
    } else {
        nav.style.padding = "20px 8%";
        nav.style.background = "rgba(8, 8, 8, 0.8)";
    }
};
