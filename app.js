const express = require('express');
const app = express();

app.use(express.json());

// Import Routes
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const enrollmentRoutes = require('./routes/enrollments');
const instructorRoutes = require('./routes/instructors');

// Use Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollments', enrollmentRoutes);
app.use('/instructors', instructorRoutes);

// Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
