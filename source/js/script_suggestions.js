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

const sendform = () =>
{
    /* packing the data in a json format */
    var obj = document.getElementsByClassName("input");

    var jsondata = '{\n"name": "'+ obj[0].value +'",\n"email": "' + obj[1].value + '",\n"Phone": "' + obj[2].value + '",\n"Subject": "' + obj[3].value 
    + '",\n"Message": "' + obj[4].value + '"\n}';

    /* creating an xhr object and initializing property*/

    var postxhr = new XMLHttpRequest();

    /*using the discord webhook api*/
    postxhr.open('POST', 'https://discord.com/api/webhooks/849806948882055228/5STEFuPPtwaRVlfp-8hj_ynX44cgal7mYcOCaN9_bwjVBz-LdXLtKrNz4PtvOeyiuR9t');
    /*here is the documentation https://discord.com/developers/docs/resources/webhook#execute-webhook*/
    
    postxhr.setRequestHeader('Content-Type', 'application/json');
    postxhr.send(JSON.stringify({content: "```json\n" + jsondata + "```", username: obj[0].value})); //post the request
    
}