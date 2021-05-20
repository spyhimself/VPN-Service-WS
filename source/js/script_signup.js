function SaveCreds() {
    var username = document.getElementById("usrname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwd").value;
    if (password != document.getElementById("confpasswd").value)
    {
        alert("Password missmatch !");
        window.location.reload();
    }
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
}