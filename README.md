# 🚀 Portfolio Backend

> A production-ready backend powering my Full Stack Portfolio CMS.

This project is not just a backend for a portfolio website.

It is a complete Portfolio Content Management System (CMS) built using modern backend technologies and industry-standard architecture.

The backend allows me to manage my portfolio without modifying the frontend code.

Everything including Projects, Skills, Blogs, Resume, Contact Messages, Experience, Education, Certificates and Dashboard will be managed through secure REST APIs.

---

# 📌 Project Status

🚧 Under Development

Current Version

v1.0.0

Backend Progress

████████░░░░░░░░░░░░

12%

Current Module

✅ Authentication Foundation

Next Module

Authentication APIs

---

# 🎯 Why This Project?

Most portfolio websites are static.

Whenever a developer wants to add a project or update a resume, they modify the code and deploy the application again.

This project solves that problem.

This backend acts as a CMS where every section of the portfolio can be managed through an Admin Dashboard.

Visitors can only view the portfolio.

Only the Admin can manage the content.

---

# 🎯 Project Goals

- Build a production-ready backend
- Follow clean architecture
- Learn enterprise backend development
- Build reusable REST APIs
- Implement secure authentication
- Learn MongoDB deeply
- Follow MVC architecture
- Practice industry standards
- Build a portfolio suitable for placements
- Create a project that demonstrates backend engineering skills

---

# ✨ Final Output

## Visitor

Visitors will be able to

- View Portfolio
- View Projects
- View Skills
- View Blogs
- Download Resume
- Contact Me
- View Certificates
- View Experience
- View Education

Visitors cannot

- Login
- Register
- Access Dashboard

---

## Admin

Only I (Portfolio Owner) can

- Login
- Manage Projects
- Manage Skills
- Manage Resume
- Manage Blogs
- Manage Certificates
- Manage Experience
- Manage Education
- Manage Contact Messages
- Manage Social Links
- View Analytics
- Update Settings

---

# 🛠 Tech Stack

## Runtime

- Node.js

## Framework

- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT
- HTTP Only Cookies
- bcryptjs

## Image Storage

- Cloudinary
- Multer

## Email

- Nodemailer

## Validation

- Express Validator

## Security

- Helmet
- CORS
- Rate Limiter
- Mongo Sanitize
- XSS Protection

## Utilities

- dotenv
- cookie-parser
- compression
- uuid

---

# 🏗 Backend Architecture

```
Client
        │
        ▼
Express Server
        │
        ▼
Routes
        │
        ▼
Controllers
        │
        ▼
Services
        │
        ▼
Models
        │
        ▼
MongoDB
```

Architecture Pattern

MVC (Model View Controller)

---

# 📂 Project Structure

```
portfolio-backend/

│

├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── validators/
├── utils/
├── constants/
├── helpers/
├── uploads/
├── logs/

│

├── app.js
├── server.js

│

├── package.json
├── README.md
├── LICENSE
├── .env
├── .env.example
```

---

# 📜 Development Rules

Rule 1

Always understand theory before writing code.

---

Rule 2

Never skip explanations.

---

Rule 3

Every feature should be production-ready.

---

Rule 4

Never duplicate code.

---

Rule 5

Always follow MVC architecture.

---

Rule 6

Use environment variables for secrets.

---

Rule 7

Use reusable functions.

---

Rule 8

Every completed day must include

- Theory
- Code
- Testing
- Documentation
- Git Commit
- Git Push

---

Rule 9

Never move to the next day until the current day is completed.

---

Rule 10

Every day must end with README updates.

---

# 📚 Coding Standards

- Use meaningful variable names.
- Keep controllers clean.
- Move business logic to models/services.
- Never hardcode values.
- Use constants whenever possible.
- Follow REST API conventions.
- Write modular code.
- Keep functions small and reusable.

---

# 🌿 Git Commit Convention

| Type | Description |
|------|-------------|
| feat | New Feature |
| fix | Bug Fix |
| docs | Documentation |
| chore | Project Setup |
| refactor | Code Improvement |
| perf | Performance |
| style | Formatting |
| test | Testing |

