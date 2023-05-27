function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    for (let k = 1; k < 6; k++) {
        let out = document.getElementById('current-date' + k);
        if (k == 1) {
            out.innerHTML = 'Текущие дата и время для русской локали: ' + today.toLocaleString('ru-RU');
        }
        else if (k == 2) {
            out.innerHTML = 'Текущие дата и время для норвежской локали: ' + today.toLocaleString('nn-NO');
        }
        else if (k == 3) {
            out.innerHTML = 'Текущие дата и время для американской локали: ' + today.toLocaleString('en-US');
        }
        else if (k == 4) {
            out.innerHTML = 'Текущие дата и время для французской локали: ' + today.toLocaleString('fr-FR');
        }
        else if (k == 5) {
            out.innerHTML = 'Текущие дата и время для итальянской локали: ' + today.toLocaleString('it-IT');
        }
    }
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]')
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let out = document.getElementById('gonedays');
    out.innerHTML = 'Со дня вашего рождения прошло: ' + daysCount;
}

function clean() {
    let inputDate = document.querySelector('input[type=date]')
    inputDate.value = '';
    let out = document.getElementById('gonedays');
    out.innerHTML = '';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

