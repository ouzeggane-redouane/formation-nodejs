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

    const sql = 'SELECT * FROM student';

    const values =[ 'Islam', '2015-01-01', 2 ];

    connection.query(sql, (err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Selecty Query executed successfully =======");
        console.log(result);
    })

    console.log("============== MYSQL CONNECTION ESTABLISHED !!!! =======");
} )
