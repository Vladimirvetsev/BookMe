app.controller('stepController',['$scope','$http','imgForm', function ($scope, $http,imgForm) {
  var facilities=[
    {wifi:false, imgURL:'assets/Images/Facilities-img/icons8-wi-fi.png'}
  ];
  var Photos=[];
  console.log($scope.hotelData)
  $scope.hotelData = {facilities};
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
  $scope.file={};
  $scope.Submit=function(){
    imgForm.upload($scope.file).then(function(data){
      if(data.data.succes){
        $scome.uploading=false;
        $scope.message=data.data.message;
        $scope.file={};
      }else{
        $scome.uploading=false;
        $scope.message=data.data.message;
        $scope.file={};
      }
    })
  }  
}]);