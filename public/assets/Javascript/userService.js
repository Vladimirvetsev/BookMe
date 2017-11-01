function getUsers() {
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("GET","http://localhost:3000/login",true)
        xhr.send(null)
        xhr.addEventListener("load",function() {
            if (xhr.status==200) {
                console.log(JSON.parse(xhr.responseText))
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.statusText)
            }
        })
    })
}