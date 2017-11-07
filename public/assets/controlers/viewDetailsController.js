app.controller('viewDetailsController', function ($scope, $http, $filter, $log, $routeParams) {

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
    var calculatePrice = function (noshtuvki, pari, legla) {
        return noshtuvki * pari * legla;

    }
    $scope.example1 = {
        value: new Date()
    };
    $scope.example2 = {
        value: $scope.example1.value
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

        $scope.setDates = function ($event) {

            Date.prototype.withoutTime = function () {
                var d = new Date(this);
                d.setHours(0, 0, 0, 0);
                return d;
            }
            var date1 = $scope.example1.value;
            var date2 = $scope.example2.value;
            var realDate1 = date1.withoutTime();
            var realDate2 = date2.withoutTime();

            // console.log(realDate1)
            // console.log(realDate2)
            $event.preventDefault();
            var dates = getDates(realDate1, realDate2);
            // var dates = getDates(date2, date2);
            var available = false;
            var checkFreeDates = function (a, b) {
                for (var i = 0; i < b.length; i++) {
                    console.log('b=' + b[i]);
                    for (var index = 0; index < a.length; index++) {
                        if (a[index][a[index].length - 1] == b[i]) {
                            console.log('haha')
                            available= true;
                            break;
                        }

                    }
                }
            }
            // console.log(dates)
            $scope.oneHotel = $filter('filter')($scope.myhotels, { _id: hotel });
            // console.log(checkFreeDates($scope.oneHotel[0].storedDates, dates))
            console.log(available)
            if (!available) {
                available=true;

                $scope.oneHotel[0].storedDates.push(dates);

                var allReservatinsCount = $scope.oneHotel[0].storedDates.length;
                var nosht = $scope.oneHotel[0].storedDates[allReservatinsCount - 1].length;
                var legla = $scope.oneHotel[0].wantedBeds;
                var pari = $scope.oneHotel[0].oneBedPrice;
                $scope.oneHotel[0].offer = calculatePrice(nosht, pari, legla);


                // $log.log($scope.oneHotel[0].storedDates)
                $http.put('http://localhost:3000/hotels/' + hotel, dates).then(function (res) {

                    // console.log($scope.hotelData);
                })
            }
            // $log.log($scope.oneHotel)

        }
        // Usage

    }, function myError(response) {
        $scope.myhotel = response.statusText;
    });


});