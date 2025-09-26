# 🛒 Login Backend API #**(on-going)**

A powerful and modular backend-only Login REST API built with **Node.js**, **Express.js**, and **MongoDB**. tested using **Postman**.

---

## 📘 Overview

This project is the server-side backend API for an Login platform. It is built with best practices using MVC architecture and supports:

- User Registration & Login with JWT Authentication
- Role-based access (Admin vs. Customer)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + Mongoose
- **JWT** (JSON Web Tokens)
- **bcryptjs**
- **dotenv**
- **joi** (Server Side Validation)

---

## 📁 Folder Structure

ecommerce-backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── validation/
├── .env
├── server.js
└── package.json

🔗 API Routes Overview
| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/auth/register` | Register a new user    |
| POST   | `/api/auth/login`    | Login with credentials |