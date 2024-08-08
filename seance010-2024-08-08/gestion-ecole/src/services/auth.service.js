const Utilisateur = require('../models/utilisateur.model')
//const Session = require('../models/session.model')
const bcrypt = require('bcrypt');

const service = {};

service.login = async (username, password)=>{
    const user = await Utilisateur.getByUsername(username);
    
    if (user == null){
        return null;
    }

    try{
        const result = await bcrypt.compare(password, user.password);;
        
        if (false){
            return null;
        }

        //Créer une session ...
    }
    catch(err){
        console.error( err );
    }

    return null;
}

service.logout = async (sessionId)=>{

}

service.register = async (data)=>{
    
}

module.exports = service;