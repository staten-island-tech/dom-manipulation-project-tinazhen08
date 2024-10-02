const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelector("li"),
    cardHeader: document.querySelector(".card-header"),
    button: document.querySelector(".btn"),
    form: document.querySelector(".form")
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