document.getElementById("searchForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const searchQuery = document.getElementById("searchBar").value;
  const responseMessage = document.getElementById("responseMessage");

  fetch('https://api.github.com/repos/fenetre-identification/Identification/dispatches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      event_type: 'submit_search',
      client_payload: { query: searchQuery }
    })
  })
    .then((response) => {
      if (response.ok) {
        responseMessage.textContent = "Recherche soumise avec succès !";
        responseMessage.style.color = "green";
      } else {
        responseMessage.textContent = "Erreur lors de la soumission.";
        responseMessage.style.color = "red";
      }
    })
    .catch((error) => {
      responseMessage.textContent = "Erreur réseau.";
      responseMessage.style.color = "red";
    });
});
