let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//Задача №1 - Найти сумму и количество положительных элементов

let countTask1 = 0;
let sumTask1 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumTask1 += arr[i];
        countTask1++;
    }
}
document.write(`<p>Задача №1 Найти сумму и количество положительных элементов:</p>`);
document.write(`<p>Ответ: сумма = ${sumTask1} , кол-во = ${countTask1} .</p>`);
document.write('<hr>');

//Задача №2 - Найти минимальный элемент массива и его порядковый номер.

let sortMinimArr = arr.slice().sort((a, b) => a - b);
let minimum = sortMinimArr[0];
let indexMinimum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minimum) {
        indexMinimum = i;
    }
}

document.write(`<p>Задача №2 Найти минимальный элемент массива и его порядковый номер:</p>`);
document.write(`<p>Ответ: минимальный элемент = ${minimum} , порядковый номер = ${indexMinimum}`);
document.write('<hr>');

// Задача №3  - Найти максимальный элемент массива и его порядковый номер.

let sortMaxArr = arr.slice().sort((a, b) => b - a);
let maximum = sortMaxArr[0];
let indexMaximum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maximum) {
        indexMaximum = i;
    }
}

document.write(`<p>Задача №3 Найти максимальный элемент массива и его порядковый номер:</p>`);
document.write(`<p>Ответ: максимальный элемент = ${maximum} , порядковый номер = ${indexMaximum}`);
document.write('<hr>');

// Задача №4 - Определить количество отрицательных элементов.

let countTask4 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countTask4++;
    }
}

document.write(`<p>Задача №4 Определить количество отрицательных элементов:</p>`);
document.write(`<p>Ответ: количество отрицательных элементов = ${countTask4}`);
document.write('<hr>');

// Задача №5 - Найти количество нечетных положительных элементов.

let countTask5 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 1) {
            countTask5++;
        }
    }
}

document.write(`<p>Задача №5 Найти количество нечетных положительных элементов:</p>`);
document.write(`<p>Ответ: количество нечетных положительных элементов = ${countTask5}`);
document.write('<hr>');

// Задача №6 - Найти количество четных положительных элементов.

let countTask6 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            countTask6++;
        }
    }
}

document.write(`<p>Задача №6 Найти количество четных положительных элементов:</p>`);
document.write(`<p>Ответ: количество четных положительных элементов = ${countTask6}`);
document.write('<hr>');

// Задача №7 - Найти сумму четных положительных элементов.

let sumTask6 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            sumTask6 += arr[i];
        }
    }
}

document.write(`<p>Задача №7 Найти сумму четных положительных элементов:</p>`);
document.write(`<p>Ответ: сумму четных положительных элементов = ${sumTask6}`);
document.write('<hr>');

// Задача №8 -Найти сумму нечетных положительных элементов.

let sumTask7 = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 1) {
            sumTask7 += arr[i];
        }
    }
}

document.write(`<p>Задача №8 Найти сумму нечетных положительных элементов:</p>`);
document.write(`<p>Ответ: сумму нечетных положительных элементов = ${sumTask7}`);
document.write('<hr>');

// Задача №9 - Найти произведение положительных элементов.

let umnojenie = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        umnojenie *= arr[i];
    }
}

document.write(`<p>Задача №9  Найти произведение положительных элементов:</p>`);
document.write(`<p>Ответ: произведение положительных элементов = ${umnojenie}`);
document.write('<hr>');

// Задача №10 - Найти наибольший среди элементов массива, остальные обнулить.
// Из задачи №3 мы знаем индекс максимального елемента - indexMaximum  , и можем его использовать.

for (let i = 0; i < arr.length; i++) {
    if (i == indexMaximum) {
        continue;
    }
    arr[i] = 0; // либо null.
}

document.write(`<p>Задача №10  Найти наибольший среди элементов массива, остальные обнулить.:</p>`);
document.write(`<p>Ответ: Полученый массив = ${arr}`);