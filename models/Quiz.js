const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    anwser:[
        {
            user: {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            text:{
                type: String
            },
            date:{
                type: String,
                default: Date.now
            }
        }
    ]    
})
module.export = Quiz = mongoose.model(quiz,FeedbackSchema);