app.controller('viewDetailsController', function ($scope, $http, $filter,$log, $routeParams) {

    var getDates = function (startDate, endDate) {
        var dates = [],
            currentDate = startDate,
            addDays = function (days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    
    $scope.example1 = {
        value: new Date()
      };
    $scope.example2 = {
        value:$scope.example1.value
      };
  
    var hotel = $routeParams.id;
    $scope.thishotel = hotel;
    // console.log($scope.thishotel)
    $scope.loading = true;

    
    $http({
        method: "GET",
        url: 'hotels'
    }).then(function mySuccess(response) {
        $scope.myhotels = response.data;
        $scope.loading = false;
        // $scope.findHotel=function(id){
        //    for(hotel in response.data){
        //        console.log(hotel)
        //        if(hotel._id==id){
        //         console.log(hotel.id)
        //            return hotel;
        //        }else{
        //            return false;
        //        }
        //    }
        // }
        // var thatHotel=$scope.findHotel(hotel);
       
        
        // console.log(thatHotel)
        $scope.setDates = function ($event) {
            // var date1=$scope.firstDate;
            // var date2=$scope.secondDate;
            var date1=$scope.example1.value;
            var date2=$scope.example2.value;
            // var date2=new Date($scope.secondDate);
            // console.log(date1)
            // console.log(date2)
            $event.preventDefault();
            // console.log($scope.firstDate)
            var dates = getDates(date1,date2);
            // dates.forEach(function (date) {
            //     console.log(date);
            // });
            // console.log(dates)
            $scope.oneHotel = $filter('filter')($scope.myhotels, {_id: hotel});
            $scope.oneHotel[0].storedDates.push(dates);
            // $log.log($scope.oneHotel[0].storedDates)
            $http.put('http://localhost:3000/hotels/'+hotel, dates).then(function(res){
                
                // console.log($scope.hotelData);
            })
            // $log.log($scope.oneHotel)
        }
        // Usage

    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });
});