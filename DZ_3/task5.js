let num = 87654;

let num1 = (num - (num % 10000)) / 10000;
let num2 = ((num % 10000) - (num % 1000)) / 1000;
let num3 = ((num % 1000) - (num % 100)) / 100;
let num4 = ((num % 100) - (num % 10)) / 10;
let num5 = (num % 10);

alert(`Число было: ${num} \n Вышло: ${num5} ${num4} ${num3} ${num2} ${num1}.`);