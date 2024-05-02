const gridContainer = document.querySelector(".grid-container");
const gridSquares = [];

for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquares.push(gridSquare);
    gridContainer.appendChild(gridSquare);
}