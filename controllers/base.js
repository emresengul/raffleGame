const connection = require("../utility/database");

module.exports = class Base {
    constructor(code,url,activisioncount,name,raffleroom){
        this.code = code;
        this.url = url;
        this.activisioncount = activisioncount;
        this.name = name;
        this.raffleroom = this.raffleroom
    }
    saveCode(){
        return connection.execute("INSERT INTO generator (code,url,activisioncount,name,raffleroom) VALUES(?,?,?,?,?)",[this.code,this.url,this.activisioncount,this.name,this.raffleroom])
    }
    // static getAll(){
    //     return connection.execute("SELECT * FROM images");
    // }
    static getByUrl(url){
        return connection.execute("SELECT * FROM generator WHERE url=?",[url]);
    }
    static getByCode(code){
        return connection.execute("SELECT * FROM generator WHERE code=?",[code]);
    }
    static getByRaffleRoom(raffleroom){
        return connection.execute("SELECT * FROM generator WHERE raffleroom=?",[raffleroom]);
    }
    static AddNewUser(code,name,active,raffleroom){
        return connection.execute("UPDATE generator SET name=?,activisioncount=?,raffleroom=? WHERE code=? ",[name,active,raffleroom,code,])
    }
    static getByWinner(winner){
        return connection.execute("SELECT * FROM generator WHERE winner=?",[winner]);        
    }
    static updateWinner(code,winnerStatus){
        return connection.execute("UPDATE generator SET winner=? WHERE code=? ",[winnerStatus,code])
    }
    // static editName(name){
    //     return
    // }
    // static updateSayac(deger,id){
    //     return connection.execute("UPDATE images SET images.sayac=? WHERE imageurl=?",[deger,id]);
    // }
    static reset(){
        return connection.execute("TRUNCATE generator")
    }
}