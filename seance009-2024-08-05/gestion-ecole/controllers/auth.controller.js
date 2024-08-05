const service = require('../services/auth.service')

module.exports.login = (req, res)=>{
    const {username, password} = req.body;
    
    console.log("Hello wolrd ");
    console.log(username+" "+password);

    res.redirect("/login?error=true");
}

module.exports.logout = (req, res)=>{
    console.log( req.body );

    res.send(`Insert a new student ....`);
};

module.exports.register = (req, res)=>{
    res.send(`Get the student with ID = ${ req.params.id }....`);
}