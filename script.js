function changeClassicBackgroundColor(element) {
    element.style.backgroundColor = "darkgreen";
}

function changeRGBBackgroundColor(element) {
    element.style.backgroundColor = getRandomRGB();
}

function changeSquareNumber() {
    let newSquareNumber = prompt("Please type the wanted number between 1 and 100:");
    createGrid(Number(newSquareNumber));
}

function createGrid(x) {
    cont.replaceChildren()
    if (typeof x == "number" && x>0 && x<101) {
        for (let i=0; i<x; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (let j=0; j<x; j++) {
                const square = document.createElement("div");
                square.classList.add("square");
                row.appendChild(square);
                if (count == 0) {
                    square.addEventListener("mouseover", () => changeClassicBackgroundColor(square));
                }
                else {square.addEventListener("mouseover", () => changeRGBBackgroundColor(square))}
            }
            cont.appendChild(row);
        }
    }
    else {
        alert("Wrong input! Please try again!");
        changeSquareNumber();
    }
}

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


const cont = document.querySelector(".cont");
let count = 0
createGrid(16)

const squareNumber = document.querySelector(".squareNumber");
squareNumber.addEventListener("click", () => changeSquareNumber());

const classic = document.querySelector(".classic");
const rgb = document.querySelector(".rgb");
classic.addEventListener("click", () => {count = 0
    createGrid(16)
})
rgb.addEventListener("click", () => {count = 1
    createGrid(16)
})