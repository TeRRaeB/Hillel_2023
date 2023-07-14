const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let length;

do {
    length = prompt('Введите длину хеша');
} while (isNaN(length) || length < 0);
const key = generateKey(length, characters);

function generateKey(length, characters) {
    let hash = '';
    for (let i = 0; i < length; i++) {
        hash += characters[Math.floor(Math.random() * (characters.length))];
    }
    return hash;
}

console.log(key);