const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({

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
    },
    likeList: [{username: String}]

}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)