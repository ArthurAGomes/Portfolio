const repositories = document.querySelector(".project-container");

function getApiGitHub() {
    fetch('https://api.github.com/users/ArthurAgomes/repos')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            let data = await res.json();
            data.forEach(item => {
                // Check if the repository is public
                if (item.private) return;

                let project = document.createElement("div");
                project.className = "project-box";  // Add class to the div

                // Choose the URL to display (prefer homepage if available)
                const projectUrl = item.homepage ? item.homepage : item.html_url;

                project.innerHTML = `
                    <h3>${item.name}</h3>
                    <span class="data-create">${new Date(item.created_at).toLocaleDateString()}</span>
                    <a href="${projectUrl}" target="_blank">Visite o Repositorio</a>
                    <span class="descricao">${item.description ? item.description : "No description provided."}</span>
                `;

                repositories.appendChild(project);  // Append to the .project-container
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to fetch and display the repositories
getApiGitHub();
