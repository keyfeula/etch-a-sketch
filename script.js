const gridContainer = document.querySelector(".grid-container");
const gridSquares = [];

function createGrid(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        gridContainer.appendChild(createRow(sideLength));
    }
}

function createRow(rowLength) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    for (let i = 0; i < rowLength; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridRow.appendChild(gridSquare);
    }
    return gridRow;
}

function mouseoverHandler(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains("grid-square")) {
        targetElement.classList.add("mouseover-square");
    }
}

gridContainer.addEventListener("mouseover", mouseoverHandler);

createGrid(20);