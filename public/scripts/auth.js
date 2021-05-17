//SING UP
const singupForm = document.querySelector("#signup-form");
singupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#signup-form input[id='signup-email']").value;
    const password = document.querySelector("form#signup-form input[id='signup-password']").value;
    console.log("Pobranie email i hasła: " + email, password);

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
    console.log(firebase);
    console.log(e);

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        var user = userCredential.user;
        alert("Zalogowano!");
        console.log(firebase);
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