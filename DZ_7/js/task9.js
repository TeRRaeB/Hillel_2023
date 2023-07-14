let number = parseInt(prompt('Введите натуральное число'));
let sum = 0;
let count = 0;
if (number) {
    for (let i = 1; i <= number; i++) {
        if (number % i !== 0) {
            continue;
        }
        console.log('Найден делители: ' + i);
        if (i % 2 === 0) {
            sum = sum + i;
            count++;
        }
    }
    console.log('Кол-во четных делителей: ' + count);
    console.log('Сумма четных делителей: ' + sum);
} else {
    alert('Введите число!');
}