const url = 'www.httpvshttps.com';

function redirectToURL(protocol) {
    let finalUrl = url.toLowerCase();

    if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
        finalUrl = 'http://' + finalUrl;
    }

    if (protocol === 'https') {
        finalUrl = finalUrl.replace('http://', 'https://');
    }

    window.location.href = finalUrl;
}

document.getElementById('btnRedirectHttp').addEventListener('click', () =>{
    redirectToURL('http');
});

document.getElementById('btnRedirectHttps').addEventListener('click', () =>{
    redirectToURL('https');
});
