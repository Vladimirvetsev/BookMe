var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "assets/externalHTM/mainPage.htm",
        })
        .when("/secondPage", {
            templateUrl: 'assets/externalHTM/secondPage.htm'
        })
        .when("/thirdPage", {
            templateUrl: 'assets/externalHTM/thirdPage.htm'
        })
        .when("/login", {
            templateUrl: 'assets/externalHTM/login.htm'
        })
        .when("/registerPage", {
            templateUrl: 'assets/externalHTM/registerPage.htm'
        })
        .when('/viewdetails/:id',
        {
            templateUrl: 'assets/externalHTM/viewdetails.htm',
        })
    // otherwise({
    //     redirectTo:'mainPage'
    // })
});

