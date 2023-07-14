// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let distanceA;
let distanceB;

do {
    distanceA = +prompt('Введите первое расстояние.(км)', 3);
} while (isNaN(distanceA) || distanceA < 0);
do {
    distanceB = +prompt('Введите второе расстояние.(футах)', 100);
} while (isNaN(distanceB) || distanceB < 0);


let distanceAinMetr = distanceA * 1000;
let distanceBinMetr = distanceB * 0.305;


if (distanceAinMetr > distanceBinMetr) {
    alert('Первое расстояние больше второго');
} else if (distanceAinMetr == distanceBinMetr) {
    alert('Расстояния равны');
} else {
    alert('Второе расстояние больше первого');
}