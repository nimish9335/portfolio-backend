# 🚀 Portfolio Backend

> A production-ready backend powering my Full Stack Portfolio CMS.

## 📌 Project Vision

This project is a complete backend for my personal portfolio CMS. Unlike
a static portfolio, all content (Projects, Skills, Blogs, Resume,
Experience, Education, Certificates, Social Links, Contact Messages, and
Dashboard) will be managed through secure REST APIs.

**Only one Admin (me) can manage the content. Visitors can only view the
portfolio.**

------------------------------------------------------------------------

# 🎯 Goals

-   Build a production-ready backend
-   Follow MVC architecture
-   Learn real-world backend engineering
-   Write reusable and scalable code
-   Implement secure authentication
-   Build a placement-ready flagship project

------------------------------------------------------------------------

# 🛠 Tech Stack

## Runtime

-   Node.js

## Framework

-   Express.js

## Database

-   MongoDB Atlas
-   Mongoose

## Authentication

-   JWT
-   HTTP Only Cookies
-   bcryptjs

## Storage

-   Cloudinary
-   Multer

## Email

-   Nodemailer

## Security

-   Helmet
-   CORS
-   Rate Limiter
-   Mongo Sanitize
-   XSS Protection

------------------------------------------------------------------------

# 📂 Folder Structure

``` text
portfolio-backend/

config/
controllers/
middleware/
models/
routes/
services/
validators/
utils/
constants/
helpers/
uploads/
logs/

app.js
server.js
package.json
README.md
```

------------------------------------------------------------------------

# ✨ Features

-   Admin Authentication
-   Projects Management
-   Skills Management
-   Experience Management
-   Education Management
-   Certifications Management
-   Resume Management
-   Blog Management
-   Contact System
-   Visitor Analytics
-   Dashboard APIs
-   Social Links
-   Settings

------------------------------------------------------------------------

# 📅 Development Workflow

Every module follows the same flow.

``` text
Theory
   ↓
Architecture
   ↓
Implementation
   ↓
Testing
   ↓
README Update
   ↓
Git Commit
   ↓
Git Push
```

A module is considered **completed only after all the above steps are
finished.**

------------------------------------------------------------------------

# 📖 Backend Roadmap

## Week 1

-   Day 1 → Project Setup ✅
-   Day 2 → Authentication Foundation ✅
-   Day 3 → Authentication APIs
-   Day 4 → Utilities
-   Day 5 → Validation Layer

## Week 2

-   Day 6 → Projects Module
-   Day 7 → Project Images
-   Day 8 → Skills Module
-   Day 9 → Education Module
-   Day 10 → Experience Module

## Week 3

-   Day 11 → Certifications
-   Day 12 → Testimonials
-   Day 13 → Resume
-   Day 14 → Social Links
-   Day 15 → Settings

## Week 4

-   Day 16 → Blogs
-   Day 17 → Contact
-   Day 18 → Admin Inbox
-   Day 19 → Analytics
-   Day 20 → Dashboard

## Week 5

-   Day 21 → Security
-   Day 22 → Optimization
-   Day 23 → Testing
-   Day 24 → Documentation
-   Day 25 → Deployment

------------------------------------------------------------------------

# ✅ Day 1 (Completed)

## Objective

Create a clean backend architecture before implementing features.

## Completed

-   Repository setup
-   Node.js initialization
-   Express configuration
-   MongoDB connection
-   Folder structure
-   Environment variables
-   Base middleware
-   Health route

## Files

``` text
app.js
server.js
config/db.js
.env
.env.example
.gitignore
package.json
```

## Concepts Learned

-   Express Architecture
-   app.js vs server.js
-   Middleware
-   dotenv
-   MongoDB + Mongoose
-   Clean folder structure

## Interview Questions

-   Why app.js and server.js separately?
-   What is middleware?
-   Why dotenv?
-   Why config folder?
-   Why helmet?
-   Why CORS?

## Notes

Day 1 only focuses on architecture. No business logic was implemented.

### Commit

``` bash
chore: initialize backend architecture and configure Express server
```

Status: ✅ Completed

------------------------------------------------------------------------

# ✅ Day 2 (Completed)

## Objective

Build the complete authentication foundation.

## Completed

-   Installed bcryptjs
-   Installed jsonwebtoken
-   Created roles system
-   Designed User Model
-   Added schema validations
-   Password hashing middleware
-   comparePassword() method
-   generateJWT() method
-   Cookie configuration
-   JWT environment variables

## Files

``` text
models/User.js
constants/roles.js
config/cookie.js
```

## Concepts Learned

-   Authentication vs Authorization
-   JWT
-   Password Hashing
-   Schema Middleware
-   Schema Methods
-   Cookie Authentication
-   Role Based Authentication

## Important Decisions

-   Only one Admin
-   No Register API
-   JWT + HTTP Only Cookies
-   Visitors cannot login

