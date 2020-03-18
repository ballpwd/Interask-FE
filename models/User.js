const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName:{
        type: String,
        required: true
    },
    room:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'room'
        }
    ]
  
})
module.export = User = mongoose.model(user,UserSchema);