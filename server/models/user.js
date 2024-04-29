const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lastLogin: {
        type: String,
        required: false
    },
    password:{
        type:String,
        required:true
    },
    status: {
        type: String,
        required: false
    },

})
module.exports = mongoose.model('User', userSchema)