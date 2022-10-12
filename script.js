const container = document.querySelector(".container");
const resetButton = document.querySelector(".Controls button");
function resetFunc(x,y){
    let board = document.querySelector('.board');
    container.removeChild(board);
    createBoard(x,y);
}
resetButton.addEventListener('click', function(){
    let x = prompt("Choose a X value");
    let y = prompt("Choose a Y value");
    resetFunc(x,y);
});
function hover(e){
    e.target.classList.add('hover');
}
function goBack(e){
    if(e.propertyName !== 'background-color') return;
    e.target.classList.remove('hover');
}
function createBoard(x,y){
    let board = document.createElement("div");
    board.className = "board";

    for(i = 0; i<y;i++){
        let row = document.createElement("div");
        row.classList.add(`row`);
        row.classList.add(`row${i}`);
        for(j=0;j<x;j++){
            let col = document.createElement("div");
            col.classList.add("col");
            col.classList.add(`col${j}`);
            row.appendChild(col);
            col.addEventListener('mouseover',hover);
            col.addEventListener('transitionend',goBack);
        }
        board.appendChild(row);
        container.appendChild(board);
    }
}

//Starter function with 16x16 board
createBoard(16,16);