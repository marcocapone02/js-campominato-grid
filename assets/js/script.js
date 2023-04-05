function fieldGenerator() {
    const select = document.getElementById("difficulty");
    const level = parseInt(select.value);
    let fieldSize = 0;
    let rows = 0;
    let cols = 0;

    if (level === 1){
    fieldSize = 100;
    rows = 10;
    cols = 10;
    }else if (level === 2){
        fieldSize = 81;
        rows = 9;
        cols = 9;
    }else if (level === 3){
        fieldSize = 49;
        rows = 7;
        cols = 7;
    }
    
    const fieldContainer = document.getElementById("field");
    fieldContainer.innerHTML = "";
    
    for (let i = 1; i <= fieldSize; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = i;
        cell.addEventListener("click", function(){
            cell.classList.add("color");
            console.log("Hai scelto " + i);
        });
        
        fieldContainer.appendChild(cell);
        if (i % cols === 0){
        const breakLine = document.createElement("br");
        fieldContainer.appendChild(breakLine);
    }
    }
}