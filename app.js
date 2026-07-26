const express = require("express");
const corsMiddleware = require("./config/cors");
const cookieParser = require("cookie-parser");
const useragent = require("express-useragent");

const {
  securityMiddleware,
  authLimiter,
  apiLimiter,
  adminLimiter,
} = require("./config/security");

const errorHandler = require("./middleware/errorHandler");
const trackVisitor = require("./middleware/analyticsMiddleware");

// Routes
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const educationRoutes = require("./routes/educationRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const socialLinkRoutes = require("./routes/socialLinkRoutes");
const settingRoutes = require("./routes/settingRoutes");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
const inboxRoutes = require("./routes/inboxRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();


// ==============================
// SECURITY
// ==============================

securityMiddleware(app);


// ==============================
// CORE MIDDLEWARE
// ==============================

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(useragent.express());


// ==============================
// AUTHENTICATION
// ==============================

app.use(
  "/api/auth",
  authLimiter,
  authRoutes
);


// ==============================
// PROFILE
// ==============================

app.use(
  "/api/profile",
  apiLimiter,
  profileRoutes
);


// ==============================
// HEALTH CHECK
// ==============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend API is running 🚀",
    version: "1.0.0",
  });
});


// ==============================
// MULTI-USER PRIVATE APIs
// ==============================

// These modules are already migrated to
// authenticated user ownership.

app.use(
  "/api/projects",
  apiLimiter,
  projectRoutes
);

app.use(
  "/api/skills",
  apiLimiter,
  skillRoutes
);

app.use(
  "/api/education",
  apiLimiter,
  educationRoutes
);


// ==============================
// EXISTING APIs
// ==============================

// These modules will be migrated to
// multi-user ownership in upcoming days.

app.use(
  "/api/experience",
  apiLimiter,
  trackVisitor,
  experienceRoutes
);

app.use(
  "/api/certifications",
  apiLimiter,
  trackVisitor,
  certificationRoutes
);

app.use(
  "/api/testimonials",
  apiLimiter,
  trackVisitor,
  testimonialRoutes
);

app.use(
  "/api/resume",
  apiLimiter,
  trackVisitor,
  resumeRoutes
);

app.use(
  "/api/social-links",
  apiLimiter,
  trackVisitor,
  socialLinkRoutes
);

app.use(
  "/api/settings",
  apiLimiter,
  trackVisitor,
  settingRoutes
);

app.use(
  "/api/blogs",
  apiLimiter,
  trackVisitor,
  blogRoutes
);

app.use(
  "/api/contact",
  apiLimiter,
  trackVisitor,
  contactRoutes
);


// ==============================
// ADMIN APIs
// ==============================

app.use(
  "/api/inbox",
  adminLimiter,
  inboxRoutes
);

app.use(
  "/api/dashboard",
  adminLimiter,
  dashboardRoutes
);

app.use(
  "/api/analytics",
  adminLimiter,
  analyticsRoutes
);


// ==============================
// GLOBAL ERROR HANDLER
// ==============================

// Always keep this middleware last.
app.use(errorHandler);


module.exports = app;