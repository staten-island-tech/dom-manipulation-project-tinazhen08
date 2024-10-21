const DOMSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  name: document.querySelector(".name"),
  date: document.querySelector(".date"),
  link: document.querySelector(".link"),
};

let Movies = [];

function makeMovie() {
  let name = DOMSelectors.name.value;
  let date = DOMSelectors.date.value;
  let link = DOMSelectors.link.value;

  const movie = { name, date, link };
  Movies.push(movie);

  return `<div class="card">
      <h2 class="card-header">${movie.name}</h2>
      <img src="${movie.link}" alt="" class="card-img"></img>
      <h4 class="release">${movie.date}</h4>
      <button class="delete" type="click">Delete</button>
  </div>`;
}

function addCard(m) {
  DOMSelectors.container.insertAdjacentHTML("beforeend", m);
}

function clear() {
  // Clear form input values
  DOMSelectors.name.value = "";
  DOMSelectors.date.value = "";
  DOMSelectors.link.value = "";
}

function removeBtn() {
  DOMSelectors.container.addEventListener("click", function (event) {
    //Runs function after click
    if (event.target.classList.contains("delete")) {
      //Target specific delete to card
      const card = event.target.parentElement;
      const cardIndex = Array.from(DOMSelectors.container.children).indexOf(
        card
      );

      if (cardIndex > -1) {
        // Remove card from the DOM
        card.remove();
        // Remove card from the cards array
        Movies.splice(cardIndex, 1);

        console.log(Movies);
        // Log updated cards array
      }
    }
  });
}

DOMSelectors.form.addEventListener("submit", function (event) {
  //Take input values and create card
  event.preventDefault();

  const Movie = makeMovie();
  addCard(Movie);
  clear();
  removeBtn();

  console.log(Movies);
});

//create the HTML for inputs, cards and container aka where the cards go

//select query the HTML form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in JS
