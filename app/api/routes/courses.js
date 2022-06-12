const express = require('express')
const router = express.Router()
const courseModelController = require('../controller/courses')

// Create
router.post('/create',courseModelController.createCourse)
// Read
router.get('/getAllCourses',courseModelController.readAllCourse)
// Read By Id
router.get('/getCousrseById/:id',courseModelController.readCouserId)
// Update By Id
router.put('/updateCourseById/:id',courseModelController.updateCourseById)
// Delete By Id
router.delete('/deleteCourseById/:id',courseModelController.deleteCourseById)

module.exports = router