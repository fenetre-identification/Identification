document.getElementById('search-query').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-query').value;

        if (query.trim() !== '') {
            fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event_type: 'search-request',
                    client_payload: { query: query }
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
