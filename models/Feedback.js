const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    emoticon:{
        type: String,
        required: true
    },
    text:{
        type: String
    },
    date:{
        type: String,
        default: Date.now
    }
    
})
module.export = Feedback = mongoose.model(feedback,FeedbackSchema);