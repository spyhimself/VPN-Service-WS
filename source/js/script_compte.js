if (! window.localStorage.getItem("IsConnected") || window.localStorage.getItem("IsConnected") == "false")
{
    alert("not connected"); //need to redirect to the sign in page
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
    tochange.innerHTML = '<input type="text" placeholder="New ' + theid + '"> <input type="button" value="set" onclick = "SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function changedate() {
    resettxt();
    birthday.innerHTML = '<input type = "date"> <input type="button" value="set" onclick = "SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function changegen() {
    resettxt();
    gender.innerHTML = '<input type="radio" name="gender" value="male" checked><b>Male</b> <input type="radio" name="gender" value="female"><b>Female</b> <input type="button" value="set" onclick="SetNew()"> <input type="button" value="cancel" onclick = "resettxt()">';
}

function SetNew() {
    var tochange = username.innerHTML.indexOf("input") != -1 ? username : password.innerHTML.indexOf("input") != -1 ? password : email.innerHTML.indexOf("input") != -1 
    ? email : birthday.innerHTML.indexOf("input") != -1 ? birthday : gender;
    
}

function resettxt() {
    username.textContent = window.localStorage.getItem("username");
    email.textContent = window.localStorage.getItem("email");
    password.textContent = window.localStorage.getItem("password");
    birthday.textContent = window.localStorage.getItem("birthday");
    gender.textContent = window.localStorage.getItem("gender");
}