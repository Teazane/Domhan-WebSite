var app = angular.module("domhanWebSite", ["ngRoute", "ngMap"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('!');

    //Gestion du routing
    $routeProvider
    .when("/home", { //Quand cette URL est appelée
        templateUrl : "pages/home.html", //La page correspondante est affichée
        controller: "HomeController" //Et le controlleur approprié est appelé
    });
});
