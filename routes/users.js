const express =  require('express')
const router  = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const { registerUser } = require('../src/userLoginRegister')

mongoose.set('useFindAndModify', false);

const User = require('../models/user')

router.get('/', (req, res) => {

})

// router.post('/login', (req, res) => {
//     loginUser(req, res)
// })

router.post('/login', passport.authenticate('local', { session: false }),  (req, res) => {
      
        res.json(req.user)
        console.log(`User Login success = ${req.user}`) 
}) 

router.post('/register', (req, res) =>{
    registerUser(req, res)
})

module.exports = router