Example

```

feat(auth): implement login API

fix(auth): resolve JWT verification issue

docs: update backend README

chore: configure Express server

```

---

# 📅 Development Log

| Day | Module | Status |
|------|--------|--------|
| Day 1 | Backend Setup & Architecture | ✅ |
| Day 2 | Authentication Foundation | ✅ |
| Day 3 | Authentication APIs | ⏳ |
| Day 4 | Utilities | ⏳ |
| Day 5 | Validation Layer | ⏳ |
| Day 6 | Projects Module | ⏳ |
| Day 7 | Project Images | ⏳ |
| Day 8 | Skills Module | ⏳ |
| Day 9 | Education Module | ⏳ |
| Day 10 | Experience Module | ⏳ |
| Day 11 | Certifications | ⏳ |
| Day 12 | Testimonials | ⏳ |
| Day 13 | Resume Module | ⏳ |
| Day 14 | Social Links | ⏳ |
| Day 15 | Settings | ⏳ |
| Day 16 | Blog Module | ⏳ |
| Day 17 | Contact Module | ⏳ |
| Day 18 | Admin Inbox | ⏳ |
| Day 19 | Visitor Analytics | ⏳ |
| Day 20 | Dashboard APIs | ⏳ |
| Day 21 | Security | ⏳ |
| Day 22 | Optimization | ⏳ |
| Day 23 | Testing | ⏳ |
| Day 24 | Documentation | ⏳ |
| Day 25 | Production Deployment | ⏳ |

---

# 🎯 Project Workflow

Every module follows the same workflow.

```

Theory

↓

Architecture

↓

Implementation

↓

Testing

↓

Documentation

↓

Commit

↓

Push

↓

README Update

```

No feature will be considered completed unless all of the above steps are finished.

---

# 🚀 Week 1

# ✅ Day 1 - Backend Setup & Architecture

---

## 🎯 Objective

Build a strong and scalable backend foundation before implementing any feature.

The main goal was to prepare a professional backend architecture that follows industry standards.

No business logic was implemented on this day.

The focus was entirely on project setup.

---

## 📚 Theory Covered

During Day 1, the following concepts were studied.

- What is Express.js?
- Why use Node.js for backend?
- app.js vs server.js
- What is Middleware?
- What is Environment Variable?
- Why use dotenv?
- Why MongoDB Atlas?
- Why Mongoose?
- Dependencies vs Dev Dependencies
- MVC Architecture
- Why use config folder?
- Why separate server.js and app.js?

---

## 💻 Implemented Features

### Project Initialization

- Created Git Repository
- Initialized Node Project
- Installed Dependencies
- Installed Development Dependencies

---

### Project Structure

Created professional folder structure.

```
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
```

---

### Environment Variables

Created

```
.env

.env.example
```

---

### Express Server

Created

```
app.js

server.js
```

Configured

- Express
- Port
- MongoDB
- Environment Variables

---

### Middleware

Implemented

- express.json()
- express.urlencoded()
- cors()
- helmet()
- compression()
- cookie-parser()

---

### Health Check Route

Created

```
GET /
```

Returns

```json
{
    "success": true,
    "message":"Portfolio Backend API is running 🚀"
}
```

---

### MongoDB

Configured

```
config/db.js
```

Connected database using Mongoose.

---

## 📂 Files Created

```
app.js

server.js

config/db.js

.gitignore

.env

.env.example

LICENSE

package.json
```

---

## 📚 Concepts Learned

- Express Project Architecture
- Modular Folder Structure
- MongoDB Connection
- Middleware
- Environment Variables
- Express Server
- Clean Code Structure
- Project Initialization
- Git Workflow

---

## ❓ Interview Questions

### Q1

Why separate app.js and server.js?

---

### Q2

What is middleware?

---

### Q3

Difference between dependencies and devDependencies?

---

### Q4

Why use dotenv?

---

### Q5

Why use config folder?

---

### Q6

Why use Helmet?

---

### Q7

Why use CORS?

---

### Q8

Why use Compression?

---

### Q9

