const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let students = [];

// GET all students
router.get('/', (req, res) => {
  res.json(students);
});

// ADD student
router.post('/', validate(['name', 'email']), (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    email: req.body.email
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

module.exports = router;
