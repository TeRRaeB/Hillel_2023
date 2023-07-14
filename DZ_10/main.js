let array = [];
let count;

do {
    count = prompt('Введите кол-во елементов в массиве', 6);
} while (isNaN(count) || count < 0)

for (let i = 1; i <= count; i++) {
    let element = prompt('Введите елемент №' + i);
    array.push(element);
}

document.write('Вы ввели массив: ' + array + '<br/>');
    array.sort((a, b) => a - b);
document.write('Массив после сортировки: ' + array + '<br/>');
    array.splice(1, 3);
document.write('Массив после удаление с 2 по 4 елемент: ' + array);