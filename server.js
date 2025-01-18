const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware pour analyser les données JSON
app.use(bodyParser.json());

// Route pour recevoir les données du formulaire
app.post('/submit', async (req, res) => {
  const userInput = req.body.input;

  // URL de votre Google Apps Script pour enregistrer dans Google Sheets
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwCd_PnClKNdTIk8pciVZeYdGhGcJbtKskLqpIoSIPMHkqXab6siUjQyXuCFY7GwuMC/exec';

  try {
    // Envoi des données à Google Sheets via l'Apps Script
    await axios.post(googleScriptUrl, { input: userInput });
    res.status(200).send('Data received and saved successfully!');
  } catch (error) {
    res.status(500).send('Error saving data to Google Sheets');
  }
});

// Démarre le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
