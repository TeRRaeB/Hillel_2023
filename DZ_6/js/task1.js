//Дано два різні числа. Визначити, яке з них більше, а яке менше.
let first;
let second;
do {
    first = parseInt(prompt('Введите первое число', 5));
    console.log(first);
} while (isNaN(first) || first < 0)
do {
    second = parseInt(prompt('Введите второе число', 4));
} while (isNaN(second) || second < 0)


if (first > second) {
    alert('Первое число больше второго');
} else if (first == second) {
    alert('Числа равны');
} else {
    alert('Второе число больше первого');
}