//CREATE ELEMENT AND RENDER POKEDEX
const pokedexList = document.querySelector("#pokedex-list");
function renderPokedex(doc){
    console.log("Renderuję...");
    let li = document.createElement("li");
    let id = document.createElement("span");
    let name = document.createElement("span");
    let type1 = document.createElement("span");
    let type2 = document.createElement("span");
    let region = document.createElement("span");

    li.setAttribute('data-id', doc.id);
    id.textContent = doc.data().ID;
    name.textContent = doc.data().name;
    type1.textContent = doc.data().types[0];
    type2.textContent = doc.data().types[1];
    region.textContent = doc.data().generation;

    li.appendChild(id);
    li.appendChild(name);
    li.appendChild(type1);
    li.appendChild(type2);
    li.appendChild(region);

    pokedexList.appendChild(li);
    console.log("Renderowanie zakończone");
}

//GET DATA
const refresh = document.querySelector('#refreshDB');
refresh.addEventListener("click", (e) => {
    e.preventDefault();

    firebase.firestore().collection("pokedex").get().then((querySnapshot) => {
        console.log("Pobieranie danych");
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            //console.log(doc.data());
            renderPokedex(doc);
        });
    console.log("Dane zostały pobrane");
  });
})