//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let inputNumber = prompt('Введите число от 10 до 99');
let firstNumber = (inputNumber - (inputNumber % 10)) / 10;
let secondNumber = inputNumber % 10;

if (firstNumber > secondNumber) {
    document.write('Первая цифра больше второй');
} else if (firstNumber < secondNumber) {
    document.write('Вторая цифра больше первой');
} else if (firstNumber == secondNumber) {
    document.write('Цифры между собой одинаковые.');
} else {
    alert('Вводи правильные числа!');
}