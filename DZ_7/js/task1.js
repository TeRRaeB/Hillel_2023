for (let i = 10; i < 20; i++) {
    document.write(i + ', ');
}
document.write('20.');
document.write('<br>');

// Альтернативный вариант через do while:
let number = 10;
do {
    document.write(number + ', ');
    number++;
} while(number<20);
    document.write(number + '.');