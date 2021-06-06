const gotocheck = (thesub, theprice) => {window.localStorage.setItem("cart", thesub);window.localStorage.setItem("price", theprice);window.location="checkout.html";}

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