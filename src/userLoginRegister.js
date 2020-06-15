const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const initializePassport = require('../src/passport-config')
const passport = require('passport')

initializePassport(passport)


exports.registerUser =  async (req, res) => {

    const { name, username, email, password } = req.body
    
        const hashedPassword = await bcrypt.hash(password, 10)
    

    let user = new User({
        name: name,
        username: username,
        email: email,
        password: hashedPassword
    })

    user.save((err, user) => {
        if(err) return console.log(err)

        console.log(`User ${name} registered.`)
        res.send(`User ${name} registered.`)
    })
                                    

}

