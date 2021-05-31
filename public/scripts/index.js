//MANAGE LOGIN/OUT CONTAINERS
const btnLogin = document.querySelector('#login');
const btnSingup = document.querySelector('#signup');

btnLogin.addEventListener("click", function () {
    document.querySelector('.login-container').classList.add('active');
});

btnSingup.addEventListener("click", function () {
    document.querySelector('.signup-container').classList.add('active');
});

document.querySelector('.login-container span.hide').addEventListener("click", function () {
    document.querySelector('.login-container').classList.remove('active');
});

document.querySelector('.signup-container span.hide').addEventListener("click", function () {
    document.querySelector('.signup-container').classList.remove('active');
});

//MANAGE ADD POKEMON & USER SETTINGS CONTAINERS
const btnAddPokemon = document.querySelector("#add-new-pokemon");
const btnUserSett = document.querySelector("#account-settings");

btnAddPokemon.addEventListener("click", function () {
    document.querySelector('.new-pokemon-container').classList.add('active');
});

btnUserSett.addEventListener("click", function () {
    document.querySelector('.account-settings-container').classList.add('active');
});

document.querySelector('.new-pokemon-container span.hide').addEventListener("click", function () {
    document.querySelector('.new-pokemon-container').classList.remove('active');
});

document.querySelector('.account-settings-container span.hide').addEventListener("click", function () {
    document.querySelector('.account-settings-container').classList.remove('active');
});