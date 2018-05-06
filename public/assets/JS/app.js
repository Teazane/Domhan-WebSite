var app = angular.module("domhanWebSite", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    //Gestion du routing
    $routeProvider
    .when("/", { //Quand cette URL est appelée
      templateUrl : "pages/home.html" //La page correspondante est affichée
    })
    .when("/404_not_found", {
        templateUrl : "pages/404_not_found.html"
    })
    .when("/qui_sommes_nous", {
      templateUrl : "pages/who_we_are.html"
    })
    .when("/forum", {
      templateUrl : "pages/forum.html"
    })
    .when("/encyclopedie/personnages", {
      templateUrl : "pages/encyclopedia/index_characters.html",
      controller: "IndexCharactersController" //le controller associé à la page est chargé
    })
    .when("/encyclopedie/pantheon", {
      templateUrl : "pages/encyclopedia/index_gods.html",
      controller: "IndexGodsController"
    })
    .when("/encyclopedie/races_et_peuples", {
      templateUrl : "pages/encyclopedia/index_people.html",
      controller: "IndexPeopleController"
    })
    .when("/encyclopedie/bestiaire", {
      templateUrl : "pages/encyclopedia/index_bestiary.html",
      controller: "IndexBestiaryController"
    })
    .when("/encyclopedie/personnages/:character_html", {
        templateUrl : function (url_attr) {
          var page = "pages/encyclopedia/characters/"+url_attr.character_html;
          if (UrlExists(page)) {return page;} //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
          else {return "pages/404_not_found.html";} //Si l'HTML n'existe pas, erreur 404
        }
    })
    .when("/encyclopedie/pantheon/:god_html", {
        templateUrl : function (url_attr) {
          var page = "pages/encyclopedia/gods/"+url_attr.god_html;
          if (UrlExists(page)) {return page;} //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
          else {return "pages/404_not_found.html";} //Si l'HTML n'existe pas, erreur 404
        }
    })
    .when("/encyclopedie/races_et_peuples/:people_html", {
        templateUrl : function (url_attr) {
          var page = "pages/encyclopedia/people/"+url_attr.people_html;
          if (UrlExists(page)) {return page;} //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
          else {return "pages/404_not_found.html";} //Si l'HTML n'existe pas, erreur 404
        }
    })
    .when("/encyclopedie/bestiaire/:beast_html", {
        templateUrl : function (url_attr) {
          var page = "pages/encyclopedia/bestiary/"+url_attr.beast_html;
          if (UrlExists(page)) {return page;} //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
          else {return "pages/404_not_found.html";} //Si l'HTML n'existe pas, erreur 404
        }
    })
    .otherwise( {
      redirectTo: "/404_not_found"
    });
});

function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

// Gestion des ancres lors d'un changement de page
// https://stackoverflow.com/questions/14712223/how-to-handle-anchor-hash-linking-in-angularjs
app.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();
  });
});
