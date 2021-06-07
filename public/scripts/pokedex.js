//CREATE & RENDER POKEDEX
const pokedexTable = document.getElementById("pokedex-table");
function renderPokemonPokedex(doc){
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let image = document.createElement("td");
    let name = document.createElement("td");
    let type1 = document.createElement("td");
    let type2 = document.createElement("td");
    let region = document.createElement("td");
    let button = document.createElement("td");

    tr.setAttribute('data-id', doc.id);
    id.textContent      = doc.data().ID;
    image.innerHTML     = '<img class="pokedex-image" src="/img/pokemonSprite/'+doc.data().image+'" alt="pokemon image">';
    name.textContent    = doc.data().name;
    type1.textContent   = doc.data().types[0];
    type2.textContent   = doc.data().types[1];
    region.textContent  = doc.data().generation;
    button.innerHTML    = '<button>Dodaj do huntingu</button><button>Szczegóły pokemona</button>';

    tr.appendChild(id);
    tr.appendChild(image);
    tr.appendChild(name);
    tr.appendChild(type1);
    tr.appendChild(type2);
    tr.appendChild(region);
    tr.appendChild(button);

    pokedexTable.appendChild(tr);
}

//GET POKEMON DATA
const refresh = document.getElementById('refreshDB');
refresh.addEventListener("click", (e) => {
    e.preventDefault();
    
    firebase.firestore().collection("pokedex").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            renderPokemonPokedex(doc);
        });
    });
});