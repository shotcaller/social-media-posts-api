const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')



exports.registerUser =  async (req, res) => {

    const { name, username, email, password } = req.body.user
    
        const hashedPassword = await bcrypt.hash(password, 10)
    

    let user = new User({
        name: name,
        username: username,
        email: email,
        password: hashedPassword
    })

    user.save((err, user) => {
        if(err) return console.log(err)

        console.log(`User ${username} registered.`)
        res.send(`User ${username} registered.`)
    })                                  
}

exports.checkUser = (req, res) => {
    const { username } = req.body

    User.exists({username: username}, (err, result) => {
        if(err) {
           return console.log(err)
        }

        res.send(result)

    })
}

exports.findName = (req, res) => {
    const name = req.params.name
    User.findOne({ username: name}, (err, user) => {
        if (err) return console.log(err)

        res.json(user.name)
    })
}

