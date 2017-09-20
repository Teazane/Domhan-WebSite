app.controller("IndexCharactersController", function($scope, $routeParams) {

//On remplit la page avec la liste des personnages
  function fillIndexCharactersPage() {
    console.log("Remplissage de la liste des personnages");

    //On récupère tous les personnages dans la BDD
    fetch(`/characters/index_characters`)
      .then(function(response) {response.json()
        .then(function(data) {
          //Liste des personnages avec lien vers leur page
          for (i=0; i<data.length; i++) {
            var list_element = document.createElement('li');
            var link_char = document.createElement('a');
            link_char.setAttribute('href', `#!/encyclopedie/personnages/${data[i].html_page}`);
            link_char.innerHTML = `${data[i].name}`;
            list_element.appendChild(link_char);
            document.getElementById("characters_list").append(list_element);
          }
        });
      });
  }

  function startup() {
    fillIndexCharactersPage(); //remplit la liste des personnages
  }

  // "#!/index_characters"
  startup();

});
