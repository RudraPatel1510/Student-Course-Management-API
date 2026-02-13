const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let enrollments = [];

// GET all enrollments
router.get('/', (req, res) => {
  res.json(enrollments);
});

// ENROLL student
router.post('/', validate(['studentId', 'courseId']), (req, res) => {
  const newEnrollment = {
    id: enrollments.length + 1,
    studentId: req.body.studentId,
    courseId: req.body.courseId,
    date: new Date()
  };

  enrollments.push(newEnrollment);
  res.status(201).json(newEnrollment);
});

module.exports = router;
