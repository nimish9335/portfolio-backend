# 🚀 Portfolio Backend CMS

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Cloudinary-Media%20Storage-3448C5?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<p align="center">
  <b>A Production-Ready Portfolio Backend CMS built with Node.js, Express.js, and MongoDB.</b>
</p>

<p align="center">
This backend powers a complete developer portfolio by providing secure authentication, portfolio management, blog management, contact handling, resume management, visitor analytics, and an admin dashboard through a scalable REST API.
</p>

---

## 📌 Project Overview

Portfolio Backend CMS is a fully featured REST API designed to manage every aspect of a personal portfolio website from a centralized admin panel.

Instead of hardcoding portfolio content into the frontend, this backend allows administrators to dynamically manage projects, skills, education, experience, certifications, blogs, testimonials, resumes, contact messages, and website settings.

The application follows modern backend development practices including secure authentication, modular architecture, validation, centralized error handling, file uploads, analytics tracking, and production-ready security middleware.

---

## 🎯 Objectives

The primary goals of this project are:

- Build a scalable REST API using Express.js
- Follow MVC Architecture for clean code organization
- Implement secure JWT Authentication
- Create reusable CRUD APIs for portfolio management
- Support Cloudinary file uploads
- Track visitor analytics
- Build an admin dashboard backend
- Apply production-grade security practices
- Optimize database queries for performance
- Prepare the backend for deployment

---

## ⭐ Key Highlights

- Secure JWT Authentication
- Role-Based Authorization
- Portfolio Content Management
- Blog Management System
- Resume Upload & Management
- Contact & Inbox Management
- Visitor Analytics Dashboard
- Cloudinary Media Storage
- Global Error Handling
- Input Validation
- Security Middleware
- Rate Limiting
- Modular MVC Architecture
- Production Ready REST APIs

# ✨ Features

The Portfolio Backend CMS provides a complete set of REST APIs to manage every section of a developer portfolio website.

---

## 🔐 Authentication & Authorization

- JWT Authentication
- Secure HTTP-only Cookies
- Password Hashing with bcrypt
- Login & Logout
- Protected Routes
- Role-Based Access Control (Admin/User)
- Authentication Middleware

---

## 💼 Portfolio Management

Manage every section of the portfolio dynamically without modifying frontend code.

### Projects

- Create Project
- Update Project
- Delete Project
- Get All Projects
- Get Featured Projects

### Skills

- Add Skills
- Update Skills
- Delete Skills
- Skill Categories

### Education

- Academic Records
- Degree Details
- Institution Information

### Experience

- Company Details
- Job Position
- Employment Timeline

### Certifications

- Certificate Management
- Credential Links
- Issuing Organization

### Testimonials

- Client Testimonials
- Ratings
- Profile Images

---

## 📝 Blog Management

Complete blogging system including:

- Create Blog
- Update Blog
- Delete Blog
- Publish / Draft Status
- Slug-Based URLs
- Category Support
- Tags
- Featured Images
- Reading Time
- View Counter

---

## 📄 Resume Management

- Resume Upload
- Resume Update
- Resume Download
- Cloudinary Storage
- Previous Resume Replacement

---

## 📞 Contact Management

- Contact Form API
- Store Messages
- Mark as Read
- Reply Status
- Delete Messages

---

## 📥 Inbox Management

Admin APIs for:

- Dashboard Overview
- Recent Messages
- Mark Single Read
- Mark All Read
- Bulk Delete
- Message Statistics

---

## 📊 Analytics Dashboard

Track website visitors including:

- Total Visitors
- Page Views
- Browser Statistics
- Device Statistics
- Operating System Analytics
- Country Analytics
- Daily Visitor Analytics

---

## ⚙️ Website Settings

Manage:

- Website Title
- Hero Section
- About Information
- Contact Details
- SEO Settings
- Social Media Links

---

## ☁️ Cloudinary Integration

- Image Upload
- Resume Upload
- Automatic File Replacement
- Secure Media URLs

---

## 📧 Email Support

- Contact Notifications
- SMTP Integration
- Nodemailer Support

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose ODM

## Authentication

- JSON Web Token (JWT)
- bcryptjs
- HTTP-only Cookies

## File Storage

- Cloudinary
- Multer

## Security

