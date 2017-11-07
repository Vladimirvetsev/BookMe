app.controller('hotelsController', ['$scope', 'hotelsService',
function($scope, hotelsService) {

    hotelsService.getUser().then(function(result) {
        console.log(result.data)
        var user = result.data[0]
        console.log(user)
        $scope.userBookings = function() {
            console.log(user.arrayBookings)
        }
        $scope.userVisited = function() {
            console.log(user.arrayVisitedHotels)
        }
        $scope.userFavorites = function() {
            console.log(user.arrayFavoriteHotels)
        }
        $scope.userHotels = function() {
            console.log(user.arrayOwnHotels)
        }
    });

    $scope.editButton = function() {
        hotelsService.editUser().then(function() {
            
        })
    }
}

])