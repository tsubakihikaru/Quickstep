// app.js content
async function loadSites() {
    try {
        const response = await fetch('./sites.json');
        // ... (the rest of your loading logic)
    } catch (e) { console.error(e); }
}

function showTab(tabId) {
    // ... (your tab switching logic)
}

window.onload = loadSites;
