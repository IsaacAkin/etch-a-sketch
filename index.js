const sketchpad = document.querySelector('#sketchpad-container');

function createDivs(numberOfDivs) {
    for (let div = 1; div <= numberOfDivs; div++) {
        const square = document.createElement('div');
        
        square.textContent = "hello";
        square.classList.add('cell');
        sketchpad.appendChild(square);
    }
}

createDivs(256);