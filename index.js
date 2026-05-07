function genCard(){
    console.log("test");
    const mainArea = document.getElementById("gridDiv");
    for (let i = 0; i < 3; i++){
        var row = document.createElement("div");
        row.className = "tileRow";
        for (let g = 0; g < 4; g++){
            const tile = document.createElement("div");
            tile.className = "tile"
            tile.style.backgroundImage = "url('resources/icons/capsule.png')";
            row.appendChild(tile);
        }
        mainArea.appendChild(row);
    }

}

genCard();