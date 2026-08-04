# 🚀 Portfolio Backend CMS

A **production-ready Multi-User Portfolio CMS Backend** built with **Node.js, Express.js, MongoDB, and JWT Authentication**.

This backend enables developers to create and manage their own portfolio websites through secure REST APIs. Every user has complete ownership of their portfolio, blogs, analytics, dashboard, and contact messages while maintaining strict data isolation.

The project follows modern backend development practices with a scalable architecture, modular codebase, robust authentication, comprehensive validation, media management, analytics, and production-grade security.

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- JWT Access & Refresh Token Authentication
- Secure Password Hashing (bcryptjs)
- Protected Routes
- Role-Based Authorization
- Cookie & Bearer Token Authentication
- Persistent Login Sessions

---

### 👤 User Profile

- Manage Personal Profile
- Update Portfolio Information
- Bio & Headline
- Contact Information
- Avatar Support
- Location Details

---

### 💼 Portfolio Management

Complete CRUD support for:

- Projects
- Skills
- Education
- Experience
- Certifications
- Testimonials
- Resume
- Social Links
- Portfolio Settings

Each module supports ordering, activation, and publishing controls where applicable.

---

### 🌐 Public Portfolio

Every registered user receives a dedicated public portfolio.

Example:

```http
GET /api/portfolio/:username
```

The public API automatically returns only published and active content without exposing private information.

---

### 📝 Blog Management

Built-in blogging platform with:

- Draft & Published Blogs
- Featured Blogs
- Categories
- Tags
- SEO Metadata
- Slug-Based URLs
- Read Time Calculation
- Featured Image Upload
- View Counter

---

### 📩 Contact & Inbox

Visitors can contact portfolio owners directly.

Features include:

- Public Contact Form
- Inbox Dashboard
- Read / Unread Status
- Reply Status
- Bulk Read
- Bulk Delete
- Message Search
- Pagination

---

### 📊 Analytics Dashboard

Track portfolio performance with:

- Visitor Statistics
- Daily / Weekly / Monthly Visitors
- Browser Analytics
- Device Analytics
- Operating System Analytics
- Country Analytics
- Page Analytics
- Dashboard Summary
- Recent Activity

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcryptjs

### Validation

- express-validator

### File Upload

- Multer
- Cloudinary

### Security

- Helmet
- CORS
- HPP
- Express Rate Limit

### Utilities

- Nodemailer
- Cookie Parser
- Dotenv
- Compression
- Express UserAgent

## 🏗️ System Architecture

```
                     +----------------------+
                     |      Frontend        |
                     | (React / Next.js)    |
                     +----------+-----------+
                                |
                                |
                           REST APIs
                                |
                                ▼
+-------------------------------------------------------------+
|                 Portfolio Backend CMS (Express.js)           |
|-------------------------------------------------------------|
| Authentication (JWT)                                        |
| User Profile                                                 |
| Portfolio Management                                         |
| Blog Management                                              |
| Contact & Inbox                                              |
| Analytics                                                    |
| Dashboard                                                    |
| Public Portfolio                                             |
+-------------------------+-----------------------------------+
                          |
                          |
                 Mongoose ODM
                          |
                          ▼
                  MongoDB Atlas Database
                          |
                          |
          +---------------+----------------+
          |                                |
          ▼                                ▼
     Cloudinary                    Nodemailer
(File Storage & Media)          (Email Integration)
```

---

# 📁 Project Structure

```
portfolio-backend/
│
├── config/
│   ├── cloudinary.js
│   ├── cors.js
│   ├── db.js
│   ├── security.js
│   └── cookie.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── validators/
│
├── services/
│
├── utils/
│
├── helpers/
│
├── scripts/
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/nimish9335/portfolio-backend.git

cd portfolio-backend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=15m

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=7d

ADMIN_NAME=Admin Name
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=Portfolio Backend <your_email@gmail.com>

CLIENT_URL=http://localhost:5173
```

---

## 4. Seed Admin Account

```bash
npm run seed
```

---

## 5. Start Development Server

```bash
npm run dev
```

---

## 6. Production Server

```bash
npm start
```

---

# 📦 Available Scripts

| Script | Description |
|---------|-------------|
| `npm run dev` | Start development server with Nodemon |
| `npm start` | Start production server |
| `npm run seed` | Create the initial admin account |

---

# 🌐 API Base URL

Development

```text
http://localhost:5000/api
```

Production

```text
https://your-domain.com/api
```

---

# 🔑 Authentication

Protected endpoints require authentication.

Supported methods:

- HTTP Only Cookies
- Bearer Token Authentication

Example:

```http
Authorization: Bearer <access_token>
```

# 🚀 Core Modules

The backend is organized into independent, reusable modules, making it scalable and easy to maintain.

| Module | Description |
|---------|-------------|
| Authentication | Secure user authentication with JWT Access & Refresh Tokens |
| Profile | Manage personal portfolio information |
| Projects | CRUD operations for portfolio projects |
| Skills | Technical skills management |
| Education | Academic qualification management |
| Experience | Professional experience management |
| Certifications | Certification management |
| Testimonials | Client and colleague testimonials |
| Resume | Resume upload and management using Cloudinary |
| Social Links | Social media and professional profile management |
| Portfolio Settings | Portfolio configuration and visibility settings |
| Blog | Complete blog management system |
| Contact | Public contact form for portfolio visitors |
| Inbox | Manage received contact messages |
| Analytics | Visitor tracking and portfolio analytics |
| Dashboard | Overview of portfolio statistics and activities |

