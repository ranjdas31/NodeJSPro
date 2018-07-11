var fs = require('fs');
var chalk = require ('chalk');

console.log('Async Begin');
var options = {encoding: 'utf8' , flag : 'r' };
console.log (chalk.green("Data contents start "));

fs.readFile ('./data1.txt',options, function ( err, fileData){

    if(err)
    { 
        console.log("File not found");
     } 
    else
    {
    console.log (fileData);
    console.log (chalk.green("Data contents over"));
    };
}

);



console.log(chalk.red("Hello NodeJS"));
