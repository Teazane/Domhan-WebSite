app.controller("IndexPeopleController", function($scope, $routeParams) {

//On remplit la page avec la liste des races et peuples
  function fillIndexPeoplePage() {
    console.log("Remplissage de la liste des races et peuples");

    //On récupère toutes les races et peuples dans la BDD
    fetch(`/people/index_people`)
      .then(function(response) {response.json()
        .then(function(data) {
          //Liste des races et peuples avec lien vers leur page
          //TODO : mieux organiser selon race ou peuple ou les deux
          for (i=0; i<data.length; i++) {
            var list_element = document.createElement('li');
            var link_char = document.createElement('a');
            link_r_p.setAttribute('href', `#!/encyclopedie/races_et_peuples/${data[i].html_page}`);
            link_r_p.innerHTML = `${data[i].name}`;
            list_element.appendChild(link_r_p);
            document.getElementById("people_list").append(list_element);
          }
        });
      });
  }

  function startup() {
    fillIndexPeoplePage(); //remplit la liste des races et peuples
  }

  // "#!/encyclopedie/races_et_peuples"
  startup();

});
