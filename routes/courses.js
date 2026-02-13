const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let courses = [];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// ADD course
router.post('/', validate(['title', 'duration']), (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    title: req.body.title,
    duration: req.body.duration
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

module.exports = router;
