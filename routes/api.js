const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

mongoose.set('useFindAndModify', false);


const Post = require('../models/post')


// GETTING ALL POSTS FROM API 
router.get('/', (req, res) => {

    Post.find()  
        .sort('-createdAt')
        .exec((err, posts) => {
           if(err) return console.log(err)
           res.json(posts) 
        })
    // Post.find((err, posts) => {
    //     if(err) return console.log(err)
    //     res.json(posts)
    // })
})

// Getting specific post. Although cant think of any use for this
router.get('/:id', (req, res) => {
    

})

//POSTING A POST
router.post('/', (req ,res) => {

    const pname = req.body.name
    const pmessage = req.body.message

    let post = new Post({
        name: pname,
        message: pmessage
    })

    post.save((err, post) => {
        if(err) return console.log(err)
        console.log(`Post saved from : ${post.name}`)
        res.send(true)
    })
})


//Updating a post. Will complete once user acc created
router.put('/:id', (req , res) => {
    
})

//Liking a post with param = post._id
router.put('/like/:id', (req,res) => {
    
    Post.findOneAndUpdate( {_id: req.params.id}, 
        {$inc : {'like': 1}}, (err) => {
            if (err) return console.log(err)
            res.send(`Liked a post of id: ${req.params.id}`)
        })
})

//Unliking a post
router.put('/unlike/:id', (req, res) => {
    const opts = { runValidators: true }
    Post.findOneAndUpdate( {_id: req.params.id},opts, 
        {$inc : {'like': -1}}, (err) => {
            if (err) return console.log(err)
            res.send(`Unliked a post of id: ${req.params.id}`)
        })
})

//Deleting a post. Will complete once user accs created.
router.delete('/:id', (req ,res) => {
    
})


module.exports = router