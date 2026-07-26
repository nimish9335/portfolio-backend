# 🚀 Portfolio Builder — Backend

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-Authentication-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Cloudinary-Media%20Storage-3448C5?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Nodemailer-Email%20Service-green?style=for-the-badge" />
</p>

<p align="center">
  <b>A Production-Ready Multi-User Portfolio Builder Backend built with Node.js, Express.js, and MongoDB.</b>
</p>

<p align="center">
A complete backend platform that enables developers to create, manage, customize, publish, and monitor their own professional portfolio through secure REST APIs.
</p>

---

## 📌 Project Overview

**Portfolio Builder** is a production-oriented multi-user backend platform designed to allow developers to build and manage their own dynamic portfolios.

The project originally started as a **single-user Portfolio Backend CMS**, providing APIs for managing projects, skills, education, experience, certifications, testimonials, blogs, resumes, social links, website settings, contact messages, and visitor analytics.

The original backend was successfully completed, tested, documented, and prepared for deployment. It is now being extended into a **Multi-User Portfolio Builder Platform**, where multiple users can each create an account and independently manage their own portfolio data.

Every registered user can:

* Create a secure account and manage a personal dashboard
* Build a developer profile — projects, skills, education, experience
* Manage certifications, testimonials, resume, social/coding profiles
* Write and publish blogs
* Customize portfolio settings, and publish/unpublish the portfolio
* Receive contact messages + email notifications
* Track visitor analytics for their own portfolio
* Expose their portfolio at a unique public URL

```text
/portfolio/nimish-patel
```

Built with a modular **MVC architecture**, with authentication, authorization, validation, cloud media storage, analytics, centralized error handling, and production security practices.

---

## 🧰 Tech Stack

| Layer              | Technology                                  |
| ------------------ | -------------------------------------------- |
| Runtime             | Node.js (18+)                                |
| Framework           | Express.js                                   |
| Database            | MongoDB Atlas + Mongoose                     |
| Authentication      | JWT (Access + Refresh Tokens), HTTP-only Cookies |
| Password Security   | bcrypt                                       |
| File/Media Storage  | Cloudinary + Multer                          |
| Email Service       | Nodemailer                                   |
| Validation          | express-validator / Zod                      |
| Security            | Helmet, CORS, express-rate-limit, mongo-sanitize, xss-clean |
| Logging             | Morgan / Winston                             |
| API Testing         | Postman                                      |
| Deployment          | Render / Vercel (API) + MongoDB Atlas        |

---

## 🎯 Project Objective

The primary objective is to transform the existing production-ready Portfolio CMS into a scalable **Portfolio Builder Platform**, without unnecessarily rebuilding already-completed functionality.

```text
Existing Portfolio Backend CMS
             │
             ▼
      Reuse Existing Code
             │
             ▼
      Refactor Data Models
             │
             ▼
    Add Multi-User Ownership
             │
             ▼
      Add User Registration
             │
             ▼
     Public Portfolio System
             │
             ▼
   User-Specific Analytics
             │
             ▼
Multi-User Portfolio Builder
```

---

## ⭐ Key Highlights

* Multi-User Portfolio Builder with strict data isolation
* JWT Authentication (Access + Refresh Token flow)
* HTTP-only Cookie Support
* Password Hashing (bcrypt)
* Portfolio Content Management (projects, skills, education, experience, certifications, testimonials)
* Public Portfolio API via unique username
* Publish / Unpublish Portfolio toggle
* Blog Management System (draft/published, slugs, tags, reading time)
* Resume Management (Cloudinary storage, auto-cleanup of old file)
* Contact & Inbox Management + Nodemailer notifications
* Visitor Analytics (device, browser, OS, country, page-level)
* Personal User Dashboard with aggregated stats
* Input Validation, Rate Limiting, Security Middleware
* Centralized Error Handling
* Modular MVC Architecture
* MongoDB Query Optimization (indexes, lean queries)
* Production-Ready REST APIs

---

## 📁 Suggested Folder Structure

```text
portfolio-builder-backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── mailer.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── project.model.js
│   │   ├── skill.model.js
│   │   ├── education.model.js
│   │   ├── experience.model.js
│   │   ├── certification.model.js
│   │   ├── testimonial.model.js
│   │   ├── blog.model.js
│   │   ├── resume.model.js
│   │   ├── socialLink.model.js
│   │   ├── portfolioSettings.model.js
│   │   ├── contactMessage.model.js
│   │   └── analytics.model.js
│   │
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── rateLimiter.middleware.js
│   │   └── validate.middleware.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── generateTokens.js
│   │
│   ├── validators/
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🔑 Environment Variables (`.env.example`)

```env
PORT=5000
NODE_ENV=development

MONGO_URI=your_mongodb_atlas_uri

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_app_password

