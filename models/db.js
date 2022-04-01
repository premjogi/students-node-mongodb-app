const mongooseDb = require('mongoose');

mongooseDb.connect("mongodb://127.0.0.1:27017/StudentDB", {
    useNewUlParams: true,
}, (error)=>{
    if(!error){
        console.log("Connection succeeded...!!!")
    }else{
        console.log("Error in connection : ", error)
    }
});

require('./student.model')