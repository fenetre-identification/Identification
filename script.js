document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission par défaut du formulaire

    const userText = document.getElementById('userText').value;

    const requestPayload = {
        event_type: 'text-submission',
        client_payload: {
            text: userText
        }
    };

    // Utilisation de fetch pour envoyer la requête POST à GitHub
    fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,  // Utilise l'environnement pour injecter le token sécurisé
            'Accept': 'application/vnd.github+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestPayload)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
        alert("Texte soumis avec succès !");
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert("Erreur lors de l'envoi du texte.");
    });
});
