const Utilisateur = require('../models/utilisateur.model')

async function test(){
    const user  = await Utilisateur.get(1);
    //console.log( JSON.stringify(user));

    user.email = 'hello@gmail.com';
    user.update();
}

test();