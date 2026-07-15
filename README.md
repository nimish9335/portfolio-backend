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

------------------------------------------------------------------------

# ✅ Day 7 (Completed)

## Objective

Build a complete image management system for the Projects module by integrating Multer and Cloudinary, enabling secure image uploads, updates, and deletions while storing only image metadata in MongoDB.

## Completed

- Installed Multer
- Configured Multer Memory Storage
- Added File Type Validation
- Added File Size Validation
- Extended Cloudinary Service
- Implemented Cloudinary Upload using Streams
- Built Thumbnail Upload for Create Project API
- Updated Project Schema to Store Thumbnail Metadata
- Implemented Thumbnail Replacement during Project Update
- Deleted Cloudinary Images during Project Deletion
- Protected Upload Routes
- Completed Postman Testing

## Files

```text
middleware/
    upload.js

services/
    cloudinary.js

controllers/
    projectController.js

models/
    Project.js

routes/
    projectRoutes.js

validators/
    projectValidator.js
```

## Concepts Learned

- Multipart Form Data
- Multer Middleware
- Memory Storage
- File Validation
- MIME Types
- Cloudinary Upload Stream
- Buffers and Streams
- Cloudinary Image Management
- Image Metadata
- Cloudinary Public ID
- Image Replacement Strategy
- File Upload Security
- Separation of File Storage and Database

## Architecture

```text
Client
   │
   ▼
Authentication
   │
   ▼
Multer Middleware
   │
   ▼
File Validation
   │
   ▼
Cloudinary Upload
   │
   ▼
Controller
   │
   ▼
MongoDB
```

## Upload Flow

```text
Browser
   │
   ▼
multipart/form-data
   │
   ▼
Multer
   │
   ▼
Memory Buffer
   │
   ▼
Cloudinary Upload Stream
   │
   ▼
Cloudinary
   │
   ▼
secure_url
public_id
   │
   ▼
MongoDB
```

## APIs

```text
POST      /api/projects
GET       /api/projects
GET       /api/projects/:id
PUT       /api/projects/:id
DELETE    /api/projects/:id
```

## Interview Questions

- Why can't Express handle file uploads by default?
- What is multipart/form-data?
- What is Multer?
- What is the difference between memoryStorage() and diskStorage()?
- Why use Cloudinary instead of storing images in MongoDB?
- What is a Buffer in Node.js?
- What is a Stream in Node.js?
- Why use upload_stream()?
- Why store Cloudinary public_id?
- Why delete old images before uploading new ones?
- What is upload.single()?
- Why validate MIME types?
- Why limit upload file size?

## Notes

Day 7 focused on building a production-ready image management system for the Projects module. Multer was configured to handle multipart form data using memory storage, uploaded files were streamed directly to Cloudinary, and only the image URL and public ID were stored in MongoDB. The Create, Update, and Delete APIs were enhanced to manage Cloudinary assets automatically, ensuring there are no orphaned images and keeping cloud storage synchronized with the database.

### Commit

```bash
feat(projects): integrate Multer and Cloudinary for secure image upload and management
```

Status: ✅ Completed

------------------------------------------------------------------------
# ✅ Day 8 (Completed)

## Objective

Build a complete Skills module with secure CRUD APIs, image upload support, request validation, authentication, and separate public/admin endpoints.

## Completed

* Designed Skill Schema
* Created Skill Model
* Built Create Skill API
* Built Get Public Skills API
* Built Get Admin Skills API
* Built Update Skill API
* Built Delete Skill API
* Integrated Cloudinary Icon Upload
* Implemented Icon Replacement
* Added Request Validation
* Protected Admin Routes
* Completed Postman Testing

## Files

```text
models/
    Skill.js

controllers/
    skillController.js

routes/
    skillRoutes.js

validators/
    skillValidator.js
```

## Concepts Learned

* CRUD Operations
* REST API Design
* Cloudinary Integration
* Multer File Upload
* Request Validation
* Route Protection
* Public vs Protected APIs
* Image Management

## APIs

```text
POST      /api/skills
GET       /api/skills
GET       /api/skills/admin
PUT       /api/skills/:id
DELETE    /api/skills/:id
```

## Notes

Day 8 focused on building a production-ready Skills module. Administrators can securely manage skills with full CRUD functionality and Cloudinary-based icon uploads, while visitors can access only active skills through public APIs. The module follows the existing MVC architecture and reuses the authentication, validation, and upload infrastructure built in previous days.

### Commit

```bash
feat(skills): implement complete skills management module with Cloudinary integration
```

Status: ✅ Completed

------------------------------------------------------------------------

# ✅ Day 9 (Completed)

## Objective

Build a complete Education module with secure CRUD APIs, request validation, authentication, and separate public/admin endpoints.

## Completed

- Designed Education Schema
- Created Education Model
- Built Create Education API
- Built Get Public Education API
- Built Get Admin Education API
- Built Get Education By ID API
- Built Update Education API
- Built Delete Education API
- Added Request Validation
- Protected Admin Routes
- Added ObjectId Validation
- Implemented Sorting by Order
- Completed Postman Testing

## Files

