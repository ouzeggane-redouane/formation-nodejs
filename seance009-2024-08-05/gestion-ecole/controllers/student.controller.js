module.exports.getAll = (req, res)=>{
    console.log('Query : '+ JSON.stringify(req.query) );

    res.send('Get the list of students (it\'s from controller) ....');
}

module.exports.create = (req, res)=>{
    console.log( req.body );

    res.send(`Insert a new student ....`);
};

module.exports.getById = (req, res)=>{
    res.send(`Get the student with ID = ${ req.params.id }....`);
}

module.exports.update = (req, res)=>{
    res.send(`Update the student with ID = ${ req.params.id }....`);
}

module.exports.delete = (req, res)=>{
    res.send(`Delete the student with ID = ${ req.params.id }....`);
}