## Interview Questions

-   JWT vs Session?
-   Why bcrypt?
-   Hashing vs Encryption?
-   Why pre("save")?
-   Why schema methods?
-   Why select:false?
-   Why enum?
-   Why HTTP Only Cookies?

## Notes

Authentication APIs will be implemented on Day 3.

### Commit

``` bash
feat(auth): build authentication foundation with user model, JWT and password hashing
```

Status: ✅ Completed

------------------------------------------------------------------------

# ✅ Day 3 (Completed)

## Objective

Implement secure authentication APIs for the portfolio backend using JWT and HTTP Only Cookies.

## Completed

- Admin Seed Script
- Login API
- Logout API
- Current User API
- Authentication Middleware
- Protected Routes
- Cookie Based Authentication
- Postman Testing

## Files

```text
controllers/authController.js
routes/authRoutes.js
middleware/authMiddleware.js
scripts/seedAdmin.js
```

## Concepts Learned

- Authentication Flow
- JWT Verification
- Cookie Authentication
- Protected Routes
- Middleware
- Request Lifecycle
- HTTP Status Codes

## APIs

```text
POST   /api/auth/login

POST   /api/auth/logout

GET    /api/auth/me
```

## Interview Questions

- Why use JWT?
- Why HTTP Only Cookies?
- Why Authentication Middleware?
- Why attach user to req.user?
- Difference between Authentication and Authorization?
- Difference between 401 and 403?

## Notes

The backend now supports secure admin authentication. Only authenticated admins can access protected APIs.

### Commit

```bash
feat(auth): implement authentication APIs with JWT middleware and protected routes
```

Status: ✅ Completed

------------------------------------------------------------------------

# ✅ Day 4 (Completed)

## Objective

Build reusable utilities and services to create a clean, scalable, and production-ready backend architecture.

## Completed

* Async Handler Utility
* Custom API Error Class
* Global Error Handler
* API Response Utility
* Logger Utility
* Cloudinary Service
* Email Service
* Controller Refactoring
* Centralized Error Handling
* Standardized API Responses

## Files

```text
utils/
    asyncHandler.js
    ApiError.js
    ApiResponse.js
    logger.js

middleware/
    errorHandler.js

services/
    cloudinary.js
    email.js
```

## Concepts Learned

* DRY (Don't Repeat Yourself)
* Separation of Concerns
* Utility Layer
* Service Layer
* Global Error Handling
* Express Error Middleware
* Custom Error Classes
* Standard API Responses
* Centralized Logging
* Third-Party Service Integration

## Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ├────────► Utilities
   │             ├── asyncHandler
   │             ├── ApiError
   │             ├── ApiResponse
   │             └── Logger
   │
   ├────────► Services
   │             ├── Cloudinary
   │             └── Email
   │
   ▼
Database
```

## Interview Questions

* What is the difference between a Utility and a Service?
* Why use asyncHandler?
* Why create a custom Error class?
* Why use a Global Error Handler?
* Why standardize API responses?
* Why centralize logging?
* Why configure Cloudinary and Nodemailer separately?
* What is Separation of Concerns?
* What is the DRY principle?

## Notes

Day 4 focused on building the core infrastructure of the backend. Instead of adding new business features, reusable utilities and services were introduced to improve code quality, maintainability, and scalability. These components will be reused throughout future modules such as Projects, Skills, Blogs, Resume, and Contact.

### Commit

```bash
refactor(core): add reusable utilities, services, logger and global error handling
```

Status: ✅ Completed

------------------------------------------------------------------------

# 📈 Progress

* [x] Project Setup
* [x] Authentication Foundation
* [x] Authentication APIs
* [x] Utilities
* [ ] Validation
* [ ] Projects
* [ ] Skills
* [ ] Education
* [ ] Experience
* [ ] Certifications
* [ ] Testimonials
* [ ] Resume
* [ ] Social Links
* [ ] Blogs
* [ ] Contact
* [ ] Analytics
* [ ] Dashboard
* [ ] Security
* [ ] Optimization
* [ ] Testing
* [ ] Deployment

---

## Development Rules

-   Never skip theory before implementation.
-   Complete one day before moving to the next.
-   Keep controllers clean.
-   Follow MVC architecture.
-   Update README after every completed day.
-   Add commit message after every completed day.
-   Never regenerate completed code.

------------------------------------------------------------------------

# 🚀 Future Enhancements

-   Docker
-   Redis
-   Swagger
-   Unit Testing
-   CI/CD
-   AWS S3
-   Queue Jobs
-   WebSockets
-   AI Chat Integration

------------------------------------------------------------------------

# 👨‍💻 Author

**Nimish Patel**

B.Tech \| NIT Raipur

Full Stack MERN Developer

⭐ If you like this project, don't forget to give it a star.
