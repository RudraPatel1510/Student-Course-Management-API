# 🎓 Student Course Management REST API

A RESTful backend application built using **Node.js** and **Express.js** that manages students, courses, instructors, and enrollments.

This project demonstrates modular API development, middleware validation, and global error handling.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* JavaScript (ES6)
* REST API Architecture
* Middleware

---

## 📂 Project Structure

student-course-management-api
│── app.js
│── package.json
│── README.md
│
├── routes/
│   ├── students.js
│   ├── courses.js
│   ├── enrollments.js
│   └── instructors.js
│
└── middleware/
├── validate.js
└── errorHandler.js

---

## 🔌 Installation & Setup

1️⃣ Clone the repository

git clone [https://github.com/RudraPatel1510/Student-Course-Management-API.git](https://github.com/RudraPatel1510/Student-Course-Management-API.git)

2️⃣ Navigate into the project folder

cd student-course-management-api

3️⃣ Install dependencies

npm install

4️⃣ Run the server

node app.js

Server will run at:

[http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoints

### 👨‍🎓 Students

GET /students
Returns all students

POST /students
Adds a new student

Sample Request:
{
"name": "Rudra",
"email": "[rudra@gmail.com](mailto:rudra@gmail.com)"
}

---

### 📚 Courses

GET /courses
Returns all courses

POST /courses
Adds a new course

Sample Request:
{
"title": "Full Stack Development",
"duration": "3 Months"
}

---

### 🧑‍🏫 Instructors

GET /instructors
Returns all instructors

POST /instructors
Adds a new instructor

Sample Request:
{
"name": "Rudra",
"specialization": "Backend Development"
}

---

### 📝 Enrollments

GET /enrollments
Returns all enrollments

POST /enrollments
Enrolls a student into a course

Sample Request:
{
"studentId": 1,
"courseId": 1
}

---

## ✅ Features Implemented

✔ RESTful API structure
✔ Modular route handling
✔ JSON parsing middleware
✔ Custom validation middleware
✔ Global error handling middleware
✔ Proper HTTP status codes (200, 201, 400, 500)
✔ Clean folder structure

---

## ⚠ Middleware Validation

If required fields are missing, API returns:

{
"message": "fieldName is required"
}

Example:
If email is missing while adding student:

{
"message": "email is required"
}

---

## 🚨 Error Handling

Global error handler middleware catches server errors and returns:

{
"message": "Internal Server Error",
"error": "Error details"
}

---

## 🎯 Purpose of the Project

This project was developed to demonstrate:

* Backend API development
* Middleware implementation
* Modular routing
* Server-side validation
* Error handling

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Rudra Patel

