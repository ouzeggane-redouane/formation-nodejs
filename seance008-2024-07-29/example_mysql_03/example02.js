const db = require('./config/db')

const test = async ()=>{
    const sql = 'INSERT INTO student '+
                '( id, inscription_number , firstname, lastname, birthday, sexe ) '+
                'VALUES (NULL, "alg-2542664360", "Said", "Omaria", "2005-04-18", "Male") , '+
                '(NULL, "alg-2542665820", "Said", "Omaria", "2005-04-18", "Male"), '+
                '(NULL, "alg-257466420", "Said", "Omaria", "2005-04-18", "Male")';

        await db.insertQuery(sql);
}

test();