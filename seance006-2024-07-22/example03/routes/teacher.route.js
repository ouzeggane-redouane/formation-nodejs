const express = require('express')

const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Query : '+ JSON.stringify(req.query) );

    res.send('Get the list of teachers ....');
})

router.post('/', (req, res)=>{
    console.log( req.body );

    res.send(`Insert a new teacher ....`);
})

router.route('/:id')
    .get( (req, res)=>{
        res.send(`Get the teacher with ID = ${ req.params.id }....`);
    } )
    .put( (req, res)=>{
        res.send(`Update the teacher with ID = ${ req.params.id }....`);
    } )
    .delete( (req, res)=>{
        res.send(`Delete the teacher with ID = ${ req.params.id }....`);
    } );


/*
router.get('/:id', (req, res)=>{
    res.send(`Get the teacher with ID = ${ req.params.id }....`);
})

router.put('/:id', (req, res)=>{
    res.send(`Update the teacher with ID = ${ req.params.id }....`);
})

router.delete('/:id', (req, res)=>{
    res.send(`Delete the teacher with ID = ${ req.params.id }....`);
})
*/

module.exports = router;
