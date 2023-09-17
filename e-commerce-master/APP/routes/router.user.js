const router = require('express').Router()
const controlerUsers = require('../controler/controler.user')

router.post('/register', controlerUsers.register)
router.post('/login', controlerUsers.login)

module.exports = router
