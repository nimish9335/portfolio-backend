const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const hpp = require("hpp");
const morgan = require("morgan");

const {
  isDevelopment,
  isProduction,
} = require("./environment");

// Global Security Middleware
const securityMiddleware = (app) => {
  // Trust proxy when deployed behind Render, Nginx, etc.
  if (isProduction) {
    app.set("trust proxy", 1);
  }

  // Security Headers
  app.use(
    helmet({
      crossOriginResourcePolicy: {
        policy: "cross-origin",
      },
    })
  );

  // Compress responses
  app.use(compression());

  // Prevent HTTP Parameter Pollution
  app.use(hpp());

  // Enable logging only in development
  if (isDevelopment) {
    app.use(morgan("dev"));
  }

  // Hide Express
  app.disable("x-powered-by");
};

// Authentication Routes Limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

// Public API Limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

// Admin API Limiter
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Request limit exceeded.",
  },
});

module.exports = {
  securityMiddleware,
  authLimiter,
  apiLimiter,
  adminLimiter,
};