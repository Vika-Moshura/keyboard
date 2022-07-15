let key = document.getElementsByClassName('key');
let message = document.querySelector('.message');
window.addEventListener('keydown', function () {
    if (event.keyCode !== 8 && event.keyCode !== 9 && event.keyCode !== 13 && event.keyCode !== 20 && event.keyCode !== 16) {
        message.textContent += event.key;
    }
    if (event.keyCode === 8) {
        message.textContent = message.textContent.slice(0, -1);
    }
    if (event.keyCode === 9) {
        event.preventDefault();
        message.textContent += '\t';
    }
    if (event.keyCode === 13) {
        event.preventDefault();
        message.innerHTML = `${message.textContent}\n`;
    }
    if (event.keyCode === 20) {
        event.preventDefault();
        key[28].classList.toggle('bg-3');
    }

    for (let i = 0; i < key.length; i++) {
        if (event.keyCode === 192) {
            key[0].classList.add('bg-2');
        }
        if (event.keyCode === 49) {
            key[1].classList.add('bg-2');

        }
        if (event.keyCode === 50) {
            key[2].classList.add('bg-2');
        }
        if (event.keyCode === 51) {
            key[3].classList.add('bg-2');
        }
        if (event.keyCode === 52) {
            key[4].classList.add('bg-2');
        }
        if (event.keyCode === 53) {
            key[5].classList.add('bg-2');
        }
        if (event.keyCode === 54) {
            key[6].classList.add('bg-2');
        }
        if (event.keyCode === 55) {
            key[7].classList.add('bg-2');
        }
        if (event.keyCode === 56) {
            key[8].classList.add('bg-2');
        }
        if (event.keyCode === 57) {
            key[9].classList.add('bg-2');
        }
        if (event.keyCode === 48) {
            key[10].classList.add('bg-2');
        }
        if (event.keyCode === 189) {
            key[11].classList.add('bg-2');
        }
        if (event.keyCode === 187) {
            key[12].classList.add('bg-2');
        }
        if (event.keyCode === 8) {
            key[13].classList.add('bg-3');
        }
        if (event.keyCode === 9) {
            key[14].classList.add('bg-3');
        }
        if (event.keyCode === 81) {
            key[15].classList.add('bg-2');
        }
        if (event.keyCode === 87) {
            key[16].classList.add('bg-2');
        }
        if (event.keyCode === 69) {
            key[17].classList.add('bg-2');
        }
        if (event.keyCode === 82) {
            key[18].classList.add('bg-2');
        }
        if (event.keyCode === 84) {
            key[19].classList.add('bg-2');
        }
        if (event.keyCode === 89) {
            key[20].classList.add('bg-2');
        }
        if (event.keyCode === 85) {
            key[21].classList.add('bg-2');
        }
        if (event.keyCode === 73) {
            key[22].classList.add('bg-2');
        }
        if (event.keyCode === 79) {
            key[23].classList.add('bg-2');
        }
        if (event.keyCode === 80) {
            key[24].classList.add('bg-2');
        }
        if (event.keyCode === 219) {
            key[25].classList.add('bg-2');
        }
        if (event.keyCode === 221) {
            key[26].classList.add('bg-2');
        }
        if (event.keyCode === 220) {
            key[27].classList.add('bg-2');
        }
        if (event.keyCode === 65) {
            key[29].classList.add('bg-2');
        }
        if (event.keyCode === 83) {
            key[30].classList.add('bg-2');
        }
        if (event.keyCode === 68) {
            key[31].classList.add('bg-2');
        }
        if (event.keyCode === 70) {
            key[32].classList.add('bg-2');
        }
        if (event.keyCode === 71) {
            key[33].classList.add('bg-2');
        }
        if (event.keyCode === 72) {
            key[34].classList.add('bg-2');
        }
        if (event.keyCode === 74) {
            key[35].classList.add('bg-2');
        }
        if (event.keyCode === 75) {
            key[36].classList.add('bg-2');
        }
        if (event.keyCode === 76) {
            key[37].classList.add('bg-2');
        }
        if (event.keyCode === 186) {
            key[38].classList.add('bg-2');
        }
        if (event.keyCode === 222) {
            key[39].classList.add('bg-2');
        }
        if (event.keyCode === 13) {
            key[40].classList.add('bg-3');
        }
        if (event.code === 'ShiftLeft') {
            key[41].classList.add('bg-3');
        }
        if (event.keyCode === 90) {
            key[42].classList.add('bg-2');
        }
        if (event.keyCode === 88) {
            key[43].classList.add('bg-2');
        }
        if (event.keyCode === 67) {
            key[44].classList.add('bg-2');
        }
        if (event.keyCode === 86) {
            key[45].classList.add('bg-2');
        }
        if (event.keyCode === 66) {
            key[46].classList.add('bg-2');
        }
        if (event.keyCode === 78) {
            key[47].classList.add('bg-2');
        }
        if (event.keyCode === 77) {
            key[48].classList.add('bg-2');
        }
        if (event.keyCode === 188) {
            key[49].classList.add('bg-2');
        }
        if (event.keyCode === 190) {
            key[50].classList.add('bg-2');
        }
        if (event.keyCode === 191) {
            key[51].classList.add('bg-2');
        }
        if (event.code === 'ShiftRight') {
            key[52].classList.add('bg-3');
        }
        if (event.keyCode === 32) {
            key[53].classList.add('bg-3');
        }
    }

})
window.addEventListener('keyup', function () {
    for (let i = 0; i < key.length; i++) {
        if (key[i].classList.contains('bg-2') || key[i].classList.contains('bg-3') && i !== 28) {
            key[i].classList.remove('bg-2');
            key[i].classList.remove('bg-3');
        }
    }
})