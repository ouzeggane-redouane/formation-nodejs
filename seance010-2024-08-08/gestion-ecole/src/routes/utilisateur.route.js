const express = require('express')
const controller = require('../controllers/utilisateur.controller')

const router = express.Router();

router.get('/', controller.getAll)

router.post('/', controller.create)

router.route('/:id')
    .get( controller.getById )
    .put( controller.update )
    .delete( controller.delete )

module.exports = router;
