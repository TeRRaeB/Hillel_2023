let columns;
let rows;
let count = 1;
do {
    columns = prompt('Введите кол-во колонок:', 10);
} while (isNaN(columns) || columns < 1)
do {
    rows = prompt('Введите кол-во рядков:', 10);
} while (isNaN(rows) || rows < 1)

function createTable(columns, rows) {
    let table = document.createElement('div');
    table.className = 'table';
    document.body.append(table);
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement('div');
        row.className = 'units-line';
        table.append(row);
        for (let y = 1; y <= columns; y++) {
            let column = document.createElement('div');
            column.className = 'unit';
            column.style.display = 'inline-block';
            column.style.backgroundColor = getRandomColor();
            column.style.border = '1px solid';
            column.style.borderRadius = '5px'
            column.style.height = '40px';
            column.style.width = '40px';
            column.style.textAlign = 'center';
            column.appendChild(document.createTextNode(count));
            row.appendChild(column);
            count++;
        }
    }
}

function getRandomColor() {
    let number = Math.floor(Math.random() * 6) + 1;
    switch (number) {
        case 1:
            return '"red"';
            break;
        case 2:
            return 'blue';
            break;
        case 3:
            return 'yellow';
            break;
        case 4:
            return 'pink';
            break;
        case 5:
            return 'green';
            break;
        case 6:
            return 'purple';
            break;
        default:
            return 'black';
            break;
    }
}

createTable(columns, rows);
