document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginButton").addEventListener("click",function() {
        var userEmail = document.getElementById("loginEmail").value;
        var userPassword = document.getElementById("loginPassword").value;
        login({email: userEmail, password: userPassword}).then(function(user) {
            document.getElementById("userDropdown").style.display = "block"
            document.getElementById("login").style.display = "none"
            document.querySelector("#userDropdown >a").textContent = user[0].firstName+" "+user[0].lastName
        })
    })
    

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

    document.getElementById("logout").addEventListener("click",function() {
        location.reload()
    })
})