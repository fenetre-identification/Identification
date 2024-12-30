document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;

        if (query.trim() !== '') {
            // Utiliser l'URL correcte de ton dépôt GitHub
            fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`,  // Utilisation du token d'authentification
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
