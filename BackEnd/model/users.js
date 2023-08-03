let mongoose = require('mongoose')

let data = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('User', data)