const div = document.createElement('div');
div.className = 'slider';
document.body.appendChild(div);

const divImage = document.createElement('div');
divImage.className = 'image-div';
divImage.style.display = 'flex';
div.appendChild(divImage);

const buttonPrev = document.createElement('button');
buttonPrev.className = 'prev-btn';
buttonPrev.innerText = 'Prev';
divImage.appendChild(buttonPrev);

const image = document.createElement('img');
image.className = 'image-src';
divImage.appendChild(image);


const buttonNext = document.createElement('button');
buttonNext.className = 'next-btn';
buttonNext.innerText = 'Next';
divImage.appendChild(buttonNext);

const buttons = document.querySelector('button');

let index = 0;

const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg'
];

function sliderImg() {
    image.src = images[index];
    if (index === images.length - 1) {
        buttonNext.style.display = 'none';
    } else {
        buttonNext.style.display = 'block';
    }
    if (index === 0) {
        buttonPrev.style.display = 'none';
    } else {
        buttonPrev.style.display = 'block';
    }
}

buttonNext.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
        sliderImg();
    }
});
buttonPrev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        sliderImg();
    }
});

sliderImg();