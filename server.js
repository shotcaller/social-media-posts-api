const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv =  require('dotenv').config({path: './config/config.env'})


const app = express()

mongoose.connect(process.env.MONGO_URI_OFFLINE, {useNewUrlParser: true, useUnifiedTopology: true},(err) =>{
    if(err) {
        console.log(`Error while connecting to MongoDB: ${err}`)
    }
}).then(()=> {
    console.log('MongoDB connected....')
})

app.use(cors())
app.use(express.json())

app.use('/', require('./routes/api'))
app.use('/users', require('./routes/users'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started at ${port}`))