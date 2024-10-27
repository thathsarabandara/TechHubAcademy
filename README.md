# 🌐 **TechHub Academy**  
An all-in-one online learning platform for students and teachers to connect, learn, and grow! 📚💻

---

## 🚀 **Overview**
**TechHub Academy** is designed to make online learning intuitive and accessible. It allows **teachers** to create and share courses, while **students** can enroll, watch video lectures, take quizzes, and track their progress.

---

## 🛠️ **Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: React
- **Libraries**: Axios, JWT, and more

---

## ✨ **Features**
- 👩‍🏫 **Teachers** can:
  - Create courses with video lectures, quizzes, and assignments.
  - Track student progress and performance.
- 👨‍🎓 **Students** can:
  - Enroll in courses, watch lectures, and complete quizzes.
  - Receive feedback and track their progress in real time.
- 🛡️ **Authentication & Authorization** using JWT for secure sessions.
- 🎨 **Responsive UI** built with React for a seamless experience on all devices.

---

## 📦 **Installation**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/techhub-academy.git
   cd techhub-academy

2. **Install Dependencies**:
   ```bash
   npm install

3. **Set Up Environment Variables**:
   - Create a .env file based on the .env.example
   - Configure MongoDB connection, JWT secret, etc.

4. **Install Dependencies**:
   ```bash
   npm start

## 📊 Database Schema

### User Collection:
- **Fields:** name, email, password, role (student/teacher/admin)

### Course Collection:
- **Fields:** title, description, teacher, lessons

### Lesson Collection:
- **Fields:** course_id, title, content, video_url

## 🔑 API Documentation

| Endpoint                | Method | Description                            |
|-------------------------|--------|----------------------------------------|
| /api/register           | POST   | Register a new user                   |
| /api/login              | POST   | Login and get JWT                     |
| /api/courses            | GET    | List all available courses             |
| /api/courses/:id       | GET    | Get details of a course               |
| /api/courses/create     | POST   | Create a new course (teacher only)    |

## 🎨 UI/UX Design

- **Frontend Framework:** React
- **Routing:** react-router-dom
- **Icons:** react-icons for a modern and intuitive design
- **Responsive Layouts** for optimal viewing on any device

## 🛠️ Contributing

We welcome contributions! 🙌 Please follow these steps:

1. Fork the repo 🍴
2. Create a new branch: `git checkout -b feature-branch-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a Pull Request 🔄

## 📋 License

MIT License © 2024 TechHub Academy

## 📬 Contact

For any queries or support, reach out to us at 📧 thathsaraarumapperuma@gmail.com



