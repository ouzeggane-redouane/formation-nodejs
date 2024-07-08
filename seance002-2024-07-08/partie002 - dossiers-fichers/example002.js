const fs = require('fs')
const { getDateString2 } = require('./utils/date-utils')

const dirName = "./exported-data";

if ( !fs.existsSync(dirName) ){
    fs.mkdirSync(dirName);
}
const date = getDateString2( new Date());
const dossier =  dirName+"/"+"data-"+date;
console.log(date)

fs.mkdir( dossier, ()=>{
        console.log("dossier créé avec succès ...");
    }
);