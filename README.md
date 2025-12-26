# 📋 Project Management API

A full-stack backend REST API built with Node.js, Express. js, and MongoDB for project management applications.  This project features comprehensive user authentication, email verification, and secure token-based authorization using JWT. 

## 🚀 Features

- **User Authentication**
  - User registration with email verification
  - Login/Logout functionality
  - JWT-based access and refresh tokens
  - Password hashing with bcrypt

- **Password Management**
  - Forgot password with email reset link
  - Change password (authenticated users)
  - Secure password reset flow

- **Email Services**
  - Email verification on registration
  - Resend email verification
  - Password reset emails
  - Powered by Nodemailer & Mailgen

- **Security**
  - CORS configuration
  - Cookie-based token storage
  - Input validation with express-validator
  - Global error handling middleware

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js v5** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **JWT** | Authentication tokens |
| **bcrypt** | Password hashing |
| **Nodemailer** | Email service |
| **Mailgen** | Email templates |
| **express-validator** | Request validation |

## 📁 Project Structure

```
Project-Management/
├── public/                 # Static files
├── src/
│   ├── controllers/        # Route controllers
│   │   ├── auth.controllers. js
│   │   └── healthcheck.controllers.js
│   ├── db/                 # Database configuration
│   ├── middlewares/        # Custom middlewares
│   │   ├── auth.middleware.js
│   │   └── validator.middleware.js
│   ├── model/              # Mongoose models
│   │   └── user.models.js
│   ├── routes/             # API routes
│   │   ├── auth.routes.js
│   │   └── healthcheck.routes.js
│   ├── utils/              # Utility functions
│   ├── validators/         # Request validators
│   ├── app.js              # Express app setup
│   └── index.js            # Entry point
├── .gitignore
├── . prettierrc
├── . prettierignore
├── package. json
└── README.md
```

## 🔗 API Endpoints

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/healthcheck` | Check API health status |

### Authentication (Public Routes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | User login |
| GET | `/api/v1/auth/verify-email/:verificationToken` | Verify email address |
| POST | `/api/v1/auth/refresh-token` | Refresh access token |
| POST | `/api/v1/auth/forgot-password` | Request password reset |
| POST | `/api/v1/auth/reset-password/:resetToken` | Reset password |

### Authentication (Protected Routes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/logout` | User logout |
| POST | `/api/v1/auth/current-user` | Get current user info |
| POST | `/api/v1/auth/change-password` | Change password |
| POST | `/api/v1/auth/resend-email-verification` | Resend verification email |

## ⚙️ Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local or Atlas)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/LAKSHYA2517/Project-Management.git
   cd Project-Management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory: 
   ```env
   # Server
   PORT=8000
   CORS_ORIGIN=http://localhost:5173
   
   # Database
   MONGODB_URI=mongodb://localhost:27017/project-management
   
   # JWT
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=10d
   
   # Email (Nodemailer)
   SMTP_HOST=smtp.gmail. com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Run the application**
   ```bash
   # Development mode with hot reload
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the API**
   ```
   http://localhost:8000
   ```

## 🧪 API Usage Examples

### Register User
```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email":  "john@example.com",
    "password": "SecurePass123",
    "fullName": "John Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123"
  }'
```

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with nodemon (hot reload) |
| `npm start` | Start server in production mode |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Lakshya Asnani**
- GitHub: [@LAKSHYA2517](https://github.com/LAKSHYA2517)

## 📄 License

This project is licensed under the ISC License.

---

⭐ If you found this project helpful, please consider giving it a star! 
