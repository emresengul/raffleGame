const generator = require("../models/generator")
const urlGenerator = require("../models/urlGenerator");
const Base = require("./base");
const raffle = require("../models/raffle");

exports.Index = (req, res, next) => {
    res.render("main/index", {
        codeState: false
    });
}
exports.GenerateCode = (req, res, next) => {
    module.exports = generatorCode = generator();
    let url = urlGenerator();
    let code = generatorCode.toString();
    let activisioncount = 0;
    let raffleroom = 0;
    let name = "TANIMSIZ";
    const generatedCode = new Base();
    generatedCode.code = code;
    generatedCode.url = url;
    generatedCode.activisioncount = activisioncount;
    generatedCode.name = name;
    generatedCode.raffleroom = raffleroom;
    generatedCode.saveCode()
        .then(() => {
            res.redirect(`/code/${url}`)
        }).catch((err) => {
            console.log(err)
        });
    // res.render("main/index",{
    //     code: generatorCode,
    //     codeState: true
    // })
}
exports.showCode = (req, res, next) => {
    const urlMain = req.params.codenumber;
    Base.getByUrl(urlMain)
        .then(result => {
            if (result[0][0] == undefined) {
                res.redirect("/")
            }
            else {
                res.render("main/code", {
                    code: result[0][0].code,
                    codeState: true,
                    activision: result[0][0].activisioncount
                })
            }
        })
        .catch(err => {
            console.log(err)
        })

}
exports.reset = (req, res, next) => {
    Base.reset();
    res.redirect("/");
}

exports.use = (req, res, next) => {
    const raffleroom = 1;
    Base.getByRaffleRoom(raffleroom)
        .then((result) => {
            console.log(result[0])
            if (result[0].length > 4) {
                const winnerRaffle = raffle(result[0])
                res.render("main/use", {
                    info: result[0],
                    newUser: false,
                    winner: 1,
                    action: req.query.action
                })
                        setTimeout(() => {
                            Base.reset();

                        }, 60000);
            }
            else {
                res.render("main/use", {
                    info: result[0],
                    newUser: true,
                    winner: 1,
                    action: req.query.action
                })
            }

        })
        .catch((err) => {
        });



}

exports.usePost = (req, res, next) => {
    const raffleroom = 1;
    const code = req.body.code;
    const fullCode = code.replace(/\s+/g, '')
    const name = req.body.name;
    let actived = 1;
    Base.getByCode(fullCode)
        .then((resz) => {
            if(resz[0][0] != undefined && resz[0][0].activisioncount == 1){
                res.redirect("/use?action=used")
            }
            // else if(resz[0][0].activision == 1){
            //     res.redirect("/use?action=used")
            // }
            else {
                Base.AddNewUser(fullCode, name, actived, raffleroom)
                    .then((result) => {
                        if (result[0].changedRows >= 1) {
                            res.redirect("/use?action=okey")
                        }
                        else {
                            res.redirect("/use?action=nofind")
                        }
                    }).catch((err) => {

                    });
            }
  
        }).catch((err) => {
            console.log(err)
        });




    // Base.getByCode(code)
    // .then((result) => {
    //     if (result[0][0] == undefined){
    //         res.redirect("/use");
    //     }
    //     else{
    //         // Burada aktivite sayısı arttırılacak 1 yapılacak.
    //         let info = {
    //             name:result[0][0].name,
    //             code: result[0][0].code,
    //             date: new Date()
    //         }
    //         res.render("main/use",{
    //             info: info,
    //             newUser: true
    //         })

    //     }

    // }).catch((err) => {

    // });
}
