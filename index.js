const sketchpad = document.querySelector('.sketchpad');

function createCells(cells) {
    for (let div = 1; div <= cells * cells; div++) {
        const square = document.createElement('div');
        
        square.textContent = "hello";
        square.classList.add('cell');
        square.style.width = `calc(100% / ${cells})`
        sketchpad.appendChild(square);
    }
}

createCells(16);