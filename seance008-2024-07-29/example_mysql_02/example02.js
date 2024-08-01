const mysql = require('mysql');

const mysqlParams = {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'formation_nodejs_db'
};

const connection = mysql.createConnection( mysqlParams );

async function test() {
    await connection.connect();

    const sql = 'INSERT INTO student '+
                '( id, inscription_number , firstname, lastname, birthday, sexe ) '+
                'VALUES (NULL, "alg-2542664360", "Said", "Omaria", "2005-04-18", "Male") , '+
                '(NULL, "alg-2542665820", "Said", "Omaria", "2005-04-18", "Male"), '+
                '(NULL, "alg-257466420", "Said", "Omaria", "2005-04-18", "Male")';

    connection.query(sql, (err, result)=>{
        if (err){
            throw err;
        }

        console.log("============== Insert Query executed successfully =======");
        console.log(result);
    })
}

test();