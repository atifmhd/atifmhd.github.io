let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById('guess').value;
    let result = document.getElementById('result');

    if (guess == randomNumber) {
        result.textContent = 'Selamat! Tebakan Anda benar!';
        result.style.color = 'green';
    } else if (guess > randomNumber) {
        result.textContent = 'Terlalu tinggi! Coba lagi.';
        result.style.color = 'red';
    } else {
        result.textContent = 'Terlalu rendah! Coba lagi.';
        result.style.color = 'red';
    }
}
