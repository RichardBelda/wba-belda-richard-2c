// alert("Buchty jsou dobré");

// var number = 9;

// var text = "Hello World JS";

// var ready = true;

// var notready = false;

// function buttonClick() {
//     console.log("Button: Press the button clicked successfully");
// }

let button1 = document.getElementById("button");
console.log(button1);

button1.addEventListener("click", () => {
    console.log("Mám rád koláče :)");
})

function toggleClass() {
    let div = document.getElementById("toggle");
    div.classList.toggle("divclass");
}