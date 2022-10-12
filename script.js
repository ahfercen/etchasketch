const container = document.querySelector(".container");
function hover(e){
    e.target.classList.add('hover');
}
function goBack(e){
    if(e.propertyName !== 'background-color') return;
    e.target.classList.remove('hover');
}
for(i = 0; i<16;i++){
    let row = document.createElement("div");
    row.classList.add(`row`);
    row.classList.add(`row${i}`);
    for(j=0;j<16;j++){
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add(`col${j}`);
        row.appendChild(col);
        col.addEventListener('mouseover',hover);
        col.addEventListener('transitionend',goBack);
    }
    container.appendChild(row);
}