Why use cookie-parser?

---

### Q10

Why should .env never be committed?

---

## ⭐ Best Practices

- Keep business logic out of server.js.
- Always use environment variables.
- Never commit secrets.
- Follow modular architecture.
- Build foundation before features.
- Keep folders organized.

---

## 🚫 Common Mistakes

❌ Writing everything inside server.js

❌ Hardcoding PORT

❌ Committing .env

❌ Skipping folder structure

❌ Creating huge files

❌ Ignoring middleware order

---

## 📝 Revision Notes

Remember

✔ app.js

✔ server.js

✔ dotenv

✔ middleware

✔ MongoDB

✔ config folder

✔ express.json()

✔ helmet()

✔ cors()

---

## 🧠 Personal Learning Notes

Difficulty

⭐⭐☆☆☆

Time Taken

≈ 4 Hours

Important Learning

Project architecture is more important than writing APIs.

---

## ✅ Commit

```bash
chore: initialize backend architecture and configure Express server
```

---

## 📌 Status

✅ Completed

---

# ✅ Day 2 - Authentication Foundation

---

## 🎯 Objective

Build the complete authentication foundation before implementing login APIs.

The focus was on designing a secure authentication system.

No authentication routes were created.

---

## 📚 Theory Covered

- Authentication vs Authorization
- JWT
- Session vs JWT
- Password Hashing
- bcrypt
- HTTP Only Cookies
- Mongoose Middleware
- Schema Methods
- Role Based Authentication

---

## 💻 Implemented Features

### Installed Packages

```
bcryptjs

jsonwebtoken
```

---

### Role System

Created

```
constants/roles.js
```

Roles

- ADMIN
- VISITOR

---

### User Model

Created

```
models/User.js
```

Fields

- fullName
- email
- password
- role
- avatar
- timestamps

---

### Password Hashing

Implemented

```
userSchema.pre("save")
```

Automatically hashes password before saving.

---

### comparePassword()

Created reusable schema method.

```
user.comparePassword()
```

---

### generateJWT()

Created reusable schema method.

```
user.generateJWT()
```

---

### Cookie Configuration

Created

```
config/cookie.js
```

Configured

- httpOnly
- secure
- sameSite
- maxAge

---

### JWT Environment Variables

Configured

```
JWT_SECRET

JWT_EXPIRES_IN
```

---

## 📂 Files Created

```
models/User.js

constants/roles.js

config/cookie.js
```

Updated

```
.env

.env.example
```

---

## 📚 Concepts Learned

- Authentication
- Authorization
- JWT
- Password Hashing
- Schema Middleware
- Schema Methods
- Cookie Authentication
- Role Based Architecture

---

## ❓ Interview Questions

### Q1

Authentication vs Authorization?

---

### Q2

JWT vs Session?

---

### Q3

Why JWT?

---

### Q4

Why bcrypt?

---

### Q5

Hashing vs Encryption?

---

### Q6

Why use pre("save") middleware?

---

### Q7

Why use schema methods?

---

### Q8

Why comparePassword()?

---

### Q9

Why generateJWT() inside User Model?

---

### Q10

Why use Object.freeze()?

---

### Q11

Why enum?

---

### Q12

Why select:false for password?

---

### Q13

Why use HTTP Only Cookies?

---

### Q14

Why use secure cookies?

---

## ⭐ Best Practices

- Never store plain passwords.
- Never hardcode roles.
- Keep authentication logic inside User model.
- Use JWT with Cookies.
- Always hash passwords.
- Use schema methods instead of duplicate controller code.

---

## 🚫 Common Mistakes

❌ Plain password storage

❌ JWT inside Local Storage

❌ Hardcoded roles

❌ Hashing inside controllers

❌ Skipping comparePassword()

❌ Returning password in APIs

---

## 📝 Revision Notes

Remember

✔ bcrypt

✔ JWT

✔ Cookie

✔ comparePassword()

✔ generateJWT()

✔ pre save middleware

✔ roles

✔ select:false

✔ enum

---

## 🧠 Personal Learning Notes

Difficulty

⭐⭐⭐☆☆

