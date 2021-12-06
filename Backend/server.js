const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');


const app = express();
dotenv.config(); 

//envoie de reponse au front

app.get("/", (req, res) => {
    res.send('API is running...');
})
//Définir le chemin d'affichage du fichier notes
app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})
//definie le port

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Le serveur c\'est bien lancé sur le port'));

