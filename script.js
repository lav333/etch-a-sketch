function changeBackgroundColor(element) {
    element.style.backgroundColor = "darkgreen";
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
                square.addEventListener("mousemove", () => changeBackgroundColor(square));
            }
            cont.appendChild(row);
        }
    }
    else {
        alert("Wrong input! Please try again!");
        changeSquareNumber();
    }
}

const cont = document.querySelector(".cont");

createGrid(16);

const squareNumber = document.querySelector(".squareNumber");
squareNumber.addEventListener("click", () => changeSquareNumber());