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

    const sql = 'DELETE FROM student '+
            'WHERE id>?';

    const value =[ 5 ];

    connection.query(sql, value ,(err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Delete Query executed successfully =======");
        console.log(result);
    })

    console.log("============== MYSQL CONNECTION ESTABLISHED !!!! =======");
} )
