function signup(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;
if(user=="" || pass==""){
alert("Please fill all fields");
return;
}
localStorage.setItem("username",user);
localStorage.setItem("password",pass);
alert("Account Created Successfully");
window.location.href="login.html";
}
function login(){
let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;
let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");
if(user===storedUser && pass===storedPass){
alert("Login Successful");
localStorage.setItem("loggedIn","true");
window.location.href="index.html";
}else{
alert("Invalid Username or Password");
}
}
function logout(){
localStorage.removeItem("loggedIn");
alert("Logged Out");
window.location.href="login.html";
}