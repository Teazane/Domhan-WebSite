app.controller("IndexGodsController", function($scope, $routeParams) {

//On remplit la page avec la liste des dieux
  function fillIndexGodsPage() {
    console.log("Remplissage de la liste des dieux");

    //On récupère tous les dieux dans la BDD
    fetch(`/gods/index_gods`)
      .then(function(response) {response.json()
        .then(function(data) {
          //Liste des dieux avec lien vers leur page
          for (i=0; i<data.length; i++) {
            var list_element = document.createElement('li');
            var link_god = document.createElement('a');
            link_god.setAttribute('href', `#!/encyclopedie/dieux/${data[i].html_page}`);
            link_god.innerHTML = `${data[i].name}`;
            list_element.appendChild(link_god);
            document.getElementById("gods_list").append(list_element);
          }
        });
      });
  }

  function startup() {
    fillIndexGodsPage(); //remplit la liste des dieux
  }

  // "#!/encyclopedie/dieux"
  startup();

});
