function generator() {
    let code = [];
    let duz;
    // 16 haneli kod üretilecek
    let number = "123456789".split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < 16; i = i + 2) {
        let randomNumber = Math.floor(Math.random() * number.length) + 1;
        code.push(randomNumber)
        let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        code.push(randomLetter)
    }
    for (let a = 0; a < 16; a++) {
        if (a == 4) {
            code[3] += "-";
        }
        if (a == 8) {
            code[7] += "-";
        }
        if (a == 12) {
            code[11] += "-";
        }
    }
    let generatedCode = (code.join("").toUpperCase());
    return generatedCode;
}
module.exports = generator;