- Helmet
- CORS
- Express Rate Limit
- Mongo Sanitize
- XSS Protection
- Cookie Parser

## Validation

- Express Validator

## Utilities

- dotenv
- Nodemailer
- Slugify
- Morgan (if used)
- Express UserAgent

## Development Tools

- Postman
- Git
- GitHub
- VS Code

# 📂 Project Structure

The project follows a clean and modular MVC (Model-View-Controller) architecture to ensure scalability, maintainability, and separation of concerns.

```text
portfolio-backend/
│
├── config/                 # Database, Cloudinary, Security & CORS configuration
├── controllers/            # Business logic for all modules
├── middleware/             # Authentication, Validation & Error handling
├── models/                 # Mongoose database models
├── routes/                 # REST API routes
├── scripts/                # Utility scripts (Admin Seeder)
├── utils/                  # Helper functions
├── validators/             # Request validation rules
│
├── app.js                  # Express application configuration
├── server.js               # Application entry point
├── package.json
├── README.md
└── .env.example
```

---

# 🏗️ Architecture

The backend follows a layered architecture to keep responsibilities well separated.

```text
                        Client Application
                    (React / Next.js / Mobile)
                               │
                               │
                        HTTP Requests
                               │
                               ▼
                    Express Application
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
 Security Middleware     Authentication        Validation
                               │
                               ▼
                           API Routes
                               │
                               ▼
                          Controllers
                               │
                               ▼
                        Business Logic
                               │
                               ▼
                          Mongoose ODM
                               │
                               ▼
                         MongoDB Atlas
                               │
             ┌─────────────────┴──────────────────┐
             │                                    │
             ▼                                    ▼
      Cloudinary Storage                 Email Service
```

---

# 🔄 Request Flow

Every request passes through multiple layers before reaching the database.

```text
Client Request
      │
      ▼
Express Server
      │
      ▼
Security Middleware
      │
      ▼
Authentication Middleware
      │
      ▼
Validation Middleware
      │
      ▼
Route Handler
      │
      ▼
Controller
      │
      ▼
Database
      │
      ▼
JSON Response
```

---

# 🚀 Getting Started

Follow the steps below to run the project locally.

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/portfolio-backend.git

cd portfolio-backend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create Environment File

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=

JWT_SECRET=
JWT_EXPIRE=

COOKIE_EXPIRE=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=

FRONTEND_URL=