Time Taken

≈ 5 Hours

Important Learning

Authentication starts from good schema design, not from Login APIs.

---

## ✅ Commit

```bash
feat(auth): build authentication foundation with user model, JWT and password hashing
```

---

## 📌 Status

✅ Completed

---

# 🏗 Backend Development Guidelines

This section contains all the development rules followed throughout this project.

These rules ensure that the project remains clean, scalable and production-ready.

---

# 📌 Architecture Rules

Always follow MVC Architecture.

```
Routes
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Models
    │
    ▼
MongoDB
```

Controllers should never contain business logic.

Models should never send responses.

Routes should only map endpoints.

Services should contain reusable business logic.

Configuration should always remain inside config folder.

---

# 📁 Folder Responsibilities

## config/

Contains all configuration files.

Examples

- MongoDB
- JWT
- Cookie
- Cloudinary
- Nodemailer

---

## controllers/

Receives request.

Calls service/model.

Returns response.

---

## middleware/

Contains reusable middleware.

Examples

- Authentication
- Authorization
- Error Handler
- Upload Middleware

---

## models/

Contains all MongoDB Schemas.

---

## routes/

Contains API routes.

No business logic.

---

## services/

Contains reusable business logic.

Examples

- Email Service
- Analytics Service
- Cloudinary Service

---

## validators/

Contains request validation.

---

## utils/

Contains helper utilities.

Examples

- ApiResponse
- ApiError
- AsyncHandler

---

## constants/

Contains constant values.

Examples

Roles

Status Codes

Messages

---

## helpers/

Contains reusable helper functions.

---

## uploads/

Temporary uploads.

---

## logs/

Application logs.

---

# 🌐 API Design Rules

All APIs follow REST conventions.

Example

GET

Retrieve Data

POST

Create Data

PUT

Replace Data

PATCH

Update Data

DELETE

Delete Data

---

Response Format

```json
{
    "success": true,
    "message": "Request Successful",
    "data": {}
}
```

Error Format

```json
{
    "success": false,
    "message": "Something went wrong"
}
```

---

# 📌 Naming Conventions

Folders

camelCase

Files

camelCase

Models

PascalCase

Variables

camelCase

Constants

UPPER_CASE

Environment Variables

UPPER_CASE

---

Example

```
User.js

generateJWT()

comparePassword()

ROLES.ADMIN

JWT_SECRET
```

---

# 🧠 Backend Learning Roadmap

Backend will be developed in this order.

```
Project Setup
        │
        ▼
Authentication
        │
        ▼
Utilities
        │
        ▼
Validation
        │
        ▼
Projects
        │
        ▼
Skills
        │
        ▼
Education
        │
        ▼
Experience
        │
        ▼
Certificates
        │
        ▼
Resume
        │
        ▼
Social Links
        │
        ▼
Blogs
        │
        ▼
Contact
        │
        ▼
Analytics
        │
        ▼
Dashboard
        │
        ▼
Security
        │
        ▼
Optimization
        │
        ▼
Deployment
```

---

# 📚 Interview Revision Sheet

These concepts should be revised before interviews.

## Backend Basics

- Node.js
- Event Loop
- Express
- Middleware
- Routing
- MVC

---

## Database

- MongoDB
- Collections
- Documents
- Indexing
- Aggregation
- Population

---

## Authentication

- JWT
- Cookies
- bcrypt
- Authorization
- Protected Routes

---

## Security

- Helmet
- CORS
- Rate Limiting
- XSS
- Mongo Sanitize

---

## Performance

- Pagination
- Search
- Compression
- Indexes

---

## Deployment

- Render
- MongoDB Atlas
- Cloudinary

---

# 🚀 Backend Progress

```
████████░░░░░░░░░░░░
12%
```

Completed

- Project Setup
- Authentication Foundation

Working On

Authentication APIs

Next

Utilities

---

# 📅 Upcoming Development

## Day 3

Authentication APIs

- Seed Admin
- Login API
- Logout API
- Current User API
- Authentication Middleware
- Protected Routes

---

## Day 4

Utilities

