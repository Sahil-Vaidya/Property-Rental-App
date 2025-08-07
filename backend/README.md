# Rental Booking App - Backend

## 📚 Project Overview
This backend powers the Rental Booking App, enabling property owners to list rentals, renters to browse & book them, and admins to manage the platform. Built with **Node.js**, **Express**, and **MongoDB**, it features secure **JWT-based authentication**, role-based access control, and clean REST APIs.

---

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs (Password Hashing)
- **CORS Handling**: CORS Middleware
- **Environment Configurations**: dotenv

---

## 📂 Folder Structure
```
backend/
├── controllers/         # Business logic for Auth & Properties
├── middleware/          # Auth token verification middleware
├── models/              # Mongoose data models
├── routes/              # Route definitions (Auth, Property)
├── server.js            # Express app entry point
└── .env                 # Environment Variables
```

---

## 🚀 Setup Instructions
### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install express mongoose dotenv jsonwebtoken bcryptjs cors
```

### 3. Setup Environment Variables (.env)
Create a `.env` file in `backend/` with:
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=yourSecretKey
PORT=5000
```

### 4. Add Dev Script
Update `package.json` Scripts:
```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

### 5. Install nodemon for Dev Mode
```bash
npm install --save-dev nodemon
```

### 6. Run Backend Server
```bash
npm run dev
```
Server will run on **http://localhost:5000**.

---

## 🔗 API Endpoints
| Method | Endpoint               | Access   | Description                        |
|--------|------------------------|----------|------------------------------------|
| POST   | /api/auth/register     | Public   | Register a new user                |
| POST   | /api/auth/login        | Public   | Login and receive JWT token        |
| POST   | /api/properties        | Owner    | Add a new rental property listing  |
| GET    | /api/properties        | Public   | Retrieve all property listings     |

---

## 🧪 Testing Steps
1. **Run Backend** → `npm run dev`
2. **Run Frontend** → `npm run dev` (from frontend/ directory)
3. Use **Register/Login** API from frontend UI.
4. After login, token will be stored in LocalStorage.
5. As Owner, add properties.
6. As Renter, browse available properties.

---

## ⚙️ Additional Notes
- Ensure CORS is enabled between frontend (localhost:5173) and backend (localhost:5000).
- Tokens are passed in Authorization Headers as: `Bearer <token>`.
- Backend is designed to be stateless and scalable with RESTful principles.

---

## 🏁 Backend Ready for Integration
The backend API is cleanly structured for easy integration with frontend and can be extended with features like Bookings, Admin Moderation, etc.