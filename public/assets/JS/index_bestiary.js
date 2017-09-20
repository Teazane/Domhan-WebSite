app.controller("IndexBestiaryController", function($scope, $routeParams) {

//On remplit la page avec la liste des bêtes
  function fillIndexBestiaryPage() {
    console.log("Remplissage de la liste des bêtes");

    //On récupère tous les bêtes dans la BDD
    fetch(`/bestiary/index_bestiary`)
      .then(function(response) {response.json()
        .then(function(data) {
          //Liste des bêtes avec lien vers leur page
          for (i=0; i<data.length; i++) {
            var list_element = document.createElement('li');
            var link_beast = document.createElement('a');
            link_beast.setAttribute('href', `#!/encyclopedie/bestiaire/${data[i].html_page}`);
            link_beast.innerHTML = `${data[i].name}`;
            list_element.appendChild(link_beast);
            document.getElementById("bestiary_list").append(list_element);
          }
        });
      });
  }

  function startup() {
    fillIndexBestiaryPage(); //remplit la liste des bêtes
  }

  // "#!/encyclopedie/bestiaire"
  startup();

});
