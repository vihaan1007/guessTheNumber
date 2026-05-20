/*
alert("Hello");
alert("To Guess the number");
*/

let b = document.querySelector("#oK");
let tA = document.querySelector("#tA");
let rG = document.querySelector("#rG");
let a = document.querySelector("#a");
let g = document.querySelector("#g");

let gCN = () => {
    return Math.floor(Math.random() * 100) + 1;
};

let cN = gCN();

function check() {
    let uN = Number(g.value);

    if (uN === cN) {
        a.innerHTML = "Your answer is right";
    } else if (uN < cN) {
        a.innerHTML = "Your answer is low";
    } else {
        a.innerHTML = "Your answer is high";
    }
}

b.addEventListener("click", () => {
    check();
});

tA.addEventListener("click", () => {
    g.value = "";
    a.innerHTML = "";
});

rG.addEventListener("click", () => {
    cN = gCN();
    g.value = "";
    a.innerHTML = "New game started";
});