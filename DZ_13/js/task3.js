let lengthArr;

do {
    lengthArr = +prompt('Введите длинну желаемого массива');
} while (isNaN(lengthArr) || lengthArr < 0)

let arr = [];
for (let i = 0; i < lengthArr; i++) {
    let element = prompt(`введите ${i} елемент массива`);
    arr.push(element);
}

console.log(arr);