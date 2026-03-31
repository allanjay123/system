// Feature: Payment Toggler
function togglePayment(mode) {
    const btnCash = document.getElementById('btnCash');
    const btnQR = document.getElementById('btnQR');
    const qrDisplay = document.getElementById('qrDisplay');

    if (mode === 'qr') {
        btnQR.classList.add('active');
        btnCash.classList.remove('active');
        qrDisplay.style.display = 'block'; // Show QR Feature
        updateTerminal("Switching to QR Code payment...");
    } else {
        btnCash.classList.add('active');
        btnQR.classList.remove('active');
        qrDisplay.style.display = 'none'; // Hide QR Feature
        updateTerminal("Switching to Cash payment...");
    }
}

// Feature: Order Processor
function processOrder() {
    const size = document.getElementById('sizeSelect').value;
    const dept = document.getElementById('deptInput').value;
    const isQR = document.getElementById('btnQR').classList.contains('active');

    if (!dept) {
        updateTerminal("ERROR: Department is required!");
        return;
    }

    updateTerminal(`Processing ${size} jacket for ${dept}...`);

    // Simulate Server Request
    setTimeout(() => {
        const orderID = "EASE-" + Math.floor(Math.random() * 10000);
        const status = isQR ? "PAID (VERIFYING)" : "PENDING (CASH)";
        
        updateTerminal(`SUCCESS! Order ID: ${orderID}`);
        updateTerminal(`Status: ${status}`);
        
        alert(`Order Placed!\nID: ${orderID}\nSize: ${size}\nStatus: ${status}`);
    }, 1500);
}

// Feature: Terminal Logger
function updateTerminal(msg) {
    const term = document.getElementById('statusTerminal');
    term.innerHTML = `<span class="cursor">></span> ${msg}`;
    console.log("[EASE SYSTEM]: " + msg);
}
