const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");

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

function newGridHandler(event) {
    let gridSize = prompt("Enter new grid size less than 100: ");
    gridSize = Number(gridSize);
    gridContainer.innerHTML = "";
    if (typeof gridSize === "number" && gridSize <= 100) {
        createGrid(gridSize);
    }
    else {
        createGrid(20);
    }
}

gridContainer.addEventListener("mouseover", mouseoverHandler);
newGridBtn.addEventListener("click", newGridHandler);

createGrid(20);