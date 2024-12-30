document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;
        
        if (query.trim() !== '') {
            // Envoie la requête à GitHub Actions via l'API 'repository_dispatch'
            fetch('https://api.github.com/repos/ton-utilisateur/ton-repository/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`, // Remplace par ton token sécurisé côté serveur
                },
                body: JSON.stringify({
                    event_type: 'search-request',
                    client_payload: { query: query }
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Recherche enregistrée:', data);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        }
    }
});
