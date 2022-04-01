const express = require('express');

var router = express.Router();

const mongooseDB = require('mongoose');
const Student = mongooseDB.model('Student');

router.get('/', (req, res) => {
    res.send('student/addOrEdit', {
        viewTitle:'Insert Student'
    })
});

const insertRecord = () => {
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((error, result) => {
        if(!error){
            res.redirect('/student/list')
        }else{
            console.log('Error during insert : ', error)
        }
    });
    
    
}

router.post('/', (req, res) => {
    if(req.body._id === ''){
        insertRecord(req,res)
    }else{
        updateRecord(req,res)
    }
})

const updateRecord = (req, res) => {
    Student.findOneAndUpdate({_id:req.body.id}, req.body, {new:true}, (error, result)=>{
        if(!error){
            res.redirect('/student/list')
        }else{
            console.log('Error during update : ', error)
        }
    } )
}

// Fetching all records
router.get('/list', (req, res)=>{
    Student.find((error, docs)=>{
        if(!error){
            res.render('student/list', {
                list:docs
            })
        }else{
            console.log('Error in retrieval : ', error)
        }
    })
})

// Update
router.get('/:id', (req, res)=>{
    Student.findById(req.params.id, (error, doc)=>{
        if(!error){
            res.render("student/addOrEdit", {
                viewTitle:"Update Student",
                student: doc
            })
            console.log("doc :: ", doc)
        }
    })
})

// Delete
router.get('delete/:id', (req, res) => {
    Student.findByIdAndRemove(req.params.id, (error, doc)=>{
        if(!error){
            res.redirect('student/list')
        }else{
            console.log('Error in deletion : ', error)
        }
    })
})