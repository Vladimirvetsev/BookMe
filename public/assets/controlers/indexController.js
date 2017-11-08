app.controller('indexController', ['$scope', 'indexService',
function ($scope, indexService) {
    indexService.getHotels().then(function(result) {
        console.log(result.data)
        console.log(result.data[0])
        $scope.myhotels = result.data
    })

}])