const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/mernTest', {useNewUrlParser: true, useUnifiedTopology: true},(err) =>{
    if(err) {
        console.log(`Error while connecting to MongoDB: ${err}`)
    }
}).then(()=> {
    console.log('MongoDB connected....')
})

app.use(express.json())

app.use('/api', require('./routes/api'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started at ${port}`))