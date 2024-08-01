const db = require('../config/db')

const Student = function( id, numInscritpion, firstname, lastname, birthday, sexe ) {
    this.id = id;
    this.numInscritpion = numInscritpion;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.sexe = sexe

    this.save = async ()=>{
        const sql = 'INSERT INTO student '+
                '( id, inscription_number , firstname, lastname, birthday, sexe ) '+
                'VALUES (? , ?, ? , ?, ?, ?)';

        const value =[ 
            this.id, 
            this.numInscritpion, 
            this.firstname, 
            this.lastname, 
            this.birthday, 
            this.sexe
        ];
        
        this.id = await db.insertQuery(sql, value);
    }
}

Student.getAll = async ()=>{
    let data = await db.selectQuery("select * from student");
    
    return data;
}

module.exports = Student;
