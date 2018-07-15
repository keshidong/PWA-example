if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

document.getElementById('btn').addEventListener('click', function (ev) {
    fetch('http://127.0.0.1:3000')
        .then(function (res) {
            console.log(res);
        });
});
