const db = require('./config/db');


async function testSelectSQL(){
    const sql = 'SELECT * FROM student';
    let data = await db.selectQuery( sql )

    console.log(data);
}

testSelectSQL();