```text
models/
    Education.js

controllers/
    educationController.js

routes/
    educationRoutes.js

validators/
    educationValidator.js
```

## Concepts Learned

- CRUD Operations
- REST API Design
- Mongoose Schema Design
- Route Protection
- Request Validation
- Public vs Protected APIs
- ObjectId Validation
- Query Sorting
- Separation of Concerns

## APIs

```text
POST      /api/education
GET       /api/education
GET       /api/education/admin
GET       /api/education/:id
PUT       /api/education/:id
DELETE    /api/education/:id
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
Education Model
   │
   ▼
MongoDB
```

## Interview Questions

- Why separate public and admin APIs?
- Why validate ObjectIds before querying MongoDB?
- Why use `findByIdAndUpdate()` with `runValidators`?
- Why sort education records using an `order` field?
- What is the purpose of `lean()` in read APIs?
- Why should validation happen before controllers?

## Notes

Day 9 focused on building a production-ready Education module following the existing MVC architecture. The module provides secure CRUD operations, reusable validation, protected admin endpoints, and public APIs for displaying education details on the portfolio.

### Commit

```bash
feat(education): implement complete education management module with CRUD APIs and validation
```

Status: ✅ Completed
------------------------------------------------------------------------
# ✅ Day 10 (Completed)

## Objective

Build a complete Experience module with secure CRUD APIs, request validation, authentication, and separate public/admin endpoints.

## Completed

- Designed Experience Schema
- Created Experience Model
- Built Create Experience API
- Built Get Public Experience API
- Built Get Admin Experience API
- Built Get Experience By ID API
- Built Update Experience API
- Built Delete Experience API
- Added Request Validation
- Protected Admin Routes
- Added ObjectId Validation
- Implemented Sorting by Order
- Completed Postman Testing

## Files

```text
models/
    Experience.js

controllers/
    experienceController.js

routes/
    experienceRoutes.js

validators/
    experienceValidator.js
```

## Concepts Learned

- CRUD Operations
- REST API Design
- Mongoose Schema Design
- Route Protection
- Request Validation
- Public vs Protected APIs
- ObjectId Validation
- Query Sorting
- Schema Enums
- Array Validation
- Separation of Concerns

## APIs

```text
POST      /api/experience
GET       /api/experience
GET       /api/experience/admin
GET       /api/experience/:id
PUT       /api/experience/:id
DELETE    /api/experience/:id
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
Experience Model
   │
   ▼
MongoDB
```

## Interview Questions

- Why use enums in a Mongoose schema?
- Why store technologies as an array?
- Why separate public and admin APIs?
- Why validate ObjectIds before database queries?
- Why use `lean()` in read APIs?
- Why should validation happen before controllers?

## Notes

Day 10 focused on building a production-ready Experience module. The module provides secure CRUD operations, reusable validation, protected admin endpoints, and public APIs for displaying professional experience on the portfolio. It follows the existing MVC architecture and reuses the authentication, validation, and error handling infrastructure developed in earlier modules.

### Commit

```bash
feat(experience): implement complete experience management module with CRUD APIs and validation
```

Status: ✅ Completed
------------------------------------------------------------------------
# ✅ Day 11 (Completed)

## Objective

Build a complete Certifications module with secure CRUD APIs, request validation, authentication, and separate public/admin endpoints.

## Completed

- Designed Certification Schema
- Created Certification Model
- Built Create Certification API
- Built Get Public Certifications API
- Built Get Admin Certifications API
- Built Get Certification By ID API
- Built Update Certification API
- Built Delete Certification API
- Added Request Validation
- Added Credential URL Validation
- Protected Admin Routes
- Added ObjectId Validation
- Implemented Sorting by Order
- Completed Postman Testing

## Files

```text
models/
    Certification.js

controllers/
    certificationController.js

routes/
    certificationRoutes.js

validators/
    certificationValidator.js
```

## Concepts Learned

- CRUD Operations
- REST API Design
- Mongoose Schema Design
- Route Protection
- Request Validation
- URL Validation
- Array Validation
- Public vs Protected APIs
- ObjectId Validation
- Query Sorting
- Separation of Concerns

## APIs

```text
POST      /api/certifications
GET       /api/certifications
GET       /api/certifications/admin
GET       /api/certifications/:id
PUT       /api/certifications/:id
DELETE    /api/certifications/:id
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
Certification Model
   │
   ▼
MongoDB
```

## Interview Questions

- Why validate URLs before storing them?
- Why use arrays for skills?
- Why separate public and admin APIs?
- Why validate ObjectIds before database queries?
- Why use `lean()` in read APIs?
- Why should validation happen before controllers?

## Notes

Day 11 focused on building a production-ready Certifications module. The module supports secure CRUD operations, reusable validation, credential URL validation, protected admin endpoints, and public APIs for displaying certifications on the portfolio. It follows the existing MVC architecture and reuses the authentication, validation, and error handling infrastructure built in earlier modules.

### Commit

```bash
feat(certifications): implement complete certifications management module with CRUD APIs and validation
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
* [x] Skills
* [x] Education
* [x] Experience
* [x] Certifications
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
