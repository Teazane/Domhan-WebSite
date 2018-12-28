const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");

/* --------------------- Gestion des pages --------------------- */

//Define the resources repository. Call "next()" instead of 404 error when file is not found.
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
//allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true })); //Use qs library (true)


//Gestion des requêtes

/* --------------------- Lance le serveur --------------------- */

let serverPort = process.env.PORT || 5000; //Heroku PORT ou 5000

app.set("port", serverPort); //Mise en place du port d'écoute
app.listen(serverPort, function() { //Lancement du serveur
  console.log(`Votre appli' est opérationnelle au port ${serverPort} \n`);
});
