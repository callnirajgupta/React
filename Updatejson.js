let inputdata=require('./datafile/script.json');



//console.log("hello world"+inputdata.HELLO);

//inputdata.HELLO="my name is niraj";

//console.log("hello world"+JSON.stringify(inputdata));

var parsedJson =JSON.parse(JSON.stringify(inputdata));

console.log("json parsing"+parsedJson.HELLO)