const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

mongoose.set('useFindAndModify', false);


const Post = require('../models/post')

const { likePost,checkLike } = require('../src/LikeUnlike')


// GETTING ALL POSTS FROM API 
router.get('/', (req, res) => {

    Post.find()  
        .sort('-createdAt')
        .exec((err, posts) => {
           if(err) return console.log(err)
           res.json(posts) 
        })
})

// Getting specific post. Although cant think of any use for this
router.get('/:id', (req, res) => {
    

})

//POSTING A POST
router.post('/', (req ,res) => {

    const pname = req.body.username
    const pmessage = req.body.message

    let post = new Post({
        username: pname,
        message: pmessage
    })

    post.save((err, post) => {
        if(err) return console.log(err)
        console.log(`Post saved from : ${post.username}`)
        res.send(true)
    })
})


//Updating a post. Will complete once user acc created
router.put('/:id', (req , res) => {
    
})

//Liking a post with param = post._id

router.put('/post/like', (req,res) => {
     likePost(req, res)
    
})

router.put('/post/checklike', (req, res) => {
    checkLike(req, res)
})

//Deleting a post. Will complete once user accs created.
router.delete('/:id', (req ,res) => {
    
})


module.exports = router