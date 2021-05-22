function SaveCreds() {
    if (document.getElementById("passwd").value != document.getElementById("confpasswd").value)
    {
        alert("Password missmatch !");
        window.location.reload();
    }
    if ( ! document.getElementById("terms").checked)
    {
        alert("Accept the terms...");
        window.location.reload();
    }
    
    
    window.localStorage.setItem("email", document.getElementById("email").value);
    window.localStorage.setItem("username", document.getElementById("usrname").value);
    window.localStorage.setItem("password", document.getElementById("passwd").value);
    window.localStorage.setItem("birthday", document.getElementById("birthday").value);
    window.localStorage.setItem("gender", document.getElementById("gender").checked ? "Male" : "Female");
    window.location = "signin.html";
}