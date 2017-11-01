document.addEventListener("DOMContentLoaded", function() {
    // document.getElementById("loginButton").addEventListener("click",function() {
        // getUsers().then(function(users) {
        //     $("main").append("<h3>"+users[0].email+"</h3>")
        // })
    // })
    

    document.getElementById("login").addEventListener("click",function() {
        event.preventDefault()
        $("#login-dp").toggle()
    })

    document.getElementById("gotoReg").addEventListener("click",function() {
        document.getElementById("loginForm").style.display = "none"
        document.getElementById("regForm").style.display = "block"
    })

    document.getElementById("gotoLogin").addEventListener("click",function() {
        document.getElementById("loginForm").style.display = "block"
        document.getElementById("regForm").style.display = "none"
    })
})