function randomGenerator() {
    let idGenerator = Math.floor(Math.random() * 999) + 1;
    let idGenerator2 = Math.floor(Math.random() * 999) + 1;
    let idGenerator3 = Math.floor(Math.random() * 999) + 1;
    let idGenerator4 = Math.floor(Math.random() * 999) + 1;
    let idGenerator5 = Math.floor(Math.random() * 999) + 1;

    var splitWithoutrandomId = [idGenerator, idGenerator2, idGenerator3, idGenerator4, idGenerator5] + [idGenerator + idGenerator2];
    var splitRandomId = splitWithoutrandomId.split(",");
    var randomId = splitRandomId[0] + splitRandomId[1] + splitRandomId[2] + splitRandomId[3] + splitRandomId[4]
    return randomId
}
module.exports = randomGenerator;