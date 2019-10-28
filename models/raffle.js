const Base = require("../controllers/base");
function raffle(code) {
    let randomRaffle = code[Math.floor(Math.random() * code.length)];
    const winnerStatus = "WINNER"
     Base.getByWinner(winnerStatus)
        .then((result) => {
            
            if (result[0].length >= 1) {
                var value = result[0][0]
            }
            else {
                Base.updateWinner(randomRaffle.code, winnerStatus)
                    .then((result) => {

                    }).catch((err) => {
                    });
            }

        }).catch((err) => {
        });
}


module.exports = raffle;