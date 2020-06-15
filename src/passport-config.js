const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const initializePassport = (passport) => {
    passport.use( new LocalStrategy( (username, password, done) => {
        User.findOne({ username: username } , async (err, user) => {
            if(err) return console.log(err)

            if(!user) return  done(null, false)

            try {
                if (await bcrypt.compare(password, user.password)) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (e) {
                return done(e)
            }
        })
    })
    )}

module.exports = initializePassport