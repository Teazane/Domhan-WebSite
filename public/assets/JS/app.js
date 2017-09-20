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
          return "pages/encyclopedia/characters/"+url_attr.character_html;
        } //Voir : https://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
    })
    .when("/encyclopedie/pantheon/:god_html", {
        templateUrl : function (url_attr) {
          return "pages/encyclopedia/gods/"+url_attr.god_html;
        }
    })
    .when("/encyclopedie/races_et_peuples/:people_html", {
        templateUrl : function (url_attr) {
          return "pages/encyclopedia/people/"+url_attr.people_html;
        }
    })
    .when("/encyclopedie/bestiaire/:beast_html", {
        templateUrl : function (url_attr) {
          return "pages/encyclopedia/bestiary/"+url_attr.beast_html;
        }
    })
    .otherwise( {
      redirectTo: "/"
    });
});
