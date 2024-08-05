db = require('../config/db');
const bcrypt = require('bcrypt');

const TABLE_NAME = "utilisateur";

const Utilisateur=function(id, nom, prenom, date_naissance, email, username, password, cryptPWD=false){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.email = email;
    this.username = username;
    this.password = cryptPWD ? bcrypt.hashSync(password, 10) : password;

    this.save = async ()=>{
        const sql = `INSERT INTO ${TABLE_NAME} `+
                '( id, nom, prenom, date_naissance, email, username, password ) '+
                'VALUES (? , ?, ? , ?, ?, ?, ?)';

        const values =[ 
            this.id, 
            this.nom, 
            this.prenom, 
            this.date_naissance, 
            this.email, 
            this.username, 
            this.password
        ];
        
        this.id = await db.insertQuery(sql, values);
    }

    this.update = async ()=>{
        const sql = `UPDATE ${TABLE_NAME} `
                +`SET nom=?, prenom=?, date_naissance=?, email=?, username=?, password=? `
                +`WHERE id=?`

        const values =[ 
            this.nom, 
            this.prenom, 
            this.date_naissance, 
            this.email, 
            this.username, 
            this.password,
            this.id
        ];
        
        return await db.query(sql, values);
    }

    this.delete = async ()=>{
        const sql = `DELETE FROM ${TABLE_NAME} WHERE id=?`;
        return await db.query(sql, [this.id]);
    }
}//Fin de Utilisateur

Utilisateur.get = async (id) =>{
    const sql = `SELECT * FROM ${TABLE_NAME} WHERE id = ?`;
    const row = (await db.selectQuery(sql, [id]))[0];

    const user = new Utilisateur( 
        row["id"],
        row["nom"], 
        row["prenom"], 
        row["date_naissance"], 
        row["email"], 
        row["username"], 
        row["password"] ,
        false
    );

    return user;
}

module.exports = Utilisateur;