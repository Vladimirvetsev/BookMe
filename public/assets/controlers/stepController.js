// app.controller('stepController',['$scope','$http','imgForm', function ($scope, $http,imgForm) {
 
//     // $scope.addNewKompanionka = function($event) {
//     //   $event.preventDefault();
//     //   if ($scope.newKomp._id == undefined)
//     //       KompanionkaService.addNew($scope.newKomp).then(function(result) {
//     //           $scope.newKomp._id = result.data.id;
//     //           $scope.kompanionki.push($scope.newKomp);
//     //           $scope.newKomp = {};
//     //       });
//     //   else {
//     //       KompanionkaService.edit($scope.newKomp).then(function(result) {
//     //           $scope.newKomp = {};
//     //           $scope.buttonTitle = 'Vkarai Q';
//     //       });
//     //   }
//   // }
//     // post('http://localhost:3000/bookMe_data_base')
//   })
//   $scope.file={};
//   $scope.Submit=function(){
//     imgForm.upload($scope.file).then(function(data){
//       console.log('haha')
//       if(data.data.success){
//         console.log('haha')
//         $scome.uploading=false;
//         $scope.message=data.data.message;
//         $scope.file={};
//       }else{
//         $scope.uploading=false;
//         $scope.message=data.data.message;
//         $scope.file={};
//       }
//     })
//   }  
// }]);

// angular.module('myApp', ['uploadFileService', 'fileModelDirective'])

app.controller('stepController', function($scope, $http, uploadFile, $timeout) {
    $scope.file = {};
    $scope.message = false;
    $scope.alert = '';
    $scope.default = 'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg';

    $scope.Submit = function() {
        $scope.uploading = true;
        uploadFile.upload($scope.file).then(function(data) {
            if (data.data.success) {
                $scope.uploading = false;
                $scope.alert = 'alert alert-success';
                $scope.message = data.data.message;
                $scope.file = {};
            } else {
                $scope.uploading = false;
                $scope.alert = 'alert alert-danger';
                $scope.message = data.data.message;
                $scope.file = {};
            }
        });
    };

    $scope.photoChanged = function(files) {
        if (files.length > 0 && files[0].name.match(/\.(png|jpeg|jpg)$/)) {
            $scope.uploading = true;
            var file = files[0];
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function(e) {
                $timeout(function() {
                    $scope.thumbnail = {};
                    $scope.thumbnail.dataUrl = e.target.result;
                    $scope.uploading = false;
                    $scope.message = false;
                });
            };
        } else {
            $scope.thumbnail = {};
            $scope.message = false;
        }
    };


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
    });
});
