/*
Дано тризначне число.
    Чи правда, що всі цифри однакові?
    Чи є серед цифр цифри однакові?
 */

let inputNumber = prompt('Введите число от 100 до 999');

let firstNumber = (inputNumber - (inputNumber % 100)) / 100;
let secondNumber = ((inputNumber % 100) - (inputNumber % 10)) / 10;
let thirdNumber = inputNumber % 10;

if ((firstNumber == secondNumber) && (firstNumber == thirdNumber) && (secondNumber == thirdNumber)) {
    document.write('Все цифры одинаковые.');
} else if ((firstNumber == secondNumber) || (firstNumber == thirdNumber) || (secondNumber == thirdNumber)) {
    document.write('Есть одинаковые цифры.');
} else {
    document.write('Нету одинаковых цифр.');
}