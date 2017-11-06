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

function register(newUser) {
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("PUT","http://localhost:3000/login",true)
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(newUser));
        xhr.addEventListener("load",function() {
            if (xhr.status==200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

function loginOther(newUser) {
    return new Promise(function(resolve,reject) {
        var xhr = new XMLHttpRequest()
        xhr.open("PUT","http://localhost:3000/login/other",true)
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(newUser));
        xhr.addEventListener("load",function() {
            if (xhr.status==200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

// function loginGoogle(newUser) {
//     return new Promise(function(resolve,reject) {
//         var xhr = new XMLHttpRequest()
//         xhr.open("PUT","http://localhost:3000/login/google",true)
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.send(JSON.stringify(newUser));
//         xhr.addEventListener("load",function() {
//             if (xhr.status==200) {
//                 resolve(JSON.parse(xhr.responseText))
//             } else {
//                 reject(xhr.statusText)
//             }
//         })
//     })
// }
