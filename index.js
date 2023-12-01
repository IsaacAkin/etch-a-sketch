"use strict";

const sketchpad = document.querySelector('.sketchpad');
const colourBtn = document.querySelector('.colour-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const clearBtn = document.querySelector('.clear-btn');
const sliderValue = document.querySelector('.slider-value');
const rangeSlider = document.querySelector('.range-slider');

// Creates the cells in the sketchpad
function createCells(cells) {
    sketchpad.textContent = "";
    sliderValue.textContent = `${cells} x ${cells}`;

    for (let div = 1; div <= cells * cells; div++) {
        const cell = document.createElement('div');

        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${cells})`
        sketchpad.appendChild(cell);

        // Changes background colour when a cell is hovered over
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
        });
    }
}

// Generates new cells based on the sliders value
function updateCells() {
    rangeSlider.addEventListener('input', (e) => {
        const cells = e.target.value;
        createCells(cells);
    });
}

// Sets the colour to black
function colourMode() {
    colourBtn.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "black";
            });
        });
    });
}

// Sets the colour to a random colour
function rainbowMode() {
    rainbowBtn.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = generateRandomColour();
            });
        });
    });
}

// Generates a random hex colour
function generateRandomColour() {
    let maxValue = 0xFFFFFF;
    let randomNumber = Math.floor(Math.random() * maxValue).toString(16);
    let randomColour = randomNumber.padStart(6, 0);
    return `#${randomColour.toUpperCase()}`
}

// Erases colour when hovered over
function eraseLines() {
    eraserBtn.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "white";
            });    
        })
    });
}

// Resets the sketchpad to default
function clearSketchpad() {
    clearBtn.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.style.backgroundColor = "white";
        });
    });
}

createCells(16);
updateCells();
colourMode();
rainbowMode();
eraseLines();
clearSketchpad();