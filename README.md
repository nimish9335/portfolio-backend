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

# ✅ Day 5 (Completed)

## Objective

Build a centralized validation layer to validate incoming requests before they reach the controllers, ensuring clean, secure, and maintainable APIs.

## Completed

- Installed Express Validator
- Created Validation Folder Structure
- Built Global Validation Middleware
- Created Common Validators
- Created Authentication Validator
- Created Project Validator
- Added Reusable ObjectId Validation
- Integrated Validation with Authentication Routes
- Improved API Error Handling
- Standardized Validation Error Responses
- Refactored Authentication Controller

## Files

```text
validators/
    authValidator.js
    commonValidator.js
    projectValidator.js

middleware/
    validate.js

utils/
    ApiError.js

middleware/
    errorHandler.js

routes/
    authRoutes.js

controllers/
    authController.js
```

## Concepts Learned

- Express Validator
- Request Validation
- Middleware Chaining
- Validation Pipeline
- Custom Validators
- ObjectId Validation
- Route-Level Validation
- Global Validation Middleware
- Standardized Error Handling
- Separation of Concerns

## Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Validation Rules
   │
   ▼
Validate Middleware
   │
   ├────────► Validation Error
   │               │
   │               ▼
   │        Global Error Handler
   │
   ▼
Controller
   │
   ▼
Database
```

## Validation Flow

```text
Incoming Request
        │
        ▼
Validation Rules
        │
        ▼
validate.js
        │
 ┌──────┴────────┐
 │               │
 ▼               ▼
Validation     Controller
Error
 │
 ▼
Global Error Handler
 │
 ▼
400 Response
```

## Interview Questions

- What is request validation?
- Why should validation happen before controllers?
- What is express-validator?
- Difference between validation and sanitization?
- What is middleware chaining?
- Why use reusable validators?
- What is `.bail()` in express-validator?
- Why validate MongoDB ObjectIds?
- Why should controllers contain only business logic?
- What is the difference between schema validation and request validation?

## Notes

Day 5 focused on building a reusable validation layer using **express-validator**. Validation logic was separated from controllers and moved into dedicated validator files, making the application more modular and maintainable. A centralized validation middleware was introduced to provide consistent error handling, reusable validation rules were created for authentication and future project APIs, and the authentication controller was refactored to contain only business logic.

### Commit

```bash
feat(validation): implement centralized validation layer with reusable validators and middleware
```

Status: ✅ Completed

------------------------------------------------------------------------

# ✅ Day 6 (Completed)

## Objective

Build the complete Projects module by implementing a production-ready CRUD API with authentication, validation, reusable architecture, and MongoDB integration.

## Completed

- Designed Project Schema
- Created Project Model
- Built Create Project API
- Built Get All Projects API
- Built Get Project By ID API
- Built Update Project API
- Built Delete Project API
- Protected Admin Routes
- Integrated Request Validation
- Added ObjectId Validation
- Added Project Sorting
- Implemented Published Projects Filter
- Optimized Read APIs using `lean()`
- Completed Postman Testing

## Files

```text
models/
    Project.js

controllers/
    projectController.js

routes/
    projectRoutes.js

validators/
    projectValidator.js
    commonValidator.js

app.js
```

## Concepts Learned

- CRUD Operations
- REST API Design
- Mongoose Schema Design
- MongoDB CRUD Methods
- Route Protection
- ObjectId Validation
- Request Validation
- Public vs Protected APIs
- Mongoose Indexing
- Query Sorting
- Read Optimization using lean()
- Separation of Concerns

## APIs

```text
POST      /api/projects

GET       /api/projects

GET       /api/projects/:id

PUT       /api/projects/:id

DELETE    /api/projects/:id
```

## Architecture

```text
Client
   │
   ▼
Routes
   │
   ▼
Authentication
   │
   ▼
Validation Rules
   │
   ▼
Validate Middleware
   │
   ▼
Controller
   │
   ▼
Project Model
   │
   ▼
MongoDB
```

## Interview Questions

- What is CRUD?
- Difference between find(), findOne(), and findById()?
- Why use findByIdAndUpdate()?
- What is the purpose of `new: true`?
- Why use `runValidators: true` while updating?
- What is the difference between PUT and PATCH?
- Why use `lean()` in read APIs?
- Why create an index on the `order` field?
- Why separate public and protected APIs?
- Why should validation happen before controllers?

## Notes

Day 6 focused on building the first complete business module of the portfolio backend. The Projects module was implemented following REST principles with full CRUD functionality. Public APIs return only published projects, while protected APIs allow administrators to manage project data securely. Validation, authentication, centralized error handling, and reusable middleware from previous days were integrated to create a clean, scalable, and production-ready architecture.

### Commit

```bash
feat(projects): implement complete CRUD operations for projects module
```

Status: ✅ Completed

------------------------------------------------------------------------

# 📈 Progress

* [x] Project Setup
* [x] Authentication Foundation
* [x] Authentication APIs
* [x] Utilities
* [x] Validation
* [x] Projects
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
