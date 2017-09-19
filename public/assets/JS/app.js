var app = angular.module("domhanWebSite", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    //Gestion du routing
    $routeProvider
    .when("/", { //Quand cette URL est appelée
      templateUrl : "pages/home.html", //La page correspondante est affichée
    })
    .when("/truc_autre", {
      templateUrl : "pages/truc_autre.html", //La page correspondante est affichée
      controller: "TrucController" //Et le controlleur approprié est appelé
    })
    .otherwise( {
      redirectTo: "/"
    });
});