CLIENT_URL=http://localhost:5173
```

---

## 🏗️ Project Evolution

### Phase 1 — Portfolio Backend CMS ✅ (Completed)

Single-user CMS covering Auth, Projects, Skills, Education, Experience, Certifications, Testimonials, Blogs, Resume, Social Links, Website Settings, Contact/Inbox, Analytics, Dashboard, Cloudinary, Nodemailer, Security, and Performance optimizations.

### 📊 Existing Backend Statistics (Pre-Upgrade)

| Category          | Existing Implementation |
| ------------------ | -----------------------: |
| Modules            |                      15+ |
| REST APIs          |                      60+ |
| Controllers        |                      15+ |
| Models             |                      13+ |
| Route Modules      |                      15+ |
| Security Features  |                       8+ |
| Cloud Storage      |               Cloudinary |
| Email Service      |               Nodemailer |
| Database           |            MongoDB Atlas |
| Architecture       |                      MVC |
| Backend Status     |                Completed |

---

### Phase 2 — Portfolio Builder Upgrade 🔄

```text
BEFORE                          AFTER

Admin                       Portfolio Builder
  │                                 │
  ▼                    ┌────────────┼────────────┐
Single Portfolio        │            │            │
  │                   User A       User B       User C
  ├── Projects           │            │            │
  ├── Skills             ▼            ▼            ▼
  ├── Education      Portfolio A  Portfolio B  Portfolio C
  ├── Experience
  └── Other Content
```

---

## 🧩 Multi-User Data Architecture

```text
User
│
├── Profile
├── Projects
├── Skills
├── Education
├── Experience
├── Certifications
├── Testimonials
├── Resume
├── Social Links
├── Blogs
├── Portfolio Settings
├── Contact Messages
└── Analytics
```

Every user-owned resource references its owner:

```js
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
}
```

This enforces strict data isolation:

```js
const projects = await Project.find({ user: req.user._id });
```

---

## 🔐 Data Isolation Principle

If User A (`_id = 101`) creates `Project A, B, C` and User B (`_id = 202`) creates `Project X, Y`, then `GET /api/projects` while authenticated as User A must **only** return Project A, B, C.

User A must never be able to:

* Read, update, or delete User B's resources
* Access User B's inbox, dashboard, or private analytics

This rule applies to **every** private route in the backend — enforced at the controller/query level, not just the route level.

---

## 🌐 Public vs Private APIs

### 🔒 Private APIs (Authentication Required)

```text
# Auth
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh-token
GET    /api/auth/me

# Profile
GET    /api/profile
PUT    /api/profile

# Projects
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id

# Skills / Education / Experience / Certifications / Testimonials
GET    /api/skills            POST   /api/skills           ...
GET    /api/education         POST   /api/education        ...
GET    /api/experience        POST   /api/experience       ...
GET    /api/certifications    POST   /api/certifications   ...
GET    /api/testimonials      POST   /api/testimonials     ...

# Resume
POST   /api/resume/upload
DELETE /api/resume

# Social Links
GET    /api/social-links
PUT    /api/social-links

# Blogs
GET    /api/blogs
POST   /api/blogs
PUT    /api/blogs/:id
DELETE /api/blogs/:id

# Portfolio Settings
GET    /api/settings
PUT    /api/settings
PATCH  /api/settings/publish

# Inbox
GET    /api/inbox
PATCH  /api/inbox/:id/read
PATCH  /api/inbox/read-all
DELETE /api/inbox/:id

# Analytics & Dashboard
GET    /api/analytics/overview
GET    /api/dashboard
```

### 🌍 Public APIs (No Authentication)

```text
GET  /api/portfolio/:username
GET  /api/portfolio/:username/blogs
GET  /api/portfolio/:username/blogs/:slug
POST /api/portfolio/:username/contact
POST /api/portfolio/:username/track-visit
```

`GET /api/portfolio/:username` returns only publicly visible data: Profile, Projects, Skills, Education, Experience, Certifications, Testimonials, Resume link, Social Links, Published Blogs, and Portfolio Settings. Private data (inbox, analytics, unpublished content) is **never** exposed here.

---

## 📦 Standard API Response Format

Keeping one consistent shape across all APIs makes the frontend integration much easier.

```json
// Success
{
  "success": true,
  "message": "Project created successfully",
  "data": { }
}

// Error
{
  "success": false,
  "message": "Project not found",
  "errors": []
}
```

Recommended: build small `ApiResponse` and `ApiError` utility classes + an `asyncHandler` wrapper so controllers stay clean and errors funnel into one centralized error-handling middleware.

---

## 🔄 Final Platform Flow

```text
                    New User
                       │
                       ▼
                   Register → Login → User Dashboard
                       │
          ┌────────────┼─────────────────────────┐
          ▼            ▼                          ▼
       Profile      Projects/Skills/Education   Blogs/Settings
                       │
                       ▼
               Publish Portfolio
                       │
                       ▼
              Unique Public URL
                       │
                       ▼
                    Visitors
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Browse       Contact      Analytics tracked
                       │
                       ▼
                Inbox + Nodemailer
                       │
                       ▼
               Email Notification
