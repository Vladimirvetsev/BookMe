
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

  var Photos=[];
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
                Photos.push(e.target.result);
                // console.log(photos)
          };
      } else {
          $scope.thumbnail = {};
          $scope.message = false;
      }
  };



    var facilities=[
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-wi-fi.png',name:'Wifi'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-tv.png',name:'TV'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-air-conditioner.png',name:'Air Conditioner'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-swimming.png',name:'Pool'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-smoking.png',name:'Smoke Area'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-iron.png',name:'Iron'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-dumbbell.png',name:'Gym'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-weber-filled.png',name:'BBQ'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-dog-filled.png',name:'Pets'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-hair-dryer.png',name:'Hair Dryer'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-spa-filled.png',name:'SPA'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-restaurant.png',name:'Restaurant'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-insert-card.png',name:'ATM'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-bar.png',name:'Bar'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-classroom.png',name:'Meating Room'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-bed-filled.png',name:'Extra bed'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-cloakroom.png',name:'Cloakroom'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-elevator.png',name:'Elevator'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-food-service.png',name:'Room Service'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-fountain.png',name:'Fountain'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-garage.png',name:'Garage'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-living-room.png',name:'Living Room'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-luggage-trolley.png',name:'Luggage Trolley'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-massage.png',name:'Massage'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-no-smoking.png',name:'No Smoking Area'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-office-phone.png',name:'Phone'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-safe.png',name:'Safe'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-sauna.png',name:'Sauna'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-shopping-bag.png',name:'Shops'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-toilet.png',name:'Toilets'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-towel.png',name:'towel'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-transportation.png',name:'Transportation'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-washing-machine.png',name:'Washing Machine'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-water-park.png',name:'Water Park'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-horses.png',name:'Horse Riding'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-wheelchair.png',name:'Wheelchair ramp'},
      {has:false, imgURL:'assets/Images/Facilities-img/icons8-front-desk-filled.png',name:'24/7 Reception'}
    ];
    console.log($scope.hotelData)
    var img=$scope.file.originalname
    $scope.hotelData = {facilities,Photos,img,storedDates};
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
