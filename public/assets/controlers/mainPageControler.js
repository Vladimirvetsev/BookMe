app.controller('mainPageController', function ($scope, $http) {

    $http({
        method: "GET",
        url: "hotels"
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        // console.log('sfkoajfpjawofpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');
    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });


    $scope.town = '';
    $scope.likes = 0;
    $scope.searchtown = '';
    console.log($scope.likes)
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


