const mongoose = require('mongoose')

const AskSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    room:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'room'
        }
    ],
    text:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    }
    
})
module.export = Ask = mongoose.model(ask,AskSchema);