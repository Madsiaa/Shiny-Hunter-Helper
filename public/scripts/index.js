const btnLogin = document.querySelector('#login');
const btnSingup = document.querySelector('#signup');

document.querySelector('#login').addEventListener("click", function () {
    document.querySelector('.login-container').classList.add('active');
});

document.querySelector('#signup').addEventListener("click", function () {
    document.querySelector('.signup-container').classList.add('active');
});

document.querySelector('.login-container span.hide').addEventListener("click", function () {
    document.querySelector('.login-container').classList.remove('active');
});

document.querySelector('.signup-container span.hide').addEventListener("click", function () {
    document.querySelector('.signup-container').classList.remove('active');
});