document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;

        if (query.trim() !== '') {
            // Envoie la recherche à GitHub Actions pour l'enregistrer
            fetch('https://api.github.com/repos/ton-utilisateur/ton-repository/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`, // Utilise un token d'authentification pour l'API GitHub
                },
                body: JSON.stringify({
                    event_type: 'search-request',
                    client_payload: {
                        query: query
                    }
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Recherche enregistrée:', data);
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement:', error);
            });
        }
    }
});
