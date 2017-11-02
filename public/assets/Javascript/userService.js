function login(user) {
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("POST","http://localhost:3000/login",true)
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(user));
        xhr.addEventListener("load",function() {
            if (xhr.status==200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.statusText)
            }
        })
    })
}
