const DOMSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  name: document.querySelector(".name"),
  date: document.querySelector(".date"),
  link: document.querySelector(".link"),
};

let cards = [];

function makeCard(n, d, l) {
  DOMSelectors.container.insertAdjacentHTML(
    //Insert card in html container
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${n}</h2>
        <img src="${l}" alt=""></img>
        <h4 class="release">${d}</h4>
        <button class="delete" type="click">Delete</button>
    </div>`
  );

  DOMSelectors.container.addEventListener("click", function (event) {
    //Runs function after click
    if (event.target.classList.contains("delete")) {
      //Target specific delete to card
      const card = event.target.parentElement;
      card.remove();
      // Update cards array
    }
  });

  cards.push({ n, d, l });
  console.log(cards);
}

function clear() {
  // Clear form input values
  DOMSelectors.name.value = "";
  DOMSelectors.date.value = "";
  DOMSelectors.link.value = "";
}

DOMSelectors.form.addEventListener("submit", function (event) {
  //Take input values and create card
  event.preventDefault();

  let name = DOMSelectors.name.value;
  let date = DOMSelectors.date.value;
  let link = DOMSelectors.link.value;

  makeCard(name, date, link);
  clear();
});

//create the HTML for inputs, cards and container aka where the cards go

//select query the HTML form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in JS
