const container = document.querySelector(".container");
console.log(container);

for(i = 0; i<16;i++){
    let row = document.createElement("div");
    row.classList.add(`row`);
    row.classList.add(`row${i}`);
    for(j=0;j<16;j++){
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add(`col${j}`);
        row.appendChild(col);
    }
    container.appendChild(row);
}