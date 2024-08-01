const db = require('./config/db')

const test = async ()=>{
    const sql = 'UPDATE student SET '+
    'firstname=? , birthday=? WHERE id=?';

    const values =[ 'Islam', '2015-01-01', 2 ];

    const ok = db.query(sql, values);
    console.log(ok);
}

test();