var values = [];

function genCard(){
    console.log("test");
    let totalRuns = 0;
    values = [];
    const mainArea = document.getElementById("gridDiv");
    mainArea.innerHTML = ""
    for (let i = 0; i < 3; i++){
        var row = document.createElement("div");
        row.className = "tileRow";
        for (let g = 0; g < 4; g++){
            const tile = document.createElement("div");
            tile.className = "tile"
            tile.style.backgroundImage = "url('resources/icons/capsule.png')";
            tile.id = String(totalRuns)
            genTile()
            tile.onclick = function(){reveal(tile)};
            row.appendChild(tile);
            totalRuns += 1
        }
        mainArea.appendChild(row);
    }

}

function genTile(){
    const amount = Math.floor(Math.random() * 100)+1
    values.push(amount)
}

function reveal(tile){
    const amount = document.getElementById("amount")
    const index = Number(tile.id);
    const value = values[index];
    console.log(value)

    if (value < 35){//chum
        tile.style.backgroundImage = "url('resources/icons/chum.png')";
    }
    else if(value < 55){//scrapper
        tile.style.backgroundImage = "url('resources/icons/scrapper.png')";
        amount.textContent = String(Number(amount.textContent) + 1) 
    }
    else if(value < 75){//flopper
        tile.style.backgroundImage = "url('resources/icons/flopper.png')";
        amount.textContent = String(Number(amount.textContent) + 10) 
    }
    else if (value < 90){//stinger
        tile.style.backgroundImage = "url('resources/icons/stringer.png')";
        amount.textContent = String(Number(amount.textContent) + 25) 
    }
    else if (value < 100){//flyfish
        tile.style.backgroundImage = "url('resources/icons/flyfish.png')";
        amount.textContent = String(Number(amount.textContent) + 50) 
    }
    else if(value == 100){//goldie
        tile.style.backgroundImage = "url('resources/icons/goldie.png')";
        amount.textContent = String(Number(amount.textContent) + 100) 
    }

    tile.onclick = function(){}

}

genCard();

