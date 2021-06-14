//MANAGE ADD POKEMON & USER SETTINGS CONTAINERS
const btnAddPokemon = document.getElementById("add-new-pokemon");
const btnAccountSettings = document.getElementById("account-settings");
const btnCloseAddPokemon = document.querySelector('.new-pokemon-container span.hide')
const btnCloseAccountSettings = document.querySelector('.account-settings-container span.hide')

btnAddPokemon.addEventListener("click", function () {
    document.querySelector('.new-pokemon-container').classList.add('active');
});

btnAccountSettings.addEventListener("click", function () {
    document.querySelector('.account-settings-container').classList.add('active');
});

btnCloseAddPokemon.addEventListener("click", function () {
    document.querySelector('.new-pokemon-container').classList.remove('active');
});

btnCloseAccountSettings.addEventListener("click", function () {
    document.querySelector('.account-settings-container').classList.remove('active');
});

//RENDER POKEMON & GAMES IN ADD POKEMON TAB
const pokemonList = document.getElementById("pokemons-select");
const gamesList = document.getElementById("games-select");

btnAddPokemon.addEventListener("click", (e) => {
    e.preventDefault();

    firebase.firestore().collection("pokedex").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let pokemonName = document.createElement("option");
            pokemonName.textContent = doc.data().name;
            pokemonList.appendChild(pokemonName);
        });
    });

    firebase.firestore().collection("games").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let gameName = document.createElement("option");
            gameName.textContent = doc.data().title;
            gamesList.appendChild(gameName);
        });
    });
})

//ADD POKEMON TO HUNTING
const createForm = document.getElementById("new-pokemon-form");

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = firebase.auth().currentUser;

    if(user){
        firebase.firestore().collection(user.uid).doc().set({
            encounterNumber: 0,
            pokemonName: createForm["pokemons-select"].value,
            gameName: createForm["games-select"].value,
            method: createForm["method-select"].value,
            status: "W trakcie"
        }).then(() => {
            alert("Dodano pokemona do huntingu!");
            document.querySelector('.new-pokemon-container').classList.remove('active');
            createForm.reset();
        });
    } else {
        alert("Musisz być zalogowany, aby skorzystać z tej funkcjonalności!");
    }
});

//RENDER POKEMON ADDED TO HUNTING
const pokemonWrapper = document.getElementById("pokemon-list-container");
function renderPokemonList(doc){
    let div = document.createElement("div");
    let wrapper1 = document.createElement("div");
    let wrapper2 = document.createElement("div");
    let wrapper3 = document.createElement("div");
    let wrapper4 = document.createElement("div");
    let wrapper5 = document.createElement("div");
    //let pokemonImage = document.createElement("img");
    let pokemonName = document.createElement("p");
    let method = document.createElement("p");
    let status = document.createElement("select");
    let statusValue = document.createElement("p");
    let encounterNumber = document.createElement("input");
    let gameName = document.createElement("p");
    //let gameImage = document.createElement("img");
    let button = document.createElement("button");

    div.setAttribute('data-id', doc.id);
    wrapper1.setAttribute("class", "pokemon-wrapper");
    wrapper2.setAttribute("class", "method-wrapper");
    wrapper3.setAttribute("class", "encounter-wrapper");
    wrapper4.setAttribute("class", "game-wrapper");
    wrapper5.setAttribute("class", "button-wrapper");
    button.setAttribute("id", "update-db");
    button.setAttribute("data-id", doc.id);
    encounterNumber.setAttribute("type", "number");
    encounterNumber.setAttribute("min", 0);
    encounterNumber.setAttribute("value", doc.data().encounterNumber);

    pokemonName.textContent      = doc.data().pokemonName;
    //pokemonImage.innerHTML     = '<img class="pokemon-image" src="/img/shinyPokemonSprite/' + getPokemonImage(doc.data().pokemonName) + '" alt="pokemon image">';
    method.textContent           = doc.data().method;
    status.innerHTML             = "<option value='w-trakcie'>W trakcie</option><option value='złapany'>Złapany</option><option value='wstrzymany'>Wstrzymany</option><option value='anulowany'>Anulowany</option>";
    gameName.textContent         = doc.data().gameName;
    //gameImage.innerHTML        = '<img class="game-image" src="/img/gamesCover/" alt="pokemon image">';
    button.textContent           = "Aktualizuj dane";

    status.setAttribute("value", doc.data().status);

    //wrapper1.appendChild(pokemonImage);
    wrapper1.appendChild(pokemonName);
    wrapper2.appendChild(status);
    wrapper2.appendChild(method);
    wrapper3.appendChild(encounterNumber);
    //wrapper4.appendChild(gameImage);
    wrapper4.appendChild(gameName);
    wrapper5.appendChild(button);

    div.appendChild(wrapper1);
    div.appendChild(wrapper2);
    div.appendChild(wrapper3);
    div.appendChild(wrapper4);
    div.appendChild(wrapper5);

    pokemonWrapper.appendChild(div);
}

//GET POKEMON ADDED TO HUNT DATA
const renderPokemonListBtn = document.getElementById("show-pokemons");

renderPokemonListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let user = firebase.auth().currentUser;

    firebase.firestore().collection(user.uid).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            renderPokemonList(doc);
        });
    });
});