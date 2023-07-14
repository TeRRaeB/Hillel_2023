// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let inputNumber = prompt('Введите число от 100000 до 999999');

let firstNumber = (inputNumber - (inputNumber % 100000)) / 100000;
let secondNumber = ((inputNumber % 100000) - (inputNumber % 10000)) / 10000;
let thirdNumber = ((inputNumber % 10000) - (inputNumber % 1000)) / 1000;
let fourthNumber = ((inputNumber % 1000) - (inputNumber % 100)) / 100;
let fifthNumber = ((inputNumber % 100) - (inputNumber % 10)) / 10;
let sixthNumber = inputNumber % 10;

if (firstNumber == sixthNumber && secondNumber == fifthNumber && thirdNumber == fourthNumber) {
    document.write('Число зеркальное');
} else {
    document.write('Число НЕ зеркальное');
}