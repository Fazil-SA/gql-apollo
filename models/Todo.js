const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: String,
    date: Date
}, {timestamps:true})

const Todo = mongoose.model('todo', todoSchema)
module.exports = Todo