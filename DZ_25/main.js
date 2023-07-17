const inputUrl = document.getElementById('enterUrl');
const goToUrl = document.getElementById('goToUrl');
let url = '';
inputUrl.addEventListener('click',getUrl);

function getUrl(){
     url = prompt('Введите ссылку');
    if(!url.startsWith("http://") && !url.startsWith("https://")){
        url = 'http://' + url;
        console.log('Ссылка готова для перехода, нажмите другую кнопку' + url);
        goToUrl.href = url;
    }
}