- ApiResponse
- ApiError
- AsyncHandler
- Logger
- Constants

---

## Day 5

Validation Layer

- Express Validator
- Sanitization
- Validation Middleware

---

# 📌 Project Decisions

These decisions are intentionally made.

## Only One Admin

There is no Register API.

Only the portfolio owner can login.

Visitors cannot create accounts.

---

## JWT + HTTP Only Cookies

Chosen over Local Storage because of better security.

---

## Manual Admin Creation

Admin will be created using Seed Script.

Not through Register API.

---

## Clean Architecture

Controllers remain lightweight.

Business logic remains reusable.

---

# 🤖 AI Continuation Instructions

If this project is continued in another ChatGPT conversation,

follow these rules exactly.

1.

Read this README completely.

2.

Continue from the first incomplete day.

3.

Never regenerate completed code.

4.

Theory before implementation.

5.

Explain every line of code.

6.

Explain why the code is written.

7.

Use industry-standard architecture.

8.

Never skip testing.

9.

Update README after every completed day.

10.

Generate professional Git commit message.

11.

Mention interview questions after every module.

12.

Mention common mistakes.

13.

Mention best practices.

14.

Mention revision notes.

15.

Never move to next day until current day is completed.

---

# 📝 Daily Completion Checklist

Every day must end with

```
Theory

↓

Implementation

↓

Testing

↓

Git Commit

↓

Git Push

↓

README Update

↓

Revision Notes

↓

Next Day Plan
```

---

# 📖 Revision Strategy

Before interviews,

only revise

- README
- Important APIs
- Folder Structure
- Authentication Flow
- Database Design

No need to revise the entire codebase.

---

# 🎯 Final Goal

The goal of this project is not only to build a portfolio backend.

The goal is to understand

- Backend Development
- Software Architecture
- Authentication
- Security
- Database Design
- REST APIs
- Production Deployment
- Clean Code
- Industry Best Practices

so that this project becomes placement-ready as well as production-ready.

---

# 📈 Overall Project Progress

Current Progress

```
████████░░░░░░░░░░░░

12%
```

| Module | Status |
|----------|--------|
| Project Setup | ✅ |
| Authentication Foundation | ✅ |
| Authentication APIs | ⏳ |
| Utilities | ⏳ |
| Validation | ⏳ |
| Projects Module | ⏳ |
| Skills Module | ⏳ |
| Education Module | ⏳ |
| Experience Module | ⏳ |
| Certifications | ⏳ |
| Testimonials | ⏳ |
| Resume Module | ⏳ |
| Social Links | ⏳ |
| Blog Module | ⏳ |
| Contact Module | ⏳ |
| Analytics Module | ⏳ |
| Dashboard APIs | ⏳ |
| Security | ⏳ |
| Optimization | ⏳ |
| Testing | ⏳ |
| Deployment | ⏳ |

---

# 📅 25 Days Development Tracker

| Day | Topic | Status |
|------|--------|--------|
| Day 1 | Backend Setup & Architecture | ✅ |
| Day 2 | Authentication Foundation | ✅ |
| Day 3 | Authentication APIs | ⏳ |
| Day 4 | Utilities | ⏳ |
| Day 5 | Validation | ⏳ |
| Day 6 | Projects Module | ⏳ |
| Day 7 | Project Images | ⏳ |
| Day 8 | Skills Module | ⏳ |
| Day 9 | Education Module | ⏳ |
| Day 10 | Experience Module | ⏳ |
| Day 11 | Certifications | ⏳ |
| Day 12 | Testimonials | ⏳ |
| Day 13 | Resume Module | ⏳ |
| Day 14 | Social Links | ⏳ |
| Day 15 | Settings | ⏳ |
| Day 16 | Blog Module | ⏳ |
| Day 17 | Contact Module | ⏳ |
| Day 18 | Admin Inbox | ⏳ |
| Day 19 | Visitor Analytics | ⏳ |
| Day 20 | Dashboard APIs | ⏳ |
| Day 21 | Security Improvements | ⏳ |
| Day 22 | Optimization | ⏳ |
| Day 23 | Testing | ⏳ |
| Day 24 | Documentation | ⏳ |
| Day 25 | Deployment | ⏳ |

