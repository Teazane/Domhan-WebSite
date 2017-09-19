var app = angular.module("domhanWebSite", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    //Gestion du routing
    $routeProvider
    .when("/", { //Quand cette URL est appelée
      templateUrl : "pages/home.html", //La page correspondante est affichée
    })
    .when("/qui-sommes-nous", {
      templateUrl : "pages/who_we_are.html",
    })
    .when("/nous-contacter", {
      templateUrl : "pages/contact_us.html",
    })
    .when("/reseaux-sociaux", {
      templateUrl : "pages/social_network.html",
    })
    .when("/forum", {
      templateUrl : "pages/forum.html",
    })
    .when("/index_characters", {
      templateUrl : "pages/encyclopedia/index_characters.html",
      controller: "IndexCharactersController" //le controller ssocié à la page est chargé
    })
    .otherwise( {
      redirectTo: "/"
    });
});
