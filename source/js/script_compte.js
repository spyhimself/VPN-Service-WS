if (! window.localStorage.getItem("IsConnected") || window.localStorage.getItem("IsConnected") == "false")
{
    alert("not connected");
}
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var birthday = document.getElementById("birthday");
var gender = document.getElementById("gender");

username.textContent = window.localStorage.getItem("username");
email.textContent = window.localStorage.getItem("email");
password.textContent = window.localStorage.getItem("password");
birthday.textContent = window.localStorage.getItem("birthday");
gender.textContent = window.localStorage.getItem("gender");