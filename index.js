const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const _ = require("lodash");

/* --------------------- Bases de données --------------------- */
//Connexion à la BDD avec knex
const sqlDb = sqlDbFactory({
  client: "sqlite3",
  debug: false,
  connection: {
    filename: "./other/domhanwebsiteBDD.sqlite"
  },
  useNullAsDefault: true
});

//Fonctions d'initialisation des BDD
function initDataBase() {
  //Gère la BDD en vérifiant à chaque fois que les tables existent
  console.log(`Initialisation de la BDD`);
  sqlDb.schema.hasTable('characters').then(function(exists) {
    if (!exists) {
      initCharactersTable();
    }
  });
}

//Initialisation de la table des personnages + remplissage
function initCharactersTable() {
  console.log(`Initialisation de la table des personnages`);
  return sqlDb.schema.createTable('characters', function(t) {
    t.increments('id').primary(); //auto-incrementation pour id
    t.string('name');
    t.string('status');
    t.string('html_page');
  }).then(() => {
    return Promise.all(
      _.map(characterslist, c => {
        if (null != c.id){
          delete c.id;
        }
        return sqlDb("characters").insert(c);
      })
    );
  });
}

//Initialisation de la table de correspondance personnages/JdR
function initCharactersRPTable() {
  console.log(`Initialisation de la table de correspondance personnages/JdR`);
  return sqlDb.schema.createTable('characters_rp', function(t) {
    t.increments('id').primary(); //auto-incrementation pour id
    t.string('id_character');
    t.string('id_rp');
  });
}

//Initialisation de la table des JdR
function initRPTable() {
  console.log(`Initialisation de la table des JdR`);
  return sqlDb.schema.createTable('rp', function(t) {
    t.increments('id').primary(); //auto-incrementation pour id
    t.string('title');
    t.string('date'); //TODO : réfléchir à un système de datation pour la frise
  });
}

//Remplit les tables avec les données de fichiers JSON
let characterslist = require("./other/charactersdata.json");


/* --------------------- Gestion des pages --------------------- */

//Define the resources repository. Call "next()" instead of 404 error when file is not found.
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format,
//allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true })); //Use qs library (true)

//Initialisation de la BDD
initDataBase();

//Gestion des requêtes
app.get("/characters/index_characters", function(req, res) {
  sqlDb("characters").orderBy("name", "asc")
  .then(result => {
    res.send(JSON.stringify(result));
  });
});

/* --------------------- Lance le serveur --------------------- */

let serverPort = process.env.PORT || 5000; //Heroku PORT ou 5000

app.set("port", serverPort); //Mise en place du port d'écoute
app.listen(serverPort, function() { //Lancement du serveur
  console.log(`Votre appli' est opérationnelle au port ${serverPort}`);
});