---

# 📚 Things I Learned

This section will be updated after every completed module.

## Backend

- Express.js
- Node.js
- MongoDB
- Mongoose
- REST APIs
- MVC Architecture

---

## Authentication

- JWT
- HTTP Only Cookies
- bcrypt
- Schema Methods
- Schema Middleware

---

## Security

- Helmet
- CORS
- Environment Variables

---

## Best Practices

- Clean Architecture
- Modular Folder Structure
- Reusable Code
- Git Workflow

---

# 🚫 Common Mistakes Made

This section will be updated whenever a mistake is found.

Example

- Never commit .env
- Never store passwords directly
- Never duplicate authentication logic
- Never hardcode Roles
- Never skip README updates
- Never skip testing

---

# 📖 Revision Checklist

Before placements revise only these topics.

## Node.js

- Event Loop
- Modules
- Package.json

---

## Express

- Middleware
- Routing
- MVC

---

## MongoDB

- Collections
- Documents
- CRUD
- Indexes

---

## Authentication

- JWT
- bcrypt
- Cookies
- Protected Routes

---

## Backend

- Folder Structure
- Architecture
- Project Flow

---

# 📝 Git Commit History

| Day | Commit |
|------|---------|
| Day 1 | chore: initialize backend architecture and configure Express server |
| Day 2 | feat(auth): build authentication foundation with user model, JWT and password hashing |
| Day 3 | |
| Day 4 | |
| Day 5 | |
| ... | |

---

# 🚀 Deployment Checklist

Before deployment make sure

- Environment Variables Added
- MongoDB Atlas Connected
- Cloudinary Configured
- Email Configured
- Security Enabled
- Production Build Tested
- APIs Tested
- README Updated
- Latest Code Pushed

---

# 📚 Resources

Official Documentation

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cloudinary
- Nodemailer

---

# 🎯 Future Enhancements

- Docker
- Redis
- Swagger
- Unit Testing
- CI/CD
- AWS S3
- Queue Jobs
- Cron Jobs
- Socket.IO
- AI Chat Integration

---

# 🤖 Continue From Here

Current Status

```
Day 2 Completed
```

Next Task

```
Day 3

↓

Authentication APIs
```

Implementation Order

```
1.

Admin Seed Script

↓

2.

Authentication Route

↓

3.

Authentication Controller

↓

4.

Login API

↓

5.

Logout API

↓

6.

Current User API

↓

7.

Authentication Middleware

↓

8.

Protected Routes

↓

9.

Postman Testing

↓

10.

README Update

↓

11.

Git Commit

↓

12.

Git Push
```

---

# 🧠 AI Development Instructions

If this README is provided in another ChatGPT conversation,

strictly follow these rules.

1.

Continue only from the first incomplete day.

2.

Never regenerate completed code.

3.

Always explain theory before implementation.

4.

Explain every line of code.

5.

Mention why the code is written.

6.

Use beginner-friendly explanations.

7.

Use industry standards.

8.

Use professional folder structure.

9.

Update README after every completed day.

10.

Provide interview questions.

11.

Provide revision notes.

12.

Provide Git commit message.

13.

Provide testing steps.

14.

Do not move to the next day until the current day is completed.

15.

Keep all previous architecture unchanged.

---

# ⭐ Final Project Goal

This project is much more than a portfolio backend.

The objective is to learn and implement real-world backend engineering concepts including architecture, authentication, security, database design, REST APIs, clean coding practices, testing, deployment and documentation.

Once completed, this project should be suitable for

- Placements
- Internship Interviews
- Backend Revision
- GitHub Portfolio
- Personal Portfolio CMS
- Real Production Deployment

---

# 👨‍💻 Author

**Nimish Patel**

B.Tech | NIT Raipur

Full Stack MERN Developer

GitHub:
(Add Link)

LinkedIn:
(Add Link)

Portfolio:
(Coming Soon)

---

⭐ If you found this project helpful, don't forget to give it a star.