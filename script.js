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
}

generateTiles(7);