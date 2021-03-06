const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema( {
    
    user: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        unique : true,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
} );
module.exports = mongoose.model('User',userSchema)