app.controller('hotels', function($scope, $http, $filter) {
    $http({
        method : "GET",
        url : "assets/controlers/hotels.json"
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });
  
});
