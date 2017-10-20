app.controller('viewDetailsController', function ($scope, $http,$filter,$routeParams) {
    // $http.get('hotels').then(function(response){
    //     $scope.hotels=response.data;
    // })
    var hotel = $routeParams.id;
    $scope.thishotel=hotel;
    // console.log(thisHotel);
    // console.log(hotel);
    $scope.loading = true;
    // console.log('sfkoajfpjawofpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    $http({
        method : "GET",
        url : 'hotels'
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        $scope.loading=false;
        // console.log($scope.myhotels);
        // console.log($scope.hotels);
    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });

    // $scope.getThisHotel=function(item){
    //     return 
    // }
    // var resultado = $filter('filter')($scope.myhotels, {id:thishotel});
    // $scope.hotel=$filter('_id')(thisHotel);
    // $scope.name=resultado.myhotles.name;
    // $scope.friendObj = $filter('filter')($scope.myhotels, { id: parseInt($stateParams.myhotels) }, true)[0]
    
});