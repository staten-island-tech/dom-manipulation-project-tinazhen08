const DOMSelectors = {
    header: document.querySelector("h1"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form: document.querySelector(".form"),
    container: document.querySelector(".container"),
    deletBtn: document.querySelector(".delete")
};

//Dictionary (python) -> Object (javascript)
//let student = {name: "Ryan", age: 15, girlfriend: true,};

let name, date, link;
let cards = [];

function makeCard(name, date, link){
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="container">
            <div class="card">
                <h2 class="card-header">${name}</h2>
                <img src="${link}" alt="">
                <h4 class="release">${date}</h4>
                <button class="delete">Delete</button>
            </div>
        </div>`
    );

    cards.push({name, date, list});
    

};

DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
        <div class="card">
            <h2 class="card-header">${movie.title}</h2>
            <img src="${movie.poster}" alt="">
            <h4 class="release">${movie.release}</h4>
            <button class="delete" type="click">Delete</button>
        </div>
    </div>`
);

newButtons.forEach((button)=>
    button.addEventListener("click", function(event){
        console.log(event.target.textContent);
    })
);



//create the HTML for inputs, cards and container aka where the cards go

//select query the HTML form and get values from inputs

//turn values into object Movie, Game, User, whatevs

//insert card with object onto HTML

//add event listener for remove button in JS
