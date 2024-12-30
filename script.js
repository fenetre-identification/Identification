document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;

        if (query.trim() !== '') {
            fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Pas besoin de GITHUB_TOKEN ici, on le gère dans le workflow GitHub Actions
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
