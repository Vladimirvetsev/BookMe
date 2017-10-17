var app = angular.module("myApp", ["ngRoute","ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl  : "assets/externalHTM/mainPage.htm"
    })
    .when("/secondPage",{
        templateUrl :'assets/externalHTM/secondPage.htm'
    })
});

