const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const useragent = require("express-useragent");

const errorHandler = require("./middleware/errorHandler");
const trackVisitor = require("./middleware/analyticsMiddleware"); // <-- Added

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

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(useragent.express());

// Routes
app.use("/api/auth", authRoutes);

// Public routes with analytics tracking
app.use("/api/projects", trackVisitor, projectRoutes);
app.use("/api/skills", trackVisitor, skillRoutes);
app.use("/api/education", trackVisitor, educationRoutes);
app.use("/api/experience", trackVisitor, experienceRoutes);
app.use("/api/certifications", trackVisitor, certificationRoutes);
app.use("/api/testimonials", trackVisitor, testimonialRoutes);
app.use("/api/resume", trackVisitor, resumeRoutes);
app.use("/api/social-links", trackVisitor, socialLinkRoutes);
app.use("/api/settings", trackVisitor, settingRoutes);
app.use("/api/blogs", trackVisitor, blogRoutes);

// Contact form bhi public hai, isliye isko bhi track kar sakte ho
app.use("/api/contact", trackVisitor, contactRoutes);

// Admin routes (analytics track nahi karenge)
app.use("/api/inbox", inboxRoutes);

app.use("/api/analytics", analyticsRoutes);

// Global Error Handler (Always Last)
app.use(errorHandler);

module.exports = app;