document.getElementById("today").innerText = new Date().toString().substr(0,25);

if (window.localStorage.getItem("IsConnected") == "true")
{
    document.getElementById("identifier").innerText = window.localStorage.getItem("username") + "\n\nClick here !";
}

function imoutofnames() {
    if (window.localStorage.getItem("IsConnected") == "true")
    {
        window.location = "compte.html";
        return;
    }
    window.location = "signin.html";
}