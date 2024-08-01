const db = require('./config/db')


async function test(){
    const sql = 'INSERT INTO student '+
            '( id, inscription_number , firstname, lastname, birthday, sexe ) '+
            'VALUES (? , ?, ? , ?, ?, ?)';

    const value =[ null, "FR-25425djjd03", "Souada", "Tamourth", "2015-04-19", "Female" ];
    
    const lastId = await db.insertQuery(sql, value);
    console.log(lastId);
}

test();