let press = document.getElementById("click");
document.getElementById("click").onclick = buttonClick;
function buttonClick () {
    console.log("Čau");
}

let text = document.getElementById("text");

text.innerText = "Čest práci soudruhu";