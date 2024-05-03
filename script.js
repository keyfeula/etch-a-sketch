const gridContainer = document.querySelector(".grid-container");
const newGridBtn = document.querySelector(".new-grid-btn");
const randomColorBtn = document.querySelector(".random-color-btn");
const defaultColorBtn = document.querySelector(".default-color-btn");
let randomColor = false;

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
        if (randomColor === false) {
            targetElement.removeAttribute("style");
            targetElement.classList.add("mouseover-square");
        }
        else {
            const rgbColors = [];
            for (let i = 0; i < 3; i++) {
                let randomNum = Math.floor(Math.random() * 256);
                rgbColors.push(randomNum);
            }
            targetElement.style.backgroundColor = `rgb(${rgbColors[0]}, 
                ${rgbColors[1]}, ${rgbColors[2]})`;
        }
    }
}

function newGridHandler(event) {
    let gridSize = prompt("Enter new grid size less than 100: ");
    gridSize = Number(gridSize);
    gridContainer.innerHTML = "";
    randomColor = false;
    if (typeof gridSize === "number" && gridSize <= 100 && gridSize > 0) {
        createGrid(gridSize);
    }
    else {
        createGrid(20);
    }
}

function randomColorHandler(event) {
    randomColor = true;
}

function defaultColorHandler(event) {
    randomColor = false;
}

gridContainer.addEventListener("mouseover", mouseoverHandler);
newGridBtn.addEventListener("click", newGridHandler);
randomColorBtn.addEventListener("click", randomColorHandler);
defaultColorBtn.addEventListener("click", defaultColorHandler);

createGrid(20);