const fs = require('fs');

function getParams(attributs){
    let params = "";

    attributs.forEach( attribut => {
        if (params != ""){
            params += ", ";
        }

        params += attribut;
    } )

    return params;
}

function genCode(tableName, className, attributs){
    let code = ``;

    code += `db = require('../config/db');\n`;
    code += `\n`;
    code += `\n`;
    code += `const TABLE_NAME = "${tableName}";\n`;
    code += `\n`;
    code += `const Utilisateur=function(${getParams(attributs)}){\n`;
    for (let i=0; i<attributs.length; i++){
        const attr = attributs[i];
        code += `    this.${attr} = ${attr};\n`;
    }
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `    \n`;
    code += `}\n`;
    code += `\n`;
    code += `\n`;

    return code;
}

const  genFile = ( file, code ) => {
    fs.writeFileSync(file, code);
}

const db = {
    "session":{
        className:"Session",
        attributs:["id", "date_debut", "date_fin", "utilisateur_id"]
    },
    "user":{
        className:"User",
        attributs:["id", "firstname", "lastname"]
    }
}

const path = "./src/models/"
Object.keys(db).forEach(table => {
    genFile(
        path + table + ".model.js", 
        genCode( table,  db[table].className, db[table].attributs )
    );
})



// genFile(  
//     "session.model.js",
//     genCode("session", "Session",  ["id", "date_debut", "date_fin", "utilisateur_id"])
// );

