var sugarApp = angular.module("sugarApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

sugarApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/sugars", {
            templateUrl: "app/sugar/sugarGallery.html",
            controller: "sugarGalleryCtrl"
        })
        .when("/sugars/:sugarIndex", {
            templateUrl: "app/sugar/sugarDetails.html",
            controller: "sugarDetailsCtrl"
        }).when("/new", {
            templateUrl: "app/sugar/insulin.html",
            controller: "insulinCtrl"            
        })

});

sugarApp.controller("TestCtrl", function ($scope, User, activeUser, sugar, sugars) {
    var plainUser = {
        "email": "noam@gmail.com",
        "password": "123456",
        "firstName": "Noam",
        "lastName": "Datner",
        "data": "sugarLog.json"
    }

    var user = new User(plainUser);

    activeUser.login(user);
    
    activeUser.logout();
    
    var plainsugar = {
        "sugarDate": "12/12/2012",
        "sugarTime": "12:12",
        "sugarWhen": "Lunch",
        "sugarValue": 121
    }

    var sugar = new sugar(plainsugar);
    

    sugars.add(plainsugar);
    sugars.add(plainsugar);
    sugars.removeAll();
    
}); 