app.controller('stepController', function ($scope, $http) {
  // var facilities=[];
  // console.log($scope.hotelData)

  $scope.hotelData = {};
  $http.get("http://localhost:3000/hotels").then(function (result) {
    $scope.myHotels = result.data;
    
    $scope.addNewHotel = function ($event) {
      $event.preventDefault();
      console.log($scope.myHotels)
      $http.post('http://localhost:3000/hotels',  $scope.hotelData).then(function(res){
        console.log($scope.hotelData);
        $scope.myHotels.push($scope.hotelData);
      })
    }
    // $scope.addNewKompanionka = function($event) {
    //   $event.preventDefault();
    //   if ($scope.newKomp._id == undefined)
    //       KompanionkaService.addNew($scope.newKomp).then(function(result) {
    //           $scope.newKomp._id = result.data.id;
    //           $scope.kompanionki.push($scope.newKomp);
    //           $scope.newKomp = {};
    //       });
    //   else {
    //       KompanionkaService.edit($scope.newKomp).then(function(result) {
    //           $scope.newKomp = {};
    //           $scope.buttonTitle = 'Vkarai Q';
    //       });
    //   }
  // }
    // post('http://localhost:3000/bookMe_data_base')
  })
});