---

# 👥 Multi-User Architecture

This project is built as a **Multi-User Portfolio CMS**, allowing multiple users to independently manage their own portfolios.

Every user has isolated access to:

- Personal Profile
- Portfolio Projects
- Skills
- Education
- Experience
- Certifications
- Testimonials
- Resume
- Social Links
- Portfolio Settings
- Blogs
- Contact Messages
- Inbox
- Analytics
- Dashboard

All resources are associated with the authenticated user, ensuring complete data isolation.

---

# 📡 REST API Modules

The backend exposes RESTful APIs grouped by feature.

| Module | Endpoint |
|---------|----------|
| Authentication | `/api/auth` |
| Profile | `/api/profile` |
| Projects | `/api/projects` |
| Skills | `/api/skills` |
| Education | `/api/education` |
| Experience | `/api/experience` |
| Certifications | `/api/certifications` |
| Testimonials | `/api/testimonials` |
| Resume | `/api/resume` |
| Social Links | `/api/social-links` |
| Portfolio Settings | `/api/settings` |
| Portfolio | `/api/portfolio` |
| Blogs | `/api/blogs` |
| Contact | `/api/contact` |
| Inbox | `/api/inbox` |
| Analytics | `/api/analytics` |
| Dashboard | `/api/dashboard` |

---

# 🔐 Security Features

Security has been integrated throughout the backend using industry-standard practices.

### Authentication

- JWT Access Token
- JWT Refresh Token
- HTTP Only Cookies
- Bearer Token Authentication

### Authorization

- Protected Routes
- User Ownership Validation
- Role-Based Access Control

### API Security

- Helmet
- CORS Configuration
- HPP Protection
- Rate Limiting
- Input Validation
- Centralized Error Handling

### Password Security

- bcryptjs Password Hashing
- Secure JWT Secrets
- Environment Variable Protection

---

# 📁 Media Management

Media uploads are handled using **Cloudinary**.

Supported uploads include:

- Profile Avatar
- Project Images
- Blog Featured Images
- Resume PDF

Features:

- Secure Uploads
- Automatic Image Management
- Cloud Storage
- Old File Cleanup During Updates

---

# 📊 Analytics & Dashboard

The backend includes an integrated analytics system.

### Visitor Analytics

- Total Visitors
- Daily Visitors
- Weekly Visitors
- Monthly Visitors
- Page Analytics
- Browser Analytics
- Device Analytics
- Operating System Analytics
- Country Analytics

### Dashboard

Provides a quick overview of:

- Portfolio Statistics
- Blog Statistics
- Contact Messages
- Recent Activities
- Visitor Overview

---

# 🧪 API Response Format

All APIs follow a consistent response structure.

### Success Response

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation completed successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation failed",
  "errors": []
}
```

# ⚡ Performance Optimizations

The backend is designed with performance and scalability in mind.

### Database

- Indexed frequently queried fields
- Compound indexes for optimized filtering
- Efficient query execution
- Pagination support
- Optimized sorting

### Backend

- Lean queries for read operations
- Parallel database queries using `Promise.all()`
- Modular controller architecture
- Centralized error handling
- Reusable middleware
- Request validation
- Optimized file uploads

### Media

- Cloudinary cloud storage
- Automatic cleanup of replaced files
- Secure upload pipeline

---

# 🚀 Deployment

The backend is deployment-ready and can be hosted on platforms such as:

- Render
- Railway
- DigitalOcean
- AWS EC2
- Azure App Service

### Deployment Checklist

- Configure environment variables
- Connect MongoDB Atlas
- Configure Cloudinary
- Configure email service
- Set frontend URL
- Deploy backend
- Test all production APIs

---

# 🛣️ Future Improvements

Planned features for future releases:

### Portfolio

- Multiple Portfolio Themes
- Custom Portfolio Templates
- Portfolio SEO Improvements
- Custom Domain Support

### Blog

- Rich Text Editor
- Blog Comments
- Related Posts
- Blog Search
- Like & Bookmark System

### Dashboard

- Interactive Charts
- Monthly Reports
- Export Analytics
- Advanced Insights

### Analytics

- Real-Time Visitors
- Traffic Source Analytics
- Geographic Heatmaps
- Visitor Session Tracking

### DevOps

- Docker Support
- CI/CD Pipeline
- Unit & Integration Testing
- API Documentation (Swagger/OpenAPI)

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

Please ensure that all new code follows the existing project structure and coding standards.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Nimish Patel**

B.Tech, National Institute of Technology Raipur

GitHub: https://github.com/nimish9335

---

# 🌟 Project Highlights

- Production-ready Multi-User Portfolio CMS
- Secure JWT Authentication & Authorization
- RESTful API Architecture
- Cloudinary Media Management
- Blog Management System
- Public Portfolio APIs
- Contact & Inbox Management
- Portfolio Analytics Dashboard
- Modular & Scalable Codebase
- Production Security Practices
- MongoDB Atlas Integration
- Comprehensive Input Validation

---

If you found this project helpful, consider giving it a ⭐ on GitHub.