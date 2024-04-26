const express = require('express')
const mongoose = require('mongoose')


const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/static', express.static(__dirname + "/assets"))

app.use('/api/users', require('./routes/users'))


mongoose.connect(process.env.MONGOOSEURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        app.listen(port, () => {
            console.log(`App listen on ${port} port`)
        })
    })

