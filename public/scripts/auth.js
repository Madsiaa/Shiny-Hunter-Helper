//SING UP
const singupForm = document.querySelector("#signup-form");
singupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#signup-form input[id='signup-email']").value;
    const password = document.querySelector("form#signup-form input[id='signup-password']").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        alert("Konto zostało utworzone!");
        singupForm.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});

//LOGIN
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#login-form input[id='login-email']").value;
    const password = document.querySelector("form#login-form input[id='login-password']").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        alert("Zalogowano!");
        loginForm.reset();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
});

//LOGOUT
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();

    firebase.auth().signOut().then(() => {
        alert("Wylogowano!");
    });
});

//STATUS LISTENER
window.onload = CheckStatus;
function CheckStatus(){
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if(user){
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
            document.getElementById("myAccount").style.display = "block";
            document.getElementById("logout").style.display = "block";
        } else {
            document.getElementById("myAccount").style.display = "none";
            document.getElementById("logout").style.display = "none";
            document.getElementById("login").style.display = "block";
            document.getElementById("signup").style.display = "block";
        }
    });
}