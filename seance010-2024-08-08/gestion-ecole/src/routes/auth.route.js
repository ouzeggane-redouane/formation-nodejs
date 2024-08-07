const express = require('express')
const controller = require('../controllers/auth.controller')

const router = express.Router();

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/register', controller.register)

module.exports = router;