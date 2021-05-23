function LoadCheckCreds() {
    var login_username = document.getElementById("username").value;
    var login_password = document.getElementById("password").value;

    var original_username = window.localStorage.getItem("username");
    var original_password = window.localStorage.getItem("password");

    if (!original_username || !original_password)
    {
        alert("No account found! Make sure to create your account");
        return;
    }

    if (original_password === login_password && original_username === login_username)
    {
        window.localStorage.setItem("IsConnected", "true");
        window.location = "../index.html";
    }
    
    var inco = document.getElementsByTagName("p");
    inco[0].innerText = inco[0].innerText + "\n\nIncorrect username or password !";
    setTimeout(function() {inco[0].innerText = inco[0].innerText.substr(0,23)},3000);
}