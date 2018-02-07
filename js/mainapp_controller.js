//-------------------------------------------------- Routage-------------------------------------------------------------------------------------------------------------- 
'use strict';
var mainApp = angular.module('mainApp', [ // Module nGRoute--> Routage des view   |ModulerouteAppControllers-> Permet d'attacher un controlleur a une vue
    'ngRoute',
    'routeAppControllers'
]);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html"
        })

        .when("/home", {
            templateUrl: "partials/home.html"
        })
        .when("/project", {
            templateUrl: "partials/our_project.html"
        })
        .when("/lab", {
            templateUrl: "partials/our_lab.html"
        })
        .when("/news", {
            templateUrl: "partials/news.html"
        })
        .when("/why", {
            templateUrl: "partials/for_who.html"
        })
        .when("/who", {
            templateUrl: "partials/who_we_are.html"
        })
        .otherwise("/404", {
            templateUrl: "partials/404_page_not_found.html"
        });
}]);


var routeAppControllers = angular.module('routeAppControllers', []);