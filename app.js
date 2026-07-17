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

const authRoutes = require("./routes/authRoutes");
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

// Apply all security middleware
securityMiddleware(app);

// Core Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(useragent.express());

// Authentication
app.use("/api/auth", authLimiter, authRoutes);

// Public APIs
app.use("/api/projects", apiLimiter, trackVisitor, projectRoutes);
app.use("/api/skills", apiLimiter, trackVisitor, skillRoutes);
app.use("/api/education", apiLimiter, trackVisitor, educationRoutes);
app.use("/api/experience", apiLimiter, trackVisitor, experienceRoutes);
app.use("/api/certifications", apiLimiter, trackVisitor, certificationRoutes);
app.use("/api/testimonials", apiLimiter, trackVisitor, testimonialRoutes);
app.use("/api/resume", apiLimiter, trackVisitor, resumeRoutes);
app.use("/api/social-links", apiLimiter, trackVisitor, socialLinkRoutes);
app.use("/api/settings", apiLimiter, trackVisitor, settingRoutes);
app.use("/api/blogs", apiLimiter, trackVisitor, blogRoutes);
app.use("/api/contact", apiLimiter, trackVisitor, contactRoutes);

// Admin APIs
app.use("/api/inbox", adminLimiter, inboxRoutes);
app.use("/api/dashboard", adminLimiter, dashboardRoutes);
app.use("/api/analytics", adminLimiter, analyticsRoutes);

// Global Error Handler (Always Last)
app.use(errorHandler);

module.exports = app;