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
            'VALUES (? , ?, ? , ?, ?, ?)';

    const value =[ null, "FR-25425663", "Souad", "Tamourt", "2005-04-19", "Female" ];

    connection.query(sql, value ,(err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Insert Query executed successfully =======");
        console.log(result);
    })

    console.log("============== MYSQL CONNECTION ESTABLISHED !!!! =======");
} )
