const mongoose = require('mongoose')

const Question = new mongoose.Schema({
    questionDetail: {
        type: String,
        required: true
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'room'
    }
    ,
    questionStatus:{
        type: Boolean,
        default: true
    },
    date:{
        type: String,
        default: Date.now
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
module.export = Question = mongoose.model('question',FeedbackSchema);