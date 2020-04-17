var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");


var reader = new Reader();
var writer = new Writer();

async function main(){
    var data = await reader.Reader("./Usuarios.csv");
    var dataProcess = Processor.Process(data);
    var file = new Table(dataProcess);
    var html = await HtmlParser.Parse(file);

    PDFWriter.WritePDF(`${Date.now()}.pdf`, html);
    //writer.Write(`${Date.now()}.html`, html);

}

main();