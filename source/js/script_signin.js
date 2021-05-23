function LoadCheckCreds() {
    var login_username = document.getElementById("username").value;
    var login_password = document.getElementById("password").value;

    var original_username = window.localStorage.getItem("username");
    var original_password = window.localStorage.getItem("password");

    if (original_password === login_password && original_username === login_username)
    {
        window.localStorage.setItem("IsConnected", "true");
        window.location = "../index.html"
    }
    else
    {
        alert("Fuck you!");     //the password or username is wrong
    }
}