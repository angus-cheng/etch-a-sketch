/** Create 16 x 16 grid of squares */
const container = document.querySelector('.container');
    for (i = 0; i < (16 * 16); i++) {
        const divTag = document.createElement('div');
        divTag.classList.add('square');
        container.appendChild(divTag);
    }

/** Color squares */
function colorSquare(e) {
    e.currentTarget.style.backgroundColor = 'red';
}

/** Event for coloring squares */
const squares = document.querySelectorAll('.square');
squares.forEach(square => 
    square.addEventListener('mouseover', colorSquare));