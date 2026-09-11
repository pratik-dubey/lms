# 🎓 Learning Management System (LMS)

A full-stack MERN-based Learning Management System (LMS) designed to provide a complete online learning experience for students and instructors. The platform allows users to explore courses, purchase premium content, watch lectures, and track learning progress through a modern and responsive interface.

The project focuses on building a scalable e-learning platform with secure authentication, payment integration, course management, and a smooth user experience.

---

# ✨ Features

## Student Features

- User Authentication (Login/Register)
- Browse and Search Courses
- Purchase Premium Courses
- Secure Online Payment Integration
- Access Video Lectures
- Track Course Progress
- Responsive Student Dashboard
- Profile Management

## Admin/Instructor Features

- Create and Manage Courses
- Upload Course Videos and Materials
- Edit/Delete Courses
- Manage Students and Enrollments
- Monitor Payments
- Admin Dashboard

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Redux Toolkit / Context API
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication and Security

- JWT Authentication
- bcrypt.js Password Hashing
- Protected Routes

## Payment Integration

- Razorpay / Stripe

## Cloud and Storage

- Cloudinary
- Multer

---

# 🚀 Key Highlights

- Full-stack MERN application
- Secure JWT-based authentication system
- Real-time course access after payment verification
- Modern and fully responsive UI
- Role-based access control for students and admins
- RESTful API architecture
- Cloud-based media storage support
- Optimized backend routing and API handling

---

# 💳 Payment Integration

The platform includes secure online payment functionality for purchasing premium courses.

### Payment Flow

1. User selects a premium course
2. Payment order is created
3. User completes the secure transaction
4. Payment is verified
5. Course access is granted

---

# 🔐 Authentication System

- Secure user registration and login
- Password hashing using bcrypt.js
- JWT token-based authentication
- Protected routes for authorized users only

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/pratik-dubey/lms.git
cd lms
```

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

Open another terminal and run:

```bash
cd backend
npm install
```

---

# ▶️ Run Project

## Start Backend

Inside the `backend` folder, run the command specified in its `package.json`, for example:

```bash
npm run server
```

## Start Frontend

Inside the `frontend` folder, run:

```bash
npm start
```

---

# 🔑 Environment Variables

Create separate `.env` files inside the `backend` and `frontend` folders.

Do not upload actual `.env` files or secret credentials to GitHub.

Example backend environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET=your_secret
RAZORPAY_KEY=your_key
RAZORPAY_SECRET=your_secret
```

Use the actual environment variable names required by your project.

---

# 🛡️ Security Features

- Password Hashing
- JWT Authentication
- Protected APIs
- Secure Payment Verification
- Environment Variable Protection

---


# 👨‍💻 Author

Developed by Pratik Kumar Dubey 