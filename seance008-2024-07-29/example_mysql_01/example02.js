const mysql = require('mysql');

const mysqlParams = {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'formation_nodejs_db'
};

const connection = mysql.createConnection( mysqlParams );

connection.connect( function(err){
    if (err) {
        throw err; //exception and exit
    }

    const sql = 'INSERT INTO student '+
            '( id, inscription_number , firstname, lastname, birthday, sexe ) '+
            'VALUES (NULL, "alg-254266436", "Said", "Omaria", "2005-04-18", "Male") , '+
            '(NULL, "alg-254266582", "Said", "Omaria", "2005-04-18", "Male"), '+
            '(NULL, "alg-25746642", "Said", "Omaria", "2005-04-18", "Male")';

    connection.query(sql, (err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Insert Query executed successfully =======");
        console.log(result);
    })

    console.log("============== MYSQL CONNECTION ESTABLISHED !!!! =======");
} )
