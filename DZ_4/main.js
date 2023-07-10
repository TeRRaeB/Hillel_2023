let viewAge = '';
let viewCity = '';
let viewSport = '';
let age = prompt('Введите ваш год рождения.', 1990);
if (age != null) {
    let date = new Date();
    viewAge = date.getFullYear() - age;
} else {
    viewAge = 'Не указано';
    alert('Жаль что Вы не ввели свой год рождения.');
}

let city = prompt('Введите город проживания? (Киев, Варшава, Берлин и т.д.');

if (city != null) {
    let smallCity = city.toLocaleLowerCase();
    switch (smallCity) {
        case 'киев':
            viewCity = 'Ты живешь в столице Украины';
            break;
        case 'варшава':
            viewCity = 'Ты живешь в столице Польши';
            break;
        case 'берлин':
            viewCity = 'Ты живешь в столице Германии';
            break;
        default:
            viewCity = 'Ты живешь в городе ' + city;
            break;
    }
} else {
    viewCity = 'город проживания: Не указано';
    alert('Жаль что Вы не ввели город проживания.');
}
let sport = prompt('Введите любимый вид спорта? (баскетбол, футбол, формула 1 и т.д.', 'формула 1');

if (sport != null) {
    let smallSport = sport.toLocaleLowerCase();
    switch (smallSport) {
        case 'баскетбол':
            viewSport = 'Круто! Хочешь стать как  Майкл Джордан';
            break;
        case 'футбол':
            viewSport = 'Круто! Хочешь стать как  Диего Марадона';
            break;
        case 'формула 1':
            viewSport = 'Круто! Хочешь стать как  Михаэль Шумахер';
            break;
        default:
            viewSport = 'Не знаю такой вид спорта, но думаю ты все сможешь!'
            break;
    }
} else {
    viewSport = 'вид спорта:  Не указаный';
    alert('Жаль что Вы не ввели вид спорта.');
}

alert('Ваш возрост: ' + viewAge + ',\n' + viewCity + ',\n' + viewSport);




