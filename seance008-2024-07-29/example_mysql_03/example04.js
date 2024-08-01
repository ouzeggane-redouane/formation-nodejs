const db = require('./config/db')

const test = async ()=>{
    const sql = 'DELETE FROM student '+
            'WHERE id>?';

    const value =[ 5 ];

    const ok = await db.query( sql );
    console.log(ok)
}

test();