// --- Tab Switching Logic ---
function showTab(event, tabId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// --- Load Sites from JSON ---
async function loadSites() {
    try {
        const response = await fetch('./sites.json');
        const sites = await response.json();
        const container = document.getElementById('sites-list');
        
        if (!container) return;
        container.innerHTML = ''; 

        sites.forEach(site => {
            const imgUrl = site.image || 'https://placeholder.com';

            container.innerHTML += `
                <div class="site-card">
                    <div class="site-info">
                        <strong>${site.name}</strong><br>
                        <a href="${site.url}">tsubakihikaru.github.io/Quickstep/${site.id}</a><br><br>
                        <button onclick="renamePrompt('${site.id}')" style="font-size:12px;">Rename</button>
                    </div>
                    <img src="${imgUrl}" class="site-preview" alt="Preview">
                </div>
            `;
        });
    } catch (err) {
        console.error("Error loading sites:", err);
    }
}

function renamePrompt(id) {
    const n = prompt("New site name:");
    if (n) console.log(`Rename ${id} to ${n}`);
}

function createSite() {
    const n = prompt("New wiki name:");
    if (n) alert("Action triggered for " + n);
}

// Start everything
window.onload = loadSites;
