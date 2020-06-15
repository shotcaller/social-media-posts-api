const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0,
        min: 0
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)