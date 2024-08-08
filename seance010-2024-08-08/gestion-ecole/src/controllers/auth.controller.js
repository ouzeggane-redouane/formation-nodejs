const service = require('../services/auth.service')

module.exports.login = async (req, res)=>{
    const {username, password} = req.body;
    
    const response = await service.login(username, password)

    if (response == null){
        res.redirect("/login?error=true&username="+username+"&password="+password);
    }
    else{
        res.redirect("/main")
    }
}

module.exports.logout = (req, res)=>{
    console.log( req.body );

    res.send(`Insert a new student ....`);
};

module.exports.register = (req, res)=>{
    res.send(`Get the student with ID = ${ req.params.id }....`);
}