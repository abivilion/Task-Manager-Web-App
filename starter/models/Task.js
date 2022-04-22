const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'Name Cannot be EMPTY'], // name is REQUIRED
        trim:true,
        maxlength:[20, 'Name can not be more than 20 characters'] // length of the name is 20
    },
    completed:{
        
        type:Boolean,
        default:false, // As default task is incomplete 

    },
})
module.exports = mongoose.model('Task',TaskSchema)