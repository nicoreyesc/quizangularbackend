const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    topic: String,
    q: String,
    question: String,
    options: Array,
    answer: Array
},  {
        timestamps:true,
        versionKey:false
    
})

module.exports = mongoose.model('Question', QuestionSchema)