// function getHotels() {
//     return new Promise(function(resolve,reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open("GET","http://localhost:3000/users",true)
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.send(null);
//         xhr.addEventListener("load",function() {
//             if (xhr.status==200) {
//                 resolve(JSON.parse(xhr.responseText))
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }

app.service('hotelsService', ['$http', function($http) {
    this.getUser = function() {
        return $http.get('http://localhost:3000/users');
    }
    this.editUser = function() {
        return $http.put('http://localhost:3000/users');
    }
}])