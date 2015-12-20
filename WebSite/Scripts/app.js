
var myAngularBerlinClockApp = new angular.module("BerlinClockApp", ['ngRoute']);

myAngularBerlinClockApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'timeController',
            templateUrl: '../views/BerlinRoute.html'
        })
        .otherwise({redirectTo:'/'});
});





