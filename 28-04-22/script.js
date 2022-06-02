let button1 = document.getElementById("button");
console.log(button1);

button1.addEventListener("click", () => {
    console.log("Mám rád koláče :)");
})

function toggleClass() {
    let div = document.getElementById("toggle");
    div.classList.toggle("divclass");
}