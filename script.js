document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;

        if (query.trim() !== '') {
            // Envoie la recherche à GitHub Actions ou un autre serveur
            fetch('https://api.github.com/repos/ton-utilisateur/ton-repository/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Pas de token côté client ici
                },
                body: JSON.stringify({
                    event_type: 'search-request',  // Type d'événement personnalisé
                    client_payload: { query: query }  // Passer la requête de recherche
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Recherche envoyée:', data);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        }
    }
});
