if (window.localStorage.getItem("IsConnected") == "true")
{
    document.getElementById("identifier").innerText = window.localStorage.getItem("username") + "\n\nClick here !";
}

function imoutofnames() {
    if (window.localStorage.getItem("IsConnected") == "true")
    {
        window.location = "html/compte.html";
        return;
    }
    window.location = "html/signin.html";
}