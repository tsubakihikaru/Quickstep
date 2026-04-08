     // --- Tab Logic ---
        function showTab(tabId) {
            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            
            document.getElementById(tabId).classList.add('active');
            if (event) event.currentTarget.classList.add('active');
        }

        function createSite() {
            const name = prompt("Enter a name for your new wiki:");
            if (name) {
                alert("Triggering GitHub Action to create: " + name);
            }
        }

        // --- Site Loading & Renaming Logic ---
        async function renameSiteOnGitHub(oldName, newName) {
            console.log(`Renaming ${oldName} to ${newName} via API...`);
        }

        function renamePrompt(siteId) {
            const newName = prompt("Enter the new name for this site:");
            if (newName) {
                renameSiteOnGitHub(siteId, newName);
            }
        }

        async function loadSites() {
            try {
                const response = await fetch('./sites.json');
                const sites = await response.json();
                const container = document.getElementById('sites-list');
                
                if (!container) return;

                container.innerHTML = ''; 

                sites.forEach(site => {
                    container.innerHTML += `
                        <div class="site-card">
                            <strong>${site.name}</strong><br>
                            <a href="${site.url}">tsubakihikaru.github.io/Quickstep/${site.id}</a>
                            <button onclick="renamePrompt('${site.id}')" style="margin-left:10px; font-size:12px;">Rename</button>
                        </div>
                    `;
                });
            } catch (error) {
                console.error("Error loading sites.json:", error);
            }
        }

        // Ignition
        window.onload = loadSites;


