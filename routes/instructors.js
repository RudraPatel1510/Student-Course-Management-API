const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');

let instructors = [];

// GET all instructors
router.get('/', (req, res) => {
  res.json(instructors);
});

// ADD instructor
router.post('/', validate(['name', 'specialization']), (req, res) => {
  const newInstructor = {
    id: instructors.length + 1,
    name: req.body.name,
    specialization: req.body.specialization
  };

  instructors.push(newInstructor);
  res.status(201).json(newInstructor);
});

module.exports = router;
