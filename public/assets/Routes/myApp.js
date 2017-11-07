var app = angular.module("myApp", ["ngRoute", "ngAnimate",'uploadFileService', 'fileModelDirective']);

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
        // .when("/login", {
        //     templateUrl: 'assets/externalHTM/login.htm'
        // })
        .when("/registerPage", {
            templateUrl: 'assets/externalHTM/registerPage.htm'
        })
        .when('/viewdetails/:id',
        {
            templateUrl: 'assets/externalHTM/viewdetails.htm',
        })
        // .when('/steps/firstStep',
        // {
        //     templateUrl: 'assets/externalHTM/firstStep.htm',
        // })
        .when('/secondPage/steps',
        {
            templateUrl: 'assets/externalHTM/steps.htm',
        })
        .when('/steps/secondStep',
        {
            templateUrl: 'assets/externalHTM/secondStep.htm',
        })
        .when('/steps/thirdStep',
        {
            templateUrl: 'assets/externalHTM/thirdStep.htm',
        })
        .when('/user',
        {
            templateUrl: 'assets/externalHTM/users.htm',
        })
    // otherwise({
    //     redirectTo:'mainPage'
    // })
    
});

