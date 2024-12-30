document.getElementById('triggerActionButton').addEventListener('click', function() {
    const requestPayload = {
        event_type: 'search-request',
        client_payload: {
            query: 'Ma recherche'
        }
    };

    // Utilisation de fetch pour envoyer la requête POST à GitHub
    fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_GITHUB_TOKEN`,  // Ne jamais exposer de token ici
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});
