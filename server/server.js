const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors({
    origin:["https://task4-itransition-l8bna78xp-7077634gmailcoms-projects.vercel.app"],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth', authRouter)


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSEURI)
        app.listen(port, () => {
            console.log(`App listen on ${port} port`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()