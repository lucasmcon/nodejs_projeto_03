const fs = require("fs");
const util = require("util");


class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Reader(filepath){
        try{
            return await this.reader(filepath, "utf-8");
        }catch(err){
            return err;
        }
    }
}

module.exports = Reader;