```

---

---

---

## 📈 Development Progress

This section tracks the multi-user upgrade at a high level so development can be resumed from the README without relying on previous chat context.

### ✅ Day 1 — Backend Audit + User Registration

- Audited the completed single-user Portfolio Backend CMS
- Reused and extended the existing authentication architecture
- Added `USER` role for registered portfolio owners
- Added unique `username`
- Added public user registration
- Added registration validation and duplicate email/username protection
- Reused bcrypt password hashing and HTTP-only cookie authentication
- Verified registration, login, `/me`, validation, and unauthorized access

**Result:** Multiple portfolio users can securely register and authenticate.

---

### ✅ Day 2 — Access/Refresh Authentication + Profile + Ownership Foundation

- Upgraded authentication to Access Token + Refresh Token flow
- Added separate HTTP-only cookies and token expiry configuration
- Added refresh-token API and updated logout flow
- Added authenticated profile management
- Extended `User` with `headline`, `bio`, `location`, and `phone`
- Protected sensitive account fields from profile updates
- Added reusable `userOwnership` helper for user-owned resources
- Established the ownership query pattern using `req.user._id`
- Verified the complete authentication lifecycle and profile APIs

**Result:** Authentication and profile management are multi-user ready, with a reusable ownership foundation for portfolio resources.

---

### ✅ Day 3 — Projects + Skills + Education Ownership Migration

Migrated the first three portfolio content modules from global single-user data to strict user-owned resources.

- Added `user` ownership to Project, Skill, and Education models
- Added ownership-oriented compound indexes
- Scoped collection queries to the authenticated user
- Scoped individual read/update/delete operations using both resource ID and `req.user._id`
- Protected management routes with authentication
- Removed obsolete public/admin route splits for migrated modules
- Added safe update allowlists to prevent ownership modification
- Finalized validation for Skills and Education
- Removed visitor tracking from private Project, Skill, and Education management APIs
- Verified owner CRUD operations
- Verified User A cannot read/update/delete User B resources
- Verified Cloudinary cleanup for project/skill media operations

**Result:** Projects, Skills, and Education now have strict multi-user data isolation and private authenticated CRUD APIs.

---

## 🗓️ Upgrade Plan (10 Days)

| Day | Development Focus | Status |
| ---: | ----------------- | :----: |
| Day 1 | Backend Audit + User Model + Registration | ✅ |
| Day 2 | Authentication (Access/Refresh) + Profile + Multi-User Foundation | ✅ |
| Day 3 | Projects + Skills + Education Ownership Migration | ✅ |
| Day 4 | Experience + Certifications + Testimonials | ⏳ |
| Day 5 | Resume + Social Links + Portfolio Settings | ⏳ |
| Day 6 | Public Portfolio API + Publish/Unpublish System | ⏳ |
| Day 7 | Contact + Inbox + Nodemailer | ⏳ |
| Day 8 | Multi-User Blogs + Analytics | ⏳ |
| Day 9 | Dashboard + Security Hardening + Query Optimization | ⏳ |
| Day 10 | Complete Testing + Deployment + Documentation | ⏳ |

### Current Resume Point

```text
Completed through Day 3.

Next:
Day 4 — Experience + Certifications + Testimonials

Continue using the same migration pattern:
Model ownership → controller isolation → protected routes → validation → User A/User B isolation testing.
```

---

## 🚧 Development Strategy

```text
Inspect existing module
        ↓
Reuse working implementation
        ↓
Add user ownership
        ↓
Scope private queries to req.user._id
        ↓
Protect routes + validate input
        ↓
Test owner CRUD
        ↓
Test User A vs User B isolation
        ↓
Commit stable implementation
```

**Rule:** Reuse → Modify → Test. Do not rebuild working modules unnecessarily.

---

## 🧪 Core Testing Checklist

- [x] Registration and authentication foundation
- [x] Access + Refresh Token lifecycle
- [x] Authenticated profile management
- [x] Projects multi-user isolation
- [x] Skills multi-user isolation
- [x] Education multi-user isolation
- [ ] Experience multi-user isolation
- [ ] Certifications multi-user isolation
- [ ] Testimonials multi-user isolation
- [ ] Remaining portfolio modules
- [ ] Public portfolio visibility
- [ ] User-specific contact/inbox
- [ ] User-specific blogs and analytics
- [ ] Dashboard aggregation
- [ ] Final security/regression testing
- [ ] Production deployment verification

---

## 🚀 Getting Started

```bash
git clone <your-repo-url>
cd portfolio-builder-backend
npm install
cp .env.example .env
npm run dev
```

Configure the required MongoDB, JWT, Cloudinary, email, and client environment variables before starting the server.

---

## 🔮 Future Enhancements (Post v1)

* Portfolio themes/templates selectable per user
* Custom domain mapping for published portfolios
* Team/collaborator access on a single portfolio
* GitHub API auto-sync for projects
* Redis caching for public portfolio reads
* WebSocket-based real-time visitor count
* Admin panel for platform-level moderation

---

## 📜 License

MIT — free to use and modify.
