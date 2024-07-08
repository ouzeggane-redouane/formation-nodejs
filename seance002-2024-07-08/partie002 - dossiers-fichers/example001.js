const fs = require('fs')

const dirName = "./data-exports";

// fs.mkdirSync(dirName);

console.log ( fs.existsSync(dirName) )

fs.mkdir(
    dirName, 
    (err)=>{
        console.log("dossier créé avec succès ...");
        console.log()
    }
);