app.service('hotelsService', ['$http', function($http) {
    this.getUser = function() {
        return $http.get('http://localhost:3000/users');
    }
    this.editUser = function(user) {
        return $http.put('http://localhost:3000/users', user);
    }
}])