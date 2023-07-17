let numX;
let numY;
let znak;

do {
    numX = parseInt(prompt('Введите первое число', 8));
} while (isNaN(numX))
do {
    numY = parseInt(prompt('Введите второе число число', 3));
} while (isNaN(numY))

znak = prompt('Введите знак операции(+,-,*,/,^,%)');
let result;
Match(numX, numY, znak);

function Match(numX, numY, znak) {
    switch (znak) {
        case '+':
            result = numX + numY;
            break;
        case '-':
            result = numX - numY;
            break;
        case '*':
            result = numX * numY;
            break;
        case '/':
            result = numX / numY;
            break;
        case '%':
            result = numX % numY;
            break;
        case '^':
            result = Math.pow(numX, numY);
            break;
        default:
            alert('Введите корректный знак операции');
            znak = prompt('Введите знак операции(+,-,*,/,^,%)');
            Match(numX, numY, znak);
            break;
    }
}

console.log(result);