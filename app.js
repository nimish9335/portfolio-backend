const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const educationRoutes = require("./routes/educationRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const certificationRoutes = require("./routes/certificationRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/certifications", certificationRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/resume", resumeRoutes);

// Global Error Handler (Always Last)
app.use(errorHandler);

module.exports = app;