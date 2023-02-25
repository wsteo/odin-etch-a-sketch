const container = document.querySelector('#container');

const setSizeBtn = document.querySelector("#setSizeBtn");
setSizeBtn.addEventListener('click', generateSquare);

function generateSquare(e) {
    clearGrid();

    let gridSize = -1;

    while (gridSize <= 0 || gridSize >= 101) {
        gridSize = prompt("Enter a size between 1 and 100", 16);
        if (gridSize == null)
        {
            return;
        }
    }

    generateGrid(gridSize);
    activeHoveringEffect();
}

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.remove();
    });
}

function activeHoveringEffect() {
    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function (e) {
            this.classList.add('hovering');
        });
    });
}