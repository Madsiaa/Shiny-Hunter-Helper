//SING UP
const singupForm = document.querySelector("#signup-form");
singupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#signup-form input[id='signup-email']").value;
    const password = document.querySelector("form#signup-form input[id='signup-password']").value;
    console.log("Pobranie email i hasła: " + email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        console.log("Dane do utworzenia usera: " + email, password);
        var user = userCredential.user;
        console.log(user);
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
        console.log(user);
        console.log("Zalogowano!");
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
        console.log("Wylogowano!");
    });
});