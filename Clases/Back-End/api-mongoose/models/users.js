const mongoose = require('mongoose');

const useSchema = mongoose.schema({
    user: {
        type: String,
        required: true,
        min: 5,
        max: 255,
        unique: true
    },
    name: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 1024,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    date: {
        type: Date,
        Default: Date.now
    }
})

module.exports = mongoose.model('user',useSchema);