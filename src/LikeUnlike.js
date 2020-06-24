const mongoose = require('mongoose')
const User = require('../models/user')
const Post = require('../models/post')

mongoose.set('useFindAndModify', false);


exports.likePost = (req, res) => {
    const { username, postId } = req.body

    Post.findOne({_id: postId}, (err, post) => {
        if (err) return console.log(err)

        if(post.likeList.some(liker => liker.username === username)) {
            Post.findOneAndUpdate({_id: postId}, {$pull: {likeList: {username: username}}, 
                                $inc: {like: -1}},(err, updatedPost) => {
                                    if(err) return console.log(err)
                                    res.send('unliked')
                                })

        }
        else {
                 Post.findOneAndUpdate({_id: postId}, {$push: {likeList: {username: username}},
                         $inc: { like: 1 } },(err, updatedPost) => {
                     if (err) return console.log(err)
                     res.send('liked')
                 })
    
            }
    
    })

}

exports.checkLike = (req, res) => {
    const { username, postId } = req.body

    Post.findOne({_id: postId}, (err, post) => {
        if (err) return console.log(err)

        if(post.likeList.some(liker => liker.username === username)) {
                res.send(true)
        }
        else {
                 res.send(false)
    
            }
    
}
    )}