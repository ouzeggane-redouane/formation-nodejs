const express = require('express')

const router = express.Router();

router.get('/', (req, res)=>{
    console.log('Query : '+ JSON.stringify(req.query) );

    res.send('Get the list of classrooms ....');
})

router.post('/', (req, res)=>{
    console.log( req.body );

    res.send(`Insert a new classroom ....`);
})

router.route('/:id')
    .get( (req, res)=>{
        res.send(`Get the classroom with ID = ${ req.params.id }....`);
    } )
    .put( (req, res)=>{
        res.send(`Update the classroom with ID = ${ req.params.id }....`);
    } )
    .delete( (req, res)=>{
        res.send(`Delete the classroom with ID = ${ req.params.id }....`);
    } );

module.exports = router;
