const mongooseDB = require('mongoose');

var studentSchema = new mongooseDB.Schema({
    fullName : {
        type:String,
        required:'This field is required'
    },
    email : {
        type:String,
        required:'This field is required'
    },
    mobile : {
        type:Number,
        required:'This field is required'
    },
    city : {
        type:String,
        required:'This field is required'
    },
})

mongooseDB.model('Student', studentSchema)