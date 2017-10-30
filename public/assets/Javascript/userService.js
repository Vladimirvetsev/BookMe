document.addEventListener("DOMContentLoaded", function() {
    getUsers().then(function(users) {
        console.log("as")
        console.log(users)
    })

    document.getElementById("login").addEventListener("click",function() {
        event.preventDefault()
        $("#login-dp").toggle()
    })
})