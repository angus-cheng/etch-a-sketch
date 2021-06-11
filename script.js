/** Create 16 x 16 grid of squares */
const container = document.querySelector('.container');
createSquareGrid(16);

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

/** Color squares */
function colorSquare(e) {
    e.currentTarget.style.backgroundColor = randomColor();
}

function createSquareGrid(size) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size * size); i++) {
        const divTag = document.createElement('div');
        divTag.classList.add('square');
        container.appendChild(divTag);
    }

    let squares = document.querySelectorAll('.square');
    squares.forEach(square => 
        square.addEventListener('mouseover', colorSquare));
}

function handleClearButton() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = 'black');
    let gridSize = 
        window.prompt('How many squares per side would you like to make your grid? (max 50)');
    if (gridSize > 50) {
        window.alert('Please enter a value below 50');
        handleClearButton();
    }
    if (!(/^[0-9.,]+$/.test(gridSize))) {
        window.alert('Please enter an integer value');
        handleClearButton();
    }

    createSquareGrid(gridSize);
}

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', handleClearButton);
