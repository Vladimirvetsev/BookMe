app.controller('mainPageController', function ($scope, $http,$filter, $log) {

    $http({
        method: "GET",
        url: "hotels"
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        $scope.addToFav=function(id){
            // console.log(id);
            event.preventDefault();
            $scope.hotel = $filter('filter')($scope.myhotels, { _id: id })
            var ob=$scope.hotel[0];
            // $log.log($scope.hotel[0])  
            $log.log(ob);
            $http.put('http://localhost:3000/users/favorites',  ob).then(function(res){
            })
        }
        $scope.like=function(id){
            // console.log(id);
            event.preventDefault();
            $scope.hotel = $filter('filter')($scope.myhotels, { _id: id })
            var likes=$scope.hotel[0].likes;
            likes+=likes;
            // $log.log($scope.hotel[0])  
            $log.log(ob);
            $http.put('http://localhost:3000/hotels',  ob).then(function(res){
            })
        }
        // console.log('sfkoajfpjawofpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });

   
    $scope.town = '';
    // $scope.likes = 0;s
    $scope.searchtown = '';
    // console.log($scope.likes)
    $scope.propertyName = 'likes';
    $scope.reverse = true;


    $scope.sortBy = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    $scope.templates =
        [{ name: "carousel.htm", url: 'carousel.htm' }];
    $scope.template = $scope.templates[0];

});


