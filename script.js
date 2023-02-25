const container = document.querySelector('#container');

for (let i = 0; i < 16; i++)
{
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < 16; j++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}