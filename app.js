// --- Tab Logic ---
function showTab(tabId) {
    // Hide all sections and deactivate all buttons
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show current section
    const section = document.getElementById(tabId);
    if (section) section.classList.add('active');

    // Activate the clicked button
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
}

// --- Site Loading Logic ---
async function loadSites() {
    try {
        const response = await fetch('./sites.json');
        const sites = await response.json();
        const container = document.getElementById('sites-list');
        
        if (!container) return;
        container.innerHTML = ''; 

        sites.forEach(site => {
            // Use a placeholder if site.image is missing in sites.json
            const imgUrl = site.image || 'https://placeholder.com';

            container.innerHTML += `
                <div class="site-card">
                    <div class="site-info">
                        <strong>${site.name}</strong><br>
                        <a href="${site.url}">tsubakihikaru.github.io/Quickstep/${site.id}</a><br><br>
                        <button onclick="renamePrompt('${site.id}')" style="font-size:12px;">Rename</button>
                    </div>
                    <img src="${imgUrl}" class="site-preview" alt="Preview of ${site.name}">
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading sites.json:", error);
    }
}

// --- Interaction Logic ---
function renamePrompt(siteId) {
    const newName = prompt("Enter the new name for this site:");
    if (newName) {
        console.log(`Renaming ${siteId} to ${newName} via API...`);
        // Future: Trigger GitHub Action here
    }
}

function createSite() {
    const name = prompt("Enter a name for your new wiki:");
    if (name) {
        alert("Triggering GitHub Action to create: " + name);
        // Future: API call to trigger your YAML workflow
    }
}

// Ignition - Runs when the page is ready
window.onload = loadSites;
