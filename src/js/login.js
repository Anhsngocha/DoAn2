const signUp = document.getElementById('register');

const loginBtn = document.getElementById('login');




var warningUsername = document.querySelector(".warning-username");
var warningUsernameLogin = document.querySelector(".warning-username-login");
var warningPasswordLogin = document.querySelector(".warning-pass-login");

function showPassLogin() {
    const checkBox = document.getElementById('password');

    if(checkBox.type === 'password') {
        checkBox.type = "text";
    } else {
        checkBox.type = "password";
    }
}




//kiểm tra đăng nhập với dữ liệu hợp lệ

// kiểm tra tên đăng nhập không được rỗng
function checkuserlogin(){
    var inputLogin = document.querySelector(".input_username_login").value;
    // var check = /^[A-Z][a-zA-Z0-9]{7,}$/;
    if(inputLogin==""){
        warningUsernameLogin.innerHTML = '*Tên tài khoản không được để trống';
        warningUsernameLogin.style.display= 'block';
    }
    else{
        warningUsernameLogin.style.display= 'none';
    }
}

// kiểm tra mật khẩu không được rỗng
function checkpasslogin(){
    var passLogin = document.querySelector(".input_pass_login").value;
    // var check = /^[A-Z][a-zA-Z0-9]{7,}$/;
    if(passLogin==""){
        warningPasswordLogin.innerHTML = '*Mật khẩu không được để trống';
        warningPasswordLogin.style.display= 'block';
    }
    else{
        warningPasswordLogin.style.display= 'none';
    }
}
// end


//kiểm tra khi đăng ký tài khoản
//kiểm tra tên tài khoản không được trống, tài khoản phải 
var warningUsernameSignup = document.querySelector(".warning-username-signup");
function checkuser_signup(){
    var inputUser = document.querySelector(".input_username_signup").value
    var check = /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/;
    if(inputUser==""){
        warningUsernameSignup.innerHTML = '*Tên tài khoản không được để trống';
        warningUsernameSignup.style.display= 'block';
    }
    else if(inputUser.length < 6) {
        warningUsernameSignup.innerHTML = '*Tên tài khoản phải có độ dài ít nhất 6 ký tự';
        warningUsernameSignup.style.display= 'block';
    }
    else if(check.test(inputUser)===false) {
        warningUsernameSignup.innerHTML = '*Tên tài khoản không hợp lệ';
        warningUsernameSignup.style.display= 'block';
    }
    else{
        warningUsernameSignup.style.display= 'none';
    }
}

var warningEmailSignup = document.querySelector(".warning-email-signup");
function checkemail_signup(){
    var inputEmail = document.querySelector(".input_email_signup").value
    var check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(inputEmail==""){
        warningEmailSignup.innerHTML = '*Email không được để trống';
        warningEmailSignup.style.display= 'block';
    }
    else if(check.test(inputEmail)===false) {
        warningEmailSignup.innerHTML = '*Định dạng email không hợp lệ';
        warningEmailSignup.style.display= 'block';
    }
    else{
        warningEmailSignup.style.display= 'none';
    }
}

var warningPassSignup = document.querySelector(".warning-pass-signup")
function checkpass_signup(){
    var inputPass = document.querySelector(".input_pass_signup").value
    var check = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if(inputPass==""){
        warningPassSignup.innerHTML = '*Mật khẩu không được để trống';
        warningPassSignup.style.display= 'block';
    }
    else if (check.test(inputPass)===false) {
        warningPassSignup.innerHTML = '*Mật khẩu không hợp lệ';
        warningPassSignup.style.display= 'block';
    }
    else{
        warningPassSignup.style.display= 'none'
    }
}

function showPassSignup() {
    const checkBox = document.getElementById('password');

    if(checkBox.type === 'password') {
        checkBox.type = "text";
    } else {
        checkBox.type = "password";
    }
}

// function login(event){
//     event.preventDefault(); 
//     var username = document.querySelector('.input_username_login').value;
//     var password = document.querySelector('.input_pass_login').value;
//     if(username === 'ngocanh' && password === '123') {
//         localStorage.setItem("user", JSON.stringify({username:username}));
//         window.location.href = '/index.html';
//     } else {
//         alert('no');
//     }
//     return
// }

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.querySelector('.input_email_signup').value;
    var username = document.querySelector('.input_username_signup').value;
    var password = document.querySelector('.input_pass_signup').value;

    if(!username || !password || !email) {
        alert('not empty');
    }

    var users = JSON.parse(localStorage.getItem('users') || '[]');

    var userExists = users.some(function(user) {
        return user.username === username;
    });

    if(userExists) {
        alert('Tài khoản đã tồn tại');
        return
    }

    users.push({email:email, username:username, password:password});

    localStorage.setItem("users", JSON.stringify({
        users
    }));
    alert('success');
})