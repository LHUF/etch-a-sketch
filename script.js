generateTiles(20);

function generateTiles(tilesInRow) {
    const gridCanvas = document.getElementById("gridCanvas");
    gridCanvas.style.height = "700px";
    gridCanvas.style.width = "700px";
    gridCanvas.style.margin = "auto";
    gridCanvas.style.backgroundColor = "white";
    gridCanvas.style.border = "2.5px solid black";
    gridCanvas.style.display = "grid";
    gridCanvas.style.gridTemplateColumns = `repeat(${tilesInRow}, 1fr)`;
    let totalTiles = tilesInRow * tilesInRow;
    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        gridCanvas.appendChild(tile);
    }
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.addEventListener("mouseover", colorTile));
}

function colorTile() {
    this.style.backgroundColor = "black";
}

const clear = document.getElementById("clearbtn");
clear.addEventListener("click", clearCanvas);

function clearCanvas() {
   const canvas = document.getElementById("gridCanvas");
   while (canvas.hasChildNodes()) {
       canvas.removeChild(canvas.lastChild);
   }
   generateTiles(prompt("How many tiles per side?"));
    
}