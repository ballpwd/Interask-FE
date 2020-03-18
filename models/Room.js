const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'account'
    },
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    roomName:{
        type: String,
        required: true
    },
    askStatus:{
        type: Boolean,
        default: true
    },
    feedbackStatus:{
        type: Boolean,
        default: false
    },
    quizStatus:{
        type: Boolean,
        default: false
    },
    ask:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'ask'
        }
    ],
    feedback:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'feedback'
        }
    ],
    quiz:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'quiz'
        }
    ],
})
module.export = Room = mongoose.model(room,roomSchema);