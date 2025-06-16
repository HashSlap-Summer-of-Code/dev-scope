const grid = document.getElementById('devGrid');
const searchInput = document.getElementById('search');

fetch('contributors.json')
  .then(res => res.json())
  .then(usernames => {
    usernames.forEach(username => {
      fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(user => {
          if (!user || user.message === "Not Found") return;

          // Now fetch user's repositories to get top languages
          fetch(user.repos_url)
            .then(res => res.json())
            .then(repos => {
              const langCount = {};

              repos.forEach(repo => {
                if (repo.language) {
                  langCount[repo.language] = (langCount[repo.language] || 0) + 1;
                }
              });

              const topLangs = Object.entries(langCount)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(entry => entry[0])
                .join(', ') || 'N/A';

              const card = document.createElement('div');
              card.className = 'card';
              card.innerHTML = `
                <img src="${user.avatar_url}" alt="${user.login}">
                <h3>${user.name || user.login}</h3>
                <p>@${user.login}</p>
                <p><strong>Top Languages:</strong> ${topLangs}</p>
                <a href="${user.html_url}" target="_blank">View GitHub</a>
              `;
              grid.appendChild(card);
            })
            .catch(err => console.error('Error fetching repos for', username, err));
        })
        .catch(err => console.error('Failed to load user:', username, err));
    });
  })
  .catch(err => console.error('Error loading contributors.json:', err));

// 🔍 Search Function
searchInput.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  Array.from(grid.children).forEach(card => {
    const username = card.querySelector('p').textContent.toLowerCase();
    card.style.display = username.includes(value) ? 'block' : 'none';
  });
});
