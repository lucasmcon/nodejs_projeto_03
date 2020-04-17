var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var reader = new Reader();


async function main(){
    var data = await reader.Reader("./Usuarios.csv");
    var dataProcess = Processor.Process(data);

    var file = new Table((dataProcess));

    console.log(file.rows);
}

main();