const courseModel = require('../models/courses')


// Create
const createCourse = (req,res,next) => {
    let {title,description} = req.body
    courseModel.create({
        title,
        description
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"course"
        })
    })
}

// Read
const readAllCourse = (req,res,next) => {
    courseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the courses",
            data:{
                todos: result
            }
        })
    })
} 

// Read By Id
const readCouserId = (req,res,next) => {
    courseModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Courses By ID",
            data:{
                todo: result
            }
        })
    })
} 


// Update By Id
const updateCourseById = (req,res,next) => {
    courseModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated todo By ID",
            data:{
                todo: result
            }
        })
    })
} 

// Delete Movie By Id
const deleteCourseById = (req,res,next) => {
    courseModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted Course By ID",
            data:{
                todo: result
            }
        })
    })
} 

module.exports = {createCourse, readAllCourse, readCouserId, updateCourseById, deleteCourseById}