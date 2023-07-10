let body = document.body;
let img = document.createElement('img');
let button = document.createElement('button');

img.src = './img/' + getRandomNumber() + '.jpg';
body.append(img);

button.onclick = reload;
button.textContent = 'Получи другую картинку';
body.append(button);

function getRandomNumber() {
    return number = Math.floor(Math.random() * 9) + 1;
}

function reload() {
    location.reload();
}
