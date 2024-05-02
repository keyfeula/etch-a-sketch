const gridContainer = document.querySelector(".grid-container");
const gridSquares = [];

//Need 16x16 grid, which is 256 total grid squares
for (let i = 0; i < 256; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquares.push(gridSquare);
    gridContainer.appendChild(gridSquare);
}

function mouseoverHandler(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains("grid-square")) {
        targetElement.classList.add("mouseover-square");
    }
}

gridContainer.addEventListener("mouseover", mouseoverHandler);