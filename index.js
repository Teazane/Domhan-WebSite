const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const _ = require("lodash");

/* --------------------- Bases de données --------------------- */

//Connection to the with knex
const sqlDb = sqlDbFactory({
  client: "sqlite3",
  debug: false,
  connection: {
    filename: "./other/domhanwebsiteBDD.sqlite"
  },
  useNullAsDefault: true
});

//Initialisation des DB
function initDataBase() {
  //TODO : gérer les DB en vérifiant à chaque fois qu'elles existent
}

//TODO : Remplir les tables avec les données de fichiers JSON


/* --------------------- Gestion des pages --------------------- */

//Define the resources repository. Call "next()" instead of 404 error when file is not found.
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
//allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true })); //Use qs library (true)

app.get("/home", function(req, res) {
  //TODO
  });
});




initDataBase();

/* --------------------- Start the server --------------------- */

let serverPort = process.env.PORT || 5000; //Heroku PORT ou 5000

app.set("port", serverPort); //Mise en place du port d'écoute
app.listen(serverPort, function() { //Lancement du serveur
  console.log(`Votre app est opérationnelle au port ${serverPort}`);
});
