const express =  require('express')
const router  = express.Router()
const mongoose = require('mongoose')

const { registerUser } = require('../src/userLoginRegister')

mongoose.set('useFindAndModify', false);

const User = require('../models/user')

router.get('/', (req, res) => {

})

router.post('/login', (req, res) => {

})

router.post('/register', (req, res) =>{
    registerUser(req, res)
})

module.exports = router