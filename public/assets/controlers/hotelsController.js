app.controller('hotelsController', ['$scope', 'hotelsService',
    function ($scope, hotelsService) {

        hotelsService.getUser().then(function (result) {
            var user = result.data[0]
            $scope.changeFName = user.firstName
            $scope.changeLName = user.lastName
            $scope.changeEmail = user.email
            $scope.changePassword = user.password

            console.log(user)
            $scope.userBookings = function () {
                console.log(user.arrayBookings)
            }
            $scope.userVisited = function () {
                console.log(user.arrayVisitedHotels)
            }
            $scope.userFavorites = function () {
                console.log(user.arrayFavoriteHotels)
            }
            $scope.userHotels = function () {
                console.log(user.arrayOwnHotels)
            }
        });

        $scope.editButton = function () {
            if (($scope.changeFName.length > 0) && (typeof $scope.changeFName == "string") && ($scope.changeLName.length > 0) && (typeof $scope.changeLName == "string") && ($scope.changeEmail.length > 0) && ($scope.changePassword.length > 0) && ($scope.changeEmail.indexOf("@") != -1) && ($scope.changeEmail.indexOf("@") != 0) && ($scope.changeEmail.indexOf("@") != $scope.changeEmail.length)) {
                var changedUser = {
                    changeFName: $scope.changeFName, changeLName: $scope.changeLName, changeEmail: $scope.changeEmail, changePassword: $scope.changePassword, confirmPassword: $scope.confirmPassword
                }
                hotelsService.editUser(changedUser).then(function (result) {
                    if (result.data.error != null) {
                        alert(result.data.error)
                    } else {
                        alert("Success")
                    }
                })
            } else {
                alert("Invalid data")
            }
        }
    }

])