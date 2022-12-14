const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    assign : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    deadLine: {
        type: Date,
        required: false
    },
    status: {
        type: Boolean,
        default: 0,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('ToDo', todoSchema)