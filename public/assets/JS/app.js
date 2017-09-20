var app = angular.module("domhanWebSite", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    //Gestion du routing
    $routeProvider
    .when("/", { //Quand cette URL est appelée
      templateUrl : "pages/home.html" //La page correspondante est affichée
    })
    .when("/qui-sommes-nous", {
      templateUrl : "pages/who_we_are.html"
    })
    .when("/nous-contacter", {
      templateUrl : "pages/contact_us.html"
    })
    .when("/reseaux-sociaux", {
      templateUrl : "pages/social_network.html"
    })
    .when("/forum", {
      templateUrl : "pages/forum.html"
    })
    .when("/encyclopedie/index_personnages", {
      templateUrl : "pages/encyclopedia/index_characters.html",
      controller: "IndexCharactersController" //le controller ssocié à la page est chargé
    })
    .when("/encyclopedie/personnages/:character_html", {
        templateUrl : function (url_attr) {
          return "pages/encyclopedia/characters/"+url_attr.character_html;
        } //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
    })
    .otherwise( {
      redirectTo: "/"
    });
});
