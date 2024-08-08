const Utilisateur = require('../models/utilisateur.model')

async function test(){
    const user  = await Utilisateur.getByUsername("admi")
    console.log( JSON.stringify(user));
}

test();