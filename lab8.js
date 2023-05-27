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


