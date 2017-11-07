app.controller('mainPageController', function ($scope, $http,$filter, $log) {

    $http({
        method: "GET",
        url: "hotels"
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        $scope.setView=function(id){
            // console.log(id);
            $scope.hotel = $filter('filter')($scope.myhotels, { _id: id })
            var view=$scope.hotel[0].views;
            view+=view;
            // $log.log($scope.hotel[0])  
            $http.put('http://localhost:3000/hotels/'+id,  view).then(function(res){
                $log.log($scope.hotel[0].views)
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


