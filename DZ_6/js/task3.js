//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

let divider2 = firstNumber % secondNumber;
if(divider2 === 0){
    document.write('Второе число является делителем первого <br \/>');
}else {
    document.write('Второе число НЕ является делителем первого <br \/>');
}
let divider1 = secondNumber % firstNumber ;

if(divider1 === 0){
    document.write('Первое число является делителем второго <br \/>');
}else {
    document.write('Первое число НЕ является делителем второго <br \/>');
}