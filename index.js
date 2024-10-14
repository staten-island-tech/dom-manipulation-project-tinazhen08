const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  deletBtn: document.querySelector(".delete"),
};

//Dictionary (python) -> Object (javascript)
//let student = {name: "Ryan", age: 15, girlfriend: true,};

let name, date, link;
let cards = [];

function makeCard(name, date, link) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeEnd",
    `<div class="card">
        <h2 class="card-header">${name}</h2>
        <img src="${link}" alt="">
        <h4 class="release">${date}</h4>
        <button class="delete">Delete</button></div>`
  );

  cards.push({ name, date, link });
}

function clear() {
  document.querySelector(".name").value = "";
  document.querySelector(".date").value = "";
  document.querySelector(".link").value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector(".name").value;
  let date = document.querySelector(".date").value;
  let link = document.querySelector(".link").value;

  makeCard(name, date, link);
  clear();
});

//create the HTML for inputs, cards and container aka where the cards go

//select query the HTML form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in JS
