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
        "name": "Shakshuka",
        "description": "An amazing egg dish",
        "duration": 40,
        "ingrediants": "Eggs, Tomattos, Oil",
        "steps": "Heat the pan, put the eggs",
        "imageUrl": "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.37.1080.1080/17438558_192469144582319_1152478392830918656_n.jpg?ig_cache_key=MTQ3NTg0MDMxNjE4ODA0ODY4NA%3D%3D.2.c"
    }

    var sugar = new sugar(plainsugar);
    

    sugars.add(plainsugar);
    sugars.add(plainsugar);
    sugars.removeAll();
    
}); 