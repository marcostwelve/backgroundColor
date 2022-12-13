const yellow = document.querySelector(".yellow");
const orange = document.querySelector(".orange");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const black = document.querySelector(".black");

yellow.addEventListener("click", () => {
    document.querySelector("body").style.background = "yellow";
});


orange.addEventListener("click", () => {
    document.querySelector("body").style.background = "orange";
})

red.addEventListener("click", () => {
    document.querySelector("body").style.background = "red";
});

blue.addEventListener("click", () => {
    document.querySelector("body").style.background = "blue";
});

green.addEventListener("click", () => {
    document.querySelector("body").style.background = "green";
});

black.addEventListener("click", () => {
    document.querySelector("body").style.background = "black";
});

const white = document.querySelector("button").onclick = function () {
    document.querySelector("body").style.background = "#FEFEFE";
}