app.controller('indexController', ['$scope', 'indexService',
function ($scope, indexService) {
    indexService.getHotels().then(function(result) {
        $scope.myhotels = result.data
    })

}])