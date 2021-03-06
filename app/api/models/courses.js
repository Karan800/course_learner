const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('courses',coursesSchema)