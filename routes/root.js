const express=  require('express')
const router = express.Router()


router.get((req, res) => {
    res.send("Got to /api for data.")
})


module.exports = router