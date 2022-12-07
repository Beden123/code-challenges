// Your code here
const url = "http://localhost:3000/characters";
//fetch names
function fetchData() {
  return fetch(url).then((response) => response.json());
}

function renderData(character) {
  const characterBar = document.getElementById("character-bar");
  const span = document.createElement("span");
  span.innerHTML = character.name;
  characterBar.appendChild(span);
  span.dataset.id = character.id;
  span.addEventListener("click", characterClick);
}

fetchData().then((character) => {
  character.forEach((character) => {
    renderData(character);
  });
});
//fetch details
function fetchDetails(id) {
  return fetch(url + `/${id}`).then((response) => response.json());
}

function characterClick(event) {
  fetchDetails(event.target.dataset.id).then(characterDetails);
}
//
function characterDetails(character) {
  const characterInfo = document.getElementById("detailed-info");
  const name = document.getElementById("name");
  name.innerText = character.name;
  const img = document.getElementById("image");
  img.src = character.image;
  const votes = document.getElementById("vote-count");
  votes.innerText = character.votes;
}
