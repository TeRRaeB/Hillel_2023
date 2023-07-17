const smileys = [":-D", ":-)", ":-|", ":-(", "X-("];
let start = document.getElementById('start');

function createSmiley(face) {
    const smiley = document.createElement('div');
    smiley.className = 'smiley';
    smiley.style.border = '1px solid black';
    smiley.style.borderRadius = '8px';
    smiley.style.width = '50px';
    smiley.style.height = '60px';

    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.innerText = face;

    const count = document.createElement('div');
    count.className = 'count';
    count.innerText = '0';
    count.style.border = '2px solid red';
    count.style.borderRadius = '8px';
    count.style.textAlign = 'center';


    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';
    incrementButton.addEventListener('click', function () {
        let currentCount = parseInt(count.innerText);
        count.innerText = (currentCount + 1).toString();
    });

    const decrementButton = document.createElement('button');
    decrementButton.innerText = '-';
    decrementButton.addEventListener('click', function () {
        let currentCount = parseInt(count.innerText);
        if (currentCount > 0) {
            count.innerText = (currentCount - 1).toString();
        }
    });

    smiley.appendChild(emoji);
    smiley.appendChild(count);
    smiley.appendChild(incrementButton);
    smiley.appendChild(decrementButton);

    start.appendChild(smiley);
}

smileys.forEach((face) => {
    createSmiley(face);
});
