async function createGitHubCards(repositories) {
    const container = document.getElementById('project-container');
    
    for (const repo of repositories) {
        try {
            const response = await fetch(`https://api.github.com/repos/${repo.ArthurAgomes}/${repo.repo}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data for ${repo.username}/${repo.repo}`);
            }
            const data = await response.json();

            const card = document.createElement('div');
            card.classList.add('project-box');

            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-burger');
            card.appendChild(icon);

            const title = document.createElement('h3');
            title.textContent = 'Completed';
            card.appendChild(title);

            const description = document.createElement('label');
            description.textContent = data.description || 'No description available';
            card.appendChild(description);

            container.appendChild(card);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const repositories = [
    { username: 'ArthurAgomes', repo: 'P.I' },
    { username: 'torvalds', repo: 'linux' },
    // Adicione mais repositórios conforme necessário
];

createGitHubCards(repositories);