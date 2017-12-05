sugarApp.controller("sugarDetailsCtrl", function ($scope, $location, sugars, activeUser,  $routeParams, sugar) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // Creating a copy of the sugar object so changes won't be reflected on the array
    $scope.sugar = new sugar(sugars.get($routeParams.sugarIndex));

    $scope.cancel = function() {
        $location.path("/sugars");
    }

    $scope.update = function() {
        sugars.update($routeParams.sugarIndex, $scope.sugar);
        $location.path("/sugars");
    }

    $scope.remove = function() {
        sugars.remove($routeParams.sugarIndex);
        $location.path("/sugars");
    }
    
})
