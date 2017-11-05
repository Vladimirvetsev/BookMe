document.addEventListener("DOMContentLoaded", function () {
    function error(ID) {
        var originalColor = $(ID).css("background-color")
        $(ID).effect("shake")
        $(ID).css("background-color", "#DB1818")
        setTimeout(function () {
            $(ID).css("background-color", originalColor)
        }, 3000);
    }
    document.getElementById("loginButton").addEventListener("click", function () {
        var userEmail = document.getElementById("loginEmail").value;
        var userPassword = document.getElementById("loginPassword").value;
        if ((userEmail.length > 0) && (userPassword.length > 0) && (userEmail.indexOf("@") != -1) && (userEmail.indexOf("@") != 0) && (userEmail.indexOf("@") != userEmail.length)) {
            login({ email: userEmail, password: userPassword }).then(function (user) {
                if (user.length > 0) {
                    document.getElementById("userDropdown").style.display = "block"
                    document.getElementById("login").style.display = "none"
                    document.querySelector("#userDropdown >a").textContent = user[0].firstName + " " + user[0].lastName
                    $("#login-dp").toggle()
                } else {
                    error("#loginButton")
                }
            })
        } else {
            error("#loginButton")
        }
    })

    document.getElementById("regButton").addEventListener("click", function () {
        var regFName = document.getElementById("regFName").value
        var regLName = document.getElementById("regLName").value
        var regEmail = document.getElementById("regEmail").value
        var regPassword = document.getElementById("regPassword").value
        var originalColor = document.getElementById("regButton").style.backgroundColor
        if ((regFName.length > 0) && (typeof regFName == "string") && (regLName.length > 0) && (typeof regLName == "string") && (regEmail.length > 0) && (regPassword.length > 0) && (regEmail.indexOf("@") != -1) && (regEmail.indexOf("@") != 0) && (regEmail.indexOf("@") != regEmail.length)) {
            register({ firstName: regFName, lastName: regLName, email: regEmail, password: regPassword }).then(function (res) {
                if (res.error != null) {
                    alert(res.error)
                    error("#regButton")
                } else {
                    $("#regButton").css("background-color", "#12CC1B")
                    setTimeout(function () {
                        $("#regButton").css("background-color", originalColor)
                    }, 3000);
                }
            })
        } else {
            error("#regButton")
        }
    })

    document.getElementById("login").addEventListener("click", function (event) {
        event.preventDefault()
        $("#login-dp").toggle()
    })

    document.getElementById("logout").addEventListener("click", function () {
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') { 
                FB.logout(function(response) {
                });
            }
        })
        document.getElementById("userDropdown").style.display = "none"
        document.getElementById("login").style.display = "block"
    })

    document.getElementById("gotoReg").addEventListener("click", function () {
        document.getElementById("loginForm").style.display = "none"
        document.getElementById("regForm").style.display = "block"
    })

    document.getElementById("gotoLogin").addEventListener("click", function () {
        document.getElementById("loginForm").style.display = "block"
        document.getElementById("regForm").style.display = "none"
    })

    document.getElementById("FBLogin").addEventListener("click", function () {
        FB.login(function (response) {
            if (response.status == "connected") {
                FB.api('/me', function (response) {
                    alert('Welcome ' + response.name);
                    document.getElementById("userDropdown").style.display = "block"
                    document.getElementById("login").style.display = "none"
                    document.querySelector("#userDropdown >a").textContent = response.name
                    $("#login-dp").toggle()
                });
            } else {
                alert("Problem with logging in")
            }
        }, { perms: '' });
    })
})