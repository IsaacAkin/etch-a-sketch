"use strict";

const sketchpad = document.querySelector('.sketchpad');

// Creates the cells in the sketchpad
function createCells(cells) {
    for (let div = 1; div <= cells * cells; div++) {
        const cell = document.createElement('div');

        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${cells})`
        sketchpad.appendChild(cell);

        // Changes backgrounsd colour when a cell is hovered over
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
        });
    }
}

createCells(16);