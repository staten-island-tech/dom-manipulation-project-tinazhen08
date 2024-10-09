const DOMSelectors = {
    header: document.querySelector("h1"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form: document.querySelector(".form"),
    container: document.querySelector(".container")
};

//Dictionary (python) -> Object (javascript)
let student = {
    name: "Ryan",
    age: 15,
    girlfriend: true,
};

DOMSelectors.button.addEventListener("delete", function (event) {
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    console.log(document.querySelector("input").value);
});

//create the HTML for inputs, cards and container aka where the cards go

//select query the HTML form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in JS


//select all buttons as nodelist (can use for each)
const buttons = document.querySelectorAll("button");
//made array from buttons if i want to use filter etc.
const newButtons = Array.from(buttons);

newButtons.forEach((button)=>
    button.addEventListener("click", function(event){
        console.log(event.target.textContent);
    })
);

let movie = {
    title: '',
    release: '',
};

DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="card-header">${movie.title}</h2></div>`
);

