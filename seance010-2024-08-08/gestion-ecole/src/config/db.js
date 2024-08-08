const mysql = require('mysql');

require('dotenv').config();

const mysqlParams = {
    host :  process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
};

const db = {}

//for update & delete
db.query = async (sql, values=[]) => {
    let ok = false;

    const connection = mysql.createConnection( mysqlParams );
    await connection.connect();
    
    await new Promise( ( resolve ) => {
        connection.query(sql, values, (err, result)=>{
            if (err) {
                console.log(err);
            }
            else{
                ok = true;
            }

            resolve(ok);
        });
    } )
    
    connection.end();
    return ok;
}

//for insert
db.insertQuery = async (sql, values=[]) => {
    let lastInsertedId = -1;

    const connection = mysql.createConnection( mysqlParams );
    await connection.connect();
    
    await new Promise( ( resolve ) => {
        connection.query(sql, values, (err, result)=>{
            if (err) {
                console.log(err);
            }
            else{
                lastInsertedId = result.insertId;
            }

            resolve(lastInsertedId);
        });
    } )
    
    connection.end();
    return lastInsertedId;
}

//for select
db.selectQuery = async (sql, values=[]) => {
    let data = null;

    const connection = mysql.createConnection( mysqlParams );
    await connection.connect();
    
    await new Promise( ( resolve ) => {
        connection.query(sql, values, (err, result)=>{
            if (err) {
                console.log(err);
                data = null;
            }
            else{
                data = result;
            }

            resolve(data);
        });
    } )
    
    connection.end();
    return data;
}

module.exports = db;