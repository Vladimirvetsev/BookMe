app.service('indexService', ['$http', function($http) {
    this.getHotels = function() {
        return $http.get('http://localhost:3000/hotels');
    }
    
}])