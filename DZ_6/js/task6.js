/*  Дано тризначне число.
        Визначити чи є парною сума його цифр.
        Визначити, чи кратна сума цифр п'яти.
        Визначити чи є добуток його цифр більше 100.
*/

let inputNumber = prompt('Введите число от 100 до 999');

let firstNumber = (inputNumber - (inputNumber % 100)) / 100;
let secondNumber = ((inputNumber % 100) - (inputNumber % 10)) / 10;
let thirdNumber = inputNumber % 10;

let sum = firstNumber + secondNumber + thirdNumber;
let even = sum % 2;
let cratno5 = sum % 5;
let proizved = firstNumber * secondNumber * thirdNumber;

if (even == 0) {
    document.write('Сумма цифр - четное <br \/>');
} else {
    document.write('Сумма цифр - нечетное <br \/>');
}

if (cratno5 == 0) {
    document.write('Сумма цифр кратна 5 <br \/>');
} else {
    document.write('Сумма цифр не кратна 5 <br \/>');
}

if (proizved < 100) {
    document.write('Произведение цифр меньше 100');
} else if (proizved > 100) {
    document.write('Произведение цифр больше 100');
} else {
    document.write('Произведение цифр равно 100');
}