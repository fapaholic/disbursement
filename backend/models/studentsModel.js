const mongoose = require('mongoose')

const Schema = mongoose.Schema
const StudentsSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    payable: {
        type: Number,
        default: 250,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model('User', StudentsSchema)