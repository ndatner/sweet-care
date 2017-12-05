sugarApp.controller("insulinCtrl", function ($scope, $location, sugars, activeUser, sugar) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.sugar = new sugar({});

    $scope.cancel = function () {
        $location.path("/sugars");
    }

    $scope.create = function () {
        
        sugars.add($scope.sugar);
        $location.path("/sugars");
    }
});