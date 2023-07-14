// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

let inputNumber = prompt('Введите число');
let lastNumber = inputNumber % 10;
let evenNumber = inputNumber % 2;

if (evenNumber === 0) {
    document.write('Число четное <br \/>');
} else {
    document.write('Число нечетное <br \/>');
}

    document.write('Последняя цифра: ' + lastNumber);
