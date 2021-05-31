//SIGN UP
const singupForm = document.querySelector("#signup-form");
singupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#signup-form input[id='signup-email']").value;
    const password = document.querySelector("form#signup-form input[id='signup-password']").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        firebase.firestore().collection("users").doc(userCredential.user.uid);
        alert("Konto zostało utworzone!");
        document.querySelector('.signup-container').classList.remove('active');
      });
});

//LOGIN
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("form#login-form input[id='login-email']").value;
    const password = document.querySelector("form#login-form input[id='login-password']").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        alert("Zalogowano!");
        document.querySelector('.login-container').classList.remove('active');
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
const accountDetails = document.querySelector(".account-settings-wrapper");
window.onload = CheckStatus;
function CheckStatus(){
    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if(user){
            //show/hide nav links
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
            document.getElementById("myAccount").style.display = "block";
            document.getElementById("logout").style.display = "block";

            //show account info
            const html="<p>Zalogowano jako: "+ user.email + "</p>";
            accountDetails.innerHTML = html;
        } else {
            //show/hide nav links
            document.getElementById("myAccount").style.display = "none";
            document.getElementById("logout").style.display = "none";
            document.getElementById("login").style.display = "block";
            document.getElementById("signup").style.display = "block";

            //hide account info
            accountDetails.innerHTML = " ";
        }
    });
}