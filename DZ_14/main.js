let num, degree;

do {
    num = prompt('Введите число которое нужно возвести в степень.');
} while (isNaN(num) || num < 0)

do {
    degree = prompt('Введите степень.');
} while (isNaN(degree) || degree < 0)

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * pow(num, degree - 1);
}

alert(`${num} в степени ${degree} равно ${pow(num, degree)}`);