NODE_ENV=development
```

---

## 4️⃣ Seed Admin Account

```bash
npm run seed
```

---

## 5️⃣ Run Development Server

```bash
npm run dev
```

---

## 6️⃣ Production Server

```bash
npm start
```

---

## 📌 Server URL

```text
http://localhost:5000
```

---

# 📦 Dependencies

Major packages used in this project:

- express
- mongoose
- jsonwebtoken
- bcryptjs
- cloudinary
- multer
- express-validator
- helmet
- cors
- cookie-parser
- express-rate-limit
- express-mongo-sanitize
- xss-clean
- compression
- dotenv
- nodemailer

# 📚 API Documentation

The backend exposes a RESTful API for managing every aspect of the portfolio website.

## 🔗 Base URL

### Development

```text
http://localhost:5000/api
```

### Production

```text
https://your-domain.com/api
```

---

# 🔐 Authentication

Most admin endpoints require authentication.

Include the JWT token (or HTTP-only cookie depending on your implementation) before accessing protected APIs.

---

# 📋 API Modules

| Module | Description | Protected |
|---------|-------------|-----------|
| Authentication | Login, Logout, Current User | Partial |
| Projects | Portfolio Projects Management | Admin for CRUD |
| Skills | Skills Management | Admin for CRUD |
| Education | Education Management | Admin for CRUD |
| Experience | Experience Management | Admin for CRUD |
| Certifications | Certification Management | Admin for CRUD |
| Testimonials | Testimonial Management | Admin for CRUD |
| Resume | Resume Upload & Management | Admin |
| Social Links | Social Media Links | Admin for CRUD |
| Settings | Website Settings | Admin |
| Blogs | Blog Management | Admin for CRUD |
| Contact | Contact Form | Public Submit |
| Inbox | Message Management | Admin |
| Analytics | Visitor Analytics | Admin |
| Dashboard | Dashboard Statistics | Admin |

---

# 📌 API Summary

| Method | Purpose |
|----------|----------|
| GET | Retrieve Resources |
| POST | Create Resources |
| PUT | Update Resources |
| DELETE | Delete Resources |

---

# 📖 Endpoint Overview

## Authentication

| Method | Endpoint |
|----------|-----------|
| POST | `/auth/login` |
| POST | `/auth/logout` |
| GET | `/auth/me` |

---

## Projects

| Method | Endpoint |
|----------|-----------|
| GET | `/projects` |
| GET | `/projects/:id` |
| POST | `/projects` |
| PUT | `/projects/:id` |
| DELETE | `/projects/:id` |

---

## Skills

| Method | Endpoint |
|----------|-----------|
| GET | `/skills` |
| POST | `/skills` |
| PUT | `/skills/:id` |
| DELETE | `/skills/:id` |

---

## Education

| Method | Endpoint |
|----------|-----------|
| GET | `/education` |
| POST | `/education` |
| PUT | `/education/:id` |
| DELETE | `/education/:id` |

---

## Experience

| Method | Endpoint |
|----------|-----------|
| GET | `/experience` |
| POST | `/experience` |
| PUT | `/experience/:id` |
| DELETE | `/experience/:id` |

---

## Certifications

| Method | Endpoint |
|----------|-----------|
| GET | `/certifications` |
| POST | `/certifications` |
| PUT | `/certifications/:id` |
| DELETE | `/certifications/:id` |

---

## Testimonials

| Method | Endpoint |
|----------|-----------|
| GET | `/testimonials` |
| POST | `/testimonials` |
| PUT | `/testimonials/:id` |
| DELETE | `/testimonials/:id` |

---

## Resume

| Method | Endpoint |
|----------|-----------|
| GET | `/resume` |
| POST | `/resume` |
| DELETE | `/resume` |

---

## Blogs

| Method | Endpoint |
|----------|-----------|
| GET | `/blogs` |
| GET | `/blogs/:slug` |
| GET | `/blogs/admin/all` |
| POST | `/blogs` |
| PUT | `/blogs/:id` |
| DELETE | `/blogs/:id` |

---

## Contact

| Method | Endpoint |
|----------|-----------|
| POST | `/contact` |
| GET | `/contact` |
| GET | `/contact/:id` |
| PUT | `/contact/:id` |
| DELETE | `/contact/:id` |

---

## Inbox

| Method | Endpoint |
|----------|-----------|
| GET | `/inbox/dashboard` |
| GET | `/inbox/recent` |
| PUT | `/inbox/read/:id` |
| PUT | `/inbox/read-all` |
| DELETE | `/inbox/:id` |

---

## Analytics

| Method | Endpoint |
|----------|-----------|
| GET | `/analytics/overview` |
| GET | `/analytics/daily` |
| GET | `/analytics/browser` |
| GET | `/analytics/device` |
| GET | `/analytics/os` |
| GET | `/analytics/country` |
| GET | `/analytics/page` |

---

## Dashboard

| Method | Endpoint |
|----------|-----------|
| GET | `/dashboard` |


# 🔧 Environment Variables

Create a `.env` file in the project root and configure the following variables:

| Variable | Description |
|-----------|-------------|
| `PORT` | Server Port |
| `NODE_ENV` | Application Environment |
| `MONGO_URI` | MongoDB Atlas Connection String |
| `JWT_SECRET` | Secret Key for JWT Authentication |
| `JWT_EXPIRE` | JWT Expiration Time |
| `COOKIE_EXPIRE` | Cookie Expiration Time |
| `FRONTEND_URL` | Frontend Application URL |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary Cloud Name |
| `CLOUDINARY_API_KEY` | Cloudinary API Key |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret |
| `EMAIL_HOST` | SMTP Host |
| `EMAIL_PORT` | SMTP Port |
| `EMAIL_USER` | SMTP Email |
| `EMAIL_PASS` | SMTP Password |

---

# 🔒 Security Features

This project follows modern backend security practices to protect APIs and user data.

### Authentication

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Role-Based Authorization

### API Security

- Helmet Security Headers
- CORS Configuration
- Rate Limiting
- MongoDB Query Sanitization
- XSS Protection
- Input Validation
- Secure Cookie Handling

### Password Security

- bcrypt Password Hashing
- Salted Password Storage

### Request Protection

- Global Error Handler
- Centralized Validation
- Invalid Route Handling
- Secure Environment Variables

---

# ⚡ Performance Optimizations

Several optimizations have been implemented to improve backend performance and scalability.

### Database Optimization

- Optimized Mongoose Queries
- `lean()` for Read-only Operations
- Indexed Database Fields
- Efficient Query Design

### Backend Optimization

- Modular MVC Architecture
- Reusable Controllers
- Centralized Middleware
- Optimized Route Structure
- Async Error Handling

### Media Optimization

- Cloudinary Storage
- Automatic File Replacement
- Optimized Image URLs

### Production Readiness

- Environment-Based Configuration
- Security Middleware
- Structured Logging
- Clean Error Responses

---

# 🚨 Error Handling

A centralized error handling middleware is used throughout the application.

### Standard Error Response

```json
{
    "success": false,
    "message": "Error message"
}
```

### Common HTTP Status Codes

| Status Code | Description |
|--------------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# 📊 Logging

The backend includes a centralized logging utility to record:

- Server Startup
- Database Connection
- Error Logs
- Important Application Events

This helps simplify debugging and monitoring in development and production environments.

# 🚀 Deployment

This backend is production-ready and can be deployed on any Node.js hosting platform.

## Recommended Platforms

- Render
- Railway
- DigitalOcean
- AWS EC2
- VPS
- Heroku (if applicable)

---

## Production Checklist

Before deployment, ensure the following:

- Configure all environment variables
- Use MongoDB Atlas
- Configure Cloudinary credentials
- Configure SMTP credentials
- Set `NODE_ENV=production`
- Update `FRONTEND_URL`
- Enable HTTPS
- Verify CORS configuration
- Test all APIs
- Verify authentication
- Verify file uploads

---

# 🧪 Testing

The project has been thoroughly tested during development.

### Authentication

- Login
- Logout
- Current User

### Portfolio Modules

- Projects CRUD
- Skills CRUD
- Education CRUD
- Experience CRUD
- Certifications CRUD
- Testimonials CRUD
- Resume Management
- Social Links
- Website Settings

### Blog Module

- Blog CRUD
- Slug Routing
- Draft & Published Blogs
- View Counter

### Contact & Inbox

- Contact Form
- Inbox Management
- Reply Status
- Message Statistics

### Analytics

- Dashboard Overview
- Daily Analytics
- Browser Analytics
- Device Analytics
- Operating System Analytics
- Country Analytics
- Page Analytics

### Security Testing

- Protected Routes
- JWT Authentication
- Authorization
- Validation Middleware
- Rate Limiting

---

# 📈 Project Statistics

| Category | Count |
|-----------|------:|
| Modules | 15+ |
| REST APIs | 60+ |
| Controllers | 15+ |
| Models | 13+ |
| Routes | 15+ |
| Middleware | Multiple |
| Security Features | 8+ |
| Development Duration | 24 Days |

---

# 🔮 Future Improvements

The following enhancements can be added in future versions:

- Swagger / OpenAPI Documentation
- Docker Support
- Redis Caching
- API Versioning
- Unit Testing (Jest)
- Integration Testing (Supertest)
- CI/CD Pipeline using GitHub Actions
- WebSocket Notifications
- Two-Factor Authentication (2FA)
- Refresh Token Authentication
- Audit Logs
- Multi-language Support

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve the project:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

Please ensure that new code follows the existing project structure and coding conventions.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it in accordance with the license terms.

---

# 👨‍💻 Author

**Nimish Patel**

- 🎓 B.Tech, NIT Raipur
- 💻 Full Stack MERN Developer
- 🧠 Competitive Programmer

### Connect with Me

- GitHub: https://github.com/nimish9335
- LinkedIn: *(Add your LinkedIn profile URL here)*
- Portfolio: *(Add your deployed portfolio URL here)*

---

# ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork the repository
- 💡 Share your feedback
- 🛠️ Report issues or suggest improvements

Your support helps improve the project and motivates future development.

---

<p align="center">
  <b>Built with ❤️ using Node.js, Express.js & MongoDB</b>
</p>