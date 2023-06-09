const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wordHuntId: {
        type: [ ObjectId ],
    },
    logicalId: {
        type: [ ObjectId ],
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
