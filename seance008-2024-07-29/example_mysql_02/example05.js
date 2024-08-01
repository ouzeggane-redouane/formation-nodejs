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

    const sql = 'UPDATE student SET '+
            'firstname=? , birthday=? WHERE id=?';

    const values =[ 'Islam', '2015-01-01', 2 ];

    connection.query(sql, values ,(err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Update Query executed successfully =======");
        console.log(result);
    })

    console.log("============== MYSQL CONNECTION ESTABLISHED !!!! =======");
} )
