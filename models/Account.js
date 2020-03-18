const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    accountName:{
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
module.export = Account = mongoose.model(account,AccountSchema);