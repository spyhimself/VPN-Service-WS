if (! window.localStorage.getItem("IsConnected") || window.localStorage.getItem("IsConnected") == "false")
{
    alert("Not connected !\nYou will be redirected to the sign in page"); //need to redirect to the sign in page
    window.location = "signin.html";
}
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var birthday = document.getElementById("birthday");
var gender = document.getElementById("gender");

resettxt();

function change(theid) {
    resettxt();
    var tochange = document.getElementById(theid);
    if (tochange.innerHTML.indexOf("input") == -1)
    tochange.innerHTML = '<input id = "new' + theid + '" type="text" placeholder="New ' + theid + '"> <input type="button" value="set" onclick = "SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function changedate() {
    resettxt();
    birthday.innerHTML = '<input type = "date" id="newbirthday"> <input type="button" value="set" onclick = "SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function changegen() {
    resettxt();
    gender.innerHTML = '<input id="newgender" type="radio" name="gender" value="male" checked><b>Male</b> <input type="radio" name="gender" value="female"><b>Female</b> <input type="button" value="set" onclick="SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function SetNew() {
    var tochange = username.innerHTML.indexOf("input") != -1 ? username : password.innerHTML.indexOf("input") != -1 ? password : email.innerHTML.indexOf("input") != -1 
    ? email : birthday.innerHTML.indexOf("input") != -1 ? birthday : gender;
    if (tochange == gender) window.localStorage.setItem(tochange.id, document.getElementById("new" + tochange.id).checked ? "Male" : "Female" );
    else window.localStorage.setItem(tochange.id, document.getElementById("new" + tochange.id).value);
    resettxt();
}

function resettxt() {
    username.textContent = window.localStorage.getItem("username");
    email.textContent = window.localStorage.getItem("email");
    password.textContent = window.localStorage.getItem("password");
    birthday.textContent = window.localStorage.getItem("birthday");
    gender.textContent = window.localStorage.getItem("gender");
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