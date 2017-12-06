sugarApp.controller("sugarGalleryCtrl", function ($scope, $http, $location, activeUser, sugars) {

    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.addRow = function() {
        sugars.add($scope.sugar);
        sugars.load($scope.sugar);
        console.log("hello222"+ JSON.stringify($scope.sugar));
      };
    
    // Making sure that we are only loading once
    if (sugars.getAll().length === 0) {
        $scope.sugarArr = [];
        $http.get(activeUser.get().data).then(function (response) {
            sugars.load(response.data);
            $scope.sugarArr = sugars.getAll();
            console.log(JSON.stringify($scope.sugarArr))
        });
    } else {
        $scope.sugarArr = sugars.getAll();
        
    }

    $scope.openDetails = function (index) {
        $location.path("/sugars/" + index)
    }
});

console.log("hello");


