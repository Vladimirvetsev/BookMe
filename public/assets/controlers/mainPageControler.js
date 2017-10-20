app.controller('mainPageController', function($scope, $http) {
  
    $http({
        method : "GET",
        url : "hotels"
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        // console.log('sfkoajfpjawofpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });
    
   
   $scope.town='';
});
